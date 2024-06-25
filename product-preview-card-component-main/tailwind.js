tailwind.config = {
  theme: {
    extend: {
      colors: {
        darkCyan: "#3C8067",
        cream: "#F2EBE3",
        darkBlue: "#1C232B",
        grayishBlue: "#6C7289",
        white: "#ffffff",
      },
      fontFamily: {
        primary: ["Montserrat"],
        secondary: ["Fraunces"],
      },
      screens: {
        xs: "375px",
      },
      backgroundImage: {
        mobile: "url('images/image-product-mobile.jpg')",
        desktop: "url('images/image-product-desktop.jpg')",
      },
    },
  },
};
