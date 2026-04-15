import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <section
      className={`mx-auto max-w-360 px-md py-md md:px-xl md:py-lg ${className}`}
    >
      {children}
    </section>
  );
};

export default Layout;
