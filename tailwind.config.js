// tailwind.config.js
module.exports = {
  content: [
    "./App.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/nativewind/**/*.js", // Đảm bảo bao gồm thư viện nativewind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
