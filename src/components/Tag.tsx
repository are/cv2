import { css, jsx } from '@emotion/core'

const styles = css`
    display: inline-block;
    border-radius: 3px;

    padding: 3px 5px 1px 5px;
    margin: 3px 0px;
`

export const Tag = ({ children }) => {
    return (
        <div className="tag" css={styles}>
            {children}
        </div>
    )
}
