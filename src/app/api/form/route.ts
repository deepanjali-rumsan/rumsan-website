import { NextRequest, NextResponse } from "next/server";
import { contactForm } from "@/src/utils/mailer";
import { contactFormSchema } from "@/src/lib/validations/contact-form";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0];
      return NextResponse.json(
        { error: firstError.message },
        { status: 400 }
      );
    }

    const { contactName, contactEmail, contactMessage } = validationResult.data;

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
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

