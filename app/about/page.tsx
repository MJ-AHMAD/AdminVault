import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-primary transition-colors">
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  About AdminVault
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Transforming administrative operations with cutting-edge software solutions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 mt-12 items-center">
              <div>
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/img1.png"
                  alt="About AdminVault"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground">
                  At AdminVault, we believe that powerful administrative tools should be accessible to organizations of
                  all sizes. Our mission is to streamline operations, enhance productivity, and provide complete control
                  through innovative software solutions that address real-world challenges faced by administrators.
                </p>
                <h2 className="text-2xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2020, AdminVault emerged from a recognition that administrative software often lacks the
                  usability and flexibility that modern organizations need. Our team of experienced developers and
                  industry specialists has worked tirelessly to create solutions that combine powerful features with
                  intuitive interfaces.
                </p>
              </div>
            </div>
            <div className="mt-16 space-y-8">
              <h2 className="text-2xl font-bold text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously explore emerging technologies to ensure our solutions remain at the cutting edge of
                    what's possible.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Usability</h3>
                  <p className="text-muted-foreground">
                    We believe that powerful software should also be intuitive and accessible, reducing the learning
                    curve for administrators.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Customer-Centric</h3>
                  <p className="text-muted-foreground">
                    Our development is guided by real-world feedback from administrators who use our products every day.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 space-y-8">
              <h2 className="text-2xl font-bold text-center">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex flex-col items-center text-center space-y-2">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Image
                        src="https://mj-ahmad.github.io/mja2025/img/img1.png"
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
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
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const teamMembers = [
  { name: "Mohammed J. Ahmad", role: "Founder & CEO" },
  { name: "Sarah Johnson", role: "Chief Technology Officer" },
  { name: "David Chen", role: "Head of Product" },
  { name: "Aisha Rahman", role: "Lead Designer" },
]
