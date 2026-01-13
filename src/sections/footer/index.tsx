"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="bg-[#253E93] text-white">
      {/* Upper Section - Main Footer Content */}
      <div className="py-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 items-start">
            {/* Rumsan (About Section) */}
            <div className="lg:col-span-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/rumsan-logo-wht.png"
                  alt="RUMSAN"
                  width={160}
                  height={100}
                />
              </div>
              <div className="space-y-4 mt-0">
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  Rumsan is an impact innovation company that uses blockchain
                  and AI to support governments, impact companies and
                  dev/humanitarian sectors bridge yesterday&apos;s problems with
                  tomorrow&apos;s solutions.
                </p>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4 lg:pt-[64px]">
              <h5 className="text-sm font-semibold mb-3">Company</h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impact"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Impact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            {/* <div className="space-y-4 lg:pt-[64px]">
              <h5 className="text-sm font-semibold mb-3">Resources</h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/research"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/publications"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Publications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* Our Policies */}
            <div className="space-y-4 lg:pt-[64px]">
              <h5 className="text-sm font-semibold mb-3">Our Policies</h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://docs.google.com/document/d/1pWc5apsDdVDQvQXIaIMckGXfQo4YHs5ZoXMrKxIvdNQ/edit?usp=sharing"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.google.com/document/d/1EbiUnsohBLlIn_1z5rThNLOdsh06jKzARlAVsW8YeX0/edit?usp=sharing"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                  >
                    Modern Slavery
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.google.com/document/d/1s_ipHs-TbfuPmjcyydwBkfP6lNfw4vr_UB3zQuZMa2o/edit?usp=sharing"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                  >
                    Environmental Sustainability Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.google.com/document/d/1Qrz95R6XmchahCvgM5q2gzqSt0MjUKUjM3b-vCbCDUU/edit?usp=sharing"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                  >
                    Bribery Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.google.com/document/d/1cZGhSOxZpet62NuwnAq6m9bnl2gs5Vzg/edit?usp=sharing&ouid=113570786266797111417&rtpof=true&sd=true"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                  >
                    Child Protection and Vulnerable Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.google.com/document/d/1f1CQAgWqqyoqCPxeMa8LKAdtnr7B5jTyNFdACXyCYVM/edit?usp=sharing"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                  >
                    Whistleblowing and Incident Reporting
                  </Link>
                </li>
              </ul>
            </div>

            {/* SDG Compliances */}
            <div className="space-y-4 lg:pt-[64px]">
              <h5 className="text-sm font-semibold mb-3">SDG Compliances</h5>
              <div className="flex flex-wrap gap-1">
                {/* SDG 1 - No Poverty */}
                <Image
                  src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/sdc-compliances-rahat-01.jpg"
                  alt="SDG 1 - No Poverty"
                  width={96}
                  height={96}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover shadow-lg"
                />

                {/* SDG 5 - Gender Equality */}
                <Image
                  src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/sdc-compliances-rahat-05.jpg"
                  alt="SDG 5 - Gender Equality"
                  width={96}
                  height={96}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover shadow-lg"
                />

                {/* SDG 9 - Industry, Innovation and Infrastructure */}
                <Image
                  src="https://assets.rumsan.net/rumsan-group/sdg-9-rahat.jpg"
                  alt="SDG 9 - Industry, Innovation and Infrastructure"
                  width={96}
                  height={96}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Lower Section - Social Media */}
      <div className="border-t bg-[#20357E] border-gray-700/50">
        <div className="py-8">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm md:text-base text-gray-300 text-center md:text-left">
                Stay connected with us on social media for updates, tips, and
                community highlights:
              </p>
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <Link
                  href="https://linkedin.com/company/rumsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1a1f3a] border-2 border-white/20 rounded-md flex items-center justify-center hover:bg-white hover:text-[#1a1f3a] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>

                {/* Medium */}
                <Link
                  href="https://medium.com/@rumsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1a1f3a] border-2 border-white/20 rounded-md flex items-center justify-center hover:bg-white hover:text-[#1a1f3a] transition-all duration-300"
                  aria-label="Medium"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.77A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.77A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </Link>

                {/* YouTube */}
                <Link
                  href="https://youtube.com/@rumsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1a1f3a] border-2 border-white/20 rounded-md flex items-center justify-center hover:bg-white hover:text-[#1a1f3a] transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
