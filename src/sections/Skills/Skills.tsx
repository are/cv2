import { ReactNode } from 'react'
import { css, jsx } from '@emotion/core'

import { useData } from 'hooks/useData'
import { Tag } from 'components/Tag'

import { rootStyles, containerStyles, spacerStyles } from './styles'
import { titleStyles } from '../Experience/styles'

export const SkillsSection = () => {
    const { get } = useData()

    const skillSets = get<Array<Array<string>>>`skills`

    return (
        <div css={rootStyles}>
            <h3 css={titleStyles}>Skills</h3>

            {skillSets.map(skills => (
                <div css={containerStyles}>
                    {skills.map(skill => [<Tag>{skill}</Tag>, <div css={spacerStyles}>*</div>])}
                </div>
            ))}
        </div>
    )
}
