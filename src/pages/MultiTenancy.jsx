import { useState } from 'react'
import { FaDatabase, FaTable, FaKey, FaLayerGroup } from 'react-icons/fa'
import AnimatedSection from '../components/ui/AnimatedSection'
import CodeBlock from '../components/ui/CodeBlock'

const tenantMiddlewareCode = `// Tenant resolution middleware
public class TenantResolutionMiddleware
{
    private readonly RequestDelegate _next;
    
    public TenantResolutionMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    
    public async Task Invoke(HttpContext context, ITenantAccessService tenantService)
    {
        // Get tenant ID from subdomain, header, or claim
        string tenantId = ResolveTenantFromRequest(context);
        
        if (string.IsNullOrEmpty(tenantId))
        {
            context.Response.StatusCode = 400;
            await context.Response.WriteAsync("Tenant identifier is missing");
            return;
        }
        
        // Set current tenant context
        var tenant = await tenantService.GetTenantAsync(tenantId);
        if (tenant == null)
        {
            context.Response.StatusCode = 404;
            await context.Response.WriteAsync("Tenant not found");
            return;
        }
        
        tenantService.SetCurrentTenant(tenant);
        await _next(context);
    }
    
    private string ResolveTenantFromRequest(HttpContext context)
    {
        // Implementation details...
    }
}`;

const dbContextCode = `// Multi-tenant DbContext with global query filters
public class ApplicationDbContext : DbContext
{
    private readonly ITenantAccessService _tenantService;
    
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options,
        ITenantAccessService tenantService) : base(options)
    {
        _tenantService = tenantService;
    }
    
    public DbSet<User> Users { get; set; }
    public DbSet<Office> Offices { get; set; }
    public DbSet<Room> Rooms { get; set; }
    
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        
        // Apply tenant filter to all tenant-specific entities
        builder.Entity<User>().HasQueryFilter(u => u.TenantId == _tenantService.GetCurrentTenant().Id);
        builder.Entity<Office>().HasQueryFilter(o => o.TenantId == _tenantService.GetCurrentTenant().Id);
        builder.Entity<Room>().HasQueryFilter(r => r.TenantId == _tenantService.GetCurrentTenant().Id);
        
        // Ensure tenant ID is required
        builder.Entity<User>().Property(u => u.TenantId).IsRequired();
        // ...other entity configurations
    }
    
    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        // Set tenant ID on new entities
        foreach (var entry in ChangeTracker.Entries<ITenantEntity>())
        {
            if (entry.State == EntityState.Added)
            {
                entry.Entity.TenantId = _tenantService.GetCurrentTenant().Id;
            }
        }
        
        return base.SaveChangesAsync(cancellationToken);
    }
}`;

const strategyCode = `// Multi-tenant database strategy selector
public class TenantDatabaseSelector
{
    private readonly IConfiguration _config;
    private readonly Dictionary<string, string> _connectionStrings = new();
    
    public TenantDatabaseSelector(IConfiguration config)
    {
        _config = config;
    }
    
    public string GetConnectionString(Tenant tenant)
    {
        // Strategy selection based on tenant settings
        return tenant.DatabaseStrategy switch
        {
            TenantDatabaseStrategy.Shared => GetSharedConnectionString(),
            TenantDatabaseStrategy.Dedicated => GetDedicatedConnectionString(tenant),
            _ => throw new NotSupportedException($"Database strategy {tenant.DatabaseStrategy} is not supported")
        };
    }
    
    private string GetSharedConnectionString()
    {
        return _config.GetConnectionString("DefaultConnection");
    }
    
    private string GetDedicatedConnectionString(Tenant tenant)
    {
        // Cache connection strings for performance
        if (!_connectionStrings.TryGetValue(tenant.Id, out var connectionString))
        {
            connectionString = _config.GetConnectionString("TenantTemplate")
                .Replace("{tenantId}", tenant.Id);
                
            _connectionStrings[tenant.Id] = connectionString;
        }
        
        return connectionString;
    }
}`;

