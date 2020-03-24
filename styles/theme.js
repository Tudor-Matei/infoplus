import css from "styled-jsx/css";
export const light = css.global`
    :root {
        --background-primary: #fff;
        --background-secondary: #f1f1f1;
        --background-tertiary: #dadada;
        --background-quaternary: #2a2a2a;

        --text-primary: #2a2a2a;
        --text-secondary: #f1f1f1;
        --text-button: #2a2a2a;

        --accent-primary: #56f55c;
        --accent-secondary: #3db8ff;
        --accent-tertiary: #ffcc00;

        --contact: #2a2a2a;
        --footer: #1e1e1e;
        --box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        --box-shadow-active: 0 4px 15px 5px rgba(0, 0, 0, 0.2);
    }
`;

export const dark = css.global`
    :root {
        --background-primary: #1e1e1e;
        --background-secondary: #2a2a2a;
        --background-tertiary: #434545;
        --background-quaternary: #858585;

        --text-primary: #f1f1f1;
        --text-secondary: #e6e6e6;
        --text-button: #2a2a2a;

        --accent-primary: #56f55c;
        --accent-secondary: #3db8ff;
        --accent-tertiary: #ffcc00;

        --contact: #3d3d3d;
        --footer: #1e1e1e;
        --box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        --box-shadow-active: 0 4px 15px 5px rgba(0, 0, 0, 0.2);
    }
`;
