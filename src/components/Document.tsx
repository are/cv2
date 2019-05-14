import { ReactNode } from 'react'
import { css, jsx } from '@emotion/core'

const documentStyles = css``

type DocumentProps = {
    children?: ReactNode
}

export const Document = ({ children }: DocumentProps) => {
    return <div css={documentStyles}>{children}</div>
}
