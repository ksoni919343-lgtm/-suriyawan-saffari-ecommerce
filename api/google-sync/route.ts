import { NextResponse } from 'next/server';
import { googleSheets } from '@/lib/googleSheets';

export async function POST(req: Request) {
  const { sheetId, data } = await req.json();

  try {
    const response = await googleSheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'A:A',
      valueInputOption: 'RAW',
      requestBody: {
        values: [data],
      },
    });
    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 });
  }
}
