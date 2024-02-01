/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "1150px",
        },
        padding: "20px",
        center: true,
      },
      screens: {
        desktop: { max: "1060px" },
        tablet: { max: "820px" },
        mobile: { max: "550px" },
      },
      fontFamily: {
        sans: ["Outfit"],
        "big-shoulder": ["Big Shoulders"],
      },
      fontSize: {
        "3xl": "clamp(62px,8cqw,96px)",
        "2xl": "clamp(56px,5cqw,68px)",
        xl: "clamp(52px,5cqw,62px)",
        "2lg": "clamp(20px,4cqw,22px)",
        lg: "clamp(18px,4cqw,19px)",
        base: "clamp(16px,4cqw,18px)",
      },
      colors: {
        black: "#151515",
        "pale-brown": "#D5966C",
      },
      gridTemplateColumns: {
        hero: "minmax(200px,450px) minmax(200px,350px)",
        "hero-responsive": "minmax(250px,450px)",
        "grid-1": "minmax(200px,320px) minmax(200px,635px)",
        "grid-1-responsive": "minmax(200px,500px) minmax(200px,500px)",
        "grid-2": "minmax(200px,635px) minmax(200px,445px)",
        "grid-2-responsive": "minmax(200px,400px) minmax(200px,600px)",
      },
      gridTemplateRows: {
        "grid-2-row": "minmax(300px,315px) minmax(100px,375px)",
      },
      backgroundImage: {
        map: "url(/images/desktop/image-map@2x.png)",
      },
    },
  },
  plugins: [],
};
