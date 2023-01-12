/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: { card: "2rem" },
      borderWidth: {
        1: "1px",
      },
      blur: {
        shape: "7.5rem",
        "big-screen-shape": "256px",
      },
      colors: {
        one: "#9171C5",
        two: "#ab99de",
        "card-gradient-one": "#7B8EE2",
        "card-gradient-two": "#9271C5",
        "card-one-gradient-one": "#F96EC5",
        "card-one-gradient-two": "#8073F2",
        "card-one-icon": "#C3B9FF",
        "card-two-gradient-one": "#6ED8F9",
        "card-two-gradient-two": "#7D73F2",
        "card-two-icon": "#B9CDFF",
        "card-three-gradient-one": "#716EF9",
        "card-three-gradient-two": "#F27373",
        "card-three-icon": "#FFA9A9",
        "custom-title-one": "#930BFF",
        "custom-title-two": "#FF3636",
        "profile-pic-one": "#bc80ed",
        "profile-pic-two": "#df8383",
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
      },
      dropShadow: {
        "custom-card": "0px 0px 8px rgba(0, 0, 0, 0.4)",
      },
      lineHeight: {
        "testimony-card": "1.8rem",
      },
      minHeight: {
        "testimony-card": "24rem",
      },
      width: {
        "big-screen-banner": "83.5rem",
        "big-screen-card": "22rem",
      },
    },
    screens: {
      "big-screen": { min: "1401px" },
      desktop: { max: "1400px" },
      phone: { max: "750px" },
    },
  },
  plugins: [],
};
