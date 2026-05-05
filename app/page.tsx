import { redirect } from 'next/navigation';

export const metadata = {
  title: 'ConvertMaster – Free Unit Converter | Length, Weight, Temperature & More',
  description: 'Free online unit converter for metric, imperial, and local units. Convert length, weight, temperature, area, volume, time, speed, and more instantly.',
};

export default function Page() {
  redirect('/all-converters/');
}