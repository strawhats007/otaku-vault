#!/bin/bash

# Navigate to the root directory of the project
cd "$(dirname "$0")"

echo "=========================================="
# 1. Run git add .
echo "Staging all changes..."
git add .

# 2. Commit changes
echo "Committing changes..."
git commit -m "auto: update"

# 3. Push to origin main
echo "Pushing changes to remote main branch..."
git push origin main

echo "=========================================="
echo "Deployment Process Completed!"
echo "=========================================="
