import emailjs from "@emailjs/browser";

export const sendContact = async ({ name, email, message }) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    { from_name: name, email, message },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};
