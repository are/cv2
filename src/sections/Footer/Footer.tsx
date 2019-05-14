import { ReactNode } from 'react'
import { jsx } from '@emotion/core'

import { useData } from 'hooks/useData'
import { containerStyles } from './styles'

export const FooterSection = () => {
    const { get } = useData()

    const footer = get<string>`footer`

    return (
        <div css={containerStyles}>
            {footer}
        </div>
    )
}
