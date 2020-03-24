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
        font-size: 3rem;
    }
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.5rem;
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

    .button--secondary {
        background-color: transparent;
        box-shadow: none;
        font-weight: bold;
        transition: color 300ms linear;
        color: var(--text-primary);
        width: 150px;
    }
    .button--secondary:hover {
        box-shadow: none;
        color: var(--accent-tertiary);
    }
`;
