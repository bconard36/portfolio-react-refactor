/**
 * emailService.js
 * Generic EmailJS sender. Uses ONE EmailJS template (the universal
 * envelope: to_email / from_name / reply_to / subject / message) for
 * every kind of email you need. Adding a new "template" never requires
 * touching the EmailJS dashboard again — just add a builder function
 * in emailTemplates.js and call sendTemplatedEmail() with it.
 */

import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_vkcmlic';
const TEMPLATE_ID = 'REPLACE_WITH_YOUR_UNIVERSAL_TEMPLATE_ID';
const PUBLIC_KEY = 'IBkJyfLO0mqAw9LqC';

/**
 * Sends a single email using the universal EmailJS template.
 * @param {Object} params - must include to_email, from_name, reply_to, subject, message
 * @returns {Promise}
 */
export const sendTemplatedEmail = (params) => {
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
        publicKey: PUBLIC_KEY
    });
};

/**
 * Sends multiple emails in sequence (e.g. a notification + an auto-reply).
 * Stops and rejects on first failure.
 * @param {Array<Object>} paramsList - array of param objects, one per email
 * @returns {Promise}
 */
export const sendTemplatedEmails = async (paramsList) => {
    for (const params of paramsList) {
        await sendTemplatedEmail(params);
    }
};