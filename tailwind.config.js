/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.50rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.50rem",
        19: "4.75rem",
        20: "5rem",
        21: "5.25rem",
        22: "5.50rem",
        23: "5.75rem",
        24: "6rem",
        25: "6.25rem",
        26: "6.50rem",
        27: "6.75rem",
        28: "7rem",
        29: "7.25rem",
        30: "7.50rem",
        31: "7.75rem",
        32: "8rem",
        33: "8.25rem",
        34: "8.50rem",
        35: "8.75rem",
        36: "9rem",
        37: "9.25rem",
        38: "9.50rem",
        39: "9.75rem",
        40: "10rem",
        41: "10.25rem",
        42: "10.50rem",
        43: "10.75rem",
        44: "119.2px",
        45: "11.25rem",
        46: "11.50rem",
        47: "11.75rem",
        48: "12rem",
        49: "12.25rem",
        50: "12.50rem",
        51: "12.75rem",
        52: "13rem",
        53: "13.25rem",
        54: "13.50rem",
        55: "13.75rem",
        56: "14rem",
        57: "14.25rem",
        58: "14.50rem",
        59: "14.75rem",
        60: "15rem",
      },
      fontSize: {
        "heading-bold": [
          "83px",
          {
            lineHeight: "99.6px",
            fontWeight: "600",
          },
        ],
        "heading-semibold": [
          "83px",
          {
            lineHeight: "99.6px",
            fontWeight: "500",
          },
        ],
        "heading-light": [
          "83px",
          {
            lineHeight: "99.6px",
            fontWeight: "400",
          },
        ],
        "heading1-bold": [
          "67px",
          {
            lineHeight: "80.4px",
            fontWeight: "600",
          },
        ],
        "heading1-semibold": [
          "67px",
          {
            lineHeight: "80.4px",
            fontWeight: "500",
          },
        ],
        "heading1-light": [
          "67px",
          {
            lineHeight: "80.4px",
            fontWeight: "400",
          },
        ],

        "heading2-bold": [
          "53px",
          {
            lineHeight: "63.6px",
            fontWeight: "600",
          },
        ],
        "heading2-semibold": [
          "53px",
          {
            lineHeight: "63.6px",
            fontWeight: "500",
          },
        ],
        "heading2-light": [
          "53px",
          {
            lineHeight: "63.6px",
            fontWeight: "400",
          },
        ],

        "heading3-bold": [
          "43px",
          {
            lineHeight: "51.6px",
            fontWeight: "600",
          },
        ],
        "heading3-semibold": [
          "43px",
          {
            lineHeight: "51.6px",
            fontWeight: "500",
          },
        ],
        "heading3-light": [
          "43px",
          {
            lineHeight: "51.6px",
            fontWeight: "400",
          },
        ],

        "sub-heading1-bold": [
          "34px",
          {
            lineHeight: "40.8px",
            fontWeight: "600",
          },
        ],
        "sub-heading1-semibold": [
          "34px",
          {
            lineHeight: "40.8px",
            fontWeight: "500",
          },
        ],
        "sub-heading1-light": [
          "34px",
          {
            lineHeight: "40.8px",
            fontWeight: "400",
          },
        ],

        "sub-heading2-bold": [
          "27px",
          {
            lineHeight: "32.4px",
            fontWeight: "600",
          },
        ],
        "sub-heading2-semibold": [
          "27px",
          {
            lineHeight: "32.4px",
            fontWeight: "500",
          },
        ],
        "sub-heading2-light": [
          "27px",
          {
            lineHeight: "32.4px",
            fontWeight: "400",
          },
        ],

        "body1-bold": [
          "22px",
          {
            lineHeight: "26.4px",
            fontWeight: "600",
          },
        ],
        "body1-semibold": [
          "22px",
          {
            lineHeight: "26.4px",
            fontWeight: "500",
          },
        ],
        "body1-light": [
          "22px",
          {
            lineHeight: "26.4px",
            fontWeight: "400",
          },
        ],

        "body2-bold": [
          "18px",
          {
            lineHeight: "21.6px",
            fontWeight: "600",
          },
        ],
        "body2-semibold": [
          "18px",
          {
            lineHeight: "21.6px",
            fontWeight: "500",
          },
        ],
        "body2-light": [
          "18px",
          {
            lineHeight: "21.6px",
            fontWeight: "400",
          },
        ],

        "text1-bold": [
          "16px",
          {
            lineHeight: "19.2px",
            fontWeight: "600",
          },
        ],
        "text1-semibold": [
          "16px",
          {
            lineHeight: "19.2px",
            fontWeight: "500",
          },
        ],
        "text1-light": [
          "16px",
          {
            lineHeight: "19.2px",
            fontWeight: "400",
          },
        ],

        "text2-bold": [
          "14px",
          {
            lineHeight: "16.8px",
            fontWeight: "600",
          },
        ],
        "text2-semibold": [
          "14px",
          {
            lineHeight: "16.8px",
            fontWeight: "500",
          },
        ],
        "text2-light": [
          "14px",
          {
            lineHeight: "16.8px",
            fontWeight: "400",
          },
        ],

        "caption1-bold": [
          "11px",
          {
            lineHeight: "13.2px",
            fontWeight: "600",
          },
        ],
        "caption1-semibold": [
          "11px",
          {
            lineHeight: "13.2px",
            fontWeight: "500",
          },
        ],
        "caption1-light": [
          "11px",
          {
            lineHeight: "13.2px",
            fontWeight: "400",
          },
        ],

        "caption2-bold": [
          "9px",
          {
            lineHeight: "10.8px",
            fontWeight: "600",
          },
        ],
        "caption2-semibold": [
          "9px",
          {
            lineHeight: "10.8px",
            fontWeight: "500",
          },
        ],
        "caption2-light": [
          "9px",
          {
            lineHeight: "10.8px",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        primary: {
          100: "#cddce3",
          200: "#9ab9c8",
          300: "#6895ac",
          400: "#357291",
          500: "#034f75",
          600: "#023f5e",
          700: "#022f46",
          800: "#01202f",
          900: "#011017",
        },
        secondary: {
          100: "#f6fafc",
          200: "#edf5f9",
          300: "#e3f0f5",
          400: "#daebf2",
          500: "#d1e6ef",
          600: "#a7b8bf",
          700: "#7d8a8f",
          800: "#545c60",
          900: "#2a2e30",
        },
        tertiary: {
          100: "#e4f3e5",
          200: "#c9e7cb",
          300: "#afdbb0",
          400: "#94cf96",
          500: "#79c37c",
          600: "#619c63",
          700: "#49754a",
          800: "#304e32",
          900: "#182719",
        },
        white: "#ffffff",
        error: "#C84444",
      },

      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        poppins: ["Poppins", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
