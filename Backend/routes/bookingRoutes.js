import express from "express";
import Booking from "../models/booking.js";
import resend from "../config/resend.js";

const router = express.Router();

const brandPrimary = "#337ec1";
const brandDark = "#1a1e2e";
const neutralBg = "#f8fafc";
const neutralBorder = "#e5e7eb";
const neutralText = "#111827";
const mutedText = "#6b7280";

const logoUrl =
  process.env.BRAND_LOGO_URL || "https://www.gravitymobiles.in/logo.png";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

const createEmailShell = ({ title, subtitle, badge, contentHtml }) => `
  <div style="margin:0;background:${neutralBg};padding:24px 12px;font-family:Arial,Helvetica,sans-serif;color:${neutralText};">
    <div style="max-width:620px;margin:0 auto;">
      <div style="background:#ffffff;border:1px solid ${neutralBorder};border-radius:18px;overflow:hidden;box-shadow:0 8px 24px rgba(26,30,46,0.08);">
        <div style="background:linear-gradient(135deg, ${brandDark} 0%, ${brandPrimary} 100%);padding:24px;">
          <img src="${logoUrl}" alt="Gravity Mobiles" style="height:42px;max-width:200px;display:block;margin:0 0 12px 0;object-fit:contain;" />
          <div style="display:inline-block;background:rgba(255,255,255,0.2);color:#ffffff;font-size:12px;font-weight:700;letter-spacing:0.04em;padding:6px 10px;border-radius:999px;">${badge}</div>
          <h1 style="margin:14px 0 6px 0;color:#ffffff;font-size:24px;line-height:1.3;">${title}</h1>
          <p style="margin:0;color:#dbeafe;font-size:14px;line-height:1.5;">${subtitle}</p>
        </div>
        <div style="padding:22px;">
          ${contentHtml}
        </div>
      </div>
      <p style="margin:12px 4px 0 4px;text-align:center;color:${mutedText};font-size:12px;line-height:1.5;">
        Gravity Mobiles | Fast and trusted mobile service.
      </p>
    </div>
  </div>
`;

const infoRow = (label, value) => `
  <tr>
    <td style="padding:10px 12px;border-bottom:1px solid ${neutralBorder};font-weight:700;color:${brandDark};width:165px;vertical-align:top;">${label}</td>
    <td style="padding:10px 12px;border-bottom:1px solid ${neutralBorder};color:${neutralText};">${escapeHtml(value)}</td>
  </tr>
`;

router.post("/", async (req, res) => {
  try {
    const { fullName, email, phone, deviceModel, issueType, message } =
      req.body;

    // Save to DB
    const booking = await Booking.create({
      fullName,
      email,
      phone,
      deviceModel,
      issueType,
      message,
    });

    // Send email to customer
    await resend.emails.send({
      from: "booking@gravitymobiles.in",
      to: email,
      subject: "Booking Confirmed - Gravity Mobiles",
      html: createEmailShell({
        badge: "BOOKING RECEIVED",
        title: `Thanks, ${escapeHtml(fullName)}!`,
        subtitle: "Your service request has been successfully received.",
        contentHtml: `
          <p style="margin:0 0 14px 0;color:${neutralText};font-size:14px;line-height:1.6;">
            We have logged your request and our team will contact you shortly.
          </p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:1px solid ${neutralBorder};border-radius:12px;overflow:hidden;">
            ${infoRow("Device Model", deviceModel)}
            ${infoRow("Issue Type", issueType)}
            ${infoRow("Phone", phone)}
            ${infoRow("Additional Details", message || "Not provided")}
          </table>
          <p style="margin:14px 0 0 0;color:${mutedText};font-size:13px;line-height:1.6;">
            Need help right away? Reply to this email and we will assist you.
          </p>
        `,
      }),
    });

    // Send email to owner
    await resend.emails.send({
      from: "booking@gravitymobiles.in",
      to: process.env.OWNER_EMAIL,
      subject: "New Service Booking Received",
      html: createEmailShell({
        badge: "NEW BOOKING ALERT",
        title: "New Service Request",
        subtitle: "A customer has submitted a new booking from the website.",
        contentHtml: `
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:1px solid ${neutralBorder};border-radius:12px;overflow:hidden;">
            ${infoRow("Customer Name", fullName)}
            ${infoRow("Email", email)}
            ${infoRow("Phone", phone)}
            ${infoRow("Device Model", deviceModel)}
            ${infoRow("Issue Type", issueType)}
            ${infoRow("Additional Details", message || "Not provided")}
          </table>
          <div style="margin-top:14px;padding:12px 14px;background:${neutralBg};border-left:4px solid ${brandPrimary};border-radius:10px;">
            <p style="margin:0;color:${brandDark};font-size:13px;line-height:1.6;">
              Action: Contact the customer as soon as possible to confirm service timeline.
            </p>
          </div>
        `,
      }),
    });

    res.status(201).json({
      success: true,
      message: "Booking submitted successfully",
      booking,
    });
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors)
          .map((err) => err.message)
          .join(", "),
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to submit booking",
    });
  }
});

export default router;
