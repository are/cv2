import { jsx } from '@emotion/core'
import { ReactNode } from 'react'

import { useData } from 'hooks/useData'
import { Link } from 'components/Link'
import {
    containerStyles,
    entryContainerStyles,
    entryTitleStyles,
    entryDateStyles,
    entryContentStyles,
    separatorStyles,
    titleStyles,
} from './styles'

type Experience = {
    name: string
    position: string
    url: string
    date: string
    skills: Array<string>
    description: string
}

export const ExperienceSection = () => {
    const { get } = useData()

    const exps = get<Array<Experience>>`experience`

    return (
        <div css={containerStyles}>
            <h2 css={titleStyles}>Experience</h2>

            {exps.map(exp => (
                <div css={entryContainerStyles}>
                    <h3 css={entryTitleStyles}>
                        {exp.position} (<Link url={exp.url}>{exp.name}</Link>)
                    </h3>
                    <span css={entryDateStyles}>{exp.date}</span>
                    <div css={entryContentStyles}>
                        <p>
                            <strong>Skills used:</strong> <em>{exp.skills.join(', ')}</em>
                        </p>
                        {exp.description}
                    </div>
                </div>
            ))}

            <h3 css={separatorStyles}>*</h3>
        </div>
    )
}
