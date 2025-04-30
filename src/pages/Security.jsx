import React from 'react';
import { MdSecurity, MdLock, MdShield, MdPrivacyTip } from 'react-icons/md';
import SectionContainer from '../components/layout/SectionContainer';
import SecurityFeatures from '../components/sections/Security';

const Security = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <SecurityFeatures />
    </div>
  );
};

export default Security;