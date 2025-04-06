import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Contact Information</h2>
      <div className="space-y-6">
        <InfoItem icon={<LocationOnIcon className="text-black-500" />} title="Main Office">
          Safe Ledger Private Limited<br />
          #101, Oxford Towers, 139, HAL<br />
          Old Airport Rd, Kodihalli,<br />
          Bengaluru, Karnataka 560008
        </InfoItem>
        <InfoItem icon={<PhoneIcon className="text-black-500" />} title="Make a Call">
          Phone: +91 84477 46183
        </InfoItem>
        <InfoItem icon={<AccessTimeIcon className="text-black-500" />} title="Working Hours">
          Monday-Friday: 9:00 - 06:00<br />
          Saturday-Sunday: Holiday
        </InfoItem>
        <InfoItem icon={<EmailIcon className="text-black-500" />} title="Send an Email">
          support@registerkaro.in<br />
          admin@registerkaro.in
        </InfoItem>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1">{icon}</div>
    <div>
      <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
    </div>
  </div>
);

export default ContactInfo;
