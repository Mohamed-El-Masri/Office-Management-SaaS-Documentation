import { useState } from 'react'
import { 
  FaServer, FaDatabase, FaLaptopCode, FaUserCog,
  FaShieldAlt, FaBell, FaGlobe, FaLayerGroup,
  FaCode, FaUserShield, FaExchangeAlt
} from 'react-icons/fa'
import AnimatedSection from '../components/ui/AnimatedSection'
import ArchitectureFlow from '../components/ui/ArchitectureFlow'
import CodeBlock from '../components/ui/CodeBlock'

// Sample diagram placeholders
const backendDiagramVisualization = (
  <div className="h-full flex items-center justify-center">
    <div className="max-w-md text-center">
      <FaLayerGroup className="mx-auto mb-4 text-5xl text-primary-500" />
      <h3 className="text-xl font-semibold mb-2 dark:text-white">Backend Architecture</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Layered architecture with presentation, business, and data access layers
      </p>
    </div>
  </div>
)

const frontendDiagramVisualization = (
  <div className="h-full flex items-center justify-center">
    <div className="max-w-md text-center">
      <FaLaptopCode className="mx-auto mb-4 text-5xl text-secondary-500" />
      <h3 className="text-xl font-semibold mb-2 dark:text-white">Frontend Architecture</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Component-based Angular architecture with services and state management
      </p>
    </div>
  </div>
)

const databaseDiagramVisualization = (
  <div className="h-full flex items-center justify-center">
    <div className="max-w-md text-center">
      <FaDatabase className="mx-auto mb-4 text-5xl text-blue-500" />
      <h3 className="text-xl font-semibold mb-2 dark:text-white">Database Structure</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Multi-tenant database design with entity relationships
      </p>
    </div>
  </div>
)

