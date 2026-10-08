$port = 8000
$root = "C:\Users\Lenovo\.gemini\antigravity\scratch\servease"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "ServEase Local Web Server running at http://localhost:$port/"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $path = $request.Url.LocalPath
    if ($path -eq "/") { $path = "/index.html" }
    
    $filePath = Join-Path $root $path.Replace('/', '\')

    if (Test-Path $filePath -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        
        # Basic MIME types
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        switch ($ext) {
            ".html" { $response.ContentType = "text/html; charset=utf-8" }
            ".js"   { $response.ContentType = "application/javascript" }
            ".css"  { $response.ContentType = "text/css" }
            ".jpg"  { $response.ContentType = "image/jpeg" }
            ".png"  { $response.ContentType = "image/png" }
            ".svg"  { $response.ContentType = "image/svg+xml" }
            default { $response.ContentType = "application/octet-stream" }
        }

        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
    }
    $response.OutputStream.Close()
}
