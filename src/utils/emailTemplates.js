/**
 * emailTemplates.js
 * Registry of email "templates" — each is just a plain JS function that
 * returns a params object for sendTemplatedEmail(). To add a new template,
 * add a new function here. No EmailJS dashboard changes ever needed.
 */

export const contactNotification = ({ firstName, lastName, email, phoneNum, referral, otherReferral, message }) => ({
    to_email: 'bconard24@gmail.com',
    to_name: 'Billy',
    from_name: `${firstName} ${lastName}`,
    reply_to: email,
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    message:
`${firstName} ${lastName}
Email Address: ${email}
Phone: ${phoneNum}
Referral: ${referral}
Additional Referral Info: ${otherReferral}
Message: ${message}`
});

export const contactAutoReply = ({ firstName, email }) => ({
    to_email: email,
    to_name: firstName,
    from_name: 'Billy Conard',
    reply_to: 'bconard24@gmail.com',
    subject: 'Thanks for reaching out!',
    message:
`Hi ${firstName},

Thank you for reaching out! I appreciate you taking the time to visit my portfolio and I look forward to connecting with you further. I will review your message and get back to you as soon as possible.

Kind regards,
Billy Conard
Web Developer | Data Analyst | UX-Focused Designer
bconard24@gmail.com
https://www.linkedin.com/in/williamconard/
https://github.com/bconard36`
});
