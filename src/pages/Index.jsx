import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LayoutDashboard, Zap, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Revolutionize Your Workflow</h1>
          <p className="text-xl mb-8">Streamline your business processes with our cutting-edge SaaS solution</p>
          <div className="space-x-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<LayoutDashboard className="h-12 w-12" />}
              title="Intuitive Dashboard"
              description="Get a bird's-eye view of your business with our easy-to-use dashboard."
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12" />}
              title="Lightning Fast"
              description="Experience unparalleled speed and performance with our optimized platform."
            />
            <FeatureCard
              icon={<Shield className="h-12 w-12" />}
              title="Bank-Level Security"
              description="Rest easy knowing your data is protected by state-of-the-art security measures."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="$9.99"
              features={["5 Users", "10GB Storage", "Basic Support"]}
            />
            <PricingCard
              title="Pro"
              price="$29.99"
              features={["25 Users", "100GB Storage", "Priority Support", "Advanced Analytics"]}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={["Unlimited Users", "Unlimited Storage", "24/7 Support", "Custom Integration"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="John Doe"
              role="CEO, TechCorp"
              content="This SaaS solution has transformed the way we do business. Highly recommended!"
            />
            <TestimonialCard
              name="Jane Smith"
              role="CTO, InnovateCo"
              content="The intuitive interface and powerful features have significantly boosted our productivity."
            />
            <TestimonialCard
              name="Mike Johnson"
              role="Founder, StartupX"
              content="Excellent customer support and constant updates keep us ahead of the competition."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <form className="flex">
                <Input type="email" placeholder="Enter your email" className="mr-2" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 SaaS Startup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center">
        {icon}
        <span className="ml-4">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const PricingCard = ({ title, price, features }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <div className="text-3xl font-bold">{price}</div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Zap className="h-4 w-4 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full mt-4">Sign Up</Button>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ name, role, content }) => (
  <Card>
    <CardContent className="pt-6">
      <p className="mb-4">"{content}"</p>
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-600">{role}</div>
    </CardContent>
  </Card>
);

export default Index;