export const state = () => ({
  locales: [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spain' }
  ],
  locale: 'en',

  sections: [
    { anchor: 'section-1', name: 'Main', color: 'teal', icon: 'home' },
    { anchor: 'section-2', name: 'Certification', color: 'green', icon: 'book' },
    { anchor: 'section-3', name: 'Experiencie', color: 'blue', icon: 'work' },
    { anchor: 'section-4', name: 'Skill', color: 'green', icon: 'filter_5' },
    { anchor: 'section-5', name: 'Project', color: 'amber', icon: 'dashboard' },
    { anchor: 'section-6', name: 'Github', color: 'lime', icon: 'mdi-github-circle' },
    { anchor: 'section-7', name: 'Blog', color: 'indigo', icon: 'book' },
  ],

  experiencie: [
    {
      name: 'Tugesto',
      date: '02/2018 – Now',
      dateCalc: '9 months',
      position: '<b>Team leader</b>',
      description: 'Programmer of web pages as <b>full stack developer</b> and <b>team leader</b> in important projects. One project was create a <b>dashboard</b> of statistics for the clients.',
      skills: '<b>Tools and technologies</b>: <b>PHP</b>, <b>Laravel</b>, Lumen, <b>VueJs</b>, <b>Nuxt</b>, Node, Npm, Yarn, SASS, CSS3, HTML5, API Rest, MySQL, GIT and <b>UX/IU</b> (material design).',
      image: 'image/experiencie/logo_tugesto.png'
    },
    {
      name: 'INTEGRA Consultores',
      date: '10/2015 – 02/2018',
      dateCalc: '2 years and 5 months',
      position: '<b>Full Stack Developer</b>',
      description: 'Programmer of web pages as <b>full stack developer</b>. The project was to work together with the client (Unión de Mutuas) to develop a module of its internal management application. This module was the development of the management <b>clinical history</b> of their patients.',
      skills: '<b>Tools and technologies</b>: <b>AngularJS</b>, <b>Java</b>, <b>Spring</b>, CSS3, HTML5, Hibernate, HL7, WSDL, API Rest, SQL Server, Jira, GIT and <b>UX/IU</b> (material design).',
      image: 'image/experiencie/integra.jpg'
    },
    {
      name: 'Universo Langur',
      date: '01/2015 – 04/2015',
      dateCalc: '3 months',
      position: '<b>Full Stack Developer</b>',
      description: 'Programmer of web pages as full stack developer. The project was about adding new features to a hotspot management dashboard.',
      skills: '<b>Tools and technologies</b>: <b>PHP</b>, <b>CakePhp</b>, MySQL, desarrollo ágil, Jira, GIT, jQuery, HTML5 and CSS3.',
      image: 'image/experiencie/langur.jpg'
    },
  ],

  certification: [
    {
      name: 'Master in Intelligent Systems',
      date: '2016 - 2017', image: 'image/uji.png',
      institution: 'Universitat Jaume I',
      subjects: [
        { code: 'SIU010', strong: false, title: 'Pattern recognition' },
        { code: 'SIU012', strong: true, title: 'Visual perception' },
        { code: 'SIU021', strong: true, title: 'Multimodal Interfaces' },
        { code: 'SIU027', strong: true, title: 'Data mining' },
        { code: 'SIU050', strong: true, title: 'Final Master\'s Project (Detection of duplicates in a flow of biometric samples)' },
        { code: 'SIU014', strong: false, title: 'Modeling and 3D Reconstruction' },
        { code: 'SIU020', strong: false, title: 'Synthesis of Image and Animation' },
        { code: 'SIU022', strong: false, title: 'Virtual and Augmented Reality' },
        { code: 'SIU025', strong: false, title: 'Ontologies and the Semantic Web' },
        { code: 'SIU026', strong: false, title: 'Representation of Knowledge and Reasoning' },
        { code: 'SIU029', strong: true, title: 'Contextual Systems' },
        { code: 'SIU035', strong: false, title: 'Remote Monitoring and Video-Surveillance' },
        { code: 'SIU037', strong: false, title: 'Medical Image' },
        { code: 'SIU038', strong: false, title: 'Environmental Intelligence' },
        { code: 'SIU040', strong: false, title: 'Strategic Information Systems' },
        { code: 'SIU045', strong: true, title: 'Machine Learning' },
        { code: 'SIU048', strong: true, title: 'Integration of Heterogeneous Data Sources' },
      ]
    },
    {
      name: 'Degree in Computer Engineering',
      date: '2012 - 2016', image: 'image/uji.png',
      institution: 'Universitat Jaume I',
      subjects: [
        { code: 'EI1001', strong: true, title: 'Mathematics I' },
        { code: 'EI1002', strong: false, title: 'Basic Computing' },
        { code: 'EI1003', strong: true, title: 'Programming I' },
        { code: 'EI1004', strong: false, title: 'Computer Structure' },
        { code: 'EI1005', strong: false, title: 'English' },
        { code: 'EI1006', strong: true, title: 'Mathematics II' },
        { code: 'EI1007', strong: false, title: 'Physical' },
        { code: 'EI1008', strong: true, title: 'Programming II' },
        { code: 'EI1009', strong: false, title: 'Organization and Business Management' },
        { code: 'EI1010', strong: false, title: 'Computer Architecture' },
        { code: 'EI1011', strong: true, title: 'Mathematics expansion' },
        { code: 'EI1012', strong: true, title: 'Statistics and Optimization' },
        { code: 'EI1013', strong: true, title: 'Data structures' },
        { code: 'EI1014', strong: false, title: 'Operating systems' },
        { code: 'EI1015', strong: false, title: 'Introduction to Networks' },
        { code: 'EI1016', strong: false, title: 'Electronics' },
        { code: 'EI1017', strong: true, title: 'Programation advance' },
        { code: 'EI1018', strong: false, title: 'Administration of Operating Systems' },
        { code: 'EI1019', strong: false, title: 'Administration and Network Configuration' },
        { code: 'EI1020', strong: true, title: 'Databases' },
        { code: 'EI1021', strong: false, title: 'Distributed systems' },
        { code: 'EI1022', strong: true, title: 'Algorithmics' },
        { code: 'EI1023', strong: false, title: 'Fundamentals of Software Engineering' },
        { code: 'EI1024', strong: true, title: 'Concurrent and Parallel Programming' },
        { code: 'EI1025', strong: true, title: 'Graphics and Multimedia' },
        { code: 'EI1026', strong: false, title: 'Right of Information Technologies' },
        { code: 'EI1027', strong: false, title: 'Design and Implementation of Information Systems' },
        { code: 'EI1028', strong: true, title: 'Intelligent Systems' },
        { code: 'EI1031', strong: true, title: 'Verification and Validation' },
        { code: 'EI1032', strong: true, title: 'Software Analysis' },
        { code: 'EI1035', strong: false, title: 'Business Initiative' },
        { code: 'EI1039', strong: false, title: 'Software design' },
        { code: 'EI1040', strong: false, title: 'Project Management Software Engineering' },
        { code: 'EI1041', strong: true, title: 'Design and Implementation of Databases' },
        { code: 'EI1048', strong: false, title: 'Software Paradigms' },
        { code: 'EI1049', strong: true, title: 'Software Engineering Workshop' },
        { code: 'EI1050', strong: true, title: 'Agile Methods' },
        { code: 'EI1054', strong: true, title: 'External Practices and Final Degree Project' },
      ]
    },
    {
      name: 'Science and Technology High School',
      date: '2010 - 2012', image: 'image/honori.gif',
      institution: 'IES Honori García',
      subjects: [],
      description: 'This was the beginning of my higher studies. At this time I decided to study a <b>technological scientific branch</b>. Therefore, I began to study applied <b>mathematics</b>, <b>physics</b>, <b>industrial technology</b>, etc.',
    },
  ],

  skills: [
    { level: 5, name: 'Java', type: 'b', image: 'image/skills/java.png' },
    { level: 4, name: 'PHP', type: 'b', image: 'image/skills/php.png' },
    { level: 4, name: 'Laravel', type: 'b', image: 'image/skills/laravel.jpg' },
    { level: 4, name: 'Spring', type: 'b', image: 'image/skills/spring.png' },
    { level: 4, name: 'Hibernate', type: 'b', image: 'image/skills/hibernate.png' },
    { level: 5, name: 'Webservice', type: 'b', image: 'image/skills/wsdl.png' },
    { level: 4, name: 'WSDL', type: 'b', image: 'image/skills/wsdl.png' },
    { level: 3, name: 'HL7', type: 'b', image: 'image/skills/hl7.jpg' },
    { level: 4, name: 'GIT', type: 'b', image: 'image/skills/git.png' },
    { level: 4, name: 'SQL', type: 'b', image: 'image/skills/sql.png' },

    { level: 5, name: 'JavaScript', type: 'f', image: 'image/skills/javascript.png' },
    { level: 4, name: 'HTML5', type: 'f', image: 'image/skills/html5.png' },
    { level: 4, name: 'CSS3', type: 'f', image: 'image/skills/css3.png' },
    { level: 3, name: 'Sass', type: 'f', image: 'image/skills/sass.png' },
    { level: 4, name: 'Npm', type: 'f', image: 'image/skills/npm.png' },
    { level: 3, name: 'Yarn', type: 'f', image: 'image/skills/yarn.png' },
    { level: 3, name: 'Node', type: 'f', image: 'image/skills/node.png' },
    { level: 4, name: 'VueJs', type: 'f', image: 'image/skills/vuejs.png' },
    { level: 4, name: 'AngularJs', type: 'f', image: 'image/skills/angularjs2.png' },
    { level: 4, name: 'jQuery', type: 'f', image: 'image/skills/jquery.png' },
  ],

  projects: [
    {
      name: 'Datathon Cajamar',
      date: '2017',
      link: 'https://datavizuji.firebaseapp.com/',
      image: 'image/projects/datathon.png',
      description: '<p>The objective of the proposed challenge in the Datathon was to create an application to interactively show the data generated by the credit card purchases of Cajamar\'s customers.</p><p>The original dataset contained the zip code of the customer and the trade, the trade sector, the date of the transaction, the time slot, the amount and the number of transactions carried out. To obtain a better score in the challenge, it was necessary to add external sources of data, therefore we added the climatology and the population by postal code of the province of Valencia.</p>',
      technologies: 'Tableau, Knime and Firebase.',
    },
    {
      name: 'Hackathon Castellón',
      date: '2016',
      link: 'http://www.hackathoncastellon.com/',
      image: 'image/projects/hackathon1.png',
      images: [
        'image/projects/hackathon1.png',
        'image/projects/hackathon2.png',
        'image/projects/hackathon3.png',
        'image/projects/hackathon4.png',
        'image/projects/hackathon5.png',
      ],
      description: '<p>In the Hackathon of Castellón we had 48 hours to solve one of the 4 challenges proposed. We participated in a group of 5 colleagues from the university and the challenge we chose was to <b>create an application</b> that helps the user to <b>know a city interactively</b>. For this, we developed a <b>cross-platform application</b> with new technologies that we had not used and thus leave our comfort zone.</p>',
      technologies: 'Ionic 2, Angular 2, Typescript, google maps and Firebase.',
    },
  ],
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
