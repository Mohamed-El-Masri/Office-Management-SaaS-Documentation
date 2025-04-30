import { FaReact, FaAngular, FaJs, FaCss3Alt, FaMobile, FaAccessibleIcon } from 'react-icons/fa'
import { SiTypescript, SiMui, SiRedux } from 'react-icons/si'
import AnimatedSection from '../components/ui/AnimatedSection'
import CodeBlock from '../components/ui/CodeBlock'

const angularComponentCode = `// Angular Component Example
@Component({
  selector: 'app-resource-booking',
  templateUrl: './resource-booking.component.html',
  styleUrls: ['./resource-booking.component.scss']
})
export class ResourceBookingComponent implements OnInit {
  availableResources$: Observable<Resource[]>;
  selectedDate: Date = new Date();
  bookingForm: FormGroup;
  
  constructor(
    private resourceService: ResourceService,
    private bookingService: BookingService,
    private fb: FormBuilder,
    private tenantContextService: TenantContextService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadAvailableResources();
  }

  initForm(): void {
    this.bookingForm = this.fb.group({
      resourceId: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      purpose: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  loadAvailableResources(): void {
    const tenantId = this.tenantContextService.getCurrentTenant().id;
    this.availableResources$ = this.resourceService
      .getAvailableResources(tenantId, this.selectedDate);
  }

  submitBooking(): void {
    if (this.bookingForm.valid) {
      const booking = {
        ...this.bookingForm.value,
        date: this.selectedDate,
        tenantId: this.tenantContextService.getCurrentTenant().id
      };
      
      this.bookingService.createBooking(booking).subscribe(
        result => this.handleSuccess(result),
        error => this.handleError(error)
      );
    }
  }
}`;

const stateManagementCode = `// NgRx store setup example
// actions.ts
export const loadDashboardData = createAction(
  '[Dashboard] Load Data',
  props<{ tenantId: string }>()
);

export const loadDashboardDataSuccess = createAction(
  '[Dashboard] Load Data Success',
  props<{ data: DashboardData }>()
);

export const loadDashboardDataFailure = createAction(
  '[Dashboard] Load Data Failure',
  props<{ error: any }>()
);

// effects.ts
@Injectable()
export class DashboardEffects {
  loadDashboard$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadDashboardData),
      mergeMap(action => 
        this.dashboardService.getDashboardData(action.tenantId).pipe(
          map(data => loadDashboardDataSuccess({ data })),
          catchError(error => of(loadDashboardDataFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService
  ) {}
}

// Component usage
@Component({...})
export class DashboardComponent implements OnInit {
  dashboardData$ = this.store.select(selectDashboardData);
  loading$ = this.store.select(selectDashboardLoading);
  
  constructor(private store: Store) {}
  
  ngOnInit(): void {
    const tenantId = this.tenantService.getCurrentTenantId();
    this.store.dispatch(loadDashboardData({ tenantId }));
  }
}`;

const responsiveDesignCode = `/* Responsive design with Angular Material */
<div class="dashboard-container">
  <mat-card>
    <mat-card-header>
      <mat-card-title>Resource Utilization</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <div class="resource-grid" fxLayout="row wrap" fxLayoutGap="16px grid">
        <div 
          *ngFor="let resource of resources" 
          fxFlex="100%" 
          fxFlex.gt-xs="50%" 
          fxFlex.gt-sm="33%" 
          fxFlex.gt-md="25%"
        >
          <app-resource-card [resource]="resource"></app-resource-card>
        </div>
      </div>
    </mat-card-content>
  </mat-card>
</div>

/* SCSS for responsive handling */
.dashboard-container {
  padding: 16px;
  
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
  
  @media screen and (min-width: 1024px) {
    padding: 32px;
  }
}

/* Themeable components */
.resource-card {
  border-radius: 8px;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .resource-title {
    color: var(--primary-color);
    font-weight: 500;
  }
  
  .resource-status {
    &.available {
      color: var(--success-color);
    }
    
    &.booked {
      color: var(--warn-color);
    }
  }
}`;

