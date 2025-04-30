import { FaNetworkWired, FaDatabase, FaUserShield, FaExchangeAlt, FaFileCode, FaGlobe, FaRegClock, FaBuilding } from 'react-icons/fa'
import AnimatedSection from '../components/ui/AnimatedSection'
import TechnologyCard from '../components/ui/TechnologyCard'
import CodeBlock from '../components/ui/CodeBlock'

// Sample code snippets
const efCoreCode = `// Entity Framework Core configuration example
public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(
            Configuration.GetConnectionString("DefaultConnection"),
            x => x.MigrationsHistoryTable("__EFMigrationsHistory", "schema")
        )
    );
    
    // Other service configurations...
}`;

const identityCode = `// ASP.NET Core Identity configuration
services.AddIdentity<ApplicationUser, ApplicationRole>(options => {
    options.Password.RequiredLength = 8;
    options.Password.RequireDigit = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(15);
})
.AddEntityFrameworkStores<ApplicationDbContext>()
.AddDefaultTokenProviders();`;

const autoMapperCode = `// AutoMapper configuration
var mapperConfig = new MapperConfiguration(cfg => {
    cfg.AddProfile<UserProfile>();
    cfg.AddProfile<TenantProfile>();
    // Other profiles...
});

IMapper mapper = mapperConfig.CreateMapper();
services.AddSingleton(mapper);`;

const coreTechnologies = [
  {
    title: 'ASP.NET Core 8 (MVC + Web API)',
    description: 'The foundation of our backend services, providing both MVC and RESTful API capabilities.',
    icon: FaNetworkWired,
    color: 'primary'
  },
  {
    title: 'Entity Framework Core',
    description: 'ORM for database management and migrations control.',
    icon: FaDatabase,
    color: 'info'
  },
  {
    title: 'SQL Server',
    description: 'Primary database for robust data storage and management.',
    icon: FaDatabase,
    color: 'secondary'
  },
  {
    title: 'Identity Framework',
    description: 'Handles authentication, authorization, and user permission management.',
    icon: FaUserShield,
    color: 'success'
  }
]

const packages = [
  {
    title: 'Microsoft.EntityFrameworkCore.SqlServer',
    description: 'SQL Server support for Entity Framework Core',
    icon: FaDatabase,
    color: 'info'
  },
  {
    title: 'Microsoft.AspNetCore.Identity.EntityFrameworkCore',
    description: 'User and role management integration with EF Core',
    icon: FaUserShield,
    color: 'success'
  },
  {
    title: 'AutoMapper',
    description: 'Maps between DTOs and Entity models',
    icon: FaExchangeAlt,
    color: 'primary'
  },
  {
    title: 'FluentValidation',
    description: 'Input validation with an elegant fluent interface',
    icon: FaFileCode,
    color: 'warning'
  },
  {
    title: 'Serilog',
    description: 'Professional and extensible logging capabilities',
    icon: FaFileCode,
    color: 'danger'
  },
  {
    title: 'MediatR',
    description: 'CQRS pattern implementation with clean approach',
    icon: FaExchangeAlt,
    color: 'secondary'
  },
  {
    title: 'Swashbuckle.AspNetCore',
    description: 'Automatic API documentation generation (Swagger)',
    icon: FaFileCode,
    color: 'success'
  },
  {
    title: 'Microsoft.Extensions.Localization',
    description: 'Multi-language support (English & Arabic)',
    icon: FaGlobe,
    color: 'info'
  },
  {
    title: 'Hangfire',
    description: 'Background processing for scheduled notifications and tasks',
    icon: FaRegClock,
    color: 'primary'
  },
  {
    title: 'EFCore.MultiTenancy',
    description: 'Multi-tenant database support',
    icon: FaBuilding,
    color: 'secondary'
  }
]

const CoreTechnologies = () => {
  return (
    <div className="container">
      <AnimatedSection>
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Core Technologies</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Our SaaS Office Management platform is built with modern, enterprise-ready technologies
          designed to provide scalability, security, and performance.
        </p>
      </AnimatedSection>
      
      {/* Primary Technologies */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          Primary Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreTechnologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              title={tech.title}
              description={tech.description}
              icon={tech.icon}
              color={tech.color}
            />
          ))}
        </div>
      </AnimatedSection>
      
      {/* Code Examples */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Implementation Examples
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3 dark:text-white">Entity Framework Core Configuration</h3>
            <CodeBlock 
              code={efCoreCode} 
              language="csharp" 
              title="Startup.cs"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-3 dark:text-white">Identity Framework Setup</h3>
            <CodeBlock 
              code={identityCode} 
              language="csharp"
              title="Startup.cs"  
            />
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-3 dark:text-white">AutoMapper Configuration</h3>
            <CodeBlock 
              code={autoMapperCode}
              language="csharp" 
              title="AutoMapperConfig.cs"
            />
          </div>
        </div>
      </AnimatedSection>
      
      {/* NuGet Packages */}
      <AnimatedSection>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Key NuGet Packages
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages.map((pkg, index) => (
            <TechnologyCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              icon={pkg.icon}
              color={pkg.color}
            />
          ))}
        </div>
      </AnimatedSection>
      
      {/* Technology Diagram */}
      <AnimatedSection className="my-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
          Technology Stack Architecture
        </h2>
        
        <div className="relative py-6">
          <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary-100 dark:bg-gray-600 p-4 rounded-lg w-64 mb-4 text-center">
                <h3 className="font-semibold">Frontend</h3>
                <p className="text-sm">Angular, RxJS, Material UI</p>
              </div>
              
              <div className="h-8 w-0.5 bg-gray-300 dark:bg-gray-500"></div>
              
              <div className="bg-secondary-100 dark:bg-gray-600 p-4 rounded-lg w-64 mb-4 text-center">
                <h3 className="font-semibold">API Layer</h3>
                <p className="text-sm">ASP.NET Core 8 Web API</p>
              </div>
              
              <div className="h-8 w-0.5 bg-gray-300 dark:bg-gray-500"></div>
              
              <div className="bg-blue-100 dark:bg-gray-600 p-4 rounded-lg w-64 mb-4 text-center">
                <h3 className="font-semibold">Business Logic</h3>
                <p className="text-sm">Services, CQRS with MediatR</p>
              </div>
              
              <div className="h-8 w-0.5 bg-gray-300 dark:bg-gray-500"></div>
              
              <div className="bg-green-100 dark:bg-gray-600 p-4 rounded-lg w-64 text-center">
                <h3 className="font-semibold">Data Access</h3>
                <p className="text-sm">Entity Framework Core, SQL Server</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default CoreTechnologies
