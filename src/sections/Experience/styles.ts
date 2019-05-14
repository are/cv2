import { css } from '@emotion/core'
import { subHeaderStyles } from '../Header/styles'

export const containerStyles = css`
    position: relative;
    width: 80%;
    left: 10%;

    display: flex;
    flex-wrap: wrap;
`

export const separatorStyles = css`
    width: 100%;
    padding-top: 30px;
    text-align: center;
`

export const titleStyles = css`
    ${subHeaderStyles};
    width: 100%;
    padding: 40px 0px 20px;

    text-align: center;
    font-weight: normal;
`

export const entryContainerStyles = css`
    width: 100%;
    padding-bottom: 30px;
`

export const entryTitleStyles = css`
    padding: 10px 0px;
    float: left;
`

export const entryDateStyles = css`
    padding: 10px 0px;
    float: right;
`

export const entryContentStyles = css`
    clear: both;

    & > p {
        margin: 0;
        margin-bottom: 10px;
    }
`
