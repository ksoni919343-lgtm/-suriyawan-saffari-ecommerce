import QRCode from 'qrcode';
import { Barcode } from 'barcode';

export function calculateSalary(deliveredCount: number) {
  return deliveredCount * 20; // Owner configurable via env
}

export async function generateQR(data: string) {
  return await QRCode.toDataURL(data);
}

export function generateBarcode(data: string) {
  return new Barcode(data).toSVG();
}
