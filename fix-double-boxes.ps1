# PowerShell script to remove double box wrappers from converter pages
$appPath = "c:\Users\Rajeev\Desktop\unit-conversion\app"
$files = Get-ChildItem -Path $appPath -Recurse -Filter "*.tsx"
$fixed = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    # Pattern 1: bg-white wrapper with ConverterCard
    $content = $content -replace '<div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">\s*<ConverterCard', '<div className="max-w-2xl mx-auto">`r`n              <ConverterCard'
    
    if ($original -ne $content) {
        Set-Content $file.FullName -Value $content -NoNewline
        Write-Host "Fixed: $($file.FullName)"
        $fixed++
    }
}

Write-Host "`nTotal files fixed: $fixed"
