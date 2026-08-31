import { emailConfig, functionsBaseUrl } from "./firebaseConfig";

// Email templates for different use cases
export const emailTemplates = {
  SUPPORT_REQUEST: "SUPPORT_REQUEST",

  DEMO_REQUEST: "DEMO_REQUEST",
  CONTACT_FORM: "CONTACT_FORM",
  CHAT_ESCALATION: "CHAT_ESCALATION",
};

/**
 * Send email using Firebase HTTP Cloud Function
 * This assumes you have set up a Firebase Cloud Function named 'sendEmail'
 *
 * @param {Object} emailData - Email data object
 * @param {string} emailData.to - Recipient email
 * @param {string} emailData.subject - Email subject
 * @param {string} emailData.html - HTML content
 * @param {string} emailData.text - Text content
 * @param {string} emailData.template - Email template type
 * @param {Object} emailData.data - Additional template data
 * @returns {Promise<Object>} - Response from Firebase Function
 */
export const sendEmail = async (emailData) => {
  try {
    const response = await fetch(`${functionsBaseUrl}/sendEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...emailData,
        from: emailData.from || emailConfig.defaultSender,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

/**
 * Send support request email (for chat escalation)
 * @param {Object} userData - User data from the form
 * @param {Array} chatHistory - Chat messages for context
 * @returns {Promise<Object>} - Email sending result
 */
export const sendSupportRequest = async (userData, chatHistory = []) => {
  const chatHistoryText = chatHistory
    .map((msg) => `${msg.isUser ? "User" : "Bot"}: ${msg.text}`)
    .join("\n");

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; color: white; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { margin-bottom: 20px; padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #667eea; }
        .label { font-weight: bold; color: #555; }
        .chat-message { padding: 8px 12px; margin: 4px 0; background: #f0f0f0; border-radius: 4px; }
        .user-message { border-left: 3px solid #667eea; }
        .bot-message { border-left: 3px solid #34d399; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Hourmaker Support Request</h2>
          <p>New support request submitted via chatbot</p>
        </div>
        <div class="content">
          <div class="section">
            <h3>User Information</h3>
            <p><span class="label">Name:</span> ${userData.name || "Not provided"}</p>
            <p><span class="label">Email:</span> ${userData.email}</p>
            <p><span class="label">Message:</span> ${userData.message || "No additional message provided"}</p>
            <p><span class="label">Submitted:</span> ${new Date().toLocaleString()}</p>
          </div>
          
          <div class="section">
            <h3>Chat History</h3>
            ${
              chatHistory.length > 0
                ? chatHistory
                    .map(
                      (msg) => `
              <div class="chat-message ${msg.isUser ? "user-message" : "bot-message"}">
                <strong>${msg.isUser ? "User" : "Hourmaker Assistant"}:</strong><br>
                ${msg.text}
              </div>
            `,
                    )
                    .join("")
                : "<p>No chat history available.</p>"
            }
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
Support Request Details:
------------------------
Name: ${userData.name || "Not provided"}
Email: ${userData.email}
Message: ${userData.message || "No additional message provided"}

Previous Chat Messages:
${chatHistoryText}

Request submitted via Hourmaker Chatbot on ${new Date().toLocaleString()}
  `.trim();

  return sendEmail({
    to: emailConfig.supportEmail,
    subject: `Hourmaker Support Request from ${userData.name || "User"}`,
    html: htmlContent,
    text: textContent,
    template: emailTemplates.CHAT_ESCALATION,
    data: {
      ...userData,
      chatHistory,
      timestamp: new Date().toISOString(),
    },
  });
};

/**
 * Send demo request email
 * @param {Object} demoData - Demo request data
 * @returns {Promise<Object>} - Email sending result
 */
export const sendDemoRequest = async (demoData) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; color: white; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { margin-bottom: 15px; padding: 15px; background: white; border-radius: 4px; }
        .label { font-weight: bold; color: #555; }
        .highlight { background: #fffacd; padding: 10px; border-radius: 4px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Hourmaker Demo Request</h2>
          <p>New demo request from website</p>
        </div>
        <div class="content">
          <div class="highlight">
            <h3>📅 Demo Scheduled</h3>
            <p>Please follow up with the user to confirm the demo session.</p>
          </div>
          
          <div class="section">
            <h3>Contact Information</h3>
            <p><span class="label">Name:</span> ${demoData.name}</p>
            <p><span class="label">Email:</span> ${demoData.email}</p>
            <p><span class="label">Company:</span> ${demoData.company || "Not provided"}</p>
            <p><span class="label">Phone:</span> ${demoData.phone || "Not provided"}</p>
            <p><span class="label">Role:</span> ${demoData.role || "Not provided"}</p>
          </div>
          
          <div class="section">
            <h3>Demo Preferences</h3>
            <p><span class="label">Preferred Date:</span> ${demoData.preferredDate || "Flexible"}</p>
            <p><span class="label">Preferred Time:</span> ${demoData.preferredTime || "Flexible"}</p>
            <p><span class="label">Time Zone:</span> ${demoData.timezone || "Not specified"}</p>
            <p><span class="label">Number of Employees:</span> ${demoData.employeeCount || "Not specified"}</p>
          </div>
          
          ${
            demoData.message
              ? `
          <div class="section">
            <h3>Additional Message</h3>
            <p>${demoData.message}</p>
          </div>
          `
              : ""
          }
          
          <div class="section">
            <p><span class="label">Submitted:</span> ${new Date().toLocaleString()}</p>
            <p><span class="label">Source:</span> ${demoData.source || "Website Form"}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New Demo Request
================

Contact Information:
-------------------
Name: ${demoData.name}
Email: ${demoData.email}
Company: ${demoData.company || "Not provided"}
Phone: ${demoData.phone || "Not provided"}
Role: ${demoData.role || "Not provided"}

Demo Preferences:
----------------
Preferred Date: ${demoData.preferredDate || "Flexible"}
Preferred Time: ${demoData.preferredTime || "Flexible"}
Time Zone: ${demoData.timezone || "Not specified"}
Number of Employees: ${demoData.employeeCount || "Not specified"}

Additional Message:
------------------
${demoData.message || "No additional message provided"}

Submitted: ${new Date().toLocaleString()}
Source: ${demoData.source || "Website Form"}
  `.trim();

  return sendEmail({
    to: emailConfig.supportEmail,
    subject: `New Demo Request: ${demoData.name} from ${demoData.company || "Hourmaker Website"}`,
    html: htmlContent,
    text: textContent,
    template: emailTemplates.DEMO_REQUEST,
    data: {
      ...demoData,
      timestamp: new Date().toISOString(),
    },
  });
};

/**
 * Send contact form email
 * @param {Object} contactData - Contact form data
 * @returns {Promise<Object>} - Email sending result
 */
export const sendContactForm = async (contactData) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; color: white; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { margin-bottom: 15px; padding: 15px; background: white; border-radius: 4px; }
        .label { font-weight: bold; color: #555; }
        .urgent { color: #dc2626; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Contact Form Submission</h2>
          <p>New message from Hourmaker website</p>
        </div>
        <div class="content">
          <div class="section">
            <h3>Sender Information</h3>
            <p><span class="label">Name:</span> ${contactData.name}</p>
            <p><span class="label">Email:</span> ${contactData.email}</p>
            <p><span class="label">Phone:</span> ${contactData.phone || "Not provided"}</p>
            <p><span class="label">Company:</span> ${contactData.company || "Not provided"}</p>
          </div>
          
          <div class="section">
            <h3>Message Details</h3>
            <p><span class="label">Subject:</span> ${contactData.subject || "General Inquiry"}</p>
            <p><span class="label">Category:</span> ${contactData.category || "General"}</p>
            ${contactData.urgency === "urgent" ? '<p class="urgent">⚠️ This is marked as URGENT</p>' : ""}
          </div>
          
          <div class="section">
            <h3>Message</h3>
            <p>${contactData.message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div class="section">
            <p><span class="label">Submitted:</span> ${new Date().toLocaleString()}</p>
            <p><span class="label">IP Address:</span> ${contactData.ip || "Not available"}</p>
            <p><span class="label">User Agent:</span> ${contactData.userAgent || "Not available"}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
Contact Form Submission
=======================

Sender Information:
------------------
Name: ${contactData.name}
Email: ${contactData.email}
Phone: ${contactData.phone || "Not provided"}
Company: ${contactData.company || "Not provided"}

Message Details:
---------------
Subject: ${contactData.subject || "General Inquiry"}
Category: ${contactData.category || "General"}
Urgency: ${contactData.urgency || "normal"}

Message:
--------
${contactData.message}

Submitted: ${new Date().toLocaleString()}
IP Address: ${contactData.ip || "Not available"}
  `.trim();

  return sendEmail({
    to: emailConfig.supportEmail,
    subject: `Contact Form: ${contactData.subject || "Inquiry from"} ${contactData.name}`,
    html: htmlContent,
    text: textContent,
    template: emailTemplates.CONTACT_FORM,
    data: {
      ...contactData,
      timestamp: new Date().toISOString(),
    },
  });
};

/**
 * Send auto-reply to user (confirmation email)
 * @param {Object} userData - User data including email
 * @param {string} type - Type of request (support, demo, contact)
 * @returns {Promise<Object>} - Email sending result
 */
export const sendAutoReply = async (userData, type = "support") => {
  const templates = {
    support: {
      subject: "We've received your support request",
      greeting: `Hi ${userData.name || "there"},`,
      message:
        "Thank you for reaching out to Hourmaker support. We've received your request and our team will get back to you within 24 hours.",
    },
    demo: {
      subject: "Your Hourmaker Demo Request",
      greeting: `Hi ${userData.name},`,
      message:
        "Thank you for requesting a demo of Hourmaker! We'll contact you shortly to schedule a convenient time for your personalized tour.",
    },
    contact: {
      subject: "We've received your message",
      greeting: `Hi ${userData.name},`,
      message:
        "Thank you for contacting Hourmaker. We've received your message and will respond as soon as possible.",
    },
  };

  const template = templates[type] || templates.support;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; color: white; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .message-box { background: white; padding: 25px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .button { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 6px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Hourmaker</h1>
          <p>Your request has been received</p>
        </div>
        <div class="content">
          <p><strong>${template.greeting}</strong></p>
          
          <div class="message-box">
            <p>${template.message}</p>
            
            <p><strong>Reference Details:</strong></p>
            <ul>
              <li>Request Type: ${type.charAt(0).toUpperCase() + type.slice(1)} Request</li>
              <li>Submitted: ${new Date().toLocaleString()}</li>
              <li>Reference ID: HM-${Date.now().toString(36).toUpperCase()}</li>
            </ul>
          </div>
          
          <p>In the meantime, you can:</p>
          <ul>
            <li><a href="https://hourmaker.in/docs">Browse our documentation</a></li>
            <li><a href="https://hourmaker.in/blog">Read our latest blog posts</a></li>
            <li><a href="https://hourmaker.in/faq">Check our FAQ section</a></li>
          </ul>
          
          <div style="text-align: center;">
            <a href="https://hourmaker.in" class="button">Visit Hourmaker Website</a>
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated message. Please do not reply to this email.</p>
          <p>Hourmaker Support Team<br>
          <a href="mailto:support@hourmaker.in">support@hourmaker.in</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
${template.greeting}

${template.message}

Reference Details:
- Request Type: ${type.charAt(0).toUpperCase() + type.slice(1)} Request
- Submitted: ${new Date().toLocaleString()}
- Reference ID: HM-${Date.now().toString(36).toUpperCase()}

For immediate assistance, please contact us at support@hourmaker.in

Hourmaker Support Team
https://hourmaker.in
  `.trim();

  return sendEmail({
    to: userData.email,
    subject: template.subject,
    html: htmlContent,
    text: textContent,
    template: `AUTO_REPLY_${type.toUpperCase()}`,
    data: {
      ...userData,
      referenceId: `HM-${Date.now().toString(36).toUpperCase()}`,
      timestamp: new Date().toISOString(),
    },
  });
};

// Utility function to validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Export all functions for easy import
export default {
  sendEmail,
  sendSupportRequest,
  sendDemoRequest,
  sendContactForm,
  sendAutoReply,
  isValidEmail,
  emailTemplates,
};
