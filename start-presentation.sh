#!/bin/bash
# Quick start script for the ArcellAI presentation

echo "Starting ArcellAI Presentation Server..."
echo "=========================================="
echo ""

URL="http://localhost:8000"

# Function to open browser
open_browser() {
    sleep 1
    if command -v xdg-open &> /dev/null; then
        xdg-open "$URL" &> /dev/null
    elif command -v gnome-open &> /dev/null; then
        gnome-open "$URL" &> /dev/null
    elif command -v open &> /dev/null; then
        open "$URL" &> /dev/null
    fi
}

# Check for Python 3
if command -v python3 &> /dev/null; then
    echo "Starting server at $URL"
    echo "Opening presentation in browser..."
    echo "Press Ctrl+C to stop the server"
    echo ""
    open_browser &
    python3 -m http.server 8000
    exit 0
fi

# Check for Python 2
if command -v python &> /dev/null; then
    echo "Starting server at $URL"
    echo "Opening presentation in browser..."
    echo "Press Ctrl+C to stop the server"
    echo ""
    open_browser &
    python -m SimpleHTTPServer 8000
    exit 0
fi

# Check for PHP
if command -v php &> /dev/null; then
    echo "Starting server at $URL"
    echo "Opening presentation in browser..."
    echo "Press Ctrl+C to stop the server"
    echo ""
    open_browser &
    php -S localhost:8000
    exit 0
fi

echo "Error: No suitable HTTP server found!"
echo "Please install one of: Python 3, Python 2, or PHP"
echo ""
echo "Or manually open presentation.html in your browser."
exit 1
