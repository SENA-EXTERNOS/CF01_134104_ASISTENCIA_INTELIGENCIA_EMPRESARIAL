export default {
  global: {
    componenteFormativo:
      'Fundamentos de administración, direccionamiento estratégico e inteligencia empresarial',
    descripcionCurso:
      'En este material de estudio se introduce, desde la investigación y el diagnóstico, el tema de la administración, para conocer el entorno y luego desarrollar su fundamento, el proceso administrativo para dar vida a la misma, llegando a la proyección de esta, a través del direccionamiento estratégico. Con el ánimo de mantener vigente a la organización, se desarrolla la inteligencia empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de administración',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipologías',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estructura organizacional',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diagnóstico organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Direccionamiento estratégico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Inteligencia empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Clases, recursos y técnicas',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: '<i>E-commerce</i>',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Plan de mejoramiento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tipologías',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <i>Tipos de sociedades en Colombia</i> (video).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IvTbUlDBrrg ',
    },
    {
      tema: 'Estructura organizacional',
      referencia:
        'Cajiga, J. (s.f.). <i>El concepto de Responsabilidad Social Empresarial.</i>',
      tipo: 'PDF',
      link:
        'https://www.cemefi.org/esr/images/stories/pdf/esr/concepto_esr.pdf',
    },
    {
      tema: 'Inteligencia empresarial',
      referencia:
        'López Benítez, Y. (2018).<i>Business Intelligence. ADGG102PO. IC Editorial.</i>',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/124393?page=10 ',
    },
    {
      tema: 'Empresa',
      referencia: 'Código de Comercio (CC). Artículo 461. Colombia.',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr014.html#:~:text=ART%C3%8DCULO%20461.,salvo%20disposici%C3%B3n%20legal%20en%20contrario. ',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de puestos de trabajo',
      significado:
        'estudio o análisis que determina las actividades, responsabilidades e importancia que tiene el cargo dentro de la organización.',
    },
    {
      termino: 'Autoridad',
      significado: 'facultad para tomar decisiones que producen efectos.',
    },
    {
      termino: 'CRM',
      significado: 'base de datos de clientes de una empresa.',
    },
    {
      termino: 'Dato',
      significado:
        'información cualitativa y cuantitativa, resultado de la recopilación de números o letras, que facilitan una evidencia o deducción científica.',
    },
    {
      termino: 'Delegación',
      significado:
        'consiste en transferir a otra persona la jurisdicción que se tiene, para que realice tareas o conferirle su representación.',
    },
    {
      termino: 'ERP',
      significado: 'base de datos de recursos internos de una empresa.',
    },
    {
      termino: 'Jerarquía',
      significado:
        'nivel de mayor o menor importancia o relevancia en una organización de personas ordenados en una escala ordenada y subordinante según un criterio dentro de la misma.',
    },
    {
      termino: 'Matrices diagnósticas',
      significado:
        'estructuras de datos cuyo objetivo es obtener información acerca de una empresa en si misma, relacionada con los procesos, estructura, manejo de información y todo lo relacionado con la gestión organizacional.',
    },
    {
      termino: 'Poder',
      significado:
        'dominio, facultad y jurisdicción de la que dispone un individuo para mandar o ejecutar. También definida como la capacidad de imponer la propia voluntad sobre los otros.',
    },
    {
      termino: 'Responsabilidad',
      significado:
        'es la obligación de ejecutar una actividad asignada. También conocida como el compromiso auto asumido por una persona, para manejar un trabajo con lo mejor de su habilidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bravo, L., Ramos, P., Tejada, A. & Valenzuela, A. (2019). Perspectiva teórica del diagnóstico organizacional. <i>Revista Venezolana de Gerencia</i>, 24(88). p. 1316-1328. ',
      link: 'https://www.redalyc.org/journal/290/29062051021/html/ ',
    },
    {
      referencia:
        'Cardoso, M. y Poveda, N. (2021). <i>Diagnóstico Organizacional y Plan de Mejoramiento para la Microempresa Modas Milenio del municipio de La Mesa, Cundinamarca</i> (Trabajo de grado, Universidad de Cundinamarca). Repositorio Universidad de Cundinamarca.  ',
      link:
        'https://repositorio.ucundinamarca.edu.co/bitstream/handle/20.500.12558/3761/Diagn%c3%b3stico%20organizacional%20y%20plan%20de%20mejoramiento%20para%20la%20microempresa%20modas%20milenio%20del%20municipio%20de%20La%20Mesa-%20Cundinamarca.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia: 'Código de Comercio (CC). Artículo 461. Colombia. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr014.html#:~:text=ART%C3%8DCULO%20461.,salvo%20disposici%C3%B3n%20legal%20en%20contrario. ',
    },
    {
      referencia:
        'Gerencie.com. (s.f.). <i>Empresa unipersonal en Colombia.</i> Gerencie.com. ',
      link: 'https://www.gerencie.com/empresa-unipersonal.html ',
    },
    {
      referencia:
        'López Benítez, Y. (2018). <i>Business Intelligence. ADGG102PO.</i> IC Editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/124393?page=10 ',
    },
    {
      referencia:
        'Meza, A. (2020). <i>El Diagnóstico Organizacional: elementos, métodos y técnicas.</i> Mi espacio.',
      link:
        'https://www.infosol.com.mx/miespacio/el-diagnostico-organizacional-elementos-metodos-y-tecnicas/',
    },
    {
      referencia:
        'Münch, L. (2014). <i>Administración. Gestión organizacional, enfoques y proceso administrativo (2da ed.).</i> Editorial Pearson Education.',
      link:
        'https://profesorailleanasilva.files.wordpress.com/2015/10/administracic3b3n-lourdes-munch-2a-edicic3b3n.pdf',
    },
    {
      referencia:
        'Palacios, L. (2016). Biblioteca Virtual SENA. Dirección Estratégica. 2a Edición. Ecoe Ediciones. Recuperado de:',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/126524',
    },
    {
      referencia:
        'Pedraza, M., Sastoque, J., Serrano, L. & Tarazona, D. (2015). <i>Diagnóstico Organizacional a 100 Mipymes de Fusagasugá</i> (Trabajo de investigación, Universidad de Cundinamarca). Repositorio Universidad de Cundinamarca. ',
      link:
        'https://repositorio.ucundinamarca.edu.co/bitstream/handle/20.500.12558/1349/DIAGNOSTICO%20ORGANIZACIONAL%20A%20100%20MIPYMES%20DE%20FUSAGASUGA.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Polanco, Y. J., Santos, P. & Cruz, G. A. D. L. (2020). <i>Teoría y estructura organizacional.</i> Universidad Abierta para Adultos (UAPA).',
      link:
        ' https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/175883?page=1',
    },
    {
      referencia:
        'Quiroa, M. (s.f.). <i>Áreas funcionales de una empresa.</i> Economipedia. ',
      link:
        'https://economipedia.com/definiciones/areas-funcionales-de-una-empresa.html#:~:text=Por%20lo%20general%2C%20una%20empresa,de%20finanzas%20y%20de%20marketing',
    },
    {
      referencia:
        'Salgado Benítez, J., Guerrero López, L. & Salgado Hernández, N. (2016). <i>Fundamentos de Administración.</i> Grupo Editorial Éxodo. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/130328 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
