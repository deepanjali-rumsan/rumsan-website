import { google } from "googleapis";

export async function saveJobApplicationToSheet(data: {
  fullName: string;
  email: string;
  jobTitle?: string;
  message: string;
  resumeFileUrl?: string;
  coverLetterFileUrl?: string;
}) {
  try {
    // Google Auth
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!privateKey || !process.env.GOOGLE_CLIENT_EMAIL) {
      throw new Error("Missing Google credentials");
    }

    if (!process.env.GOOGLE_SHEETS_ID) {
      throw new Error("Missing GOOGLE_SHEETS_ID in environment variables");
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: privateKey,
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    // Check if headers exist, if not create them
    const headerCheck = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A1:G1",
    });

    const hasHeaders =
      headerCheck.data.values && headerCheck.data.values.length > 0;

    if (!hasHeaders) {
      // Add headers
      const headers = [
        [
          "Timestamp",
          "Name",
          "Email",
          "Job Title",
          "Message",
          "Resume URL",
          "Cover Letter URL",
        ],
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: "Sheet1!A1:G1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: headers,
        },
      });

      console.log("Headers created in Google Sheet");
    }

    // Prepare row data
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
    });
    const rowData = [
      timestamp,
      data.fullName,
      data.email,
      data.jobTitle || "N/A",
      data.message,
      data.resumeFileUrl || "Not provided",
      data.coverLetterFileUrl || "Not provided",
    ];

    console.log("Attempting to save to Google Sheets:", {
      spreadsheetId,
      rowData,
    });

    // Append data to sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G", // Adjust sheet name if different
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });

    console.log("Google Sheets save successful:", response.data);

    return { success: true };
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    console.error(
      "Error details:",
      error instanceof Error ? error.message : error
    );
    throw error;
  }
}
