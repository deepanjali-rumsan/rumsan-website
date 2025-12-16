"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="w-full px-6 md:px-12 py-6 bg-white">
      <div className="flex items-center justify-between">
        <div className="ml-6">
          <Image
            src="https://assets.rumsan.net/rumsan-group/rumsan-logo.png"
            alt="RUMSAN"
            width={140}
            height={40}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/about"
            className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
          >
            Our Services
          </Link>
          <Link
            href="/career"
            className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
          >
            Career
          </Link>
        </div>

        {/* Mobile Menu with Shadcn Sheet */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-8">
              <Link
                href="/about"
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg"
              >
                About Us
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg"
              >
                Portfolio
              </Link>
              <Link
                href="/services"
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg"
              >
                Our Services
              </Link>
              <Link
                href="/career"
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg"
              >
                Career
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
