export const state = () => ({
  locales: [
    { code: 'es', name: 'header.languages.es' },
    { code: 'en', name: 'header.languages.en' }
  ],
  locale: 'es',

  sections: [
    { anchor: 'section-1', section: 'Main', name: 'header.sections.main', color: 'teal', icon: 'home' },
    { anchor: 'section-2', section: 'Certification', name: 'header.sections.certifications', color: 'green', icon: 'book' },
    { anchor: 'section-3', section: 'Experience', name: 'header.sections.experience', color: 'blue', icon: 'work' },
    { anchor: 'section-4', section: 'Skill', name: 'header.sections.skills', color: 'green', icon: 'filter_5' },
    { anchor: 'section-5', section: 'Project', name: 'header.sections.projects', color: 'amber', icon: 'dashboard' },
    { anchor: 'section-6', section: 'Github', name: 'header.sections.github', color: 'lime', icon: 'mdi-github-circle' },
    { anchor: 'section-7', section: 'Blog', name: 'header.sections.blog', color: 'indigo', icon: 'book' },
  ],

  experience: [
    {
      name: 'Tugesto',
      date: '02/2018 – Now',
      dateCalc: 'experience.tugesto.dateCalc',
      position: 'experience.tugesto.position',
      description: 'experience.tugesto.description',
      skills: 'experience.tugesto.skills',
      image: 'image/experience/logo_tugesto.png'
    },
    {
      name: 'INTEGRA Consultores',
      date: '10/2015 – 02/2018',
      dateCalc: 'experience.integra.dateCalc',
      position: 'experience.integra.position',
      description: 'experience.integra.description',
      skills: 'experience.integra.skills',
      image: 'image/experience/integra.jpg'
    },
    {
      name: 'Universo Langur',
      date: '01/2015 – 04/2015',
      dateCalc: 'experience.langur.dateCalc',
      position: 'experience.langur.position',
      description: 'experience.langur.description',
      skills: 'experience.langur.skills',
      image: 'image/experience/langur.jpg'
    },
  ],

  certification: [
    {
      name: 'certifications.master.name',
      date: '2016 - 2017', image: 'image/uji.png',
      institution: 'Universitat Jaume I',
      subjects: [
        { code: 'SIU010', strong: false, title: 'certifications.master.SIU010' },
        { code: 'SIU012', strong: true, title: 'certifications.master.SIU012' },
        { code: 'SIU021', strong: true, title: 'certifications.master.SIU021' },
        { code: 'SIU027', strong: true, title: 'certifications.master.SIU027' },
        { code: 'SIU050', strong: true, title: 'certifications.master.SIU050' },
        { code: 'SIU014', strong: false, title: 'certifications.master.SIU014' },
        { code: 'SIU020', strong: false, title: 'certifications.master.SIU020' },
        { code: 'SIU022', strong: false, title: 'certifications.master.SIU022' },
        { code: 'SIU025', strong: false, title: 'certifications.master.SIU025' },
        { code: 'SIU026', strong: false, title: 'certifications.master.SIU026' },
        { code: 'SIU029', strong: true, title: 'certifications.master.SIU029' },
        { code: 'SIU035', strong: false, title: 'certifications.master.SIU035' },
        { code: 'SIU037', strong: false, title: 'certifications.master.SIU037' },
        { code: 'SIU038', strong: false, title: 'certifications.master.SIU038' },
        { code: 'SIU040', strong: false, title: 'certifications.master.SIU040' },
        { code: 'SIU045', strong: true, title: 'certifications.master.SIU045' },
        { code: 'SIU048', strong: true, title: 'certifications.master.SIU048' },
      ]
    },
    {
      name: 'certifications.degree.name',
      date: '2012 - 2016', image: 'image/uji.png',
      institution: 'Universitat Jaume I',
      subjects: [
        { code: 'EI1001', strong: true, title: 'certifications.degree.EI1001' },
        { code: 'EI1002', strong: false, title: 'certifications.degree.EI1002' },
        { code: 'EI1003', strong: true, title: 'certifications.degree.EI1003' },
        { code: 'EI1004', strong: false, title: 'certifications.degree.EI1004' },
        { code: 'EI1005', strong: false, title: 'certifications.degree.EI1005' },
        { code: 'EI1006', strong: true, title: 'certifications.degree.EI1006' },
        { code: 'EI1007', strong: false, title: 'certifications.degree.EI1007' },
        { code: 'EI1008', strong: true, title: 'certifications.degree.EI1008' },
        { code: 'EI1009', strong: false, title: 'certifications.degree.EI1009' },
        { code: 'EI1010', strong: false, title: 'certifications.degree.EI1010' },
        { code: 'EI1011', strong: true, title: 'certifications.degree.EI1011' },
        { code: 'EI1012', strong: true, title: 'certifications.degree.EI1012' },
        { code: 'EI1013', strong: true, title: 'certifications.degree.EI1013' },
        { code: 'EI1014', strong: false, title: 'certifications.degree.EI1014' },
        { code: 'EI1015', strong: false, title: 'certifications.degree.EI1015' },
        { code: 'EI1016', strong: false, title: 'certifications.degree.EI1016' },
        { code: 'EI1017', strong: true, title: 'certifications.degree.EI1017' },
        { code: 'EI1018', strong: false, title: 'certifications.degree.EI1018' },
        { code: 'EI1019', strong: false, title: 'certifications.degree.EI1019' },
        { code: 'EI1020', strong: true, title: 'certifications.degree.EI1020' },
        { code: 'EI1021', strong: false, title: 'certifications.degree.EI1021' },
        { code: 'EI1022', strong: true, title: 'certifications.degree.EI1022' },
        { code: 'EI1023', strong: false, title: 'certifications.degree.EI1023' },
        { code: 'EI1024', strong: true, title: 'certifications.degree.EI1024' },
        { code: 'EI1025', strong: true, title: 'certifications.degree.EI1025' },
        { code: 'EI1026', strong: false, title: 'certifications.degree.EI1026' },
        { code: 'EI1027', strong: false, title: 'certifications.degree.EI1027' },
        { code: 'EI1028', strong: true, title: 'certifications.degree.EI1028' },
        { code: 'EI1031', strong: true, title: 'certifications.degree.EI1031' },
        { code: 'EI1032', strong: true, title: 'certifications.degree.EI1032' },
        { code: 'EI1035', strong: false, title: 'certifications.degree.EI1035' },
        { code: 'EI1039', strong: false, title: 'certifications.degree.EI1039' },
        { code: 'EI1040', strong: false, title: 'certifications.degree.EI1040' },
        { code: 'EI1041', strong: true, title: 'certifications.degree.EI1041' },
        { code: 'EI1048', strong: false, title: 'certifications.degree.EI1048' },
        { code: 'EI1049', strong: true, title: 'certifications.degree.EI1049' },
        { code: 'EI1050', strong: true, title: 'certifications.degree.EI1050' },
        { code: 'EI1054', strong: true, title: 'certifications.degree.EI1054' },
      ]
    },
    {
      name: 'certifications.school.name',
      date: '2010 - 2012', image: 'image/honori.gif',
      institution: 'IES Honori García',
      subjects: [],
      description: 'certifications.school.description',
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
    { level: 3, name: 'NodeJs', type: 'f', image: 'image/skills/node.png' },
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
      description: 'projects.datathon2017.description',
      technologies: 'projects.datathon2017.technologies',
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
      description: 'projects.hackathon2016.description',
      technologies: 'projects.hackathon2016.technologies',
    },
  ],
})

export const mutations = {
  SET_LANG(state, locale) {
    state.locale = locale
  }
}
