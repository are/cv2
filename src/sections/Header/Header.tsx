import { jsx } from '@emotion/core'
import { ReactNode } from 'react'

import { mainHeaderStyles, subHeaderStyles } from './styles'

export const HeaderSection = () => {
    return (
        <div>
            <h1 css={mainHeaderStyles}>Artur Wojciechowski</h1>
            <h2 css={subHeaderStyles}>JavaScript Developer</h2>
        </div>
    )
}
