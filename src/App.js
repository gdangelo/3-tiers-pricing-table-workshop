import { Card, Header } from './components';

// Data for the 3-tier pricing table
export const plans = [
  {
    name: 'Hobby',
    price: 19,
    frequency: 'month',
    features: [
      'Nullam gravida elementum',
      'Mauris mauris neque',
      'Duis auctor tincidunt leo',
    ],
  },
  {
    name: 'Growth',
    price: 49,
    frequency: 'month',
    featured: true,
    features: [
      'Nullam gravida elementum',
      'Mauris mauris neque',
      'Duis auctor tincidunt leo',
    ],
  },
  {
    name: 'Scale',
    price: 99,
    frequency: 'month',
    features: [
      'Nullam gravida elementum',
      'Mauris mauris neque',
      'Duis auctor tincidunt leo',
    ],
  },
];

function App() {
  return (
    <div className="h-full flex flex-col">
      <Header />

      {/* Responsive 3-tier pricing table */}
      <main className="flex-1 px-6 py-12 lg:flex lg:justify-center lg:items-center">
        <div className="grid gap-12 lg:gap-0 lg:grid-cols-3">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`w-full max-w-lg mx-auto ${
                plan.featured
                  ? 'order-first lg:order-none lg:transform lg:scale-110 lg:z-10'
                  : 'lg:transform lg:scale-90'
              }`}
            >
              <Card {...plan} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
