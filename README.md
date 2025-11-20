# ArcellAI Presentation

This repository contains an HTML-based PowerPoint presentation for ArcellAI.

## Contents

- `presentation.html` - Main presentation file
- `assets/` - Supporting assets (fonts, images, styles, etc.)

## Viewing the Presentation

### Quick Start (Recommended)

Simply run the included script:

```bash
./start-presentation.sh
```

This will automatically:
- Start a local web server
- Open the presentation in your default browser
- Serve from http://localhost:8000 (root URL redirects to presentation)

### Manual Start Options

If you prefer to start the server manually:

#### Option 1: Using Python's Built-in HTTP Server

If you have Python 3 installed:

```bash
python3 -m http.server 8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

#### Option 2: Using Node.js HTTP Server

If you have Node.js installed, first install `http-server` globally:

```bash
npm install -g http-server
```

Then run:

```bash
http-server
```

Then open your browser and navigate to:
```
http://localhost:8080
```

#### Option 3: Using PHP's Built-in Server

If you have PHP installed:

```bash
php -S localhost:8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

#### Option 4: Direct File Access

For simple viewing, you can try opening the file directly in your browser:

```bash
xdg-open presentation.html
```

Or simply drag `presentation.html` into your browser window.

**Note:** Some browsers may have restrictions on loading local resources when opening files directly. If the presentation doesn't display correctly, use one of the HTTP server methods above.

## Deployment

When deploying to a web server, the root URL (/) will automatically redirect to the presentation via `index.html`. Simply upload all files to your web server:

- `index.html` - Root redirect page
- `presentation.html` - Main presentation
- `assets/` - All supporting resources

No additional configuration needed!

## Presentation Controls

Once the presentation is loaded in your browser, use:

- **Arrow keys** or **Space bar** to navigate between slides
- **F** for fullscreen mode (if supported by the presentation framework)
- **ESC** to exit fullscreen

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (recommended for best compatibility)

## Technical Details

The presentation uses:
- HTML5
- CSS3 (including Lato and Montserrat fonts)
- Font Awesome icons
- Responsive design that works on various screen sizes
