import css from "styled-jsx/css";

const staticThemeVariables = `
    --accent-primary: #56f55c;
    --accent-secondary: #3db8ff;
    --accent-tertiary: #ffcc00;
    --accent-quaternary: #DE16FF;

    --font-larger: 5rem;
    --font-large: 3rem;
    --font-medium: 2rem;
    --font-small: 1.3rem;
    --font-smaller: 1rem;

    --contact: #2a2a2a;
    --footer: #1e1e1e;
    --box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.09);
    --box-shadow-active: 0 4px 15px 5px rgba(0, 0, 0, 0.2);
`;

export const light = css.global`
    :root {
        --background-primary: #fff;
        --background-secondary: #f5f5f5;
        --background-tertiary: #dadada;
        --background-quaternary: #2a2a2a;

        --text-primary: #2a2a2a;
        --text-secondary: #f1f1f1;
        --text-button: #2a2a2a;

        ${staticThemeVariables}
    }
`;

export const dark = css.global`
    :root {
        --background-primary: #1e1e1e;
        --background-secondary: #2a2a2a;
        --background-tertiary: #434545;
        --background-quaternary: #404040;

        --text-primary: #f1f1f1;
        --text-secondary: #e6e6e6;
        --text-button: #2a2a2a;

        --accent-primary: #56f55c;
        --accent-secondary: #3db8ff;
        --accent-tertiary: #ffcc00;

        ${staticThemeVariables}
    }
`;
