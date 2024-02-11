import ProximaNova from "next/font/local";

export const proximaNova = ProximaNova({
  src: [
    {
      path: "./../../../../next/font/local/ProximaNova/proximanova_light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../../../next/font/local/ProximaNova/proximanova_bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-proximanova",
});
