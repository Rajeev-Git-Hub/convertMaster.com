# PowerShell script to update all converter pages
$ErrorActionPreference = "Continue"

$appDir = "c:\Users\Rajeev\Desktop\unit-conversion\app"
$directories = Get-ChildItem -Path $appDir -Directory | Where-Object { 
    $_.Name -match '.+-to-.+' -and $_.Name -notmatch 'blog'
}

Write-Host "Found $($directories.Count) converter directories" -ForegroundColor Green

$updated = 0
$skipped = 0
$errors = @()

foreach ($dir in $directories) {
    $pagePath = Join-Path $dir.FullName "page.tsx"
    
    if (-not (Test-Path $pagePath)) {
        Write-Host "Skipping $($dir.Name) - no page.tsx found" -ForegroundColor Yellow
        $skipped++
        continue
    }
    
    try {
        # Read existing content
        $content = Get-Content -Path $pagePath -Raw -ErrorAction Stop
        
        # Extract metadata using regex
        $titleMatch = [regex]::Match($content, 'title:\s*["''](.+?)["'']')
        $descMatch = [regex]::Match($content, 'description:\s*["''](.+?)["'']')
        $categoryMatch = [regex]::Match($content, 'category:\s*["''](.+?)["'']')
        $fromMatch = [regex]::Match($content, 'defaultFrom:\s*["''](.+?)["'']')
        $toMatch = [regex]::Match($content, 'defaultFrom:\s*["''](.+?)["''].+?defaultTo:\s*["''](.+?)["'']')
        
        # Try alternative pattern for defaultTo
        $toMatch2 = [regex]::Match($content, 'defaultTo:\s*["''](.+?)["'']')
        
        $title = if ($titleMatch.Success) { $titleMatch.Groups[1].Value } else { $dir.Name -replace '-', ' ' -replace '\b\w', { $_.Value.ToUpper() } }
        $description = if ($descMatch.Success) { $descMatch.Groups[1].Value } else { "Convert $($dir.Name -replace '-', ' ') instantly" }
        $category = if ($categoryMatch.Success) { $categoryMatch.Groups[1].Value } else { "length" }
        $fromUnit = if ($fromMatch.Success) { $fromMatch.Groups[1].Value } else { ($dir.Name -split '-to-')[0] }
        $toUnit = if ($toMatch.Success) { $toMatch.Groups[2].Value } elseif ($toMatch2.Success) { $toMatch2.Groups[1].Value } else { ($dir.Name -split '-to-')[1] }
        
        # Determine category path
        $categoryPath = switch ($category) {
            "length" { "length-converter" }
            "weight" { "weight-converter" }
            "temperature" { "temperature-converter" }
            "data" { "data-converter" }
            "speed" { "speed-converter" }
            "time" { "time-converter" }
            "area" { "area-converter" }
            "volume" { "volume-converter" }
            "pressure" { "pressure-converter" }
            "energy" { "energy-converter" }
            "power" { "power-converter" }
            "angle" { "angle-converter" }
            "number" { "number-converter" }
            default { "$category-converter" }
        }
        
        # Capitalize labels
        $fromLabel = (Get-Culture).TextInfo.ToTitleCase($fromUnit.ToLower())
        $toLabel = (Get-Culture).TextInfo.ToTitleCase($toUnit.ToLower())
        
        # Generate new content
        $newContent = @"
import { Metadata } from 'next';
import Link from 'next/link';
import ConverterCard from '../../components/ConverterCard';
import { FiArrowRight, FiMaximize } from 'react-icons/fi';

export const metadata: Metadata = {
  title: '$title',
  description: '$description',
  openGraph: {
    title: '$title',
    description: '$description',
    type: 'website',
  },
};

export default function ConverterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-gradient text-4xl font-bold mb-4">$title</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            $description
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
            <ConverterCard category="$category" defaultFrom="$fromUnit" defaultTo="$toUnit" />
          </div>
        </section>

        {/* Conversion Examples */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Common Conversions</h3>
            <p className="section-subtitle">Quick reference for $fromLabel to $toLabel conversions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary">
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">$fromLabel to $toLabel</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 $fromUnit = ? $toUnit</li>
                <li>10 $fromUnit = ? $toUnit</li>
                <li>100 $fromUnit = ? $toUnit</li>
                <li>1000 $fromUnit = ? $toUnit</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#10b981' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">$toLabel to $fromLabel</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1 $toUnit = ? $fromUnit</li>
                <li>10 $toUnit = ? $fromUnit</li>
                <li>100 $toUnit = ? $fromUnit</li>
                <li>1000 $toUnit = ? $fromUnit</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-primary" style={{ background: '#8b5cf6' }}>
                  <FiMaximize className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Large Conversions</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>100 $fromUnit = ? $toUnit</li>
                <li>500 $fromUnit = ? $toUnit</li>
                <li>1000 $fromUnit = ? $toUnit</li>
                <li>5000 $fromUnit = ? $toUnit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Guide */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">How to Convert</h3>
            <p className="section-subtitle">Simple steps to convert $fromLabel to $toLabel</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Value</h4>
              <p className="text-sm text-gray-600">Type the number of $fromLabel you want to convert</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#10b981' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Units</h4>
              <p className="text-sm text-gray-600">Choose $fromLabel as input and $toLabel as output</p>
            </div>
            <div className="card p-6 text-center group">
              <div className="icon-box icon-box-primary mb-4 mx-auto" style={{ background: '#8b5cf6' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Get Result</h4>
              <p className="text-sm text-gray-600">Click convert to see your result instantly</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Common questions about $fromLabel to $toLabel conversions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How do I convert $fromLabel to $toLabel?</h4>
              <p className="text-sm text-gray-600">Use our converter tool above. Simply enter the value, select the units, and click convert.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What is the conversion formula?</h4>
              <p className="text-sm text-gray-600">The conversion depends on the specific units. Our calculator handles all the math for you automatically.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Is this conversion accurate?</h4>
              <p className="text-sm text-gray-600">Yes, all conversions use standard conversion factors and provide accurate results.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-border p-8">
            <h3 className="section-title mb-4">Ready to Convert More Units?</h3>
            <p className="section-subtitle mb-8">
              Explore our other $category conversion tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/$categoryPath/"
                className="btn btn-primary"
              >
                <span>All $([System.Globalization.CultureInfo]::CurrentCulture.TextInfo.ToTitleCase($category)) Converters</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
"@
        
        # Write new content
        Set-Content -Path $pagePath -Value $newContent -ErrorAction Stop
        
        Write-Host "✓ Updated $($dir.Name)" -ForegroundColor Green
        $updated++
    }
    catch {
        Write-Host "✗ Error updating $($dir.Name): $_" -ForegroundColor Red
        $errors += "$($dir.Name): $_"
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Update Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Updated: $updated pages" -ForegroundColor Green
Write-Host "Skipped: $skipped pages" -ForegroundColor Yellow
Write-Host "Errors: $($errors.Count)" -ForegroundColor Red

if ($errors.Count -gt 0) {
    Write-Host "`nErrors encountered:" -ForegroundColor Red
    $errors | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
}
