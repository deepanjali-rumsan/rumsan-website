import { google } from "googleapis";
import formidable, { Fields, Files } from "formidable";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

interface UploadResponse {
  success: boolean;
  fileId?: string;
  fileUrl?: string;
  error?: string;
  details?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UploadResponse | { error: string }>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const form = formidable({ keepExtensions: true });

  let fields: Fields;
  let files: Files;
  try {
    [fields, files] = await form.parse(req);
  } catch (err) {
    console.error("Form parse error:", err);
    return res.status(400).json({ error: "Invalid form data" });
  }

  if (!files?.file?.[0]) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const uploadedFile = files.file[0];

  // Google Auth
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/drive.file"],
  });

  const drive = google.drive({ version: "v3", auth });

  const fileMetadata = {
    name: uploadedFile.originalFilename || "uploaded_file",
    parents: [process.env.GOOGLE_DRIVE_FOLDER_ID as string],
  };
  const media = {
    mimeType: uploadedFile.mimetype as string,
    body: fs.createReadStream(uploadedFile.filepath),
  };

  try {
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media,
      fields: "id",
    });

    fs.unlinkSync(uploadedFile.filepath);

    return res.status(200).json({
      success: true,
      fileId: response.data.id as string,
      fileUrl: `https://drive.google.com/file/d/${response.data.id}/view`,
    });
  } catch (error) {
    console.error("Google Drive upload error:", error);

    return res.status(500).json({
      success: false,
      error: "Google Drive upload failed",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
