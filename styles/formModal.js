import css from "styled-jsx/css";

export default css.global`
    @keyframes modalAnimation {
        from {
            opacity: 0;
            transform: translateY(-50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .modal {
        max-height: 80%;
        background-color: var(--background-primary);
        box-shadow: var(--box-shadow);
        overflow-y: auto;
        border-radius: 10px;
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
        z-index: 98;
        margin: auto;
        animation: modalAnimation 300ms ease;
    }

    .modal__title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 25%;
    }

    .modal__title {
        position: absolute;
        z-index: 99;
        margin-top: -10px;
        text-transform: uppercase;
        color: var(--text-button);
    }

    .modal__buttons-container {
        display: flex;
        flex-flow: wrap row-reverse;
        justify-content: flex-start;
        margin-right: 10px;
    }

    .modal__wave {
        width: 100%;
        height: 100%;
    }

    .modal .input-area input,
    .modal .input-area select {
        width: 100%;
        height: 40px;
    }

    .modal__input-panels {
        width: 80%;
        margin: 50px auto;
    }

    .error-message {
        margin-top: 20px;
    }

    @media screen and (max-width: 825px) {
        .modal {
            width: 80% !important;
        }

        .modal__input-panels {
            width: 90%;
        }
    }

    @media screen and (max-width: 425px) {
        .modal__title {
            font-size: var(--font-smaller);
        }

        .modal__wave {
            height: 125px;
        }

        .modal__buttons-container {
            justify-content: center;
            margin-right: 0;
        }
    }
`;
