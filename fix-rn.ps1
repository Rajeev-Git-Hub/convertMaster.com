# Fix literal `r`n text in all files
Get-ChildItem -Path 'c:\Users\Rajeev\Desktop\unit-conversion\app' -Recurse -Filter '*.tsx' | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -like '*``r``n*') {
        $newContent = $content -replace '``r``n', "`r`n"
        Set-Content $_.FullName -Value $newContent -NoNewline
        Write-Host "Fixed: $($_.Name)"
    }
}
Write-Host "Done!"