// Lifecycle steps
const userLifecycleSteps = [
  {
    title: "Registration",
    description: "User creates account via registration form",
    visualization: (
      <div className="h-full flex items-center justify-center">
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg max-w-sm text-center">
          <FaUserCog className="mx-auto mb-4 text-5xl text-primary-500" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">User Registration</h3>
          <p className="text-sm dark:text-gray-300">
            New users provide company name, email, password, and basic information
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Email Verification",
    description: "Verification email sent to confirm address",
    visualization: (
      <div className="h-full flex items-center justify-center">
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg max-w-sm text-center">
          <FaBell className="mx-auto mb-4 text-5xl text-blue-500" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Email Verification</h3>
          <p className="text-sm dark:text-gray-300">
            System sends verification email with a time-limited token link
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Trial Activation",
    description: "Free trial tenant instance created automatically",
    visualization: (
      <div className="h-full flex items-center justify-center">
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg max-w-sm text-center">
          <FaServer className="mx-auto mb-4 text-5xl text-green-500" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Trial Activation</h3>
          <p className="text-sm dark:text-gray-300">
            System provisions new tenant with trial limitations on resources
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Subscription & Payment",
    description: "User selects a paid plan and provides payment details",
    visualization: (
      <div className="h-full flex items-center justify-center">
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg max-w-sm text-center">
          <FaShieldAlt className="mx-auto mb-4 text-5xl text-yellow-500" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Payment Processing</h3>
          <p className="text-sm dark:text-gray-300">
            Secure payment processing and subscription activation
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Renewal or Suspension",
    description: "Subscription auto-renews or suspends on failure",
    visualization: (
      <div className="h-full flex items-center justify-center">
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg max-w-sm text-center">
          <FaDatabase className="mx-auto mb-4 text-5xl text-red-500" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Account Management</h3>
          <p className="text-sm dark:text-gray-300">
            Automated renewal process with grace period on payment failure
          </p>
        </div>
      </div>
    )
  }
]

const architectureDiagrams = [
  {
    id: 'backend',
    title: 'Backend Architecture',
    description: 'Layered architecture pattern with clear separation of concerns',
    icon: FaServer,
    visualization: backendDiagramVisualization
  },
  {
    id: 'frontend',
    title: 'Frontend Structure',
    description: 'Component-based Angular architecture with services',
    icon: FaLaptopCode,
    visualization: frontendDiagramVisualization
  },
  {
    id: 'database',
    title: 'Database Schema',
    description: 'Multi-tenant database design with entity relationships',
    icon: FaDatabase,
    visualization: databaseDiagramVisualization
  }
]

// API structure code sample
const apiStructureCode = `// API routes example
// Base route: /api

// Authentication endpoints
POST   /auth/login
POST   /auth/register
POST   /auth/forgot-password
POST   /auth/reset-password

// Tenant management endpoints
GET    /tenants/{id}
POST   /tenants
PUT    /tenants/{id}
DELETE /tenants/{id}

// User management endpoints
GET    /tenants/{tenantId}/users
GET    /tenants/{tenantId}/users/{id}
POST   /tenants/{tenantId}/users
PUT    /tenants/{tenantId}/users/{id}
DELETE /tenants/{tenantId}/users/{id}

// Office resources endpoints
GET    /offices/{officeId}/bookings
POST   /offices/{officeId}/bookings
// ...other resource endpoints`;

// Business logic code sample
const businessLogicCode = `// Registration process in tenant service
public async Task<Result<TenantDto>> RegisterTenantAsync(RegisterTenantCommand command)
{
    // Validate input
    if (await _tenantRepository.ExistsByNameAsync(command.Name))
    {
        return Result.Failure<TenantDto>("Tenant with this name already exists");
    }

    // Create tenant entity
    var tenant = new Tenant
    {
        Name = command.Name,
        // Map other properties...
    };

    // Create database or schema for tenant
    await _multiTenancyService.ProvisionTenantDatabaseAsync(tenant);
    
    // Create default admin user
    var adminUser = new ApplicationUser
    {
        Email = command.AdminEmail,
        UserName = command.AdminEmail,
        TenantId = tenant.Id
    };
    
    // Save tenant
    await _tenantRepository.AddAsync(tenant);
    await _unitOfWork.SaveChangesAsync();
    
    // Create subscription with trial period
    await _subscriptionService.CreateTrialSubscriptionAsync(tenant.Id);
    
    // Send welcome email
    await _emailService.SendWelcomeEmailAsync(command.AdminEmail, tenant.Name);
    
    return Result.Success(_mapper.Map<TenantDto>(tenant));
}`;

const Architecture = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const [activeDiagram, setActiveDiagram] = useState('backend')
  
  return (
    <div className="container">
      <AnimatedSection>
        <h1 className="text-3xl font-bold mb-6 dark:text-white">System Architecture</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          A comprehensive overview of the Office Management SaaS system architecture,
          including backend, frontend, and database design.
        </p>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 mb-8">
          {['overview', 'backend', 'frontend', 'api', 'lifecycle'].map((section) => (
            <button
              key={section}
              className={`
                py-2 px-4 font-medium text-sm border-b-2 -mb-px
                ${activeSection === section 
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}
              `}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </AnimatedSection>
      
      {/* Overview Section */}
      {activeSection === 'overview' && (
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Architecture Overview</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {architectureDiagrams.map((diagram) => (
              <div 
                key={diagram.id}
                className={`
                  cursor-pointer p-6 border rounded-lg transition-colors
                  ${activeDiagram === diagram.id 
                    ? 'border-primary-500 bg-primary-50 dark:bg-gray-800'
                    : 'border-gray-200 hover:border-primary-300 dark:border-gray-700'}
                `}
                onClick={() => setActiveDiagram(diagram.id)}
              >
                <div className="flex items-start mb-4">
                  <div className={`
                    p-2 rounded-lg mr-3 
                    ${activeDiagram === diagram.id ? 'bg-primary-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}
                  `}>
                    <diagram.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-white">{diagram.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {diagram.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-80">
            {architectureDiagrams.find(d => d.id === activeDiagram)?.visualization}
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Key Architecture Principles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-medium mb-2 dark:text-white">Layered Architecture</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Clear separation between presentation, business logic, and data access layers
                  for maintainability and testability.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-medium mb-2 dark:text-white">Multi-Tenancy</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Robust tenant isolation with database-per-tenant or schema-based approaches
                  ensuring data security.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-medium mb-2 dark:text-white">API-First Design</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  RESTful API design with consistent patterns and comprehensive documentation
                  via Swagger/OpenAPI.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-medium mb-2 dark:text-white">Component-Based Frontend</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Modular Angular components with smart/dumb separation and efficient state management.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}
      
      {/* Backend Section */}
      {activeSection === 'backend' && (
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Backend Architecture</h2>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-primary-100 dark:bg-gray-700 p-4 rounded-lg w-64 mb-4 text-center">
                <h3 className="font-semibold dark:text-white">API Layer</h3>
                <p className="text-sm dark:text-gray-300">ASP.NET Core Web API Controllers</p>
              </div>
              
              <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="bg-secondary-100 dark:bg-gray-700 p-4 rounded-lg w-64 mb-4 text-center">
                <h3 className="font-semibold dark:text-white">Business Logic Layer</h3>
                <p className="text-sm dark:text-gray-300">Services, CQRS with MediatR</p>
              </div>
              
              <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="bg-blue-100 dark:bg-gray-700 p-4 rounded-lg w-64 text-center">
                <h3 className="font-semibold dark:text-white">Data Access Layer</h3>
                <p className="text-sm dark:text-gray-300">EF Core, Repositories, UoW</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border dark:border-gray-700">
              <h3 className="font-semibold mb-3 dark:text-white">Data Access Layer</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Entity Framework Core ORM</li>
                <li>• Repository Pattern implementation</li>
                <li>• Unit of Work for transaction management</li>
                <li>• Multi-tenant data filtering</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border dark:border-gray-700">
              <h3 className="font-semibold mb-3 dark:text-white">Business Logic Layer</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Service implementations</li>
                <li>• CQRS pattern with MediatR</li>
                <li>• Domain models and business rules</li>
                <li>• Validation using FluentValidation</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border dark:border-gray-700">
              <h3 className="font-semibold mb-3 dark:text-white">API Layer</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• RESTful controllers</li>
                <li>• Authentication middleware</li>
                <li>• Tenant resolution</li>
                <li>• DTOs and response mapping</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Business Logic Example</h3>
            <CodeBlock 
              code={businessLogicCode} 
              language="csharp"  
              title="TenantService.cs"
            />
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Authentication & Authorization</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <div className="flex items-center mb-4">
                <FaUserShield className="text-2xl text-primary-600 dark:text-primary-400 mr-3" />
                <h4 className="text-lg font-medium dark:text-white">Security Architecture</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Built on ASP.NET Core Identity with JWT token authentication. Role-based access control
                enforces permissions at controller and action levels.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-medium mb-2 dark:text-white">Authentication Flow</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                    <li>JWT token-based authentication</li>
                    <li>Refresh token mechanism</li>
                    <li>OAuth 2.0 support</li>
                    <li>Secure password hashing</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-medium mb-2 dark:text-white">Authorization Strategy</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                    <li>Role-based permissions</li>
                    <li>Policy-based authorization</li>
                    <li>Resource-based access control</li>
                    <li>Tenant-specific permissions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}
      
      {/* Frontend Section */}
      {activeSection === 'frontend' && (
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Frontend Architecture</h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8 border dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Angular Architecture</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                <FaCode className="h-6 w-6 mb-2 text-primary-600 dark:text-primary-400" />
                <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">Components</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Reusable UI components organized into smart (container) and presentational components
                </p>
              </div>
              
              <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                <FaExchangeAlt className="h-6 w-6 mb-2 text-secondary-600 dark:text-secondary-400" />
                <h4 className="font-medium text-secondary-600 dark:text-secondary-400 mb-2">Services</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Handle data fetching, business logic, and state management with RxJS observables
                </p>
              </div>
              
              <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                <FaGlobe className="h-6 w-6 mb-2 text-blue-600 dark:text-blue-400" />
                <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Modules</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Feature modules with lazy-loading for optimized performance and code organization
                </p>
              </div>
              
              <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                <FaUserShield className="h-6 w-6 mb-2 text-green-600 dark:text-green-400" />
                <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">Guards</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Route protection based on authentication state and user permissions
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="font-medium mb-4 dark:text-white">Component Structure</h4>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm w-full md:w-1/3 text-center">
                  <h5 className="font-medium mb-2 dark:text-white">Core Module</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Authentication, HTTP interceptors, guards, shared services
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm w-full md:w-1/3 text-center">
                  <h5 className="font-medium mb-2 dark:text-white">Shared Module</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Common components, pipes, directives, and utilities
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm w-full md:w-1/3 text-center">
                  <h5 className="font-medium mb-2 dark:text-white">Feature Modules</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Dashboard, tenant management, user management, resources
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8 border dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">State Management Strategy</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The application manages state using a combination of NgRx for global state and RxJS for component-level state:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-medium mb-2 dark:text-white">Global State (NgRx)</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Authentication state</li>
                  <li>User profile and settings</li>
                  <li>Tenant configuration</li>
                  <li>Application-wide notifications</li>
                </ul>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-medium mb-2 dark:text-white">Local State (RxJS Services)</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Feature-specific data</li>
                  <li>UI state for components</li>
                  <li>Form data management</li>
                  <li>Temporary workflow state</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}
      
      {/* API Section */}
      {activeSection === 'api' && (
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6 dark:text-white">API Structure</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">RESTful API Endpoints</h3>
            <CodeBlock 
              code={apiStructureCode} 
              language="bash" 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <h3 className="font-semibold mb-4 dark:text-white">API Design Principles</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• RESTful resource-oriented endpoints</li>
                <li>• Consistent naming conventions</li>
                <li>• Proper HTTP verb usage</li>
                <li>• Standardized response format</li>
                <li>• Comprehensive error handling</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <h3 className="font-semibold mb-4 dark:text-white">API Documentation</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• OpenAPI/Swagger integration</li>
                <li>• Interactive API explorer</li>
                <li>• Request/response examples</li>
                <li>• Authentication requirements</li>
                <li>• Schema definitions</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 mb-8">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Response Structure</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 dark:text-white">Success Response</h4>
                <pre className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-sm overflow-auto">
                  {JSON.stringify({
                    success: true,
                    data: {
                      id: "tenant-123",
                      name: "Acme Corp",
                      createdAt: "2023-05-15T10:30:00Z"
                    },
                    message: "Tenant created successfully"
                  }, null, 2)}
                </pre>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 dark:text-white">Error Response</h4>
                <pre className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-sm overflow-auto">
                  {JSON.stringify({
                    success: false,
                    errors: [
                      {
                        code: "VALIDATION_ERROR",
                        message: "Name is required"
                      }
                    ],
                    message: "Validation failed"
                  }, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}
      
      {/* Lifecycle Section */}
      {activeSection === 'lifecycle' && (
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6 dark:text-white">User Lifecycle</h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The system manages user and tenant lifecycles from registration through subscription
            to renewal or suspension, ensuring a seamless experience.
          </p>
          
          <ArchitectureFlow steps={userLifecycleSteps} />
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Subscription Management</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The subscription system manages tenant access based on their current plan:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium mb-2 dark:text-white">Trial Period</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Initial free access with limited features for evaluation.
                  </p>
                </div>
                
                <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium mb-2 dark:text-white">Active Subscription</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Full access to features based on the selected plan tier.
                  </p>
                </div>
                
                <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium mb-2 dark:text-white">Grace Period</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Limited access period after failed payment before suspension.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  )
}

export default Architecture
