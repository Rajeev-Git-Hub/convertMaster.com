import { Metadata } from 'next';
import CaseConverterPageContent from './CaseConverterPageContent';

export const metadata: Metadata = {
  title: 'Case Converter – Free Online Text Case Changer | Sentence, Upper, Lower, Toggle',
  description: 'Free online case converter tool. Convert text to Sentence case, UPPER CASE, lower case, First Letter, aLtErNaTe, and tOGGLE case instantly. Fast, accurate, and easy to use.',
  openGraph: {
    title: 'Case Converter – Free Online Text Case Changer',
    description: 'Convert text to Sentence case, UPPER CASE, lower case, First Letter, aLtErNaTe, and tOGGLE case instantly.',
    type: 'website',
  },
};

export default function CaseConverterPage() {
  return <CaseConverterPageContent />;
}
