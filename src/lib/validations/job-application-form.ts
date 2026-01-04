import { z } from "zod";

export const applicationFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const jobApplicationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  jobTitle: z.string().optional(),
  jobId: z.string().optional(),
  resumeFileName: z.string().optional(),
  resumeFileUrl: z.string().optional(),
  resumeFileId: z.string().optional(),
  coverLetterFileName: z.string().optional(),
  coverLetterFileUrl: z.string().optional(),
  coverLetterFileId: z.string().optional(),
  formName: z.string(),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
