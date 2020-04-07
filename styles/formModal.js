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
        overflow: auto;
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

    .modal__input-panels {
        padding: 30px 0;
        text-align: center;
    }

    .modal__input-panel {
        display: inline-block;
        margin: 20px 15px;
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

    @media screen and (max-width: 768px) {
        .modal {
            width: 90% !important;
            margin-top: -30px;
        }
        .modal__title {
            text-align: center;
            font-size: var(--font-small);
        }
        .modal__input-panel {
            width: auto !important;
            margin-left: 20px;
            margin-right: 20px;
            display: block;
        }
        .modal__buttons-container {
            margin-right: 20px !important;
        }
    }
`;
