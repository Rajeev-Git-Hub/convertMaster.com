import { Metadata } from 'next';
import AlternateCaseClient from './AlternateCaseClient';

export const metadata: Metadata = {
  title: 'Alternating Case Converter – aLtErNaTe TeXt OnLiNe',
  description: 'Free online alternating case converter. Create SpongeBob mocking text by alternating uppercase and lowercase letters. Perfect for memes and fun content.',
  keywords: 'alternating case, spongeBob case, mock text, alternate case, aLtErNaTe, mocking text generator',
  openGraph: {
    title: 'Alternating Case Converter – Free Online Tool',
    description: 'Create SpongeBob-style alternating case text instantly. Perfect for memes!',
    type: 'website',
  },
};

export default function AlternateCasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">aLtErNaTiNg CaSe CoNvErTeR</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Create playful, alternating uppercase and lowercase text. Famous as the SpongeBob mocking meme format. Perfect for adding humor and personality to your messages.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="card p-8">
              <AlternateCaseClient />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Popular Uses</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Memes</h4>
              <p className="text-sm text-gray-600">The iconic SpongeBob mocking text format for social media.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fun Messages</h4>
              <p className="text-sm text-gray-600">Add playful sarcasm or humor to chats and posts.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Creative Content</h4>
              <p className="text-sm text-gray-600">Stand out with unique, eye-catching text formatting.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is aLtErNaTe case?</h4>
              <p className="text-sm text-gray-600">Alternating case (also known as SpongeBob case or mocking text) alternates between lowercase and uppercase letters for every other character. It creates a playful, teasing effect that became famous through SpongeBob SquarePants memes.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why is it called SpongeBob case?</h4>
              <p className="text-sm text-gray-600">This text style became popular from a SpongeBob SquarePants meme where the character makes a mocking face while alternating letter cases. It is now widely used across social media to convey sarcasm or playful teasing.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Explore Other Case Converters</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/sentence-case/" className="btn btn-secondary">Sentence case</a>
              <a href="/upper-case/" className="btn btn-secondary">UPPER CASE</a>
              <a href="/lower-case/" className="btn btn-secondary">lower case</a>
              <a href="/title-case/" className="btn btn-secondary">Title Case</a>
              <a href="/toggle-case/" className="btn btn-secondary">tOGGLE</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