const MultiTenancy = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container">
      <AnimatedSection>
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Multi-Tenancy Architecture</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Our SaaS platform implements a robust multi-tenancy model that ensures complete data isolation 
          between tenants while maximizing resource efficiency and scalability.
        </p>
        
        {/* Tabs navigation */}
        <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 mb-8">
          {['overview', 'approaches', 'implementation', 'security'].map((tab) => (
            <button
              key={tab}
              className={`
                py-2 px-4 font-medium text-sm border-b-2 -mb-px
                ${activeTab === tab 
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}
              `}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </AnimatedSection>
      
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <AnimatedSection>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">What is Multi-Tenancy?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Multi-tenancy is a software architecture where a single instance of the application serves 
              multiple customers (tenants). Each tenant's data is isolated from other tenants, though they 
              share the application and underlying infrastructure.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 mt-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex-1">
                <h3 className="font-medium text-lg mb-3 dark:text-white">Benefits</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Cost efficiency through shared resources</li>
                  <li>Simplified maintenance and updates</li>
                  <li>Efficient resource utilization</li>
                  <li>Rapid onboarding of new tenants</li>
                  <li>Lower operational overhead</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex-1">
                <h3 className="font-medium text-lg mb-3 dark:text-white">Challenges</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Data isolation and security</li>
                  <li>Performance balancing between tenants</li>
                  <li>Customization requirements</li>
                  <li>Complex data backup and restoration</li>
                  <li>Tenant-specific configurations</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Our Multi-Tenant Implementation</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our SaaS platform supports both database-per-tenant and shared database with schema isolation approaches, 
              allowing for flexibility based on tenant requirements. The system automatically handles tenant context, 
              ensuring complete data isolation while maximizing resource efficiency.
            </p>
          </div>
        </AnimatedSection>
      )}
      
      {/* Approaches Tab */}
      {activeTab === 'approaches' && (
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Multi-Tenancy Approaches</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <div className="text-center mb-4">
                <FaDatabase className="mx-auto text-4xl text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center dark:text-white">Database-per-Tenant</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Each tenant has their own isolated database. This approach provides the highest level of data isolation.
              </p>
              <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Pros</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                <li>Maximum data isolation</li>
                <li>Tenant-specific database optimizations</li>
                <li>Easier data recovery per tenant</li>
              </ul>
              <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Cons</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Higher resource requirements</li>
                <li>More complex maintenance</li>
                <li>Scaling challenges with many tenants</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <div className="text-center mb-4">
                <FaTable className="mx-auto text-4xl text-secondary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center dark:text-white">Schema-per-Tenant</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Multiple tenants share a database, but each has its own schema. This provides good isolation with better resource efficiency.
              </p>
              <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Pros</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                <li>Good balance of isolation and efficiency</li>
                <li>Easier maintenance than separate DBs</li>
                <li>Lower overhead costs</li>
              </ul>
              <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Cons</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Database connection management</li>
                <li>More complex backup strategies</li>
                <li>Limited by DB schema count</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <div className="text-center mb-4">
                <FaKey className="mx-auto text-4xl text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center dark:text-white">Shared Tables</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All tenants share the same database and schema, with a tenant identifier column in each table for filtering.
              </p>
              <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Pros</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                <li>Highest resource efficiency</li>
                <li>Simplest to maintain</li>
                <li>Easiest to scale horizontally</li>
              </ul>
              <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Cons</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Lowest data isolation level</li>
                <li>Requires tenant filtering in every query</li>
                <li>Higher risk of data leakage</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Our Hybrid Approach</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our system implements a hybrid approach that allows different tenancy models based on tenant needs:
            </p>
            
            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300">
              <li>
                <span className="font-medium">Standard Plan:</span> Uses shared database with tenant ID filtering for cost efficiency
              </li>
              <li>
                <span className="font-medium">Business Plan:</span> Implements schema isolation for improved performance and customization
              </li>
              <li>
                <span className="font-medium">Enterprise Plan:</span> Provides dedicated databases for maximum isolation and control
              </li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              This tiered approach allows us to offer different service levels and pricing options while accommodating 
              varying security and compliance requirements.
            </p>
          </div>
        </AnimatedSection>
      )}
      
      {/* Implementation Tab */}
      {activeTab === 'implementation' && (
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Technical Implementation</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Tenant Resolution</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our system identifies the current tenant using middleware that extracts tenant information from:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                <li>Subdomain (e.g., tenant1.example.com)</li>
                <li>Request header (X-Tenant-ID)</li>
                <li>JWT token claim after authentication</li>
                <li>Route parameter when applicable</li>
              </ul>
              
              <p className="text-gray-600 dark:text-gray-300">
                Once resolved, the tenant context is established for the duration of the request and used throughout 
                the application to ensure proper data isolation.
              </p>
            </div>
            
            <div>
              <CodeBlock 
                code={tenantMiddlewareCode} 
                language="csharp" 
                title="TenantResolutionMiddleware.cs"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Data Isolation Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Entity Framework Core's global query filters provide an elegant way to enforce tenant data isolation:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                <li>Automatically applies tenant filtering to all queries</li>
                <li>Prevents accidental data leaks across tenants</li>
                <li>Simplifies domain models and business logic</li>
                <li>Enforces tenant ID for new entities</li>
              </ul>
              
              <p className="text-gray-600 dark:text-gray-300">
                This approach ensures that no matter where in the application data is accessed, 
                tenant isolation is maintained without requiring explicit filtering in every query.
              </p>
            </div>
            
            <div>
              <CodeBlock 
                code={dbContextCode} 
                language="csharp" 
                title="ApplicationDbContext.cs"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Dynamic Database Strategy</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our connection string factory allows dynamic selection of the appropriate database strategy based 
                on tenant configuration:
              </p>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
                <h4 className="font-medium mb-3 dark:text-white">Connection Resolution Logic</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  1. Tenant is identified through the resolution middleware
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  2. Tenant database strategy is determined from configuration
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  3. Appropriate connection string is generated or retrieved
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  4. DbContext is configured with the tenant-specific connection
                </p>
              </div>
            </div>
            
            <div>
              <CodeBlock 
                code={strategyCode} 
                language="csharp" 
                title="TenantDatabaseSelector.cs"
              />
            </div>
          </div>
        </AnimatedSection>
      )}
      
      {/* Security Tab */}
      {activeTab === 'security' && (
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Security Considerations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Data Isolation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Multiple layers of protection ensure tenant data remains isolated:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Global query filters on all entity queries</li>
                <li>Row-level security at the database level</li>
                <li>Authorization checks on all API endpoints</li>
                <li>Tenant context validation in middleware</li>
                <li>Data-at-rest encryption for sensitive information</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Authentication & Authorization</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Multi-tenant aware identity system ensures proper access control:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>JWT tokens include tenant identifier claims</li>
                <li>Role-based access control within each tenant</li>
                <li>Super admin vs. tenant admin permission segregation</li>
                <li>Tenant-specific authorization policies</li>
                <li>IP address restrictions for enterprise tenants</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Audit & Compliance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive audit logging helps maintain compliance requirements:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Tenant-specific audit trails for all operations</li>
                <li>Immutable logging of security-sensitive actions</li>
                <li>User activity monitoring within each tenant</li>
                <li>Configurable retention periods for audit data</li>
                <li>Exportable audit reports for compliance reviews</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Infrastructure Security</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Platform-level protection ensures overall system security:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>HTTPS/TLS for all communications</li>
                <li>Rate limiting to prevent tenant-level DoS attacks</li>
                <li>Resource quotas to prevent tenant resource abuse</li>
                <li>Regular security scanning and penetration testing</li>
                <li>Database backup encryption for sensitive tenants</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  )
}

export default MultiTenancy
