/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs' : '320px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      'my-brakepoint': {'min': '380px', 'max': '430px'},
      'myBrakepoint': {'min': '640px', 'max': '850px'},
    },
    extend: {
      colors:{
        AbsoluteWhite: "#fff",
        AbsoluteBlack: "#000",
        purple60: "#703BF7",
        purple65: "#1A64FF",
        purple70: "#FF9533",
        purple75: "#FFCA99",
        purple90: "#FFE4CC",
        purple95: "#FFF1E5",
        purple97: "#FFF7F0",
        purple99: "#FFFCFA",
        white90: "#E4E4E7",
        white95: "#F1F1F3",
        white97: "#F7F7F8",
        white99: "#FCFCFD",
        gray08: "#141414",
        gray10: "#1A1A1A",
        gray15: "#262626",
        gray20: "#333333",
        gray30: "#4D4D4D",
        gray40: "#666666",
        gray50: "#808080",
        gray60: "#999999",
        gradient: 'linear-gradient(90deg, rgba(38,38,38,1) 0%, rgba(38,38,38,0.5) 100%)'
      },
      fontFamily:{
        Font: ["Urbanist", "sans-serif"]
      }
    },
  },
  plugins: [],
}
