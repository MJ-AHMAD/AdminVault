import Link from "next/link"
import Image from "next/image"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductsPage() {
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
        <section className="w-full py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold">All Administrative Solutions</h1>
                <p className="text-muted-foreground">Browse our collection of premium administrative software</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-full md:w-auto">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search solutions..."
                    className="w-full pl-8 md:w-[200px] lg:w-[300px]"
                  />
                </div>
                <Button variant="outline" size="icon" className="shrink-0">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
              {products.map((product) => (
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
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button variant="outline" size="icon" disabled>
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
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">Previous page</span>
              </Button>
              <Button variant="outline" size="sm" className="min-w-8 h-8">
                1
              </Button>
              <Button variant="outline" size="sm" className="min-w-8 h-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="min-w-8 h-8">
                3
              </Button>
              <Button variant="outline" size="sm" className="min-w-8 h-8">
                4
              </Button>
              <Button variant="outline" size="sm" className="min-w-8 h-8">
                5
              </Button>
              <Button variant="outline" size="icon">
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">Next page</span>
              </Button>
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

const products = [
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
  {
    id: "7",
    name: "Enterprise Resource Planning",
    price: "399.99",
    category: "Business",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: null,
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
    id: "9",
    name: "NGO Operations Platform",
    price: "159.99",
    category: "Non-Profit",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: null,
  },
  {
    id: "10",
    name: "Budget Forecasting AI",
    price: "199.99",
    category: "Finance",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: null,
  },
  {
    id: "11",
    name: "Staff Performance Analytics",
    price: "149.99",
    category: "HR",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: null,
  },
  {
    id: "12",
    name: "Complete Administrative Bundle",
    price: "499.99",
    category: "Business",
    image: "https://mj-ahmad.github.io/mja2025/img/img1.png",
    badge: "Best Value",
  },
]
