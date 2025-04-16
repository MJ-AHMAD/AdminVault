import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AdminVault
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                3
              </span>
            </Link>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm" className="hidden md:flex">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    Premium Digital Solutions for Administrators
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline operations, enhance productivity, and maintain complete control with our cutting-edge
                    administrative software solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    asChild
                  >
                    <Link href="/solutions">
                      Explore Solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/book-demo">Book a Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/img1.png"
                  width={550}
                  height={550}
                  alt="Administrative dashboard showcase"
                  className="rounded-lg object-cover shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-4 w-48">
                  <div className="text-sm font-medium">Most Popular</div>
                  <div className="text-lg font-bold">School Management Pro</div>
                  <div className="text-primary font-bold">$199.99</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm">
                  Featured Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powerful Tools for Leaders</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive administrative solutions that have transformed operations for thousands of organizations
                  worldwide.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:border-primary"
                >
                  <div className="relative aspect-video overflow-hidden rounded-md">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    {product.badge && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="pt-3">
                    <h3 className="font-semibold">{product.name}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-primary font-bold">${product.price}</p>
                      <div className="text-sm text-muted-foreground">{product.category}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button size="lg" variant="outline">
                View All Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm">
                    Why Choose Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Designed for Administrators</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our administrative solutions are crafted with precision, ensuring you get powerful tools that
                    deliver real results for your organization.
                  </p>
                </div>
                <ul className="grid gap-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {feature.icon}
                      </div>
                      <span className="font-medium">{feature.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mx-auto lg:mx-0 grid grid-cols-2 gap-4">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/img1.png"
                      width={300}
                      height={300}
                      alt="Administrative feature"
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/img1.png"
                      width={300}
                      height={300}
                      alt="Administrative feature"
                      className="aspect-square object-cover"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/img1.png"
                      width={300}
                      height={300}
                      alt="Administrative feature"
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/img1.png"
                      width={300}
                      height={300}
                      alt="Administrative feature"
                      className="aspect-square object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from administrators who have transformed their organizations with our solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-loose text-muted-foreground">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/img1.png"
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Transform Your Administration?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of organizations that have revolutionized their operations with our powerful
                  administrative solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm">
                  Advanced Technology
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Cutting-Edge Innovations</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our solutions leverage the latest technological advancements to give your organization a competitive
                  edge.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 AdminVault. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/feedback" className="text-sm text-muted-foreground hover:text-foreground">
              Feedback
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const featuredProducts = [
  {
    id: "1",
    name: "School Management Pro",
    price: "199.99",
    category: "Education",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "College Administration Suite",
    price: "249.99",
    category: "Education",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "New",
  },
  {
    id: "3",
    name: "Coaching Center Manager",
    price: "179.99",
    category: "Education",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "Popular",
  },
  {
    id: "4",
    name: "Travel Agency Dashboard",
    price: "229.99",
    category: "Travel",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: null,
  },
  {
    id: "5",
    name: "Foundation Management System",
    price: "189.99",
    category: "Non-Profit",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "New",
  },
  {
    id: "6",
    name: "Business Planning & Budgeting",
    price: "299.99",
    category: "Business",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "Featured",
  },
]

const features = [
  {
    title: "Complete Staff Management",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Real-time Analytics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Advanced Reporting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    title: "24/7 Priority Support",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    content:
      "The School Management Pro system has completely transformed how we run our institution. The staff management and student tracking features have saved us countless hours of administrative work.",
    name: "Dr. Sarah Johnson",
    title: "Principal, Westfield Academy",
    rating: 5,
  },
  {
    content:
      "As a foundation director, I needed a system that could handle our complex organizational structure. AdminVault's solution not only met but exceeded our expectations with its powerful reporting tools.",
    name: "Michael Chen",
    title: "Executive Director, Global Health Foundation",
    rating: 5,
  },
  {
    content:
      "The Business Planning & Budgeting software has given us unprecedented control over our financial operations. The AI-powered forecasting has been remarkably accurate.",
    name: "Amanda Williams",
    title: "CFO, Horizon Enterprises",
    rating: 4,
  },
]

const technologies = [
  {
    title: "AI-Powered Analytics",
    description:
      "Advanced artificial intelligence algorithms analyze your data to provide actionable insights and predictive forecasting.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 2a8 8 0 0 0-8 8c0 5.2 7 12 8 12s8-6.8 8-12a8 8 0 0 0-8-8Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Blockchain Security",
    description:
      "State-of-the-art blockchain technology ensures your administrative data remains secure, transparent, and tamper-proof.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Quantum Computing Ready",
    description:
      "Our systems are designed with future compatibility for quantum computing, ensuring your investment is future-proof.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M8 12H2" />
        <path d="M22 12h-6" />
        <path d="M12 8V2" />
        <path d="M12 22v-6" />
      </svg>
    ),
  },
  {
    title: "Augmented Reality Training",
    description:
      "Train your staff efficiently with our AR-powered training modules that provide immersive learning experiences.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Neural Interface Compatibility",
    description:
      "Prepare for the future with systems designed to work with emerging neural interface technologies for effortless control.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M12 8v-2" />
        <path d="M12 18v-2" />
        <path d="M8 12H6" />
        <path d="M18 12h-2" />
      </svg>
    ),
  },
  {
    title: "Autonomous Decision Systems",
    description:
      "Advanced AI systems that can make routine administrative decisions based on your predefined parameters and policies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15v-4" />
        <path d="M12 15v-6" />
        <path d="M15 15v-2" />
      </svg>
    ),
  },
]
