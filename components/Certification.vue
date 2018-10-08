<template>
  <v-container>
    <h2 class="display-2 pb-4">Certification</h2>

    <v-expansion-panel popout>
      <v-expansion-panel-content class="pa-2" v-for="(item, index) in certification" :key="index">
        <v-layout align-center slot="header">
          <v-avatar size="100" tile class="pr-3 hidden-xs-only">
            <img class="" :src="item.image" alt="avatar">
          </v-avatar>
          <div class="pl-1">
            <h3 class="display-1"><b>{{item.name}}</b></h3>
            <h4 class="headline">({{item.date}}) {{item.institution}}</h4>
          </div>
        </v-layout>
        <v-divider></v-divider>
        <v-card>
          <v-card-text>
            <v-layout row wrap align-center v-if="item.subjects.length > 0">
              <v-flex xs12>
                <p class="title">Subjects:</p>
              </v-flex>
              <v-flex class="subheading" xs12 sm4 xl3 px-1 v-for="subject in orderByCode(item.subjects)" :key="subject.code">
                <span v-if="subject.strong">- <strong>{{subject.title}}</strong></span>
                <span v-else>- {{subject.title}}</span>
              </v-flex>
            </v-layout>
            <v-layout v-else>
              <p class="title justifyText" v-html="item.description"></p>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
import _ from 'lodash'

export default {

  data() {
    return {
      certification: [
        {
          name: 'Master in Intelligent Systems',
          date: '2016 - 2017', image: 'image/uji.png',
          institution: 'Universitat Jaume I',
          subjects: [
            // { code: 'SIU010', strong: false, title: 'Reconocimiento de Formas' },
            // { code: 'SIU012', strong: true, title: 'Percepción Visual' },
            // { code: 'SIU021', strong: true, title: 'Interfaces Multimodales' },
            // { code: 'SIU027', strong: true, title: 'Minería de Datos' },
            // { code: 'SIU050', strong: true, title: 'Trabajo de Final de Máster (Detección de duplicados en un flujo de muestras biométricas)' },
            // { code: 'SIU014', strong: false, title: 'Modelado y Reconstrucción 3D' },
            // { code: 'SIU020', strong: false, title: 'Síntesis de Imagen y Animación' },
            // { code: 'SIU022', strong: false, title: 'Realidad Virtual y Aumentada' },
            // { code: 'SIU025', strong: false, title: 'Ontologías y la Web Semántica' },
            // { code: 'SIU026', strong: false, title: 'Representación del Conocimiento y Razonamiento' },
            // { code: 'SIU029', strong: true, title: 'Sistemas Contextuales' },
            // { code: 'SIU035', strong: false, title: 'Monitorización Remota y Video-Vigilancia' },
            // { code: 'SIU037', strong: false, title: 'Imagen Médica' },
            // { code: 'SIU038', strong: false, title: 'Inteligencia Ambiental' },
            // { code: 'SIU040', strong: false, title: 'Sistemas de Información Estratégica' },
            // { code: 'SIU045', strong: true, title: 'Aprendizaje Automático' },
            // { code: 'SIU048', strong: true, title: 'Integración de Fuentes de Datos Heterogéneas' },

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
            // { code: 'EI1001', strong: true, title: 'Matemáticas I' },
            // { code: 'EI1002', strong: false, title: 'Informática Básica' },
            // { code: 'EI1003', strong: true, title: 'Programación I' },
            // { code: 'EI1004', strong: false, title: 'Estructura de Computadores' },
            // { code: 'EI1005', strong: false, title: 'Inglés' },
            // { code: 'EI1006', strong: true, title: 'Matemáticas II' },
            // { code: 'EI1007', strong: false, title: 'Física' },
            // { code: 'EI1008', strong: true, title: 'Programación II' },
            // { code: 'EI1009', strong: false, title: 'Organización y Gestión de Empresas' },
            // { code: 'EI1010', strong: false, title: 'Arquitectura de Computadores' },
            // { code: 'EI1011', strong: true, title: 'Ampliación de Matemáticas' },
            // { code: 'EI1012', strong: true, title: 'Estadística y Optimización' },
            // { code: 'EI1013', strong: true, title: 'Estructuras de Datos' },
            // { code: 'EI1014', strong: false, title: 'Sistemas Operativos' },
            // { code: 'EI1015', strong: false, title: 'Introducción a Redes' },
            // { code: 'EI1016', strong: false, title: 'Electrónica' },
            // { code: 'EI1017', strong: true, title: 'Programación Avanzada' },
            // { code: 'EI1018', strong: false, title: 'Administración de Sistemas Operativos' },
            // { code: 'EI1019', strong: false, title: 'Administración y Configuración de Redes' },
            // { code: 'EI1020', strong: true, title: 'Bases de Datos' },
            // { code: 'EI1021', strong: false, title: 'Sistemas Distribuidos' },
            // { code: 'EI1022', strong: true, title: 'Algoritmia' },
            // { code: 'EI1023', strong: false, title: 'Fundamentos de Ingeniería del Software' },
            // { code: 'EI1024', strong: true, title: 'Programación Concurrente y Paralela' },
            // { code: 'EI1025', strong: true, title: 'Gráficos y Multimedia' },
            // { code: 'EI1026', strong: false, title: 'Derecho de las Tecnologías de la Información' },
            // { code: 'EI1027', strong: false, title: 'Diseño e Implementación de Sistemas de Información' },
            // { code: 'EI1028', strong: true, title: 'Sistemas Inteligentes' },
            // { code: 'EI1031', strong: true, title: 'Verificación y Validación' },
            // { code: 'EI1032', strong: true, title: 'Análisis de Software' },
            // { code: 'EI1035', strong: false, title: 'Iniciativa Empresarial' },
            // { code: 'EI1039', strong: false, title: 'Diseño de Software' },
            // { code: 'EI1040', strong: false, title: 'Gestión de Proyectos de Ingeniería del Software' },
            // { code: 'EI1041', strong: true, title: 'Diseño e Implementación de Bases de Datos' },
            // { code: 'EI1048', strong: false, title: 'Paradigmas de Software' },
            // { code: 'EI1049', strong: false, title: 'Taller de Ingeniería del Software' },
            // { code: 'EI1050', strong: true, title: 'Métodos Ágiles' },
            // { code: 'EI1054', strong: true, title: 'Prácticas Externas y Proyecto de Final de Grado' },

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
    }
  },

  methods: {
    orderByCode: function(items) {
      return _.orderBy(items, ['code'], ['asc'])
    },
  },

}
</script>

<style>
  .v-expansion-panel__header {
    height: auto !important;
  }
</style>
