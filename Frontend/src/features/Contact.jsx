import { FaWhatsapp } from "react-icons/fa6";
import { homePageData } from "../data/homePageData";

const { contactSection } = homePageData;
const { form } = contactSection;

const Contact = () => {
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
              onSubmit={(e) => e.preventDefault()}
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
                      className="w-full rounded-xl bg-neutral-100 px-md py-sm text-body-m text-neutral-500 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                ),
              )}

              <button
                type="submit"
                className="mt-xs w-fit rounded-xl bg-brand-primary px-lg py-sm text-label-l font-semibold text-neutral-100 transition hover:brightness-110"
              >
                {form.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
