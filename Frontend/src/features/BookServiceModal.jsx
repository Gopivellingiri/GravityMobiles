import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { homePageData } from "../data/homePageData";
import { X } from "lucide-react";

const BookServiceModal = ({ onClose }) => {
  const { bookServiceForm } = homePageData;
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(
    /\/$/,
    "",
  );

  const initialState = Object.fromEntries(
    bookServiceForm.fields.map((f) => [f.id, ""]),
  );
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      await axios.post(`${apiBaseUrl}/api/bookings`, formData);
      toast.success(
        "Booking submitted successfully. We will contact you soon.",
      );
      onClose();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to submit booking. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close on backdrop click
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const modalContent = (
    <div
      className="fixed inset-0 z-50 bg-black/60 p-4 flex items-center justify-center"
      style={{
        overflowY: "auto",
      }}
      onClick={handleBackdrop}
      role="presentation"
    >
      <div
        className="relative mx-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-service-title"
        style={{
          width: "min(92vw, 560px)",
          maxWidth: "560px",
          minHeight: "fit-content",
          maxHeight: "calc(100vh - 2rem)",
          overflowY: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 transition hover:text-neutral-700 cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2
          id="book-service-title"
          className="mb-1 pr-8 text-h3 font-bold text-brand-primary"
        >
          {bookServiceForm.title}
        </h2>
        <p className="mb-5 text-body-s text-neutral-400">
          {bookServiceForm.subtitle}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {bookServiceForm.fields.map((field) => (
            <div key={field.id} className="flex w-full flex-col gap-1">
              <label
                htmlFor={field.id}
                className="text-label-s font-semibold text-neutral-700"
              >
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-body-s text-neutral-700 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  style={{ resize: "vertical" }}
                />
              ) : field.type === "select" ? (
                <select
                  id={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-body-s text-neutral-700 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required={field.required ?? field.id !== "message"}
                  autoComplete={field.type === "email" ? "email" : undefined}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-body-s text-neutral-700 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-lg bg-brand-primary px-md py-sm text-label-l font-semibold text-neutral-100 transition hover:brightness-95 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : bookServiceForm.submitLabel}
          </button>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default BookServiceModal;
