import { NextResponse } from 'next/server';
import { getSiteConfig } from '@/lib/getSiteConfig';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'Name and email are required fields.' }, { status: 400 });
    }

    const config = getSiteConfig();
    const targetEmail = config.siteMeta?.email || '523shafqatali@gmail.com';
    const subject = `🚀 New Estimation Request: ${name} ${company ? `(${company})` : ''} - ${service || 'General Inquiry'}`;

    const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
    const proto = request.headers.get('x-forwarded-proto') || 'https';
    const siteOrigin = host ? `${proto}://${host}` : new URL(request.url).origin;

    // Send via FormSubmit service directly to target email
    let emailSent = false;
    let serviceMessage = '';

    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (compatible; ZeenrahTech/1.0)',
          'Origin': siteOrigin,
          'Referer': `${siteOrigin}/contact`,
        },
        body: JSON.stringify({
          _subject: subject,
          _captcha: 'false',
          _template: 'table',
          'Client Name': name,
          'Work Email': email,
          'Phone Number': phone || 'N/A',
          'Company Name': company || 'N/A',
          'Core Service Needed': service,
          'Estimated Budget': budget,
          'Project Overview': message || 'No message provided'
        })
      });

      const resData = await formSubmitRes.json();
      if (resData.success === 'true' || resData.success === true) {
        emailSent = true;
      } else {
        serviceMessage = resData.message || '';
      }
    } catch (err) {
      console.warn('FormSubmit API notice:', err.message);
    }

    console.log('==================================================');
    console.log('📧 CONTACT FORM SUBMISSION PROCESSED');
    console.log(`TO: ${targetEmail}`);
    console.log(`SUBJECT: ${subject}`);
    console.log(`STATUS: ${emailSent ? 'DELIVERED' : 'PENDING ACTIVATION'}`);
    console.log('==================================================');

    return NextResponse.json({
      success: true,
      emailSent,
      serviceMessage,
      details: {
        to: targetEmail,
        subject,
        timestamp: new Date().toISOString(),
      }
    });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json({ success: false, error: 'Internal server error while processing request.' }, { status: 500 });
  }
}
