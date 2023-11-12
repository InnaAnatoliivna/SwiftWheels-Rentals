import styled from "styled-components"

export const Modal = styled.div`
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: #10100f;
    max-width: 335px;
    width: calc(100% - 40px);
    height: 280px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 48px 32px;

    @media screen and (min-width: 768px) {
        max-width: 479px;
        width: 479px;
        height: 286px;
    }
`;

export const CloseButton = styled.button`
    width: 22px;
    height: 22px;
    border: none;
    background: inherit;
    position: absolute;
    top: 14px;
    right: 14px;
    padding: 0;

    svg {
        width: 20px;
        height: 20px;
        transition: all 0.1s linear;

        stroke: var(--color-white);

        &:hover,
        &:focus {
        stroke: var(--color-orange);
        }
    }

    @media screen and (min-width: 768px) {
        width: 26px;
        height: 26px;

        svg {
        width: 26px;
        height: 26px;
        }
    }
`;

