import { css } from '@emotion/core'

export const sharedHeaderStyles = css`
    display: block;
    padding-top: 20px;
    text-align: center;
`

export const mainHeaderStyles = css`
    ${sharedHeaderStyles};
    font-size: 2.25em;
`

export const subHeaderStyles = css`
    ${sharedHeaderStyles};
    font-size: 1.5em;

    &::before {
        content: '*';
        font-weight: bold;
        font-size: 75%;

        margin-right: 30px;
    }

    &::after {
        content: '*';
        font-weight: bold;
        font-size: 75%;

        margin-left: 30px;
    }
`
