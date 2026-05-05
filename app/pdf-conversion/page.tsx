import { Metadata } from 'next';
import PDFConversionClient from './PDFConversionClient';

export const metadata: Metadata = {
  title: 'PDF Tools – Free Online PDF Converter & Editor',
  description: 'Free online PDF tools. Merge, split, compress, convert PDF to Word, Excel, JPG, and more. Easy to use, no registration required.',
  openGraph: {
    title: 'PDF Tools – Free Online PDF Converter & Editor',
    description: 'Merge, split, compress, convert PDFs easily online.',
    type: 'website',
  },
};

export default function PDFConversionPage() {
  return <PDFConversionClient />;
}
