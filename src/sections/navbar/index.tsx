"use client";

import Link from "next/link";
import Image from "next/image";
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
                <NavigationMenuLink className={navLinkClasses}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navLinkClasses}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink className={navLinkClasses}>
                  Our Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/sectors" legacyBehavior passHref>
                <NavigationMenuLink className={navLinkClasses}>
                  Our Sectors
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/career" legacyBehavior passHref>
                <NavigationMenuLink className={navLinkClasses}>
                  Career
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navLinkClasses}>
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
          <SheetContent side="right">
            <NavigationMenu className="flex flex-col" viewport={false}>
              <NavigationMenuList className="flex-col items-start gap-6 mt-8">
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={mobileNavLinkClasses}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/portfolio" legacyBehavior passHref>
                    <NavigationMenuLink className={mobileNavLinkClasses}>
                      Portfolio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuLink className={mobileNavLinkClasses}>
                      Our Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/sectors" legacyBehavior passHref>
                    <NavigationMenuLink className={mobileNavLinkClasses}>
                      Our Sectors
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/career" legacyBehavior passHref>
                    <NavigationMenuLink className={mobileNavLinkClasses}>
                      Career
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={mobileNavLinkClasses}>
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
