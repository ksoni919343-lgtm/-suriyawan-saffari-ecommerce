export function calculateSalary(hours: number): number {
  return hours * 10;
}

export function generateQRCode(text: string): string {
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
}
