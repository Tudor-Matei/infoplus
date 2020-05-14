import css from "styled-jsx/css";

const staticThemeVariables = `
    --accent-primary: #56f55c;
    --accent-secondary: #3db8ff;
    --accent-tertiary: #ffcc00;
    --accent-quaternary: #e43dff;

    --accent-success: #a7f7ab;
    --accent-failure-primary: #ff5e5e;
    --accent-failure-secondary: #ffa9a9;

    --difficulty-1: var(--accent-primary);
    --difficulty-2: var(--accent-tertiary);
    --difficulty-3: var(--accent-secondary);
    --difficulty-4: var(--accent-quaternary);

    --text-button: #2a2a2a;

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
        --text-tertiary: #686868;

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
        --text-tertiary: #777777;

        ${staticThemeVariables}
    }
`;
