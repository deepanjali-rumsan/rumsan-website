import { NextRequest, NextResponse } from "next/server";
import { contactForm } from "@/src/utils/mailer";
import { contactFormSchema } from "@/src/lib/validations/contact-form";
import { jobApplicationSchema } from "@/src/lib/validations/job-application-form";
import { saveJobApplicationToSheet } from "@/src/utils/save-to-sheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (body.formName === "jobApplication") {
      const validationResult = jobApplicationSchema.safeParse(body);

      if (!validationResult.success) {
        const firstError = validationResult.error.issues[0];
        return NextResponse.json(
          { error: firstError.message },
          { status: 400 }
        );
      }

      const {
        fullName,
        email,
        message,
        jobTitle,
        resumeFileUrl,
        coverLetterFileUrl,
      } = validationResult.data;

      const payload = {
        contactName: fullName,
        contactEmail: email,
        contactMessage: `Job Application for: ${
          jobTitle || "Unknown Position"
        }\n\nMessage: ${message}\n\nResume: ${
          resumeFileUrl || "Not provided"
        }\n\nCover Letter: ${coverLetterFileUrl || "Not provided"}`,
        isJobApplication: true,
        jobTitle: jobTitle,
      };

      // Save to Google Sheets
      await saveJobApplicationToSheet({
        fullName,
        email,
        jobTitle,
        message,
        resumeFileUrl,
        coverLetterFileUrl,
      });

      // Send email notification
      await contactForm(payload);

      return NextResponse.json(
        { message: "Your job application has been submitted successfully!" },
        { status: 200 }
      );
    } else {
      // Handle contact form
      const validationResult = contactFormSchema.safeParse(body);

      if (!validationResult.success) {
        const firstError = validationResult.error.issues[0];
        return NextResponse.json(
          { error: firstError.message },
          { status: 400 }
        );
      }

      const { contactName, contactEmail, contactMessage } =
        validationResult.data;

      // Prepare payload for mailer
      const payload = {
        contactName,
        contactEmail,
        contactMessage,
      };

      await contactForm(payload);

      return NextResponse.json(
        { message: "Your Application Has Been Successfully Sent!" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
