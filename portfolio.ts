import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Somboon Nontaganok',
  title: "Hi all, I'm Somboon",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with MERN Stack and AWS Cloud Technology",
  resumeLink:
    'https://docs.google.com/document/d/13IEYjhoqn0wml0Afk9OcARlS9e2-fNPLhGjKnve7rkA/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'somboonnontaganok',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://front-end-binary-b1-git-main-somboonnontaganok.vercel.app//',
  linkedin: 'https://www.linkedin.com/in/somboon-nontaganok/',
  github: 'https://github.com/somboonnontaganok',
  instagram: 'https://www.instagram.com/somboonnontaganok/',
  facebook: 'https://www.facebook.com/profile.php?id=100080588995296',
  twitter: 'https://twitter.com/nontaganok',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK AND CLOUD ENGINEER',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Express Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'AWS Clound Engineer',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on AWS cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
      ],
    },
    
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '85',
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Chulalongkorn University',
    subHeader: 'Master of Science in Petrochemistry',
    duration: 'June 1988 - November 1991',
    desc: 'Improve Cetane Number of Diesel Oil by Tetrazole Derivative.',
    grade: '3.20',
    descBullets: [
      'I discovered this project by Chemical Abstract and Patent for three momths before working.',
      'I have synthesized ten tetrazole derivatives.',
    ],
  },
  {
    schoolName: 'Generation Thailand',
    subHeader: 'Cirtificate of Junior Software Developer Cohort 4',
    duration: 'Feb 2023 - May 2023',
    desc: 'Binary Tree Project (Activity Tracking',
    grade: '95.65%',
    descBullets: [
      'I work hard to study and practice every day. And I became a good Junior Software Developer.',
      'I am now well versed in frontend and backend with the MERN Stack.',
    ],
  },
  {
    schoolName: 'The Master Academy',
    subHeader: 'I am an AWS re/Start THBAN1 Junior Cloud Engineer learner in Thailand.',
    duration: 'May 2023 - August 2023',
    desc: 'Learning from 18:00 - 22:00 and  will end at the end of August 2023',
    grade: '97.67% cumulative score',
    descBullets: [
      'I work hard to study and practice every day. And I hope to be a good AWS Cloud Engineer.',

    ],
  }
];

export const experience: ExperienceType[] = [
  {
    role: 'IT System Specialist',
    company: 'The Siam Cement Public Company Limited',
    companyLogo: '/img/icons/common/SCG.jpeg',
    date: 'October 2016 - July 2021',
    desc: 'Problem solving: silo management project. Inspection of startup project before sending to Customer',
  },
  {
    role: 'Project Manager',
    company: 'SCG Chemicals',
    companyLogo: '/img/icons/common/SCG.jpeg',
    date: 'January 2013 - September 2016',
    desc: 'Problem solving: Authorization database management.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/somboonnontaganok/poon-portfolio',
    link: 'https://poon-portfolio.vercel.app/',
  },
  {
    name: 'Binary Tree Fit',
    desc: 'Full stack software developer with activity tracker .',
    github: 'https://github.com/somboonnontaganok/Front-end-binary-b1',
    link: 'https://front-activity-beta.vercel.app/',
  },
];



// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Somboon Nontaganok',
  description:
    'A passionate Full Stack Web Developer and AWS Cloud Engineer.',
  author: 'Somboon Nontaganok',
  image: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg',
  url: 'https://front-activity-beta.vercel.app/',
  keywords: [
    'Somboon',
    'Somboon Nontaganok',
    '@nontaganok',
    'nontaganok',
    'Portfolio',
    'Somboon Portfolio ',
    'Somboon Nontaganok Portfolio',
  ],
};
