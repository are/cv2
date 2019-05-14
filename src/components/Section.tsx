import { ReactNode } from 'react'
import { css, jsx } from '@emotion/core'

const sectionStyles = css``

type SectionProps = {
    children?: ReactNode
    title: string
}

export const Section = ({ children }: SectionProps) => {
    return <div css={sectionStyles}>{children}</div>
}
