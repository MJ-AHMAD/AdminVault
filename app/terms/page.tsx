import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Terms of Service
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Last updated: April 15, 2025
                </p>
              </div>
            </div>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Welcome to AdminVault ("Company", "we", "our", "us")! These Terms of Service ("Terms") govern your use
                of our website located at{" "}
                <a href="https://www.adminvault.com" className="text-primary hover:underline">
                  www.adminvault.com
                </a>{" "}
                and our administrative software solutions (collectively referred to as the "Service").
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part
                of the terms, then you may not access the Service.
              </p>

              <h2>2. Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and up-to-date information. You
                are responsible for safeguarding the password that you use to access the Service and for any activities
                or actions under your password.
              </p>
              <p>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming
                aware of any breach of security or unauthorized use of your account.
              </p>

              <h2>3. License to Use</h2>
              <p>
                AdminVault grants you a limited, non-exclusive, non-transferable, and revocable license to use our
                Service as authorized in these Terms. The Service and all materials therein or transferred thereby,
                including software, images, text, graphics, logos, patents, trademarks, service marks, copyrights,
                photographs, audio, videos, music, and all Intellectual Property Rights related thereto, are the
                exclusive property of AdminVault.
              </p>

              <h2>4. Subscription Terms</h2>
              <p>
                Some parts of the Service are billed on a subscription basis. You will be billed in advance on a
                recurring basis, depending on the type of subscription plan you select. At the end of each billing
                period, your subscription will automatically renew under the same conditions unless you cancel it or
                AdminVault cancels it.
              </p>
              <p>
                You may cancel your subscription either through your online account management page or by contacting our
                customer support team. You will receive a confirmation email upon cancellation.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                In no event shall AdminVault, nor its directors, employees, partners, agents, suppliers, or affiliates,
                be liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your
                access to or use of or inability to access or use the Service; (ii) any conduct or content of any third
                party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or
                alteration of your transmissions or content, whether based on warranty, contract, tort (including
                negligence) or any other legal theory, whether or not we have been informed of the possibility of such
                damage.
              </p>

              <h2>6. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of Bangladesh, without regard to
                its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be
                considered a waiver of those rights.
              </p>

              <h2>7. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By
                continuing to access or use our Service after those revisions become effective, you agree to be bound by
                the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>

              <h2>8. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <ul>
                <li>Email: mjahmad2024@outlook.com</li>
                <li>Phone: 01336221217</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 AdminVault. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-primary hover:text-foreground">
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
