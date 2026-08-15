# Horrified: American Monsters Navigator

A single-page web application for navigating the Horrified: American Monsters board game map. Find location connections and discover all possible paths between locations with a horror-themed, accessible interface.

## Features

### 1. Location Connections Lookup
- Select any location to view all connected locations
- Connection counts displayed for easy reference
- Alphabetically sorted for quick scanning

### 2. Pathfinder
- Find all unique routes between any two locations
- Displays multiple path options when loops exist
- Paths sorted by length (shortest first)
- Shows step count for each route

### 3. Map Overview
- Collapsible description of the entire map structure
- Details about central loops, branches, and dead ends
- Native HTML5 disclosure widget for accessibility

## Theme

**Moonlit Town** - A horror-themed dark interface inspired by classic monster movies:
- Dark blue-gray background (#1a1f2e) with cream text (#f5f2e8)
- Amber accent color (#d4851f) for interactive elements
- Horror-themed fonts (Creepster for headings, Special Elite for accents)
- Subtle texture and shadow effects
- Decorative SVG icons for each section

## Technology Stack

- **HTML5** - Semantic structure with proper landmarks and ARIA support
- **CSS3** - Custom properties, responsive grid, accessible focus states
- **Vanilla JavaScript** - No dependencies, uses native fetch API
- **Google Fonts** - Creepster and Special Elite fonts

## Accessibility Features

- ✅ Semantic HTML structure with proper headings
- ✅ Keyboard-navigable (all controls accessible via Tab/Enter)
- ✅ Visible focus indicators (3px outline with color change)
- ✅ ARIA live regions for dynamic content announcements
- ✅ Proper form labels and controls
- ✅ Decorative images marked with empty alt attributes
- ✅ High contrast color scheme (WCAG AA compliant)
- ✅ Reduced motion support
- ✅ Responsive design for mobile and desktop

## How to Use

### Running Locally

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. No build process or server required - works entirely in the browser

### Deploying to the Web

#### GitHub Pages
1. Push the repository to GitHub
2. Go to Settings → Pages
3. Select the main branch as the source
4. Your site will be available at `https://username.github.io/repository-name`

#### Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your Git repository for automatic deployments

#### Other Hosting
Upload all files to any static web hosting service. The app requires:
- `index.html`
- `styles.css`
- `app.js`
- `data.json`

Do **not** upload the CSV files (they are gitignored).

## File Structure

```
horrified_american_monsters/
├── index.html          # Main HTML structure
├── styles.css          # Moonlit Town theme styles
├── app.js              # Application logic and pathfinding
├── data.json           # Location and connection data
├── .gitignore          # Excludes CSV files
└── README.md           # This file
```

## Data Format

Location data is stored in `data.json` with the following structure:

```json
[
  {
    "location": "Location Name",
    "connections": ["Connected Location 1", "Connected Location 2"]
  }
]
```

All connections are bidirectional (if A connects to B, B connects to A).

## Pathfinding Algorithm

The app uses **depth-first search (DFS)** with backtracking to find all unique paths between two locations. This ensures:
- All possible routes are discovered
- No infinite loops in circular paths
- Paths are complete and valid
- Results sorted by length for usability

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

Requires JavaScript enabled and support for:
- ES6 modules and async/await
- CSS custom properties
- CSS Grid
- Fetch API

## Credits

- **Fonts**: Creepster and Special Elite from [Google Fonts](https://fonts.google.com) (Open Font License)
- **Icons**: Custom SVG graphics (no attribution required)
- **Game**: Based on Horrified: American Monsters board game

## License

This project is a fan-made navigation tool. All game content and trademarks belong to their respective owners.

Code is provided as-is for educational and personal use.
