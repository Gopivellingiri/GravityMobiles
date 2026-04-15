import express from "express";
import ContactMessage from "../models/contactMessage.js";
import resend from "../config/resend.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { fullName, lastName, phone, message } = req.body;

    const contactMessage = await ContactMessage.create({
      fullName,
      lastName,
      phone,
      message,
    });

    await resend.emails.send({
      from: "booking@gravitymobiles.in",
      to: process.env.OWNER_EMAIL,
      subject: "New Contact Message - Gravity Mobiles",
      html: `
        <div style="margin:0;background:#f8fafc;padding:24px 12px;font-family:Arial,Helvetica,sans-serif;color:#111827;">
          <div style="max-width:620px;margin:0 auto;">
            <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:18px;overflow:hidden;box-shadow:0 8px 24px rgba(26,30,46,0.08);">
              <div style="background:linear-gradient(135deg, #1a1e2e 0%, #337ec1 100%);padding:24px;">
                <img src="${process.env.BRAND_LOGO_URL || "https://www.gravitymobiles.in/logo.png"}" alt="Gravity Mobiles" style="height:42px;max-width:200px;display:block;margin:0 0 12px 0;object-fit:contain;" />
                <h2 style="margin:0;color:#ffffff;font-size:22px;line-height:1.3;">New Contact Enquiry</h2>
                <p style="margin:8px 0 0 0;color:#dbeafe;font-size:14px;line-height:1.5;">A customer submitted the generic contact form.</p>
              </div>

              <div style="padding:22px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                  <tr>
                    <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#1a1e2e;width:165px;">Full Name</td>
                    <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#1a1e2e;width:165px;">Last Name</td>
                    <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#1a1e2e;width:165px;">Phone</td>
                    <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 12px;font-weight:700;color:#1a1e2e;width:165px;vertical-align:top;">Message</td>
                    <td style="padding:10px 12px;color:#111827;">${message}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contactMessage,
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
      message: "Failed to send message",
    });
  }
});

export default router;
