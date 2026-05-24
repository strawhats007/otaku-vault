#!/bin/bash

# Navigate to the root directory of the project
cd "$(dirname "$0")"

echo "=================================================="
echo "👀 Starting File Change Watcher for Antigravity..."
echo "=================================================="

# Loop indefinitely to poll for changes
while true; do
    # Check git status for unstaged, staged, or untracked changes,
    # ignoring the watcher script and log files.
    CHANGES=$(git status --porcelain | grep -v "watch_deploy.sh")
    
    if [ ! -z "$CHANGES" ]; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] 📢 Detected file modifications:"
        echo "$CHANGES"
        echo "🔄 Automatically running deploy.sh in the background..."
        
        # Run deploy.sh with null input to trigger the auto-commit path
        ./deploy.sh </dev/null
        
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ Auto-deployment complete. Resuming watch..."
        echo "=================================================="
    fi
    
    # Wait for 3 seconds before the next poll to minimize CPU usage
    sleep 3
done
