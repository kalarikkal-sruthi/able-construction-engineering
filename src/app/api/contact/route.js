// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse form data
    const formData = await request.json();
    const { 
      firstName, 
      lastName, 
      mobileNumber, 
      email, 
      companyName, 
      message 
    } = formData;

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.GMAIL_USER}>`,
      to: 'kalarikkalsruthi79@gmail.com',
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; color: white;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Received: ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333; width: 30%;">First Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">${firstName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Last Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Mobile Number:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">
                  <a href="tel:${mobileNumber}" style="color: #667eea; text-decoration: none;">${mobileNumber}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">
                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Company Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">${companyName || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Message:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; white-space: pre-wrap;">${message || 'No message provided'}</td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; background-color: #f0f7ff; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Quick Actions:</h3>
              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <a href="mailto:${email}?subject=Re: Your Inquiry" style="background: #667eea; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">Reply to ${firstName}</a>
                <a href="tel:${mobileNumber}" style="background: #4CAF50; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">Call ${mobileNumber}</a>
              </div>
            </div>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #888; font-size: 12px;">
            <p>This email was automatically generated from your website contact form.</p>
          </div>
        </div>
      `,
      text: `
        NEW CONTACT FORM SUBMISSION
        ===========================
        
        Contact Details:
        ----------------
        First Name: ${firstName}
        Last Name: ${lastName}
        Mobile Number: ${mobileNumber}
        Email: ${email}
        Company Name: ${companyName || 'Not provided'}
        
        Message:
        --------
        ${message || 'No message provided'}
        
        --------------------------
        Submitted: ${new Date().toLocaleString()}
        
        Quick Actions:
        • Reply to: ${email}
        • Call: ${mobileNumber}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully! Email sent to info@ablegroup.com.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}