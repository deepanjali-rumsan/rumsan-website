"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/src/lib/validations/contact-form";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverState, setServerState] = useState<{
    submitting: boolean;
    status: { ok: boolean; msg: string } | null;
  }>({
    submitting: false,
    status: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      reset();
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setServerState({ submitting: true, status: null });

    const formData = { ...data, formName: "contactForm" };

    try {
      const response = await axios.post("/api/form", formData);
      setIsLoading(false);
      handleServerResponse(true, response.data.message || "Thanks! for being with us");
    } catch (err) {
      setIsLoading(false);
      const errorMessage =
        axios.isAxiosError(err) && err.response?.data?.error
          ? err.response.data.error
          : "Failed to send message. Please try again.";
      handleServerResponse(false, errorMessage);
    }
  };

  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Card - Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get In Touch With Us
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              We&apos;re here to support you and accelerate your digital
              innovation. Whether you want to kick off a new project, explore
              collaboration, or simply ask a question, we&apos;re just a message
              away.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="contactName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  {...register("contactName")}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4252FF] focus:border-transparent transition-colors ${
                    errors.contactName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.contactName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.contactName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  {...register("contactEmail")}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4252FF] focus:border-transparent transition-colors ${
                    errors.contactEmail
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.contactEmail && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.contactEmail.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contactMessage"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="contactMessage"
                  rows={6}
                  {...register("contactMessage")}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4252FF] focus:border-transparent transition-colors resize-none ${
                    errors.contactMessage
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your message"
                />
                {errors.contactMessage && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.contactMessage.message}
                  </p>
                )}
              </div>

              {isLoading && (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4252FF]"></div>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading || serverState.submitting}
                className="w-full bg-[#4252FF] hover:bg-[#4252FF]/90 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>

              {serverState.status && (
                <p
                  className={`mt-4 text-sm font-medium ${
                    !serverState.status.ok
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {serverState.status.msg}
                </p>
              )}
            </form>
          </div>

          {/* Right Card - More Ways to Connect */}
          <div className="bg-gray-900 rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
            {/* Background Image Overlay */}
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                More Ways to Connect
              </h2>

              <div className="space-y-8">
                {/* For Careers */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    For Careers
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                    We regularly post new openings. If you don&apos;t find the
                    right role today, send us your profile we&apos;ll connect
                    when a suitable opportunity arises.
                  </p>
                  <a
                    href="/career"
                    className="inline-flex items-center text-[#4252FF] font-semibold hover:text-[#4252FF]/80 transition-colors"
                  >
                    Apply Here
                    <span className="ml-2">→</span>
                  </a>
                </div>

                {/* Fellowship */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Fellowship
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                    We conduct blockchain fellowships twice a year. Check our
                    fellowship page and get in touch if you&apos;re interested
                    in joining eSatya&apos;s Blockchain Fellowship.
                  </p>
                  <a
                    href="https://esatya.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#4252FF] font-semibold hover:text-[#4252FF]/80 transition-colors"
                  >
                    Apply Here
                    <span className="ml-2">→</span>
                  </a>
                </div>

                {/* Organize Blood donation */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Organize Blood donation?
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                    We care about the communities we serve. Through our blood
                    donation campaigns, we help connect donors, volunteers,
                    and organizers to support life saving needs.
                  </p>
                  <a
                    href="/hamro-lifebank"
                    className="inline-flex items-center text-[#4252FF] font-semibold hover:text-[#4252FF]/80 transition-colors"
                  >
                    Explore how you can get involved
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


