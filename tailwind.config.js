/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: { card: "2rem" },
      colors: {
        one: "#9171C5",
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
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
      },
      dropShadow: {
        "custom-card": "0px 0px 8px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
