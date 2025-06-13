#!/bin/bash

cd /home/ec2-user/task-manager/backend

# Stop any existing Node.js app
pkill node || true

# Pull latest changes from GitHub
git pull origin main

# Install backend dependencies
npm install

# Start the app in background
nohup node index.js > app.log 2>&1 &
