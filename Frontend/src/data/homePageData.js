export const homePageData = {
  brand: {
    name: "Gravity Mobiles",
    logoAlt: "Gravity Mobiles Logo",
    logoSrc: "/src/assets/logo.png",
  },

  navbar: {
    links: [
      { label: "Home", href: "#" },
      { label: "Services", href: "#services" },
      { label: "Accessories", href: "#accessories" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Book Service",
      href: "#contact",
    },
  },

  hero: {
    backgroundImage: "/src/assets/hero.png",
    title: "Trusted Mobile Repair & Accessories Shop in Kaniyur",
    description:
      "Display replacement, charging issues, battery service, tempered glass, back covers, and original accessories all in one place.",
    actions: [
      {
        id: "book-service",
        label: "Book Service",
        href: "#contact",
        variant: "primary",
      },
      {
        id: "chat-whatsapp",
        label: "Chat On Whatsapp",
        href: "https://wa.me/6383373706",
        variant: "dark",
      },
    ],
  },

  servicesSection: {
    id: "services",
    title: "Our Mobile Services",
    subtitle: "Fast and reliable mobile repair solutions for all major brands.",
    items: [
      {
        id: "display-replacement",
        title: "Display Replacement",
        description:
          "Cracked screen, broken display, black screen, or touch not responding. Quick replacement service for all major brands.",
        icon: "display",
      },
      {
        id: "charging-issue-repair",
        title: "Charging Issue Repair",
        description:
          "Phone not charging, loose charging port, slow charging, or charger pin problems repaired quickly.",
        icon: "charging",
      },
      {
        id: "battery-replacement",
        title: "Battery Replacement",
        description:
          "Battery draining fast, sudden shutdown, or overheating. Get reliable battery replacement service.",
        icon: "battery",
      },
      {
        id: "speaker-mic-repair",
        title: "Speaker & Mic Repair",
        description:
          "Low sound, no voice during calls, mic not working, or distorted audio issues fixed.",
        icon: "speaker-mic",
      },
      {
        id: "touch-display-repair",
        title: "Touch & Display Repair",
        description:
          "Touch not working, display lines, black screen, flickering, or broken screen issues repaired quickly.",
        icon: "touch",
      },
      {
        id: "water-damage-check",
        title: "Water Damage Check",
        description:
          "Quick inspection and repair support for phones affected by moisture or accidental liquid damage.",
        icon: "water-damage",
      },
    ],
  },

  accessoriesSection: {
    id: "accessories",
    title: "Popular Mobile Accessories",
    subtitle: "Quality accessories available for all major mobile brands.",
    ctaLabel: "Check Availability",
    items: [
      {
        id: "back-covers",
        name: "Back Covers",
        description:
          "Stylish and protective covers for all major mobile brands and models.",
        image: "/src/assets/accessories/back-covers.png",
      },
      {
        id: "tempered-glass",
        name: "Tempered Glass",
        description:
          "Scratch-resistant and durable screen protection with perfect fit installation.",
        image: "/src/assets/accessories/tempered-glass.png",
      },
      {
        id: "chargers-adapters",
        name: "Chargers & Adapters",
        description:
          "Fast chargers, original adapters, and charging accessories for all devices.",
        image: "/src/assets/accessories/chargers-adapters.png",
      },
      {
        id: "usb-cables",
        name: "USB Cables",
        description:
          "Type-C, Lightning, and Micro USB cables with durable quality.",
        image: "/src/assets/accessories/usb-cables.png",
      },
      {
        id: "earphones-earbuds",
        name: "Earphones / Earbuds",
        description:
          "Wired and wireless audio accessories with clear sound quality.",
        image: "/src/assets/accessories/earphones-earbuds.png",
      },
      {
        id: "power-banks",
        name: "Power Banks",
        description: "Portable charging solutions for travel and everyday use.",
        image: "/src/assets/accessories/power-banks.png",
      },
    ],
  },

  whyChooseSection: {
    title: "Why Choose Gravity Mobiles?",
    subtitle:
      "Trusted service, genuine accessories, and quick support for all your mobile needs.",
    points: [
      {
        id: "same-day-repair",
        title: "Same Day Repair",
        description:
          "Most common issues like display, charging, battery, and touch problems are repaired the same day.",
        icon: "same-day",
      },
      {
        id: "dedicated-support",
        title: "Dedicated Customer Support",
        description:
          "We are always available to guide customers, answer questions, and provide updates on service status.",
        icon: "support",
      },
      {
        id: "quality-accessories",
        title: "Quality Accessories",
        description:
          "Reliable chargers, cables, trusted covers, and cases for all major mobile brands.",
        icon: "quality",
      },
    ],
  },

  testimonialsSection: {
    title: "Customer Reviews & Testimonials",
    subtitle: "See what our customers say about our service and accessories.",
    items: [
      {
        id: "arun-kumar",
        name: "Arun Kumar",
        rating: 5,
        quote:
          "Quick display replacement and excellent service. The phone was ready the same day.",
      },
      {
        id: "priya-s",
        name: "Priya S",
        rating: 5,
        quote:
          "Very friendly support and genuine accessories. Bought charger and back cover at good price.",
      },
      {
        id: "rahul-k",
        name: "Rahul K",
        rating: 5,
        quote:
          "Battery replacement fixed my shutdown issue. Phone backup is much better now.",
      },
    ],
  },

  contactSection: {
    id: "contact",
    title: "Visit Our Shop",
    subtitle:
      "Get in touch for quick service, genuine accessories, and same-day mobile repair support.",
    address:
      "2/27C, Shop No. 3 Sai Rahul Complex, Sangothipalayam, Kaniyur, Coimbatore - 641 659",
    phone: "+91 63833 73706",
    whatsapp: {
      label: "Chat On Whatsapp",
      href: "https://wa.me/916383737706",
    },
    form: {
      fields: [
        {
          id: "fullName",
          label: "Full Name",
          type: "text",
          placeholder: "Enter your name",
        },
        {
          id: "lastName",
          label: "Last Name",
          type: "text",
          placeholder: "Enter your last name",
        },
        {
          id: "phone",
          label: "Phone Number",
          type: "tel",
          placeholder: "Enter your phone number",
        },
        {
          id: "message",
          label: "Your Message",
          type: "textarea",
          placeholder: "Enter your message",
        },
      ],
      submitLabel: "Send Message",
    },
    mapImage: "/src/assets/map.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.70597505164963!2d77.13874513732826!3d11.091332678234759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ff0dbb7ae231%3A0x94aac008a8ea331c!2sSai%20Rahul%20Complex%2C%202%2F72%2C%20Sangothipalayam%2C%20Kaniyur%2C%20Karumathampatti%2C%20Tamil%20Nadu%20641659!5e0!3m2!1sen!2sin!4v1775821067917!5m2!1sen!2sin",
    mapDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=11.091332678234759,77.13874513732826",
  },

  bookServiceForm: {
    title: "Book a Service",
    subtitle: "Fill in your details and we'll get back to you shortly.",
    fields: [
      {
        id: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your name",
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        required: true,
      },
      {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number",
      },
      {
        id: "deviceModel",
        label: "Device Model",
        type: "text",
        placeholder: "e.g. Samsung Galaxy A53",
      },
      {
        id: "issueType",
        label: "Issue Type",
        type: "select",
        placeholder: "Select an issue",
        options: [
          "Display Replacement",
          "Charging Issue",
          "Battery Replacement",
          "Speaker / Mic Repair",
          "Touch & Display Repair",
          "Water Damage",
          "Other",
        ],
      },
      {
        id: "message",
        label: "Additional Details",
        type: "textarea",
        placeholder: "Describe the issue (optional)",
        required: false,
      },
    ],
    submitLabel: "Book Now",
  },

  footer: {
    copyright: "2026 Gravity Mobiles. All rights reserved.",
    links: [
      { label: "Home", href: "#" },
      { label: "Services", href: "#services" },
      { label: "Accessories", href: "#accessories" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact", href: "#contact" },
    ],
    phone: "+91 63833 73706",
    address:
      "2/27C, Shop No. 3 Sai Rahul Complex, Sangothipalayam, Kaniyur, Coimbatore - 641 659",
    whatsapp: {
      label: "Chat On Whatsapp",
      href: "https://wa.me/916383737706",
    },
  },
};

export default homePageData;
