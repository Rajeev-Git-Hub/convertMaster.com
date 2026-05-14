import os
import re
from pathlib import Path

app_dir = Path("c:\\Users\\Rajeev\\Desktop\\unit-conversion\\app")

# Find all page.tsx files with "100% Accurate"
affected_files = []
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file == "page.tsx":
            filepath = Path(root) / file
            content = filepath.read_text(encoding='utf-8')
            if "100% Accurate" in content:
                affected_files.append(filepath)

print(f"Total files to update: {len(affected_files)}")

# Define the old and new patterns using regex
old_pattern = r'''        \{/\* Trust Indicators \*/\}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">100% Accurate</h4>
              <p className="text-xs text-gray-600 mt-1">Standard formulas</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Instant Results</h4>
              <p className="text-xs text-gray-600 mt-1">Real-time conversion</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Easy to Use</h4>
              <p className="text-xs text-gray-600 mt-1">Simple interface</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Always Available</h4>
              <p className="text-xs text-gray-600 mt-1">24/7 access</p>
            </div>
          </div>
        </section>'''

new_pattern = '''        {/* Trust Indicators */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-3xl">
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Instant Results</h4>
              <p className="text-xs text-gray-600 mt-1">Real-time conversion</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Easy to Use</h4>
              <p className="text-xs text-gray-600 mt-1">Simple interface</p>
            </div>
            <div className="card p-6 text-center">
              <FiCheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Always Available</h4>
              <p className="text-xs text-gray-600 mt-1">24/7 access</p>
            </div>
          </div>
        </section>'''

replaced_count = 0
failed_files = []

for filepath in affected_files:
    try:
        content = filepath.read_text(encoding='utf-8')
        if re.search(old_pattern, content):
            new_content = re.sub(old_pattern, new_pattern, content)
            filepath.write_text(new_content, encoding='utf-8')
            replaced_count += 1
            print(f"Success: {filepath.name}")
        else:
            # Try with normalized whitespace
            normalized_pattern = re.compile(r'(\s+)'.join(old_pattern.split()), re.MULTILINE | re.DOTALL)
            if normalized_pattern.search(content):
                new_content = normalized_pattern.sub(new_pattern, content)
                filepath.write_text(new_content, encoding='utf-8')
                replaced_count += 1
                print(f"Success (normalized): {filepath.name}")
    except Exception as e:
        failed_files.append((filepath.name, str(e)))
        print(f"Error: {filepath.name} - {e}")

print(f"\nReplacement Complete!")
print(f"Files updated: {replaced_count}")
if failed_files:
    print(f"Failed: {len(failed_files)}")
