/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/app/**/*.{js,jsx,ts,tsx}","./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        rubik:['Rubik-Regular','sans-serif'],
        "rubik-bold":['Rubik-Bold','sans-serif'],
        "rubik-semibold":['Rubik-SemiBold','sans-serif'],
        "rubik-extrabold":['Rubik-ExtraBold','sans-serif'],
        "rubik-light":['Rubik-Light','sans-serif'],
        "rubik-medium":['Rubik-Medium','sans-serif'],
      },
      colors:{
        primary:{
          100: "#4b68FF1A",
          200: "#4b68FF3A",
          300: "#4b68FF",
        },
         accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
        danger: "#F75555",
      }
    },
  },
  plugins: [],
}