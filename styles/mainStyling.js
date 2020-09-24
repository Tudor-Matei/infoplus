import css from "styled-jsx/css";

export default css.global`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        font-family: "Red Hat Display", Arial, sans-serif;
        background-color: var(--background-primary);
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

    pre,
    code {
        background-color: var(--background-tertiary);
        border-radius: 10px;
        color: var(--text-primary);
    }

    pre {
        padding: 15px;
    }

    code {
        padding: 5px;
    }

    .overlay-darkener {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 50;
        animation: fadeIn 300ms ease forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    button {
        min-width: 175px;
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
        transition-property: box-shadow, opacity, transform;
        transition-duration: 300ms;
        transition-timing-function: ease;
    }

    button:disabled {
        opacity: 0.2;
    }

    button:focus {
        outline: none;
    }
    button:hover {
        box-shadow: var(--box-shadow-active);
    }

    button:active {
        transform: scale(0.95);
    }

    button svg {
        margin-left: 10px;
    }

    .error-message {
        color: var(--accent-quaternary);
        text-align: right;
        opacity: 0;
        padding-left: 20px;
        transform: translateX(10px);
        animation: fadeFromRight 300ms ease forwards;
    }

    @keyframes fadeFromRight {
        from {
            opacity: 0;
            transform: translateX(10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .button--primary {
        background-color: var(--accent-primary);
        color: var(--text-button);
        height: 40px;
    }

    .button--secondary {
        background-color: var(--background-quaternary);
        color: var(--accent-primary);
        height: 40px;
    }

    .button--tertiary {
        background-color: transparent;
        box-shadow: none;
        font-weight: bold;
        transition: color, transform 300ms linear;
        color: var(--text-primary);
        min-width: 130px;
    }

    .button--tertiary:hover {
        box-shadow: none;
        color: var(--accent-quaternary);
    }

    .underlined {
        text-decoration: underline;
    }

    .button--outline {
        background-color: transparent;
        color: var(--text-primary);
        border: 1px solid var(--background-quaternary);
        border-radius: 50px;
        box-shadow: none;
        width: 150px;
        line-height: 32px;
        height: 35px;
        text-transform: initial;
        transition: background-color 300ms ease;
    }

    .button--outline:hover {
        box-shadow: none;
        background-color: var(--background-tertiary);
    }

    /* THEMES */
    :root {
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
    }

    html.theme-light {
        --background-primary: #fff;
        --background-secondary: #f5f5f5;
        --background-tertiary: #dadada;
        --background-quaternary: #2a2a2a;

        --text-primary: #2a2a2a;
        --text-secondary: #f1f1f1;
        --text-tertiary: #686868;
    }

    html.theme-dark {
        --background-primary: #1e1e1e;
        --background-secondary: #2a2a2a;
        --background-tertiary: #434545;
        --background-quaternary: #404040;

        --text-primary: #f1f1f1;
        --text-secondary: #e6e6e6;
        --text-tertiary: #777777;
    }
`;
