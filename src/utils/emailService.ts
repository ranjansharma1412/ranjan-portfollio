import emailjs from '@emailjs/browser';

interface EmailData {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; error?: unknown }> => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        console.warn("EmailJS credentials not found in environment variables.");
        return { success: false, error: "Configuration Error: Missing EmailJS keys." };
    }

    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            {
                from_name: data.name,
                from_email: data.email,
                message: data.message,
                to_name: "Ranjan Sharma",
                // Note: The template in EmailJS dashboard should map these variables correctly.
            },
            publicKey
        );

        if (response.status === 200) {
            return { success: true };
        } else {
            return { success: false, error: `Status: ${response.status}` };
        }
    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, error };
    }
};
