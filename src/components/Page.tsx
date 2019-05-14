import { ReactNode } from 'react'
import { css, jsx } from '@emotion/core'

const pageStyles = css`
    position: relative;
    page-break-after: always;

    width: 210mm;
    height: 280mm;

    background: white;
`

type PageProps = {
    children?: ReactNode
}

export const Page = ({ children }: PageProps) => {
    return <div css={pageStyles}>{children}</div>
}
