import { ReactNode } from 'react'
import { jsx } from '@emotion/core'

import { Label } from 'components/Label'
import { useData } from 'hooks/useData'
import { rootStyles, leftColumnStyles, rightColumnStyles } from './styles'
import { Link } from 'components/Link'

export const ContactSection = () => {
    const { get } = useData()

    return (
        <div>
            <div css={rootStyles}>
                <div css={leftColumnStyles}>
                    <Label icon="phone">{get`personalData/phoneNumber`}</Label>
                    <Label icon="mail">
                        <Link url={`mailto:${get`personalData/email`}`}>{get`personalData/email`}</Link>
                    </Label>
                    <Label icon="github">
                        <Link url={`https://${get`personalData/githubLink`}`}>{get`personalData/githubLink`}</Link>
                    </Label>
                </div>
                <div css={rightColumnStyles}>
                    <Label icon="home">{get`personalData/address`}</Label>
                    <Label icon="link">
                        <Link url={`https://${get`personalData/websiteLink`}`}>{get`personalData/websiteLink`}</Link>
                    </Label>
                    <Label icon="linkedin">
                        <Link url={`https://${get`personalData/linkedinLink`}`}>{get`personalData/linkedinLink`}</Link>
                    </Label>
                </div>
            </div>
        </div>
    )
}
