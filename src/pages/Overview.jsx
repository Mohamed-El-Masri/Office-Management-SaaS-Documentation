import { FaBuilding, FaUsers, FaRegCalendarAlt, FaUserShield, FaStream, FaDatabase } from 'react-icons/fa'
import AnimatedSection from '../components/ui/AnimatedSection'

// Placeholder image URLs - replace with your actual images
const systemOverviewImage = "https://via.placeholder.com/800x400?text=System+Overview+Diagram"
const useCaseDiagramImage = "https://via.placeholder.com/700x500?text=Use+Case+Diagram"
const rolesImage = "https://via.placeholder.com/600x300?text=User+Roles+Diagram"

const Overview = () => {
  return (
    <div className="container">
      <AnimatedSection>
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Office Management SaaS Overview</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          A comprehensive multi-tenant cloud platform that enables businesses to efficiently manage office resources, 
          spaces, employees, and operations while maintaining secure data isolation between tenants.
        </p>
      </AnimatedSection>
      
      {/* System Overview Section */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          System Overview
        </h2>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 mb-6">
          <img 
            src={systemOverviewImage} 
            alt="System Overview Diagram" 
            className="w-full h-auto mb-4 rounded-lg"
          />
          <p className="text-gray-600 dark:text-gray-300">
            The Office Management SaaS (Software as a Service) platform provides a cloud-based solution for companies to manage their office resources efficiently. 
            The system follows a multi-tenant architecture where each client organization (tenant) has their own isolated data while sharing the underlying infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="text-xl font-medium mb-4 dark:text-white">Key Features</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <FaBuilding className="mt-1 mr-2 text-primary-600 dark:text-primary-400" />
                <span>Office space management and resource allocation</span>
              </li>
              <li className="flex items-start">
                <FaUsers className="mt-1 mr-2 text-primary-600 dark:text-primary-400" />
                <span>Employee management with role-based permissions</span>
              </li>
              <li className="flex items-start">
                <FaRegCalendarAlt className="mt-1 mr-2 text-primary-600 dark:text-primary-400" />
                <span>Meeting room and resource scheduling</span>
              </li>
              <li className="flex items-start">
                <FaUserShield className="mt-1 mr-2 text-primary-600 dark:text-primary-400" />
                <span>Multi-tenant data isolation and security</span>
              </li>
              <li className="flex items-start">
                <FaStream className="mt-1 mr-2 text-primary-600 dark:text-primary-400" />
                <span>Customizable workflows and approval processes</span>
              </li>
              <li className="flex items-start">
                <FaDatabase className="mt-1 mr-2 text-primary-600 dark:text-primary-400" />
                <span>Data analytics and reporting capabilities</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="text-xl font-medium mb-4 dark:text-white">Benefits</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary-600 dark:text-primary-400">Cost Efficiency</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Subscription-based pricing eliminates large upfront investments in software and infrastructure.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-primary-600 dark:text-primary-400">Scalability</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Resources can be dynamically adjusted based on organizational needs and growth.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-primary-600 dark:text-primary-400">Easy Maintenance</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Automatic updates and maintenance without client involvement means always having the latest features.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-primary-600 dark:text-primary-400">Accessibility</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Web-based access from anywhere with internet connectivity on various devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Use Cases Section */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          Primary Use Cases
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          <div>
            <img 
              src={useCaseDiagramImage} 
              alt="Use Case Diagram" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700">
              <h3 className="font-medium text-lg mb-2 dark:text-white">Tenant Management</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Super Admins can create and manage tenant accounts, configure subscription plans, and monitor system usage across all tenants.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700">
              <h3 className="font-medium text-lg mb-2 dark:text-white">Office Resource Planning</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tenant Admins can configure office layouts, define available resources, and set up booking rules according to company policies.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700">
              <h3 className="font-medium text-lg mb-2 dark:text-white">Resource Booking</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                End users can search for available resources, make reservations, submit requests, and manage their bookings through an intuitive interface.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700">
              <h3 className="font-medium text-lg mb-2 dark:text-white">Reporting & Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tenant Admins can generate reports on resource utilization, user activity, and optimization opportunities to improve resource allocation.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* User Roles Section */}
      <AnimatedSection>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          User Roles
        </h2>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 mb-8 text-center">
          <img 
            src={rolesImage} 
            alt="Role Hierarchy" 
            className="max-w-full h-auto mx-auto mb-4 rounded-lg"
            style={{ maxHeight: '300px' }}
          />
          <p className="text-gray-600 dark:text-gray-300 text-sm italic">
            Hierarchical representation of system roles and their relationship
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-primary-500 border-t border-r border-b dark:border-gray-700">
            <h3 className="text-xl font-medium mb-3 dark:text-white">Super Admin</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Has complete control over the entire system, including all tenants and platform-level settings.
            </p>
            <h4 className="font-medium text-sm text-primary-600 dark:text-primary-400 mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>Tenant provisioning and management</li>
              <li>System-wide configuration</li>
              <li>Subscription and billing management</li>
              <li>Technical support for tenant admins</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-secondary-500 border-t border-r border-b dark:border-gray-700">
            <h3 className="text-xl font-medium mb-3 dark:text-white">Tenant Admin</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Administers settings and users for their specific tenant (organization) only.
            </p>
            <h4 className="font-medium text-sm text-secondary-600 dark:text-secondary-400 mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>User management within tenant</li>
              <li>Resource configuration</li>
              <li>Approval workflows setup</li>
              <li>Reports and analytics review</li>
              <li>Tenant-specific settings</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500 border-t border-r border-b dark:border-gray-700">
            <h3 className="text-xl font-medium mb-3 dark:text-white">End User</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Regular users who interact with the system for day-to-day office management tasks.
            </p>
            <h4 className="font-medium text-sm text-blue-600 dark:text-blue-400 mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>Resource booking and management</li>
              <li>Profile and preferences management</li>
              <li>Task and notification handling</li>
              <li>Reporting issues with resources</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Overview
