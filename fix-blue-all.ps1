# Fix all blue gradient backgrounds in converter pages
Get-ChildItem -Path 'c:\Users\Rajeev\Desktop\unit-conversion\app' -Recurse -Filter '*.tsx' | ForEach-Object {
    $file = $_
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    # Replace blue gradient with gray background
    $content = $content -replace 'bg-gradient-to-r from-blue-600 to-indigo-600 py-16', 'bg-gray-100 dark:bg-gray-800 py-16'
    
    # Replace text colors
    $content = $content -replace 'className="text-4xl md:text-5xl font-bold mb-6 text-white"', 'className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"'
    $content = $content -replace 'className="text-xl md:text-2xl mb-8 text-blue-100"', 'className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300"'
    
    # Fix any literal r`n text
    $content = $content -replace '``r``n', "`r`n"
    
    if ($original -ne $content) {
        Set-Content $file.FullName -Value $content -NoNewline
        Write-Host "Fixed: $($file.Name)"
    }
}
Write-Host "Done!"
