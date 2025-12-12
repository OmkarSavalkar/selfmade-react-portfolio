import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContact } from "../../utils/email";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await sendContact(data);
      alert("Message sent — thanks!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Send failed — check console and EmailJS setup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 720 }}>
      <div style={{ display: "grid", gap: 12 }}>
        <input
          {...register("name")}
          placeholder="Your name"
          required
          className="glass"
          style={{ padding: 12 }}
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Your email"
          required
          className="glass"
          style={{ padding: 12 }}
        />
        <textarea
          {...register("message")}
          rows={6}
          placeholder="Message"
          required
          className="glass"
          style={{ padding: 12 }}
        />
        <button type="submit" className="neon-outline" style={{ width: 160 }}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}
