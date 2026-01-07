"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  List,
  ArrowLeft,
  Upload,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Job } from "@/src/lib/data/jobs";
import axios from "axios";
import {
  applicationFormSchema,
  ApplicationFormData,
} from "@/src/lib/validations/job-application-form";

interface JobDetailSectionProps {
  job: Job;
}

export default function JobDetailSection({ job }: JobDetailSectionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [submitStatus, setSubmitStatus] = useState<{
    ok: boolean;
    msg: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const onSubmit = async (data: ApplicationFormData) => {
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Check if resume is uploaded
      if (!resumeFile) {
        setIsLoading(false);
        setSubmitStatus({
          ok: false,
          msg: "Resume upload is required.",
        });
        return;
      }

      // Upload resume to Google Drive
      const resumeUploadResult = await handleFileUpload(resumeFile);
      if (resumeUploadResult?.error || !resumeUploadResult?.success) {
        throw new Error("Resume upload to Google Drive failed");
      }

      // Upload cover letter if provided
      let coverLetterUploadResult = null;
      if (coverLetterFile) {
        coverLetterUploadResult = await handleFileUpload(coverLetterFile);
        if (
          coverLetterUploadResult?.error ||
          !coverLetterUploadResult?.success
        ) {
          throw new Error("Cover letter upload to Google Drive failed");
        }
      }

      // Prepare form data with Drive URLs
      const formData = {
        ...data,
        jobTitle: job.title,
        jobId: job.id,
        resumeFileName: resumeUploadResult.fileName,
        resumeFileUrl: resumeUploadResult.fileUrl,
        resumeFileId: resumeUploadResult.fileId,
        ...(coverLetterUploadResult && {
          coverLetterFileName: coverLetterUploadResult.fileName,
          coverLetterFileUrl: coverLetterUploadResult.fileUrl,
          coverLetterFileId: coverLetterUploadResult.fileId,
        }),
        formName: "jobApplication",
      };

      const response = await axios.post("/api/form", formData);
      setIsLoading(false);
      setSubmitStatus({
        ok: true,
        msg: response.data.message || "Application submitted successfully!",
      });
      reset();
      setResumeFile(null);
      setCoverLetterFile(null);
    } catch (err) {
      setIsLoading(false);
      const errorMessage =
        err instanceof Error && err.message.includes("Google Drive")
          ? err.message
          : axios.isAxiosError(err) && err.response?.data?.error
          ? err.response.data.error
          : "Failed to submit application. Please try again.";
      setSubmitStatus({
        ok: false,
        msg: errorMessage,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleCoverLetterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverLetterFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Upload Error:", error);
      return null;
    }
  };

  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-12">
          {/* Left Section - Job Description */}
          <div>
            {/* Go Back Link */}
            <Link
              href="/career"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#4252FF] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </Link>

            {/* Job Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              {job.title}
            </h3>

            {/* Job Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2 text-base text-gray-600">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>Posted date: {job.postedDate}</span>
              </div>
              <div className="flex items-center gap-2 text-base text-gray-600">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>Application Deadline: {job.deadline}</span>
              </div>
              <div className="flex items-center gap-2 text-base text-gray-600">
                <Clock className="w-5 h-5 text-gray-400" />
                <span>Job Type: {job.jobType}</span>
              </div>
              <div className="flex items-center gap-2 text-base text-gray-600">
                <List className="w-5 h-5 text-gray-400" />
                <span>Post Opening: {job.postOpening}</span>
              </div>
            </div>

            {/* About the role */}
            <div className="mb-8">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                About the role
              </h4>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {job.aboutTheRole}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Responsibilities
              </h4>
              <ul className="space-y-2 ml-6">
                {job.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base md:text-lg text-gray-700 leading-relaxed"
                  >
                    <span className="text-gray-900 text-xl font-bold mt-1">
                      •
                    </span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Qualifications */}
            <div className="mb-8">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Required Qualifications
              </h4>
              <ul className="space-y-2 ml-6">
                {job.requiredQualifications.map((qualification, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base md:text-lg text-gray-700 leading-relaxed"
                  >
                    <span className="text-gray-900 text-xl font-bold mt-1">
                      •
                    </span>
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Offer */}
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What We Offer
              </h4>
              <ul className="space-y-2 ml-6">
                {job.whatWeOffer.map((offer, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base md:text-lg text-gray-700 leading-relaxed"
                  >
                    <span className="text-gray-900 text-xl font-bold mt-1">
                      •
                    </span>
                    <span>{offer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Application Form */}
          <div className="lg:ml-auto lg:max-w-lg sticky top-20 self-start">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-5 md:p-6">
              <h4 className="text-xl md:text-2xl text-center font-bold text-gray-900 mb-2">
                Apply Here
              </h4>
              <br />
              <p className="text-sm md:text-base text-gray-700 mb-5">
                Fill the details below to apply. Someone from our team will
                reach you shortly.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-70 mb-1.5"
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName")}
                    className={`w-full px-3 py-2.5 bg-white text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4252FF] focus:border-transparent transition-colors ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your Full Name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`w-full px-3 py-2.5 bg-white text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4252FF] focus:border-transparent transition-colors ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    {...register("message")}
                    className={`w-full px-3 py-2.5 bg-white text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4252FF] focus:border-transparent transition-colors resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your Message"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Upload Cover Letter
                  </label>
                  <label className="flex items-center bg-white justify-center gap-2 px-3 py-2.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <Upload className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700 font-medium">
                      {coverLetterFile
                        ? coverLetterFile.name
                        : "Upload Cover Letter"}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleCoverLetterChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Upload Resume */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Upload Resume
                  </label>
                  <label className="flex items-center bg-white justify-center gap-2 px-3 py-2.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <Upload className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700 font-medium">
                      {resumeFile ? resumeFile.name : "Upload Resume"}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#4252FF] to-purple-600 hover:from-[#4252FF]/90 hover:to-purple-600/90 text-white font-semibold py-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                >
                  {isLoading ? (
                    "Submitting..."
                  ) : (
                    <>
                      Apply Now
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>

                {/* Status Message */}
                {submitStatus && (
                  <p
                    className={`text-sm font-medium ${
                      submitStatus.ok ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {submitStatus.msg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
