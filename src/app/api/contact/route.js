// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  console.log('=== CONTACT FORM API CALLED ===');
  
  try {
    // Log environment variables (safely)
    console.log('GMAIL_USER exists:', !!process.env.GMAIL_USER);
    console.log('GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD);
    console.log('NODE_ENV:', process.env.NODE_ENV);

    // Parse form data
    const formData = await request.json();
    console.log('Form data received:', formData);

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      console.log('Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
        { status: 400 }
      );
    }

    // Check if email is configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.log('Email configuration missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter with more options
    console.log('Creating transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER.trim(),
        pass: process.env.GMAIL_APP_PASSWORD.trim(),
      },
      // Add debug info
      debug: true,
      logger: true
    });

    // Verify transporter configuration
    console.log('Verifying transporter...');
    await transporter.verify();
    console.log('Transporter verified successfully');

    // Email content
    const mailOptions = {
      from: `"Website Contact" <${process.env.GMAIL_USER.trim()}>`,
      to: 'kalarikkalsruthi79@gmail.com',
      subject: `New Contact: ${formData.firstName} ${formData.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Mobile:</strong> ${formData.mobileNumber || 'Not provided'}</p>
        <p><strong>Company:</strong> ${formData.companyName || 'Not provided'}</p>
        <p><strong>Message:</strong> ${formData.message || 'Not provided'}</p>
        <p><small>Sent: ${new Date().toLocaleString()}</small></p>
      `,
      text: `
        New Contact Form Submission
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Mobile: ${formData.mobileNumber || 'Not provided'}
        Company: ${formData.companyName || 'Not provided'}
        Message: ${formData.message || 'Not provided'}
        Sent: ${new Date().toLocaleString()}
      `
    };

    console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully!',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('=== ERROR DETAILS ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error stack:', error.stack);
    
    // Check for specific Gmail errors
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Check GMAIL_APP_PASSWORD');
    }
    
    if (error.code === 'EENVELOPE') {
      console.error('Email envelope error. Check recipient email');
    }

    return NextResponse.json(
      { 
        error: 'Failed to submit form',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}