import Link from "next/link"
import Image from "next/image"
import { Clock, Phone, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookDemoPage() {
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
                  Book a Demo
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Schedule a personalized demonstration of our administrative solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter">Experience Our Solutions in Action</h2>
                  <p className="mt-4 text-muted-foreground">
                    Book a personalized demo with one of our product specialists who will guide you through our
                    solutions and answer all your questions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Video className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Live Product Demonstration</h3>
                      <p className="text-sm text-muted-foreground">
                        See our solutions in action with a live walkthrough tailored to your needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Flexible Scheduling</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose a date and time that works best for you and your team.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Expert Consultation</h3>
                      <p className="text-sm text-muted-foreground">
                        Get personalized advice from our product specialists based on your requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-medium mb-4">What Our Clients Say About Our Demos</h3>
                  <div className="space-y-4">
                    {testimonials.map((testimonial, index) => (
                      <Card key={index} className="bg-muted/50">
                        <CardContent className="p-4">
                          <p className="text-sm italic mb-2">"{testimonial.quote}"</p>
                          <div className="flex items-center gap-2">
                            <div className="relative h-8 w-8 rounded-full overflow-hidden">
                              <Image
                                src="https://mj-ahmad.github.io/mja2025/img/img1.png"
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule Your Demo</CardTitle>
                    <CardDescription>Fill out the form below to book your personalized demo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" placeholder="Doe" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input id="company" placeholder="Acme Inc." required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="job-title">Job Title</Label>
                          <Input id="job-title" placeholder="IT Manager" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="solution">Solution of Interest</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a solution" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="school">School Management Pro</SelectItem>
                              <SelectItem value="college">College Administration Suite</SelectItem>
                              <SelectItem value="coaching">Coaching Center Manager</SelectItem>
                              <SelectItem value="travel">Travel Agency Dashboard</SelectItem>
                              <SelectItem value="foundation">Foundation Management System</SelectItem>
                              <SelectItem value="business">Business Planning & Budgeting</SelectItem>
                              <SelectItem value="erp">Enterprise Resource Planning</SelectItem>
                              <SelectItem value="hospital">Hospital Management System</SelectItem>
                              <SelectItem value="custom">Custom Solution</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Preferred Demo Type</Label>
                          <RadioGroup defaultValue="virtual">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="virtual" id="virtual" />
                              <Label htmlFor="virtual" className="font-normal">
                                Virtual Demo (Zoom/Teams)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="in-person" id="in-person" />
                              <Label htmlFor="in-person" className="font-normal">
                                In-Person Demo (at your location)
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date</Label>
                          <div className="grid grid-cols-2 gap-4">
                            <Input id="date" type="date" required />
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Additional Information</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your specific requirements or questions"
                            rows={3}
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        Book Your Demo
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Need Immediate Assistance?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team is ready to help you find the right solution for your organization
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href="tel:01336221217">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
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

const testimonials = [
  {
    quote:
      "The demo was incredibly helpful. The product specialist understood our needs and showed us exactly how AdminVault could streamline our operations.",
    name: "Sarah Johnson",
    position: "Principal, Westfield Academy",
  },
  {
    quote:
      "I was impressed by how tailored the demo was to our specific requirements. It made the decision to implement AdminVault much easier.",
    name: "Michael Chen",
    position: "IT Director, Global Health Foundation",
  },
  {
    quote:
      "The demo answered all our questions and showed us features we didn't even know we needed. Highly recommend booking one!",
    name: "Amanda Williams",
    position: "Operations Manager, Horizon Enterprises",
  },
]
