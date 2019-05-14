import { css, jsx } from '@emotion/core'

export const rootStyles = css`
    margin-top: 0px;
`

export const containerStyles = css`
    position: relative;

    width: 80%;
    left: 10%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const spacerStyles = css`
    min-width: 3px;
    height: 3px;
    border-radius: 100%;
    margin-top: 6px;
    font-size: 8px;

    &:last-of-type {
        display: none;
    }
`