const Frontend = () => {
  return (
    <div className="container">
      <AnimatedSection>
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Frontend Technology Stack</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Our Office SaaS platform's user interface is built with Angular for a robust, 
          maintainable and scalable frontend that delivers an excellent user experience 
          across devices and screen sizes.
        </p>
      </AnimatedSection>

      {/* Core Technologies */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          Core Frontend Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 flex flex-col items-center text-center">
            <FaAngular className="text-5xl text-red-600 mb-4" />
            <h3 className="text-xl font-medium mb-3 dark:text-white">Angular</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Framework for building dynamic web applications with TypeScript, providing strong typing, 
              dependency injection, and a comprehensive component architecture.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 flex flex-col items-center text-center">
            <SiTypescript className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-medium mb-3 dark:text-white">TypeScript</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Strongly-typed superset of JavaScript that enhances developer productivity through 
              better tooling, error catching, and code organization.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 flex flex-col items-center text-center">
            <SiMui className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-medium mb-3 dark:text-white">Angular Material</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              UI component library implementing Material Design principles with pre-built 
              components that integrate seamlessly with Angular.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 flex flex-col items-center text-center">
            <SiRedux className="text-5xl text-purple-700 mb-4" />
            <h3 className="text-xl font-medium mb-3 dark:text-white">NgRx</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              State management library based on Redux principles, providing predictable state management 
              through actions, reducers, selectors, and effects.
            </p>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Component Architecture */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          Component Architecture
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our frontend follows a hierarchical component architecture that separates concerns and 
              promotes reusability. Components are organized into:
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 mb-6">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Component Types</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li><span className="font-medium">Container Components</span>: Manage state, handle data fetching, and coordinate child components</li>
                <li><span className="font-medium">Presentational Components</span>: Focus on UI rendering with inputs and outputs</li>
                <li><span className="font-medium">Layout Components</span>: Handle page structure and positioning</li>
                <li><span className="font-medium">Feature Modules</span>: Encapsulate related components for specific business features</li>
                <li><span className="font-medium">Shared Components</span>: Reusable UI elements used across multiple features</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Multi-Tenant Considerations</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Our frontend architecture supports multi-tenancy through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>Tenant context service that maintains current tenant information</li>
                <li>Dynamic theming based on tenant branding preferences</li>
                <li>Tenant-specific routing and navigation rules</li>
                <li>Feature toggling based on tenant subscription plans</li>
              </ul>
            </div>
          </div>
          
          <div>
            <CodeBlock 
              code={angularComponentCode} 
              language="typescript" 
              title="Angular Component Example"
            />
          </div>
        </div>
      </AnimatedSection>
      
      {/* State Management */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          State Management
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use NgRx for global application state management, implementing a predictable 
              state container that follows the Redux pattern while integrating seamlessly with Angular.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
              <h3 className="font-medium text-lg mb-3 dark:text-white">State Management Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>Single source of truth for application data</li>
                <li>Predictable state transitions through pure reducer functions</li>
                <li>Improved testability with isolated state logic</li>
                <li>Developer tools for time-travel debugging</li>
                <li>Side effect handling through NgRx Effects</li>
                <li>Performance optimization with OnPush change detection</li>
              </ul>
            </div>
          </div>
          
          <div>
            <CodeBlock 
              code={stateManagementCode} 
              language="typescript" 
              title="NgRx State Management"
            />
          </div>
        </div>
      </AnimatedSection>
      
      {/* Responsive Design */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          Responsive Design & Theming
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our UI is fully responsive, ensuring a consistent experience across desktop, tablet, and mobile devices.
              We also implement tenant-specific theming capabilities for customization.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border dark:border-gray-700">
                <div className="flex items-center mb-3">
                  <FaCss3Alt className="text-xl text-blue-500 mr-2" />
                  <h3 className="font-medium dark:text-white">Responsive Approach</h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                  <li>Mobile-first design methodology</li>
                  <li>Flexbox and CSS Grid for layout</li>
                  <li>Angular Material's responsive grid system</li>
                  <li>Dynamic layout adjustments with Flex Layout</li>
                  <li>Optimized content loading for mobile devices</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border dark:border-gray-700">
                <div className="flex items-center mb-3">
                  <FaAccessibleIcon className="text-xl text-green-500 mr-2" />
                  <h3 className="font-medium dark:text-white">Accessibility</h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                  <li>WCAG 2.1 AA compliance</li>
                  <li>Proper semantic HTML structure</li>
                  <li>ARIA attributes for enhanced screen reader support</li>
                  <li>Keyboard navigation throughout the application</li>
                  <li>Sufficient color contrast ratios</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border dark:border-gray-700">
                <div className="flex items-center mb-3">
                  <FaMobile className="text-xl text-purple-500 mr-2" />
                  <h3 className="font-medium dark:text-white">Progressive Web App</h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                  <li>Offline functionality for core features</li>
                  <li>Service worker for caching and performance</li>
                  <li>Installable on mobile devices</li>
                  <li>Push notifications for important updates</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <CodeBlock 
              code={responsiveDesignCode} 
              language="html" 
              title="Responsive Design & Theming"
            />
          </div>
        </div>
      </AnimatedSection>
      
      {/* Performance Optimization */}
      <AnimatedSection>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b dark:border-gray-700 dark:text-white">
          Performance Optimization
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="font-medium text-lg mb-3 dark:text-white">Lazy Loading</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Feature modules are lazy-loaded to improve initial load time and optimize resource usage:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>Route-based lazy loading of feature modules</li>
              <li>Preloading strategies for common user paths</li>
              <li>Dynamic import() for code splitting</li>
              <li>Optimized bundle sizes with tree shaking</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="font-medium text-lg mb-3 dark:text-white">Rendering Optimization</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Techniques used to optimize rendering performance:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>OnPush change detection strategy</li>
              <li>Pure pipes for derived calculations</li>
              <li>trackBy functions for efficient collection rendering</li>
              <li>Virtual scrolling for large data lists</li>
              <li>Web workers for CPU-intensive operations</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="font-medium text-lg mb-3 dark:text-white">Caching Strategies</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Multi-level caching to reduce network requests and improve responsiveness:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>In-memory request caching with RxJS operators</li>
              <li>NgRx entity state caching</li>
              <li>Local storage for persistent user preferences</li>
              <li>Service worker cache for offline access</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="font-medium text-lg mb-3 dark:text-white">Asset Optimization</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Strategies for optimizing assets and resources:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>Image compression and WebP format</li>
              <li>SVG for icons and simple illustrations</li>
              <li>Font subset loading for improved performance</li>
              <li>Critical CSS extraction for faster initial render</li>
              <li>Resource prioritization with preload/prefetch</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Frontend
