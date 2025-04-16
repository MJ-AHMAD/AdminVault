"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id) || products[0]
  const [activeImage, setActiveImage] = useState(0)

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
            <Link href="/products" className="text-sm font-medium text-primary transition-colors">
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
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-6 md:py-12">
          <div className="flex items-center gap-2 mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Solutions
              </Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={product.images[activeImage] || "https://mj-ahmad.github.io/mja2025/img/img1.png"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="aspect-square object-cover"
                />
              </div>
              <div className="flex gap-2 overflow-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative overflow-hidden rounded border ${
                      activeImage === index ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image || "https://mj-ahmad.github.io/mja2025/img/img1.png"}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      width={100}
                      height={100}
                      className="aspect-square h-20 w-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <Star className="h-5 w-5 fill-primary" />
                    <Star className="h-5 w-5 fill-primary" />
                    <Star className="h-5 w-5 fill-primary" />
                    <Star className="h-5 w-5 fill-primary" />
                    <Star className="h-5 w-5 fill-muted stroke-muted-foreground" />
                    <span className="ml-2 text-sm text-muted-foreground">4.0 (120 reviews)</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="font-medium">Description</div>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Key Features</div>
                  <ul className="grid gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">License Type</div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start">
                      <div className="flex flex-col items-start">
                        <span>Standard</span>
                        <span className="text-xs text-muted-foreground">For single organization</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <div className="flex flex-col items-start">
                        <span>Enterprise</span>
                        <span className="text-xs text-muted-foreground">For multiple branches</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="mr-2 h-4 w-4" />
                  Save for Later
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Tabs defaultValue="details">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="details">Solution Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-6 space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">System Specifications</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Deployment</h4>
                      <p className="text-muted-foreground">{product.specifications.deployment}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Users</h4>
                      <p className="text-muted-foreground">{product.specifications.users}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Compatibility</h4>
                      <p className="text-muted-foreground">{product.specifications.compatibility}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Last Updated</h4>
                      <p className="text-muted-foreground">{product.specifications.updated}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Detailed Description</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>{product.longDescription}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6 space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <div className="grid gap-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="space-y-2 border-b pb-4 last:border-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Image
                              src="https://mj-ahmad.github.io/mja2025/img/img1.png"
                              alt={review.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <div>
                              <div className="font-medium">{review.name}</div>
                              <div className="text-xs text-muted-foreground">{review.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-primary" : "fill-muted stroke-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="faq" className="mt-6 space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Frequently Asked Questions</h3>
                  <div className="grid gap-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-medium">{faq.question}</h4>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Solutions</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:border-primary"
                >
                  <div className="relative aspect-video overflow-hidden rounded-md">
                    <Image
                      src={product.image || "https://mj-ahmad.github.io/mja2025/img/img1.png"}
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
          </div>
        </div>
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

const products = [
  {
    id: "1",
    name: "School Management Pro",
    price: "199.99",
    originalPrice: "249.99",
    category: "Education",
    description:
      "A comprehensive school management system with student tracking, staff management, attendance, grading, and financial modules.",
    longDescription:
      "School Management Pro is a state-of-the-art administrative solution designed specifically for K-12 schools. This all-in-one platform streamlines every aspect of school administration, from student enrollment and attendance tracking to staff management and financial operations. The intuitive dashboard provides administrators with real-time insights into school performance, while automated workflows reduce administrative burden by up to 70%. With our AI-powered analytics, you can identify trends in student performance and make data-driven decisions to improve educational outcomes. The system also includes robust communication tools to keep parents informed and engaged in their children's education.",
    features: [
      "Student Information Management",
      "Staff and Teacher Administration",
      "Attendance Tracking",
      "Grade Management",
      "Financial Operations",
      "Parent Communication Portal",
      "AI-Powered Analytics",
      "Customizable Reporting",
    ],
    specifications: {
      deployment: "Cloud-based or On-premises",
      users: "Unlimited",
      compatibility: "Works on any device with a browser",
      updated: "December 10, 2023",
    },
    images: [
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
    ],
  },
  {
    id: "2",
    name: "College Administration Suite",
    price: "249.99",
    originalPrice: "299.99",
    category: "Education",
    description:
      "A complete college administration solution with modules for admissions, course management, faculty administration, and student services.",
    longDescription:
      "The College Administration Suite is a comprehensive solution designed to meet the complex needs of higher education institutions. This powerful platform integrates all aspects of college administration, from admissions and enrollment to course scheduling, faculty management, and student services. The system's modular architecture allows institutions to implement only the components they need, with the ability to add additional modules as requirements evolve. Advanced analytics provide insights into enrollment trends, student performance, and resource utilization, enabling data-driven decision making at all levels of administration. The platform also includes robust security features to protect sensitive student and institutional data.",
    features: [
      "Admissions and Enrollment Management",
      "Course Scheduling and Registration",
      "Faculty Administration",
      "Student Services Portal",
      "Financial Aid Management",
      "Campus Resource Allocation",
      "Institutional Research Tools",
      "Compliance Reporting",
    ],
    specifications: {
      deployment: "Cloud-based or On-premises",
      users: "Unlimited",
      compatibility: "Cross-platform compatibility",
      updated: "November 15, 2023",
    },
    images: [
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
    ],
  },
  {
    id: "3",
    name: "Coaching Center Manager",
    price: "179.99",
    originalPrice: "219.99",
    category: "Education",
    description:
      "A specialized management system for coaching centers with batch management, student progress tracking, and performance analytics.",
    longDescription:
      "Coaching Center Manager is a specialized administrative solution designed specifically for tutorial centers, test preparation facilities, and educational coaching businesses. This comprehensive system streamlines all aspects of coaching center operations, from batch scheduling and student enrollment to performance tracking and fee management. The intuitive interface allows administrators to organize students into batches based on subjects, levels, or test preparation goals, while the performance tracking system provides detailed insights into student progress and areas for improvement. Automated communication tools keep students and parents informed about schedules, assignments, and progress updates. The system's analytics dashboard provides coaching center administrators with valuable insights into instructor effectiveness, student performance trends, and business metrics, enabling data-driven decisions to optimize operations and improve educational outcomes.",
    features: [
      "Batch Management",
      "Student Enrollment",
      "Performance Tracking",
      "Fee Management",
      "Instructor Scheduling",
      "Automated Communications",
      "Resource Allocation",
      "Business Analytics",
    ],
    specifications: {
      deployment: "Cloud-based",
      users: "Up to 500 (expandable)",
      compatibility: "All modern browsers and mobile devices",
      updated: "October 25, 2023",
    },
    images: [
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
      "https://mj-ahmad.github.io/mja2025/img/img1.png",
    ],
  },
]

const reviews = [
  {
    name: "Dr. James Wilson",
    date: "December 5, 2023",
    rating: 5,
    content:
      "As a school principal, I've implemented many administrative systems over the years, but School Management Pro stands out for its intuitive interface and comprehensive feature set. Our administrative workload has decreased by nearly 40%, allowing our staff to focus more on educational outcomes rather than paperwork.",
  },
  {
    name: "Prof. Emily Chen",
    date: "November 18, 2023",
    rating: 4,
    content:
      "The College Administration Suite has transformed how we manage our department. The course scheduling and faculty management features are particularly impressive. The only reason I'm not giving 5 stars is that the initial setup required more IT support than we anticipated, but the ongoing benefits far outweigh this initial hurdle.",
  },
  {
    name: "Robert Johnson",
    date: "October 30, 2023",
    rating: 5,
    content:
      "Our coaching center has grown from 50 to 300 students in just one year, and we couldn't have managed this growth without the Coaching Center Manager. The batch management and performance tracking features have been invaluable for scaling our operations while maintaining educational quality.",
  },
]

const faqs = [
  {
    question: "How long does implementation typically take?",
    answer:
      "Implementation time varies based on the size of your organization and the complexity of your requirements. For most educational institutions, basic implementation can be completed in 2-4 weeks, with full implementation including data migration and customization taking 4-8 weeks.",
  },
  {
    question: "Do you offer training for our staff?",
    answer:
      "Yes, all our administrative solutions include comprehensive training packages. We offer both online and on-site training options, as well as detailed documentation and video tutorials. Our support team is also available to answer questions during the implementation process and beyond.",
  },
  {
    question: "Can your systems integrate with our existing software?",
    answer:
      "Our administrative solutions are designed with open APIs that allow for integration with most common educational and business software. We have pre-built integrations for popular learning management systems, accounting software, and communication tools. Our implementation team can assess your specific integration needs during the consultation phase.",
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer:
      "We offer multiple tiers of ongoing support, including standard business hours support, 24/7 premium support, and dedicated account management. All customers receive regular software updates, security patches, and access to our knowledge base and community forums.",
  },
  {
    question: "Is my data secure with your systems?",
    answer:
      "Data security is our top priority. Our solutions employ industry-leading encryption, regular security audits, and compliance with educational data privacy regulations. We provide detailed information about our security measures during the consultation process and can sign custom data processing agreements as needed.",
  },
]

const relatedProducts = [
  {
    id: "2",
    name: "College Administration Suite",
    price: "249.99",
    category: "Education",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "New",
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
    id: "8",
    name: "Hospital Management System",
    price: "349.99",
    category: "Healthcare",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "New",
  },
  {
    id: "11",
    name: "Staff Performance Analytics",
    price: "149.99",
    category: "HR",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: null,
  },
]
