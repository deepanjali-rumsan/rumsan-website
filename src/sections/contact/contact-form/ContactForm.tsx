"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Users, Building, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8">
          {/* Left Card - Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl border p-6 md:p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="w-6 h-6 text-[#3A4FEA]" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-[#3A4FEA]">
                Get In Touch With Us
              </h4>
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              Reach out to us for questions, ideas, or collaboration.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
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
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4FEA] focus:border-transparent transition-colors ${
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
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4FEA] focus:border-transparent transition-colors ${
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
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4FEA] focus:border-transparent transition-colors resize-none ${
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
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3A4FEA]"></div>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading || serverState.submitting}
                className=" bg-[#3A4FEA] hover:bg-[#3A4FEA]/90 text-white font-semibold py-6 w-30 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
          <div className="bg-gray-900 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden flex flex-col">
            {/* Background Image Overlay */}
            <div
              className="absolute inset-0 opacity-50 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://assets.rumsan.net/rahat/dsc-1799.jpg')",
              }}
            />

            <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-6">
                <h4 className="text-2xl md:text-3xl font-bold text-white">
                  Visit Our Office For More Details
                </h4>
              </div>
              <p className="text-base md:text-lg text-white/90 mb-6">
                Reach out to us for questions, ideas, or collaboration.
              </p>

              {/* Contact Details */}
              <div className="space-y-2 mb-6">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-lg mt-1">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="text-base md:text-lg">
                      Kupondole-10, Lalitpur, Nepal
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-lg mt-1">
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

              {/* Join Us Section - Glassmorphic Card */}
              <div className="mt-auto relative">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 md:p-5 border border-white/20 flex items-center justify-between gap-10">
                  <p className="text-white text-sm md:text-base font-medium">
                    Join us in building technology that empowers people,
                    strengthens systems, and shapes the future.
                  </p>
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-transparent border-2 border-white text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
                    Join us
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
