import React from 'react';
import { MdSecurity, MdLock, MdShield, MdPrivacyTip } from 'react-icons/md';
import SectionContainer from '../layout/SectionContainer';
import CodeBlock from '../ui/CodeBlock';
import SecuritySVG from '../../assets/illustrations/SecuritySVG';
import AnimatedSection from '../ui/AnimatedSection';

const Security = () => {
  const securityFeatures = [
    {
      title: 'Authentication',
      icon: <MdLock className="text-4xl text-primary-500" />,
      description: 'Robust user authentication with OAuth 2.0 and JWT tokens for secure access control.',
    },
    {
      title: 'Data Encryption',
      icon: <MdSecurity className="text-4xl text-primary-500" />,
      description: 'End-to-end encryption of sensitive data both in transit and at rest.',
    },
    {
      title: 'Access Control',
      icon: <MdShield className="text-4xl text-primary-500" />,
      description: 'Role-based permissions system with fine-grained access control to resources.',
    },
    {
      title: 'Privacy Compliance',
      icon: <MdPrivacyTip className="text-4xl text-primary-500" />,
      description: 'Built with GDPR, CCPA, and other privacy regulations in mind.',
    },
  ];

  const securityCodeExample = `// Example of JWT authentication middleware
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  const token = authHeader.split(' ')[1];
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    
    req.user = user;
    next();
  });
};`;

  return (
    <SectionContainer id="security" title="Security Features" subtitle="Enterprise-grade protection for your data">
      <AnimatedSection>
        <div className="flex justify-center mb-12">
          <SecuritySVG width={700} height={350} className="max-w-full" />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={0.4}>
        <div className="mt-8">
          <CodeBlock 
            code={securityCodeExample}
            language="javascript"
            title="JWT Authentication Example"
          />
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
};

export default Security;
