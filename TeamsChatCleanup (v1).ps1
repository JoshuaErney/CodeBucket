# PowerShell Script to Delete Contents of Microsoft Teams Chat Files Folder and List Them

# Get the current user's profile path
$userProfile = [System.Environment]::GetFolderPath('UserProfile')
$teamsChatPath = Join-Path $userProfile "\Microsoft Teams Chat Files"
$deletedItemsPath = Join-Path $userProfile "Downloads\Deleted - Team's Chat Files"
$logFilePath = Join-Path $deletedItemsPath "DeletionLog.txt"

# Function to write to log file
function Write-Log {
    param ([string]$message)
    Add-Content -Path $logFilePath -Value $message
}

# Check if the Teams Chat Files folder exists
if (Test-Path -Path $teamsChatPath) {
    # Get all items in the folder
    $items = Get-ChildItem -Path $teamsChatPath

    # Check if there are items to delete
    if ($items.Count -gt 0) {
        Write-Host "Found $($items.Count) item(s) in the folder:"
        
        # List each item
        foreach ($item in $items) {
            Write-Host " - $($item.Name)"
        }

        $response = Read-Host "Do you want to remove these items? (Y/N)"
        
        if ($response -eq 'Y') {
            # Ensure the Deleted Items folder exists
            if (-not (Test-Path -Path $deletedItemsPath)) {
                New-Item -Path $deletedItemsPath -ItemType Directory
            }

            # Move items to Deleted Items folder and write to log
            foreach ($item in $items) {
                $destPath = Join-Path $deletedItemsPath $item.Name
                Move-Item -Path $item.FullName -Destination $destPath
                Write-Log "Moved: $($item.FullName)"
            }

            Write-Host "All items have been moved to 'Deleted - Team's Chat Files' folder."
            Write-Host "Log file created at $logFilePath."
        }
        else {
            Write-Host "Operation cancelled by user."
        }
    }
    else {
        Write-Host "No files or folders found in $teamsChatPath."
    }
}
else {
    Write-Host "Error: The folder '$teamsChatPath' does not exist."
}
