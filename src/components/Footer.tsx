import { ReactNode } from 'react'
import { css, jsx } from '@emotion/core'

const footerStyles = css``

type FooterProps = {
    children?: ReactNode
}

export const Footer = ({ children }: FooterProps) => {
    return <div css={footerStyles}>{children}</div>
}
