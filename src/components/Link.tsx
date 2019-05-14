import { css, jsx } from '@emotion/core'

const styles = css`
    color: black;
`

export const Link = ({ children, url }: { url: string; children: string }) => {
    return (
        <a css={styles} target="_blank" href={url}>
            {children}
        </a>
    )
}
