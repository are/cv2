import { ReactNode } from 'react'
import { jsx } from '@emotion/core'

import { useData } from 'hooks/useData'
import { containerStyles } from './styles'
import {
    titleStyles,
    entryContainerStyles,
    entryTitleStyles,
    entryDateStyles,
    entryContentStyles,
} from '../Experience/styles'

type EducationEntry = {
    name: string
    date: string
    classes: Array<string>
}

export const EducationSection = () => {
    const { get } = useData()

    const exps = get<Array<EducationEntry>>`education`

    return (
        <div css={containerStyles}>
            <h2 css={titleStyles}>Education</h2>

            {exps.map(exp => (
                <div css={entryContainerStyles}>
                    <h3 css={entryTitleStyles}>{exp.name}</h3>
                    <span css={entryDateStyles}>{exp.date}</span>
                    <div css={entryContentStyles}>
                        <strong>Extended classes: </strong> <em>{exp.classes.join(', ')}</em>
                        <p>
                            <strong>Languages:</strong> English (B2 CEFR), Spanish (A1 CEFR)
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
