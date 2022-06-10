module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing:{
        "card": "130px",
      },
    },
    colors: {
      white: "#fff",
      black: "#000",
      "baby-barf-green": {
        100: "#CFDAC1",
        200: "#9FAA91",
      },
      "baby-barf-yellow": "#F1CE15",
      "baby-barf-orange": "#F2A211",
      "baby-barf-red": "#F11E1D",
      "baby-barf-pink": "#F15352",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      futura: ["futura-pt", "sans-serif"],
    },
  },
  plugins: [],
};
