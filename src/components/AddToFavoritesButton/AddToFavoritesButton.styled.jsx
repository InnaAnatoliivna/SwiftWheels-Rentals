import styled from "styled-components"

export const Icon = styled.svg`
    position: absolute;
    top: 0;
    /* right: 0; */
    fill: transparent;
    /* stroke: var(--color-text-light); */
    stroke: black;
    transition: fill linear  500ms, stroke linear 500ms;
    &.active{
        fill: var(--color-accent-active);
        stroke: var(--color-accent-active);
    }
`