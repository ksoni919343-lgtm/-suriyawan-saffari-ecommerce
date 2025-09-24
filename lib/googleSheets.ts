import { google } from 'googleapis';

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SHEETS_API_KEY!,
  key: process.env.GOOGLE_SHEETS_API_KEY!.split('\n').join('\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const googleSheets = google.sheets({ version: 'v4', auth });
