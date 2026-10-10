import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create reusable transporter
function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user,
      pass
    }
  });
}

/**
 * Send Helpdesk / Contact submission email notification
 */
export async function sendHelpdeskNotification(submission) {
  const recipient = process.env.NOTIFICATION_EMAIL || 'mohammadaves2026@gmail.com';
  const { name, email, phone, university, message, type, createdAt } = submission;

  const cleanPhone = phone ? phone.replace(/[^\d+]/g, '') : '';
  const waLink = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}` : null;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #0F172A 0%, #0052B4 50%, #009A44 100%); padding: 24px; color: #ffffff; text-align: left; }
        .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
        .header p { margin: 4px 0 0 0; font-size: 13px; color: #cbd5e1; }
        .badge { display: inline-block; background: #38bdf8; color: #0f172a; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 12px; margin-bottom: 8px; text-transform: uppercase; }
        .body { padding: 24px; }
        .field-group { margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
        .field-group:last-child { border-bottom: none; }
        .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; margin-bottom: 4px; }
        .value { font-size: 15px; font-weight: 600; color: #0f172a; }
        .message-box { background: #f8fafc; border-left: 4px solid #0052B4; padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.5; color: #334155; }
        .action-row { margin-top: 24px; display: flex; gap: 12px; }
        .btn { display: inline-block; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none; }
        .btn-wa { background: #25D366; color: #ffffff; }
        .btn-email { background: #0052B4; color: #ffffff; }
        .footer { background: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 11px; color: #94a3b8; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <span class="badge">New Admission Helpdesk Request</span>
          <h1>The ShED Forum — Student Inquiry</h1>
          <p>A new student has submitted the helpdesk form on your website.</p>
        </div>
        <div class="body">
          
          <div class="field-group">
            <div class="label">Student Full Name</div>
            <div class="value">${name}</div>
          </div>

          <div class="field-group">
            <div class="label">Phone / WhatsApp</div>
            <div class="value">
              <a href="tel:${phone}" style="color: #0052B4; text-decoration: none;">${phone || 'Not provided'}</a>
              ${waLink ? ` &nbsp;•&nbsp; <a href="${waLink}" style="color: #25D366; font-size: 12px; font-weight: 700;">Open WhatsApp Chat</a>` : ''}
            </div>
          </div>

          <div class="field-group">
            <div class="label">Email Address</div>
            <div class="value">
              ${email ? `<a href="mailto:${email}" style="color: #0052B4; text-decoration: none;">${email}</a>` : 'Not provided'}
            </div>
          </div>

          <div class="field-group">
            <div class="label">Target University</div>
            <div class="value" style="color: #009A44;">${university || 'General'}</div>
          </div>

          <div class="field-group">
            <div class="label">Assistance Type</div>
            <div class="value">${type || 'General Support'}</div>
          </div>

          <div class="field-group">
            <div class="label">Student Query / Notes</div>
            <div class="message-box">
              ${message ? message.replace(/\n/g, '<br/>') : '<em>No additional query entered.</em>'}
            </div>
          </div>

          <div class="field-group">
            <div class="label">Submitted At</div>
            <div class="value" style="font-size: 12px; color: #64748b; font-weight: normal;">
              ${new Date(createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)
            </div>
          </div>

        </div>
        <div class="footer">
          This notification was automatically sent by The ShED Forum Helpdesk Portal.<br/>
          Recipient Email: ${recipient}
        </div>
      </div>
    </body>
    </html>
  `;

  const transporter = getTransporter();

  if (!transporter) {
    console.log(`[Email Notification Note] SMTP credentials not set in server/.env.`);
    console.log(`[Submission Details for ${recipient}]:`, {
      name,
      phone,
      email,
      university,
      type,
      message,
      time: createdAt
    });
    return {
      sent: false,
      reason: 'SMTP credentials (SMTP_USER/SMTP_PASS) not configured in server/.env. Data stored in Admin Portal.'
    };
  }

  try {
    const info = await transporter.sendMail({
      from: `"ShED Forum Portal" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email || process.env.SMTP_USER,
      subject: `🎓 New ShED Helpdesk Inquiry: ${name} (${university || 'General'})`,
      text: `New Helpdesk Submission:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nUniversity: ${university}\nType: ${type}\nMessage: ${message}\nTime: ${createdAt}`,
      html: htmlContent
    });

    console.log(`[Email Sent Successfully] Message ID: ${info.messageId} to ${recipient}`);
    return { sent: true, messageId: info.messageId };
  } catch (error) {
    console.error('[Email Sending Error]:', error.message);
    return { sent: false, error: error.message };
  }
}
