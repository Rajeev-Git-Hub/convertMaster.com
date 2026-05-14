# Find all affected files
$affectedFiles = Get-ChildItem -Path "c:\Users\Rajeev\Desktop\unit-conversion\app" -Recurse -Filter "page.tsx" | Where-Object { (Get-Content $_.FullName -Raw) -match "100`% Accurate" }

Write-Host "Total files to update: $($affectedFiles.Count)" -ForegroundColor Yellow

# Define patterns as here-strings - include the comment line before
$oldPattern = @'
        {/* Trust Indicators */}
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
        </section>
'@

$newPattern = @'
        {/* Trust Indicators */}
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
        </section>
'@

# Perform replacements
$replacedCount = 0
$failedFiles = @()

foreach ($file in $affectedFiles) {
    try {
        $content = Get-Content $file.FullName -Raw
        if ($content.Contains($oldPattern)) {
            $newContent = $content.Replace($oldPattern, $newPattern)
            Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8 -NoNewline
            $replacedCount++
            Write-Host "Success: $($file.Name)" -ForegroundColor Green
        }
    } catch {
        $failedFiles += $file.FullName
        Write-Host "Error: $($file.Name)" -ForegroundColor Red
    }
}

Write-Host "`nReplacement Complete!" -ForegroundColor Cyan
Write-Host "Files updated: $replacedCount" -ForegroundColor Green
if ($failedFiles.Count -gt 0) {
    Write-Host "Failed: $($failedFiles.Count)" -ForegroundColor Red
}
