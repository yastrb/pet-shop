const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#011240',
      },
      fontFamily: {
        norms: ["NORMS", 'sans-serif']
      },
    },
  },
  plugins: [],
}) ;

