import axios from "axios"

export const handler = async (event, context) => {
    const EMAILJS_URL = "https://api.emailjs.com/api/v1.0/email/send"
    if (!event.body) {
        return {
            statusCode: 400,
            body: "invalid request, you are missing the parameter",
        }
    }
    const { name, email, message, company, recaptchaToken } = JSON.parse(event.body)
    if (!name || !email || !message || !company || !recaptchaToken) {
        return {
            statusCode: 400,
            body: "invalid request, you are missing the parameter",
        }
    } 
    const data = {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
            name,
            email,
            message,
            company,
            'g-recaptcha-response': recaptchaToken
        },
    }

    try {
        const response = await axios.post(EMAILJS_URL, data);
        return {
            statusCode: 200,
            body: "Email sent",
        }
    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            body: "Error sending email",
        }
    }
    
}