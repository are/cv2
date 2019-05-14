import * as React from 'react'
import { Global, css, jsx } from '@emotion/core'

const globalStyles = css`
    html,
    body {
        background: gray;
        padding: 0;
        margin: 0;

        box-sizing: border-box;

        font-family: CMU;
        font-size: 14px;
        line-height: 1em;
    }

    @media print {
        html,
        body {
            background: initial;
        }
    }

    div,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        padding: 0;
        margin: 0;

        box-sizing: border-box;
    }
`

export const GlobalStyles = () => <Global styles={globalStyles} />
