import { jsx } from '@emotion/core'

import { Document } from 'components/Document'
import { Page } from 'components/Page'
import { GlobalStyles } from 'components/GlobalStyles'

import { HeaderSection } from './sections/Header/Header'
import { ContactSection } from './sections/Contact/Contact'
import { SkillsSection } from './sections/Skills/Skills'
import { ExperienceSection } from './sections/Experience/Experience'
import { EducationSection } from './sections/Education/Education'
import { AboutSection } from './sections/About/About'
import { FooterSection } from './sections/Footer/Footer'

export const App = () => {
    return (
        <Document>
            <Page>
                <HeaderSection />
                <ContactSection />
                <SkillsSection />
                <ExperienceSection />
            </Page>
            <Page>
                <EducationSection />
                <AboutSection />
                <FooterSection />
            </Page>

            <GlobalStyles />
        </Document>
    )
}
