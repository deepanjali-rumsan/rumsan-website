"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "@/components/ui/container";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const navLinkClasses =
  "text-gray-800 hover:text-blue-600 transition-colors font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-active:bg-transparent";
const mobileNavLinkClasses =
  "text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg bg-transparent hover:bg-transparent focus:bg-transparent data-active:bg-transparent";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className=" sticky top-0 z-50 w-full bg-white">
      <Container className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src="https://assets.rumsan.net/rumsan-group/rumsan-logo.png"
              alt="RUMSAN"
              width={140}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navLinkClasses} ${
                    isActive("/about") ? "text-[#3A4FEA]" : ""
                  }`}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navLinkClasses} ${
                    isActive("/portfolio") ? "text-[#3A4FEA]" : ""
                  }`}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navLinkClasses} ${
                    isActive("/services") ? "text-[#3A4FEA]" : ""
                  }`}>
                  Our Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/sectors" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navLinkClasses} ${
                    isActive("/sectors") ? "text-[#3A4FEA]" : ""
                  }`}>
                  Our Sectors
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/career" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navLinkClasses} ${
                    isActive("/career") ? "text-[#3A4FEA]" : ""
                  }`}>
                  Career
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navLinkClasses} ${
                    isActive("/contact") ? "text-[#3A4FEA]" : ""
                  }`}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu with Shadcn Sheet */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-none">
            <NavigationMenu
              className="flex flex-col w-full py-16 px-4 justify-start!"
              viewport={false}>
              <NavigationMenuList className="flex-col items-center gap-6 w-full max-w-xs mx-auto">
                <NavigationMenuItem className="w-full">
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${mobileNavLinkClasses} ${
                        isActive("/about") ? "text-[#3A4FEA]" : ""
                      }`}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link href="/portfolio" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${mobileNavLinkClasses} ${
                        isActive("/portfolio") ? "text-[#3A4FEA]" : ""
                      }`}>
                      Portfolio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${mobileNavLinkClasses} ${
                        isActive("/services") ? "text-[#3A4FEA]" : ""
                      }`}>
                      Our Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link href="/sectors" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${mobileNavLinkClasses} ${
                        isActive("/sectors") ? "text-[#3A4FEA]" : ""
                      }`}>
                      Our Sectors
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link href="/career" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${mobileNavLinkClasses} ${
                        isActive("/career") ? "text-[#3A4FEA]" : ""
                      }`}>
                      Career
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${mobileNavLinkClasses} ${
                        isActive("/contact") ? "text-[#3A4FEA]" : ""
                      }`}>
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </Container>
    </nav>
  );
}