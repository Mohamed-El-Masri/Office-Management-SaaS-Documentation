import React from 'react';
import PropTypes from 'prop-types';

const SectionContainer = ({ id, title, subtitle, children, className }) => {
  return (
    <section id={id} className={`py-16 ${className || ''}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 dark:text-white">{title}</h2>
            {subtitle && <p className="text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

SectionContainer.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default SectionContainer;
