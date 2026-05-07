"use server";

import { Resend } from "resend";
import { ratelimit } from "@/lib/ratelimit";
import { headers } from "next/headers";
import { RESOURCES } from "@/lib/data";

const resend = new Resend(process.env.RESEND_API_KEY);
const ISAAC_EMAIL = "isaac.munandar@gmail.com";
const FROM_DOMAIN = "noreply@isaacmunandar.com";

export type ClaimState = {
  status: "idle" | "success" | "error" | "rate_limited";
  message: string;
  pdfPath?: string;
  pdfFilename?: string;
};

export async function claimResource(
  _prev: ClaimState,
  formData: FormData,
): Promise<ClaimState> {
  // ── 1. Rate limit ──────────────────────────────────────────────────────────
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "127.0.0.1";

  const { success, remaining, reset } = await ratelimit.limit(`resource_${ip}`);

  if (!success) {
    const minutesLeft = Math.ceil((reset - Date.now()) / 1000 / 60);
    return {
      status: "rate_limited",
      message: `Too many requests. Please try again in ${minutesLeft} minute${minutesLeft !== 1 ? "s" : ""}.`,
    };
  }

  // ── 2. Parse + validate ────────────────────────────────────────────────────
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const whatsapp = formData.get("whatsapp")?.toString().trim() ?? "";
  const resourceId = formData.get("resourceId")?.toString().trim() ?? "";

  if (!name || !email || !whatsapp || !resourceId) {
    return { status: "error", message: "Please fill in all fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const resource = RESOURCES.find((r) => r.id === resourceId);
  if (!resource) {
    return { status: "error", message: "Resource not found." };
  }

  // ── 3. Notify Isaac ────────────────────────────────────────────────────────
  try {
    await resend.emails.send({
      from: `Isaac Munandar Site <${FROM_DOMAIN}>`,
      to: ISAAC_EMAIL,
      replyTo: email,
      subject: `New Resource Download: ${resource.type}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;background:#f2f2f2;padding:40px 20px;">
            <div style="max-width:560px;margin:0 auto;background:#fff;border-top:4px solid #0038FF;">
              <div style="padding:40px 40px 32px;">
                <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#888;margin:0 0 24px;">
                  Free Resource Claimed
                </p>
                <h1 style="font-size:22px;font-weight:800;color:#0A0A0A;margin:0 0 32px;line-height:1.2;">
                  ${name} downloaded your ${resource.type}.
                </h1>

                <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
                  <tr style="border-bottom:1px solid #E0E0E0;">
                    <td style="padding:14px 0;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;width:110px;">Name</td>
                    <td style="padding:14px 0;font-size:15px;color:#0A0A0A;font-weight:500;">${name}</td>
                  </tr>
                  <tr style="border-bottom:1px solid #E0E0E0;">
                    <td style="padding:14px 0;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;">Email</td>
                    <td style="padding:14px 0;font-size:15px;">
                      <a href="mailto:${email}" style="color:#0038FF;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr style="border-bottom:1px solid #E0E0E0;">
                    <td style="padding:14px 0;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;">WhatsApp</td>
                    <td style="padding:14px 0;font-size:15px;">
                      <a href="https://wa.me/${whatsapp.replace(/\D/g, "")}" style="color:#0038FF;text-decoration:none;">${whatsapp}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;">Resource</td>
                    <td style="padding:14px 0;font-size:15px;color:#0A0A0A;">${resource.title}</td>
                  </tr>
                </table>

                <p style="font-size:12px;color:#888;margin:0;padding-top:24px;border-top:1px solid #E0E0E0;">
                  IP: ${ip} · Remaining quota: ${remaining} · isaacmunandar.com
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return {
      status: "success",
      message: "Your download is starting...",
      pdfPath: resource.pdfPath,
      pdfFilename: resource.pdfFilename,
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
