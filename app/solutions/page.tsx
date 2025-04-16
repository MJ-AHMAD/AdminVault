import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolutionsPage() {
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
                className="h-5 w-5"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                3
              </span>
            </Link>
            <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button size="sm" className="hidden md:flex" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Explore Our Solutions
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our comprehensive range of administrative software solutions designed to streamline your
                  operations
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter">All Solutions</h2>
                <p className="text-muted-foreground">Browse our complete collection of administrative software</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Input placeholder="Search solutions..." className="pl-8 w-full" />
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
                    className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {solutions.map((solution) => (
                <Card key={solution.id} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    {solution.badge && <Badge className="absolute top-2 right-2 bg-primary">{solution.badge}</Badge>}
                  </div>
                  <CardHeader>
                    <CardTitle>{solution.title}</CardTitle>
                    <CardDescription>{solution.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                    <div className="mt-4">
                      <div className="font-medium text-sm mb-2">Key Features:</div>
                      <ul className="text-sm space-y-1">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="font-bold text-primary">${solution.price}</div>
                    <Button size="sm" asChild>
                      <Link href={`/products/${solution.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg">
                Load More
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Need a Custom Solution?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team can develop tailored administrative solutions to meet your specific requirements
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Contact Sales
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/book-demo">Book a Demo</Link>
                </Button>
              </div>
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

const solutions = [
  {
    id: "1",
    title: "School Management Pro",
    category: "Education",
    price: "199.99",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "Best Seller",
    description:
      "A comprehensive school management system with student tracking, staff management, and financial modules.",
    features: ["Student Information Management", "Staff Administration", "Attendance Tracking", "Grade Management"],
  },
  {
    id: "2",
    title: "College Administration Suite",
    category: "Education",
    price: "249.99",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "New",
    description:
      "Complete college administration solution with modules for admissions, course management, and faculty administration.",
    features: ["Admissions Management", "Course Scheduling", "Faculty Administration", "Student Services"],
  },
  {
    id: "3",
    title: "Coaching Center Manager",
    category: "Education",
    price: "179.99",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "Popular",
    description: "Specialized management system for coaching centers with batch management and performance tracking.",
    features: ["Batch Management", "Student Enrollment", "Performance Tracking", "Fee Management"],
  },
  {
    id: "4",
    title: "Travel Agency Dashboard",
    category: "Travel",
    price: "229.99",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: null,
    description:
      "Comprehensive travel agency management system with booking, customer management, and reporting features.",
    features: ["Booking Management", "Customer Database", "Itinerary Planning", "Financial Reporting"],
  },
  {
    id: "5",
    title: "Foundation Management System",
    category: "Non-Profit",
    price: "189.99",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "New",
    description: "Complete management solution for foundations and non-profit organizations with donor management.",
    features: ["Donor Management", "Grant Tracking", "Program Management", "Volunteer Coordination"],
  },
  {
    id: "6",
    title: "Business Planning & Budgeting",
    category: "Business",
    price: "299.99",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "Featured",
    description: "Advanced business planning and budgeting software with forecasting and scenario analysis.",
    features: ["Financial Planning", "Budget Management", "Forecasting Tools", "Scenario Analysis"],
  },
  {
    id: "7",
    title: "Enterprise Resource Planning",
    category: "Business",
    price: "399.99",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: null,
    description:
      "Comprehensive ERP solution for medium to large businesses with integrated modules for all operations.",
    features: ["Finance Management", "HR Management", "Supply Chain", "Customer Relations"],
  },
  {
    id: "8",
    title: "Hospital Management System",
    category: "Healthcare",
    price: "349.99",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "New",
    description: "Complete hospital management system with patient records, staff scheduling, and billing.",
    features: ["Patient Records", "Staff Scheduling", "Inventory Management", "Billing System"],
  },
]
