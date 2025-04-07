import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LinkedIn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-cyan-400 text-white py-24 px-10 font-poppins">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h6 className="text-lg font-semibold mb-4">START A BUSINESS</h6>
            <div className="flex flex-col">
              <a
                href="/private-limited-company"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                Private Limited Company
              </a>
              <a
                href="/limited-liability-partnership"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                Limited Liability Partnership
              </a>
              <a
                href="/one-person-company"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                One Person Company
              </a>
              <a
                href="/section-8-company"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                Section 8 Company Registration
              </a>
              <a
                href="/nidhi-company"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                Nidhi Company Registration
              </a>
              <a
                href="/producer-company"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                Producer Company Registration
              </a>
              <a
                href="/msme-registration"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                MSME Registration
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4">
              GOVERNMENT REGISTRATION
            </h6>
            <div className="flex flex-col">
              <a
                href="/fssai-registration"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                FSSAI Registration
              </a>
              <a
                href="/iec-registration"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                IEC Registration
              </a>
              <a
                href="/trademark-registration"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                Trademark Registration
              </a>
              <a
                href="/dsc-registration"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                DSC Registration
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4">COMPLIANCE & TAX</h6>
            <div className="flex flex-col">
              <a
                href="/compliance-pvt-ltd"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                Compliance Pvt Ltd
              </a>
              <a
                href="/compliance-llp"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                Compliance LLP
              </a>
              <a
                href="/gst-registration"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                GST Registration
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4">BIS & COSCD</h6>
            <div className="flex flex-col">
              <a
                href="/bis-certification"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                BIS Certification
              </a>
              <a
                href="/bis-fmcs-certification"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                BIS FMCS Certification
              </a>
              <a
                href="/bis-crs-certification"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                BIS CRS Certification
              </a>
              <a
                href="/isi-mark-certification"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                ISI Mark Certification
              </a>
              <a
                href="/cdsco-registration"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                CDSCO Registration
              </a>
              <a
                href="/medical-device-registration"
                className="mb-2 hover:text-cyan-200 hover:underline"
              >
                Medical Device Registration
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/services"
            className="text-cyan-200 font-semibold hover:underline"
          >
            See all the services
          </a>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-opacity-20 flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/yourpage"
            className="hover:text-cyan-200"
          >
            <Facebook fontSize="large" />
          </a>
          <a
            href="https://twitter.com/yourpage"
            className="hover:text-cyan-200"
          >
            <Twitter fontSize="large" />
          </a>
          <a
            href="https://www.instagram.com/yourpage"
            className="hover:text-cyan-200"
          >
            <Instagram fontSize="large" />
          </a>
          <a
            href="https://www.youtube.com/yourpage"
            className="hover:text-cyan-200"
          >
            <YouTube fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/yourpage"
            className="hover:text-cyan-200"
          >
            <LinkedIn fontSize="large" />
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-cyan-200 font-medium">
            Elevate Your Business with RegisterKaro
          </p>
          <p className="mt-2 leading-relaxed">
            As a leading technology-driven legal services and advisory firm, we
            empower SMEs and entrepreneurs on their business journey. Our expert
            team covers business registration, legal compliance, tax filing, IPR
            registration, and more. With over 200 professionals, we've served
            50,000+ satisfied customers, ensuring startup compliance with our
            country's legal and regulatory systems.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-cyan-200 font-semibold">
            Navigating Regulatory Affairs
          </p>
          <p className="mt-2 leading-relaxed">
            In India, regulatory bodies like BIS, CDSCO, RBI, SEBI, and IRDAI
            hold the keys to licenses and registrations for banks, financial
            institutions, and insurance businesses. We simplify this process by
            connecting you with our legal professionals. We understand your
            needs, handle license or registration applications, liaise with
            authorities, and deliver the licenses you require.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-cyan-200 font-semibold">Environmental Solutions</p>
          <p className="mt-2 leading-relaxed">
            RegisterKaro offers a comprehensive range of services to address
            environmental challenges in business. Our seasoned environmental
            experts, with over a decade of experience, provide comprehensive
            solutions for environmental compliance and advisory, including
            battery waste management, plastic waste management, and e-waste
            management.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-cyan-200 font-semibold">
            Business Registration Expertise
          </p>
          <p className="mt-2 leading-relaxed">
            We are renowned for facilitating business registration, whether it's
            as a private limited company, one-person company, Section 8 company,
            LLP, public company, or Nidhi company. Our consultancy services
            extend from business setup from scratch to ongoing compliance.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-cyan-200 font-semibold">
            Safeguarding Intellectual Property
          </p>
          <p className="mt-2 leading-relaxed">
            RegisterKaro is your all-in-one solution for tax-related needs. Our
            dedicated professionals assist with GST registration, professional
            tax registration, GST return filing, TDS return filing, income tax
            return filing, and secretarial audits. Your tax matters are in
            capable hands with RegisterKaro.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-cyan-200 font-semibold">Simplifying Taxation</p>
          <p className="mt-2 leading-relaxed">
            Intellectual property protection is vital for modern businesses. Our
            team excels in IP registration services such as trademark
            registration, handling objections, managing assignments, copyright
            registration, and patent registration.
          </p>
        </div>
        

        <div className="text-center mt-12 pt-8 border-t border-opacity-20 space-x-4">
          <p className="text-sm">
            By continuing this page, you agree to our
            <a
              href="/terms"
              className="text-orange-500 hover:underline underline"
            >
              Terms & Conditions
            </a>
            <span> , </span>
            <a
              href="/privacy"
              className="text-orange-500 hover:underline underline"
            >
              Privacy Policy
            </a>
            <span> and </span>
            <a
              href="/refund"
              className="text-orange-500 hover:underline underline"
            >
              Refund Policy
            </a>
            .
          </p>
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} - Sahi Ledger Private Limited. All
            rights reserved.
          </p>
          <p className="mt-8 text-sm">
            Please note that we are a facilitating platform enabling access to
            reliable professionals. We are not a law firm and do not provide
            legal services ourselves. The information on this website is for the
            purpose of knowledge only and should not be relied upon as legal
            advice or opinion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
