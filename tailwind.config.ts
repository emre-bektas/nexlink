import type {Config} from "tailwindcss";
import {typography} from "./src/components/ui/typography";
const {nextui} = require("@nextui-org/react");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            typography,
            maxWidth: {
                '8xl': '92rem',
            },
            fontSize: {
                xxs: ['0.68rem', '.8rem'],
                s: "0.813rem",
                m: ['0.9rem', '1.3rem'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        nextui({
            prefix: "nexlink"
        }),
        require('@tailwindcss/typography'),
        require('tailwindcss-signals'),
    ],
};
export default config;
