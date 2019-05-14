import { ReactNode } from 'react'
import { css, jsx } from '@emotion/core'

import { IconType } from 'react-icons'
import { IoIosMail, IoIosCall, IoIosHome, IoLogoGithub, IoLogoLinkedin, IoIosLink } from 'react-icons/io'

const styles = css`
    padding: 5px;

    & svg {
        margin-top: -3px;
        margin-right: 5px;
        vertical-align: middle;
    }
`

type Icons = 'mail' | 'phone' | 'home' | 'github' | 'linkedin' | 'link'

const iconMapping: Record<Icons, IconType> = {
    mail: IoIosMail,
    phone: IoIosCall,
    home: IoIosHome,
    github: IoLogoGithub,
    linkedin: IoLogoLinkedin,
    link: IoIosLink,
}

type LabelProps = {
    children?: ReactNode
    icon: Icons
}

export const Label = ({ children, icon }: LabelProps) => {
    let Icon = iconMapping[icon] || (() => <div />)

    return (
        <div css={styles}>
            <Icon /> {children}
        </div>
    )
}
