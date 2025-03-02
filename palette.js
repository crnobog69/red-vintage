/**
 * Red Vintage - Color Palette
 * JavaScript Color Module
 */

export const RedVintagePalette = {
  // Base colors
  base: {
    darkBackground: '#1c1414',
    sidebarBackground: '#231815',
    activityBackground: '#2a1915',
    highlightBackground: '#3c2622',
    selectionBackground: '#4e342e'
  },
  
  // Text colors
  text: {
    primary: '#d4c7b9',
    secondary: '#c9bab0',
    muted: '#a18d84',
    comment: '#8a7570'
  },
  
  // Accent colors
  accent: {
    primaryRed: '#a13c32',
    brightRed: '#d4827c',
    yellow: '#c9a554',
    brightYellow: '#e6cc94',
    green: '#8c7c60',
    brightGreen: '#b0a68d'
  },
  
  // Cool colors
  cool: {
    purple: '#5c5088',
    brightPurple: '#9590b3',
    magenta: '#976983',
    brightMagenta: '#c498b3',
    cyan: '#807c99',
    brightCyan: '#b0acc9',
    brightWhite: '#e9d9c9'
  },
  
  // Get color with RGB values
  getRgb: function(colorHex) {
    const hex = colorHex.replace('#', '');
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16)
    };
  }
};
