import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa6";
import { homePageData } from "../data/homePageData";

const { contactSection } = homePageData;
const { form } = contactSection;

const Contact = () => {
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(
    /\/$/,
    "",
  );
  const initialState = Object.fromEntries(
    form.fields.map((field) => [field.id, ""]),
  );

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const missingField = form.fields.find((field) => {
      const isRequired = field.required ?? true;
      if (!isRequired) return false;
      return !String(formData[field.id] ?? "").trim();
    });

    if (missingField) {
      toast.error(`${missingField.label} is required.`);
      return false;
    }

    return true;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.trim()]),
    );

    try {
      await axios.post(`${apiBaseUrl}/api/contact`, payload);
      toast.success("Message sent successfully. We will contact you soon.");
      setFormData(initialState);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={contactSection.id} className="mt-5xl">
      {/* Outer card on neutral-300 background */}
      <div className="rounded-3xl bg-neutral-300 p-lg md:p-2xl">
        <div className="flex flex-col gap-2xl md:flex-row md:items-stretch">
          {/* Left — shop info */}
          <div className="flex flex-col gap-xl md:w-1/2 md:justify-center">
            <div>
              <h2 className="mb-sm text-h2 font-bold text-brand-dark">
                {contactSection.title}
              </h2>
              <p className="text-body-m text-neutral-400">
                {contactSection.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-sm">
              <p className="text-body-m font-semibold text-brand-dark">
                Address:
              </p>
              <p className="text-body-m text-neutral-500">
                {contactSection.address}
              </p>
            </div>

            <div className="flex flex-col gap-sm">
              <p className="text-body-m font-semibold text-brand-dark">
                Phone:
              </p>
              <a
                href={`tel:${contactSection.phone.replace(/\s/g, "")}`}
                className="text-body-m text-neutral-500 hover:text-brand-primary transition"
              >
                {contactSection.phone}
              </a>
            </div>

            <a
              href={contactSection.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-sm rounded-xl bg-brand-dark px-lg py-sm text-label-l font-semibold text-neutral-100 transition hover:brightness-110"
            >
              <FaWhatsapp size={18} />
              {contactSection.whatsapp.label}
            </a>
          </div>

          {/* Right — contact form */}
          <div className="rounded-2xl bg-brand-dark p-lg md:w-1/2 md:p-xl">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="flex flex-col gap-md"
            >
              {form.fields.map((field) =>
                field.type === "textarea" ? (
                  <div key={field.id} className="flex flex-col gap-xs">
                    <label
                      htmlFor={field.id}
                      className="text-label-l text-neutral-100"
                    >
                      {field.label}
                    </label>
                    <textarea
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={handleChange}
                      rows={5}
                      className="w-full resize-none rounded-xl bg-neutral-100 px-md py-sm text-body-m text-neutral-500 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                ) : (
                  <div key={field.id} className="flex flex-col gap-xs">
                    <label
                      htmlFor={field.id}
                      className="text-label-l text-neutral-100"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-neutral-100 px-md py-sm text-body-m text-neutral-500 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                ),
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-xs w-fit rounded-xl bg-brand-primary px-lg py-sm text-label-l font-semibold text-neutral-100 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : form.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
