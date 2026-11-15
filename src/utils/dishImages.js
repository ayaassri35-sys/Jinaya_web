// src/utils/dishImages.js
// High quality, ultra-fast inline SVG data URIs so images load instantly anywhere (even without internet connection / blocked DNS)

function svgDataUri(svgString) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
}

export function createFoodSvg({ emoji, title, bgGradient, patternColor, accentColor }) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradient[0]}"/>
      <stop offset="50%" stop-color="${bgGradient[1]}"/>
      <stop offset="100%" stop-color="${bgGradient[2]}"/>
    </linearGradient>
    <radialGradient id="plateGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="400" fill="url(#bg)"/>

  <!-- Subtle grid pattern -->
  <g opacity="0.08" stroke="${patternColor}" stroke-width="1.5">
    <circle cx="300" cy="180" r="160" fill="none"/>
    <circle cx="300" cy="180" r="220" fill="none" stroke-dasharray="6,6"/>
    <line x1="0" y1="180" x2="600" y2="180"/>
    <line x1="300" y1="0" x2="300" y2="400"/>
  </g>

  <!-- Golden Plate Base -->
  <circle cx="300" cy="180" r="130" fill="url(#plateGlow)"/>
  <circle cx="300" cy="180" r="110" fill="#141414" stroke="${accentColor}" stroke-width="3" filter="url(#shadow)"/>
  <circle cx="300" cy="180" r="95" fill="#1a1a1a" stroke="${accentColor}" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- Food Emoji Art -->
  <g filter="url(#shadow)">
    <text x="300" y="215" font-size="80" text-anchor="middle" dominant-baseline="central">${emoji}</text>
  </g>

  <!-- Lower Banner with Elegant Dish Title -->
  <rect x="50" y="315" width="500" height="55" rx="16" fill="#0d0d0d" fill-opacity="0.85" stroke="${accentColor}" stroke-opacity="0.4" stroke-width="1.5"/>
  <text x="300" y="348" font-family="'Playfair Display', Georgia, serif" font-weight="bold" font-size="18" fill="#ffffff" text-anchor="middle" letter-spacing="1">
    ${title.toUpperCase()}
  </text>
  <circle cx="100" cy="342" r="3" fill="${accentColor}"/>
  <circle cx="500" cy="342" r="3" fill="${accentColor}"/>
</svg>`;
  return svgDataUri(svg);
}

export const heroImageSvg = svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
  <defs>
    <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#120c04"/>
      <stop offset="40%" stop-color="#1c1409"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
    <radialGradient id="goldGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#d4a017" stop-opacity="0.25"/>
      <stop offset="70%" stop-color="#d4a017" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#heroBg)"/>
  <rect width="1600" height="900" fill="url(#goldGlow)"/>
  <circle cx="800" cy="450" r="320" fill="none" stroke="#d4a017" stroke-opacity="0.12" stroke-width="2"/>
  <circle cx="800" cy="450" r="450" fill="none" stroke="#d4a017" stroke-opacity="0.06" stroke-width="2" stroke-dasharray="10,15"/>
</svg>`);

export const aboutImageSvg = (title, emoji) => svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <linearGradient id="abg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#24190c"/>
      <stop offset="100%" stop-color="#0f0f0f"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#abg)"/>
  <circle cx="300" cy="270" r="140" fill="#141414" stroke="#d4a017" stroke-width="2"/>
  <text x="300" y="300" font-size="95" text-anchor="middle">${emoji}</text>
  <text x="300" y="480" font-family="'Playfair Display', Georgia, serif" font-weight="bold" font-size="24" fill="#d4a017" text-anchor="middle">${title}</text>
</svg>`);
