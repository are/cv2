import { ReactNode } from 'react'
import { jsx } from '@emotion/core'

import { useData } from 'hooks/useData'
import { containerStyles } from './styles'
import { titleStyles } from '../Experience/styles'

export const AboutSection = () => {
    const { get } = useData()

    const abouts = get<Array<string>>`about`

    return (
        <div css={containerStyles}>
            <h2 css={titleStyles}>About me</h2>

            {abouts.map(about => (
                <p>{about}</p>
            ))}
        </div>
    )
}
