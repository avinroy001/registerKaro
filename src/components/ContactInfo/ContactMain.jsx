import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactMain() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-white flex items-center justify-center py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black-600 mb-12">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactMain;