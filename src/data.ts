import * as dotenv from 'dotenv'

dotenv.config()

export const data = {
    personalData: {
        phoneNumber: process.env.PHONE,
        address: process.env.ADDRESS,
        city: 'Katowice, Poland',
        email: 'me@iama.re',
        websiteLink: 'about.are1000.dev',
        githubLink: 'github.com/are',
        linkedinLink: 'linkedin.com/in/are1000',
    },
    skills: [
        ['JavaScript (ES2019)', 'TypeScript', 'Node.js', 'HTML5', 'CSS3 (Flexbox, Grid)'],
        ['React', 'RxJS', 'effector', 'Ramda', 'karma', 'Jest', 'TDD'],
        ['Express', 'Koa', 'MongoDB', 'RethinkDB', 'Socket.io', 'oclif'],
        ['git', 'npm', 'yarn', 'GNU/Linux', 'Ubuntu', 'Windows 10'],
        ['webpack', 'parcel', 'babel', 'prettier', 'standard', 'eslint'],
    ],
    wants: ['vue', 'elm', 'CSS Houdini', 'wasm', 'python', 'rust'],
    interests: [
        'Programming Language Design (PEG, Bison, Context-free grammar)',
        'Functional Programming (Category theory, type systems)',
    ],
    education: [
        {
            name: 'Juliusz Słowacki High School (I LO) in Chorzów',
            date: '2012 - 2015',
            classes: ['maths', 'biology', 'chemistry'],
        },
    ],
    experience: [
        {
            name: 'Auto1',
            position: 'Senior Software Developer',
            url: 'https://auto1.com',
            date: 'June 2019 - now',
            skills: ['React', 'TypeScript', 'flow', 'node.js', 'AWS', 'effector', 'lerna'],
            description: `Worked on many different projects, including front-end, UX and back-end.
                (multiple systems with tens of thousands of visits daily). Developed internal tools
                and libraries for other developers to use.`,
        },
        {
            name: 'Indio',
            position: 'JavaScript Developer',
            url: 'https://useindio.com',
            date: 'May 2018 - February 2019',
            skills: ['React', 'Redux', 'RxJS', 'Sass', 'AngularJS', 'emotion'],
            description: `Worked on solution for application and renewal
                process in insurance industry.`,
        },
        {
            name: 'inSolutions',
            position: 'JavaScript Developer',
            url: 'https://www.insolutions.pl/',
            date: 'July 2017 - May 2018',
            skills: ['React', 'Redux', 'Node.js', 'Koa', 'MongoDB'],
            description: `Created SaaS that allowed clients to
                track assets using BLE technology.`,
        },
        {
            name: 'Kambu',
            position: 'Front-end Developer',
            url: 'https://www.kambu.pl',
            date: '2017',
            skills: ['React', 'Redux'],
            description: `Ported CMS based website from PHP to React.`,
        },
        {
            name: 'Railwaymen',
            position: 'Back-end Developer',
            url: 'https://railwaymen.org/',
            date: '2016',
            skills: ['Node.js', 'Braintree', 'Amazon AWS'],
            description: `Created a service that allowed resumable downloads.
                Integrated Braintree platform into an existing application.`,
        },
        {
            name: 'Fingoweb',
            position: 'JavaScript Developer',
            url: 'https://www.fingoweb.com',
            date: '2015',
            skills: ['Node.js', 'React', 'Flummox', 'RethinkDB'],
            description: `Developed an application that handled PSD files to simplify
                communication between clients, designers and programmers.`,
        },
    ],
    about: [
        `My goal in life is to design and build tools for humans, but my biggest dream is to create unforgettable video games.`,
        `My interests include music (I play drums), audiovisual arts, amateur embedded systems (like Raspberry Pi or Arduino), programming
            language design, functional programming, category theory, and type systems.`,
        `I try to stay up to date with rapidly expanding JavaScript universe through dev communities, podcasts and open-source.
            Currently, I am interested in learning Rust and start using Elm in production.`,
        `One of my strongest suits is the ability to focus on a task to solve it efficiently using readable and elegant code.
            I have a lot of experience working with international teams and I feel most productive when working with diverse teams.
            I'm always looking for opportunities to improve myself.`,
    ],
    footer: `I hereby give consent for my personal data included in my application to be processed for the purposes
        of the recruitment process under the Regulation (EU) 2016/679 of the European Parliament and of the
        Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal
        data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection
        Regulation).`,
}
