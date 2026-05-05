"use server";

import { Resend } from "resend";
import { ratelimit } from "@/lib/ratelimit";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

const ISAAC_EMAIL = "isaac.munandar@gmail.com";
const FROM_DOMAIN = "noreply@yourdomain.com";
const SITE_NAME = "Isaac Munandar";

export type ContactState = {
  status: "idle" | "success" | "error" | "rate_limited";
  message: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // ── 1. Get IP ──────────────────────────────────────────────────────────────
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "127.0.0.1";

  // ── 2. Rate limit check ────────────────────────────────────────────────────
  const { success, remaining, reset } = await ratelimit.limit(ip);

  if (!success) {
    const minutesLeft = Math.ceil((reset - Date.now()) / 1000 / 60);
    return {
      status: "rate_limited",
      message: `Too many requests. Please try again in ${minutesLeft} minute${minutesLeft !== 1 ? "s" : ""}.`,
    };
  }

  // ── 3. Parse + validate ────────────────────────────────────────────────────
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const brief = formData.get("brief")?.toString().trim() ?? "";

  if (!name || !email || !brief) {
    return { status: "error", message: "Please fill in all fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (brief.length < 20) {
    return {
      status: "error",
      message: "Please provide a brief description (at least 20 characters).",
    };
  }

  if (brief.length > 1000) {
    return {
      status: "error",
      message: "Brief is too long. Please keep it under 1000 characters.",
    };
  }

  // ── 4. Send email to Isaac ─────────────────────────────────────────────────
  try {
    await resend.emails.send({
      from: `${SITE_NAME} Contact <${FROM_DOMAIN}>`,
      to: ISAAC_EMAIL,
      replyTo: email,
      subject: `New Collaboration Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #f2f2f2; padding: 40px 20px;">
            <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-top: 4px solid #0038FF;">
              <div style="padding: 40px 40px 32px;">
                <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #888; margin: 0 0 24px;">New Collaboration Inquiry</p>
                <h1 style="font-size: 24px; font-weight: 800; color: #0A0A0A; margin: 0 0 32px; line-height: 1.2;">${name} wants to work with you.</h1>

                <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
                  <tr style="border-bottom: 1px solid #E0E0E0;">
                    <td style="padding: 14px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; width: 90px;">Name</td>
                    <td style="padding: 14px 0; font-size: 15px; color: #0A0A0A; font-weight: 500;">${name}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #E0E0E0;">
                    <td style="padding: 14px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Email</td>
                    <td style="padding: 14px 0; font-size: 15px; color: #0038FF;">
                      <a href="mailto:${email}" style="color: #0038FF; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                </table>

                <div style="background: #f2f2f2; padding: 24px; margin-bottom: 32px;">
                  <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin: 0 0 12px;">Project Brief</p>
                  <p style="font-size: 15px; color: #0A0A0A; line-height: 1.7; margin: 0; white-space: pre-wrap;">${brief}</p>
                </div>

                <a href="mailto:${email}?subject=Re: Your Collaboration Inquiry"
                   style="display: inline-block; background: #0038FF; color: #ffffff; font-size: 12px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; padding: 14px 28px;">
                  Reply to ${name}
                </a>

                <p style="font-size: 12px; color: #888; margin-top: 32px; padding-top: 24px; border-top: 1px solid #E0E0E0;">
                  IP: ${ip} · Remaining today: ${remaining} · Sent via isaacmunandar.com
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // ── 5. Send confirmation email to sender ─────────────────────────────────
    await resend.emails.send({
      from: `${SITE_NAME} <${FROM_DOMAIN}>`,
      to: email,
      subject: `Got it, ${name}. Your message is with Isaac.`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #f2f2f2; padding: 40px 20px;">
            <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-top: 4px solid #0038FF;">
              <div style="padding: 40px 40px 32px;">
                <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #888; margin: 0 0 24px;">Collaboration Inquiry</p>
                <h1 style="font-size: 24px; font-weight: 800; color: #0A0A0A; margin: 0 0 16px; line-height: 1.2;">Your message has been received.</h1>
                <p style="font-size: 15px; color: #444; line-height: 1.7; margin: 0 0 32px;">
                  Hi ${name}, thanks for reaching out. Isaac has received your message and will review it personally. If there's a strong fit, you'll hear back within a few business days.
                </p>

                <div style="background: #f2f2f2; padding: 24px; margin-bottom: 32px; border-left: 3px solid #0038FF;">
                  <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin: 0 0 12px;">Your Message</p>
                  <p style="font-size: 14px; color: #444; line-height: 1.7; margin: 0; white-space: pre-wrap;">${brief}</p>
                </div>

                <p style="font-size: 13px; color: #888; line-height: 1.6; margin: 0; padding-top: 24px; border-top: 1px solid #E0E0E0;">
                  This is an automated confirmation from <a href="https://isaacmunandar.com" style="color: #0038FF; text-decoration: none;">isaacmunandar.com</a>.<br/>
                  Please do not reply to this email.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return {
      status: "success",
      message: `Message sent. Check ${email} for a confirmation.`,
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again or email directly.",
    };
  }
}
