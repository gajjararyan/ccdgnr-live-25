# CCDGN Live Social Wall

This project is a React + Vite app that displays a social wall and a custom left-side panel with SVG graphics.

## Features
- Social wall embedded via iframe (Walls.io)
- Custom left panel with SVG border and images (1ccd.svg, 2ccdnew.svg, etc.)
- Fullscreen toggle support

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd ccdgn-live
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```bash
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### SVG Assets
Make sure the following SVG files are present in your `public/` directory:
- `border-design.svg`
- `1ccd.svg`
- `2ccdnew.svg` (or any other SVGs you use, e.g., `letters.svg`, `hero1.svg`)

If you add or rename SVGs, update the import paths in `src/App.jsx` accordingly.

### Customization
- Edit `src/App.jsx` to change the layout, images, or iframe source as needed.
- Tailwind CSS is used for styling. You can adjust styles in the JSX or in your Tailwind config.
