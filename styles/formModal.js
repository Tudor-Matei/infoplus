import css from "styled-jsx/css";

export default css`
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
        overflow: overlay;
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
        justify-content: flex-end;
        margin-top: 30px;
    }

    :global(.modal__wave) {
        width: 100%;
        height: 100%;
    }

    .modal__input-panels {
        width: 80%;
        margin: 50px auto;
    }

    .modal__input-panel {
        width: 100%;
    }

    .modal__input-panel-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 30px 0;
    }

    .error-message {
        margin-top: 20px;
    }

    @media screen and (max-width: 825px) {
        div.modal {
            width: 80%;
        }

        .modal__input-panels {
            width: 90%;
        }

        .modal__input-panel-group {
            flex-direction: column;
            margin: 0;
        }

        .modal__input-panel:nth-child(n) {
            margin: 10px 0;
        }
    }

    @media screen and (max-width: 425px) {
        .modal__title {
            font-size: var(--font-smaller);
        }
    }
`;
