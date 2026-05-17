import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { categories } from '../lib/categories';
import { useLocalization } from '../lib/LocalizationContext';

interface SearchDropdownProps {
  results: { category: string; name: string; href: string }[];
  onClose: () => void;
}

export default function SearchDropdown({ results, onClose }: SearchDropdownProps) {
  const { t } = useLocalization();

  return (
    <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-10">
      {results.length === 0 ? (
        <p className="p-4 text-gray-500 dark:text-gray-400">No converters found.</p>
      ) : (
        <ul>
          {results.map((c, index) => {
            const category = categories.find(cat => cat.key === c.category);
            if (!category) return null;
            return (
              <li key={`${c.category}-${c.name}-${index}`}>
                <Link
                  key={index}
                  href={c.href}
                  onClick={() => onClose()}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                    <FiSearch className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{c.name}</p>
                    <p className="text-sm text-gray-500">{c.category}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
