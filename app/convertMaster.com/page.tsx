import { Metadata } from 'next';
import ConvertMasterClient from './ConvertMasterClient';

export const metadata: Metadata = {
  title: 'ConvertMaster.com – Free Online Tools | Unit, Image, Video, PDF & More',
  description: 'Free online tools for all your needs. Unit converters, image tools, video tools, PDF tools, and utilities. Fast, accurate, and easy to use.',
  openGraph: {
    title: 'ConvertMaster.com – Free Online Tools',
    description: 'Unit converters, image tools, video tools, PDF tools, and utilities.',
    type: 'website',
  },
};

export default function ConvertMasterPage() {
  return <ConvertMasterClient />;
}
