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
        transition: color 300ms linear;
        color: var(--text-primary);
        width: 120px;
    }

    .button--tertiary:hover {
        box-shadow: none;
        color: var(--accent-tertiary);
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

    @keyframes comeIn {
        from {
            transform: translateX(15px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
