"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Users, Building, MapPin, Phone, Mail } from "lucide-react";
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
    defaultValues: {
      contactName: "",
      contactEmail: "",
      contactMessage: "",
    },
  });

  // Clear status message after 5 seconds
  useEffect(() => {
    if (serverState.status) {
      const timer = setTimeout(() => {
        setServerState((prev) => ({ ...prev, status: null }));
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [serverState.status]);

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
      handleServerResponse(
        true,
        response.data.message || "Thanks! for being with us"
      );
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
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Card - Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl border p-8 md:p-10 lg:p-12 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="w-6 h-6 text-[#4252FF]" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-[#4252FF]">
                Get In Touch With Us
              </h4>
            </div>
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
                    errors.contactName ? "border-red-500" : "border-gray-300"
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
                    errors.contactEmail ? "border-red-500" : "border-gray-300"
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
                  rows={2}
                  {...register("contactMessage")}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4252FF] focus:border-transparent transition-colors resize-none ${
                    errors.contactMessage ? "border-red-500" : "border-gray-300"
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
                className=" bg-[#4252FF] hover:bg-[#4252FF]/90 text-white font-semibold py-6 w-30 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Submit"}
              </Button>

              {serverState.status && (
                <p
                  className={`mt-4 text-sm font-medium ${
                    !serverState.status.ok ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {serverState.status.msg}
                </p>
              )}
            </form>
          </div>

          {/* Right Card - Rumsan Office */}
          <div className="bg-gray-900 rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
            {/* Background Image Overlay */}
            <div
              className="absolute inset-0 opacity-50 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://assets.rumsan.net/rahat/dsc-1799.jpg')",
              }}
            />

            <div className="relative z-10">
              {/* Title with Building Icon */}
              <div className="flex items-center gap-3 mb-8">
                <Building className="w-6 h-6 text-white" />
                <h4 className="text-2xl md:text-3xl font-bold text-white">
                  Rumsan Office
                </h4>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-lg mt-1">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="text-base md:text-lg">
                      Kupondole-10, Lalitpur
                    </p>
                    <p className="text-base md:text-lg">Nepal</p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-lg ">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white space-y-1">
                    <p className="text-base md:text-lg">+977-980 110 9681</p>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white space-y-1">
                    <p className="text-base md:text-lg">team@rumsan.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
