import css from "styled-jsx/css";

export default css.global`
    * {
        box-sizing: border-box;
    }

    .theme-light {
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

    .theme-dark {
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

        --contact: #3d3d3d;
        --footer: #1e1e1e;
        --box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        --box-shadow-active: 0 4px 15px 5px rgba(0, 0, 0, 0.2);
    }

    html,
    body {
        margin: 0;
        padding: 0;
        font-family: "Red Hat Display", Arial, sans-serif;
        background-color: var(--background-primary);
        transition: background-color 300ms ease;
    }

    h1,
    h2,
    h3,
    p {
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3 {
        font-weight: 800;
    }

    h1 {
        font-size: var(--font-large);
    }
    h2 {
        font-size: var(--font-medium);
    }
    h3 {
        font-size: var(--font-small);
    }

    a {
        color: inherit;
        font-weight: 800;
    }

    ul {
        margin: 0;
    }

    hr {
        border-color: var(--background-tertiary);
        border-style: solid;
    }

    button {
        width: 170px;
        height: 45px;
        display: inline-block;
        box-shadow: var(--box-shadow);
        text-transform: uppercase;
        text-align: center;
        line-height: 35px;
        border: none;
        font-family: "Red Hat Display";
        border-radius: 50px;
        cursor: pointer;
        transition: box-shadow 300ms ease;
    }

    button:focus {
        outline: none;
    }
    button:hover {
        box-shadow: var(--box-shadow-active);
    }

    button svg {
        margin-left: 10px;
    }

    .button--primary-ix {
        background-color: var(--accent-primary);
        color: var(--text-button);
    }

    .button--secondary-ix {
        background-color: var(--background-quaternary);
        color: var(--accent-primary);
    }

    .button--primary-x {
        background-color: var(--accent-secondary);
        color: var(--text-button);
    }

    .button--primary-xi {
        background-color: var(--accent-tertiary);
        color: var(--text-button);
    }

    .button--secondary {
        background-color: transparent;
        box-shadow: none;
        font-weight: bold;
        transition: color 300ms linear;
        color: var(--text-primary);
        width: 120px;
    }
    .button--secondary:hover {
        box-shadow: none;
        color: var(--accent-tertiary);
    }

    .underlined {
        text-decoration: underline;
    }

    .type--easy {
        color: var(--accent-primary);
        border-bottom-color: var(--accent-primary);
    }

    .type--medium {
        color: var(--accent-tertiary);
        border-bottom-color: var(--accent-tertiary);
    }

    .type--challenging {
        color: var(--accent-secondary);
        border-bottom-color: var(--accent-secondary);
    }

    .type--hard {
        color: var(--accent-quaternary);
        border-bottom-color: var(--accent-quaternary);
    }
`;
