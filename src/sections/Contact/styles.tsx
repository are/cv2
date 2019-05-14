import { css } from '@emotion/core'

export const rootStyles = css`
    padding-top: 10px;
    display: grid;
    grid: 1fr / 1fr 1fr;

    position: relative;
    width: 80%;
    left: 10%;
`

export const leftColumnStyles = css`
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
`

export const rightColumnStyles = css`
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
`
