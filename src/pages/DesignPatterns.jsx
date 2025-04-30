import AnimatedSection from '../components/ui/AnimatedSection'
import CodeBlock from '../components/ui/CodeBlock'

const repositoryPatternCode = `// Repository Pattern Example
public interface IUserRepository
{
    Task<User> GetByIdAsync(int id);
    Task<IEnumerable<User>> GetAllAsync();
    Task<User> AddAsync(User user);
    Task UpdateAsync(User user);
    Task DeleteAsync(int id);
}

public class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _context;
    
    public UserRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task<User> GetByIdAsync(int id)
    {
        return await _context.Users
            .Where(u => u.TenantId == _currentTenant.Id) // Tenant filtering
            .FirstOrDefaultAsync(u => u.Id == id);
    }
    
    // Other implementation methods...
}`;

const cqrsPatternCode = `// CQRS Pattern with MediatR
// Command
public class CreateUserCommand : IRequest<Result<UserDto>>
{
    public string Email { get; set; }
    public string Name { get; set; }
    // Other properties...
}

// Command Handler
public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, Result<UserDto>>
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;
    
    public CreateUserCommandHandler(IUserRepository userRepository, IMapper mapper)
    {
        _userRepository = userRepository;
        _mapper = mapper;
    }
    
    public async Task<Result<UserDto>> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        // Validation, business logic
        var user = new User { /* map from request */ };
        
        await _userRepository.AddAsync(user);
        
        return Result.Success(_mapper.Map<UserDto>(user));
    }
}`;

const unitOfWorkPatternCode = `// Unit of Work Pattern
public interface IUnitOfWork
{
    Task<int> SaveChangesAsync();
    IUserRepository Users { get; }
    IOfficeRepository Offices { get; }
    // Other repositories...
}

public class UnitOfWork : IUnitOfWork
{
    private readonly ApplicationDbContext _context;
    private IUserRepository _users;
    private IOfficeRepository _offices;
    
    public UnitOfWork(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public IUserRepository Users => _users ??= new UserRepository(_context);
    public IOfficeRepository Offices => _offices ??= new OfficeRepository(_context);
    
    public async Task<int> SaveChangesAsync()
    {
        return await _context.SaveChangesAsync();
    }
}`;

const DesignPatterns = () => {
  return (
    <div className="container">
      <AnimatedSection>
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Design Patterns</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Our SaaS platform follows industry-standard design patterns to ensure code maintainability, 
          testability, and separation of concerns. Below are the key patterns implemented in the system.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          Repository Pattern
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The Repository pattern abstracts the data access layer, providing a cleaner API for working with 
              domain entities. This pattern helps isolate the application from changes in the data store and 
              facilitates unit testing through the ability to mock repositories.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Key Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Centralizes data access logic</li>
                <li>Enforces tenant isolation in queries</li>
                <li>Simplifies unit testing with mockable interfaces</li>
                <li>Provides consistent data access patterns</li>
                <li>Improves code organization and maintainability</li>
              </ul>
            </div>
          </div>
          
          <div>
            <CodeBlock 
              code={repositoryPatternCode} 
              language="csharp" 
              title="Repository Pattern Example"
            />
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          CQRS (Command Query Responsibility Segregation)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The CQRS pattern separates read and write operations into different models, allowing for optimized 
              data flows. With MediatR, we implement this pattern to create a pipeline of handlers that can include 
              validation, logging, and caching.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Implementation Details</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Commands for write operations (create, update, delete)</li>
                <li>Queries for read operations (get, list, search)</li>
                <li>Mediator pattern for decoupling request and handling</li>
                <li>Pipeline behaviors for cross-cutting concerns</li>
                <li>Separate DTOs for command inputs and query outputs</li>
              </ul>
            </div>
          </div>
          
          <div>
            <CodeBlock 
              code={cqrsPatternCode} 
              language="csharp" 
              title="CQRS with MediatR Example"
            />
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          Unit of Work Pattern
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The Unit of Work pattern helps manage transactions and ensures that all database operations within a 
              business transaction are either committed or rolled back as a single unit. This pattern works in 
              conjunction with the Repository pattern to provide consistency.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Maintains data integrity across repositories</li>
                <li>Reduces database roundtrips</li>
                <li>Centralizes transaction management</li>
                <li>Simplifies handling of multiple related operations</li>
              </ul>
            </div>
          </div>
          
          <div>
            <CodeBlock 
              code={unitOfWorkPatternCode} 
              language="csharp" 
              title="Unit of Work Pattern Example"
            />
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          Other Design Patterns
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="font-medium text-lg mb-3 dark:text-white">Dependency Injection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use ASP.NET Core's built-in dependency injection container to manage object creation and lifetimes. 
              This pattern promotes loose coupling between components and improves testability.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="font-medium text-lg mb-3 dark:text-white">Decorator Pattern</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Used to add behavior to individual objects dynamically without affecting the behavior of other objects 
              from the same class. We apply this pattern primarily for caching and logging concerns.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="font-medium text-lg mb-3 dark:text-white">Factory Pattern</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Implemented for creating complex objects or initializing components that require special configuration 
              based on tenant settings or other runtime conditions.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="font-medium text-lg mb-3 dark:text-white">Strategy Pattern</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Used for implementing various multi-tenancy strategies, notification delivery methods, and 
              subscription billing approaches that can be selected at runtime.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default DesignPatterns
