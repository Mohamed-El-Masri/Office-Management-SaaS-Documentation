import React from 'react';
import { MdSecurity, MdLock, MdShield, MdPrivacyTip } from 'react-icons/md';
import SectionContainer from '../components/layout/SectionContainer';
import SecurityFeatures from '../components/sections/Security';

const Security = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Security Features</h1>
      <SecurityFeatures />
    </div>
  );
};

export default Security;