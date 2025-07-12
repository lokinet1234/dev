# Legal Wiki - Personal Reference Website

## Overview

This is a static HTML/CSS/JavaScript website that serves as a personal legal reference wiki. The site features a clean, grid-based design with dark/light theme support and focuses on legal topics including constitutional law, contract law, property law, and legal basics. It's built as a lightweight, framework-free solution for personal reference and learning.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure Static Site**: Built with vanilla HTML5, CSS3, and JavaScript
- **No Framework Dependencies**: Zero external libraries or build tools
- **Grid-Based Layout**: Uses CSS Grid for precise, modular alignment
- **Responsive Design**: Mobile-first approach with CSS media queries
- **Theme System**: CSS variables enable dark/light mode switching

### File Structure
```
/
├── index.html (Homepage with article cards)
├── articles/
│   ├── constitutional-law.html
│   ├── contract-law.html
│   ├── legal-basics.html
│   └── property-law.html
├── css/
│   └── styles.css (All styling and theme variables)
├── js/
│   └── main.js (Theme management and interactions)
└── attached_assets/
    └── project-requirements.txt
```

## Key Components

### 1. Theme Management System
- **Technology**: Vanilla JavaScript with CSS variables
- **Features**: Dark mode default, light mode toggle, localStorage persistence
- **Implementation**: Class-based ThemeManager handles state and UI updates

### 2. Navigation Structure
- **Homepage**: Card-based article browser with horizontal scrolling
- **Article Pages**: Individual HTML files with breadcrumb navigation
- **Consistent Header**: Theme toggle and navigation on every page

### 3. Content Organization
- **Card Interface**: Visual article previews on homepage
- **Article Structure**: Semantic HTML5 with proper heading hierarchy
- **Legal Content**: Structured legal information with definitions and examples

### 4. Visual Design
- **Holographic Title**: CSS-only effect using gradients and animations
- **Grid Alignment**: All elements follow consistent spacing (8px/1rem units)
- **Typography**: System fonts optimized for readability
- **Color System**: CSS variables for consistent theming

## Data Flow

### Client-Side Only
1. **Page Load**: HTML loads with default dark theme
2. **Theme Check**: JavaScript checks localStorage for saved theme preference
3. **Theme Application**: CSS variables updated based on user preference
4. **User Interaction**: Theme toggle updates both UI and localStorage
5. **Navigation**: Standard HTML links between static pages

### No Backend Requirements
- All content is static HTML
- No database or server-side processing
- No user authentication or dynamic content generation
- Client-side state management limited to theme preferences

## External Dependencies

### None Required
- **No CDN Links**: All code is self-contained
- **No Build Tools**: Direct HTML/CSS/JS files
- **No Package Managers**: No npm, yarn, or similar dependencies
- **System Fonts Only**: Uses OS-native font stacks

### Browser Requirements
- Modern browsers supporting CSS Grid and CSS Variables
- JavaScript enabled for theme functionality
- No specific version requirements beyond ES6 class support

## Deployment Strategy

### Static Site Deployment
- **Hosting Options**: GitHub Pages, Netlify, Vercel, or any static host
- **No Build Process**: Files can be deployed directly
- **No Server Requirements**: Pure client-side application

### Development Workflow
1. Edit HTML files directly for content changes
2. Modify CSS variables for styling updates
3. Test locally by opening index.html in browser
4. Deploy by uploading files to static hosting service

### Maintenance Considerations
- **Content Updates**: Manual HTML editing required
- **New Articles**: Create new HTML files in articles/ directory
- **Styling Changes**: Update CSS variables or add new styles
- **No Database Migrations**: All content is file-based

## Technical Decisions

### Architecture Choices
- **Static over Dynamic**: Chosen for simplicity and zero server costs
- **Vanilla JS over Frameworks**: Reduces complexity and load times
- **CSS Grid over Flexbox**: Better for precise layout control
- **CSS Variables over Preprocessors**: Native browser support, no build step

### Content Strategy
- **Manual HTML over CMS**: Direct control over markup and styling
- **File-based over Database**: Eliminates server requirements
- **Semantic HTML**: Improves accessibility and SEO
- **Responsive Design**: Ensures usability across devices

This architecture provides a simple, maintainable solution for a personal legal reference site while remaining completely self-contained and easy to deploy.