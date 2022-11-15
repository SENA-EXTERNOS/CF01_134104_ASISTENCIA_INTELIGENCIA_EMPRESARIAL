<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Empresa 

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3.mt-5.m-top-img
            figure
              img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 Las empresas son entes económicos que, gracias a la cohesión de recursos y coordinación de esfuerzos para el logro de los objetivos, son fuente de ingreso para trabajadores, proveedores, gobierno y empresarios, promoviendo el desarrollo económico de la sociedad.
            
    <Separador></Separador>
    #t_2_1.titulo-segundo.color-acento-contenido.mt-5
      h2 2.1 Tipologías

    p.mt-5.mb-5 Las tipologías de las organizaciones corresponden a características específicas que las relacionan y agrupan en cuanto al tamaño, actividad, origen de capital y, de acuerdo con su forma jurídica o tipo de sociedad. A continuación, abordaremos cada una de estas tipologías:
    
    .row.align-items-end.bg3.h4.p-3 Tamaño
    .row.justify-content-center 
      .col-md-10.mb-5  
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4                
            p La magnitud de la empresa estaba dada por la cantidad de colaboradores en actividad, pero, a partir del mes de junio de 2019, el Gobierno Nacional mediante el Decreto 957 de 2019, definió que el criterio único de clasificación del tamaño de las empresas, corresponde a sus ingresos por actividades ordinarias, entrando en vigencia, en diciembre del mismo año.

      .col-md-10
        .tarjeta.color-tarjeta-descargas.p-3.mt-5.mb-5
          .row.justify-content-md-center
            .col-1.mt-3
                img(src="@/assets/curso/temas/tema2/img2.png")
            .col-md-7
                h3.mt-3.text-white Decreto 957 de 2019
                p.text-small.text-white Para conocer esta clasificación, lo invitamos a leer el Decreto 957 de 2019.
            .col-lg-1.mt-4
                a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Caso de estudio empresarial.pdf')" target="_blank")                
                  span Descargar
                  i.fas.fa-file-download 

    .row.align-items-end.bg3.h4.p-3 Actividad
    p.mt-5.mb-5  Los sectores económicos son una división de la actividad económica de un territorio. En Colombia, son cuatro los sectores económicos: primario, secundario, terciario y cuaternario.
    p.mb-5 A continuación, se describen cada uno de los sectores económicos:

    .col-md-12
      TabsA.color-acento-botones.mt-5.mb-5
        .tarjeta.color-borde-slider.color-slider.p-4(titulo="Sector primario")
          .row.justify-content-center
            .col-md-7
              p Está dedicado a la explotación de la tierra o a la explotación de los recursos naturales, ya sean renovables o no renovables. 
            .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img3.png' alt='')             
        .tarjeta.color-borde-slider.color-slider.p-4(class="small-text" titulo="Sector secundario")
          .row.justify-content-center
            .col-md-7
              p Se basa en la producción de bienes, mediante la transformación o extracción de materias primas. 
            .col-md-5 
              figure
                  img(src='@/assets/curso/temas/tema2/img4.png' alt='')                          
                  
        .tarjeta.color-borde-slider.color-slider.p-4(titulo="Sector terciario")
          .row.justify-content-center
            .col-md-7
              p Se ofertan servicios intangibles a disposición de la comunidad en general. 
            .col-md-5 
                figure
                    img(src='@/assets/curso/temas/tema2/img5.png' alt='')  

        .tarjeta.color-borde-slider.color-slider.p-4(titulo="Sector cuaternario")
          .row.justify-content-center
            .col-md-7
              p Son las actividades intelectuales asociadas con el gobierno, la cultura, las bibliotecas, la investigación científica, la educación y la tecnología de la información. 
            .col-md-5 
                figure
                    img(src='@/assets/curso/temas/tema2/img6.png' alt='') 

    .row.align-items-end.bg3.h4.p-3 Origen de capital  
    p.mt-3 Según el origen del capital correspondiente a la inversión original para dar inicio a la operación de la empresa esta puede ser privada, pública, si el capital proviene del Estado, o mixta si el capital aportado proviene de socios que pueden ser personas naturales o jurídicas y de entidades del Estado, simultáneamente.                                            

    .row.justify-content-center.mt-5.mb-5
      .col-md-10
        .bloque-texto-g.color-acento-contenido.p-2.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img7.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-ancho.p-3
            p “Las sociedades de economía mixta se sujetan a las reglas del derecho privado y a la jurisdicción ordinaria, salvo disposición legal en contrario” #[span.text-bold (Art. 461 del Código de Comercio).]

    .row.align-items-end.bg3.h4.p-3 Según su forma jurídica 

    p.mt-5.mb-5 Hace referencia a la constitución legal que se realiza de la empresa y en qué tipo de sociedad se convierte la organización al ser legalmente constituida, asumiendo unas características que la identifican, así como unas responsabilidades legales y fiscales, ante el Estado. 
    p.mb-5 A continuación, se presentan los diferentes tipos de sociedades o formas jurídicas existentes:

      ImagenInfografica.color-acento-botones.mt-5
        template(v-slot:imagen)
          .row.justify-content-center
            .col-sm-10  
              figure 
                img(src='@/assets/curso/temas/tema2/img8.png', alt='alt')                
        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="41%" y="2%" numero="+")  
          .row.justify-content-center 
            p.p-4.text-small En las empresas de responsabilidad limitada, los socios responderán hasta por el monto del capital aportado. En los estatutos podrá estipularse para todos o algunos de los socios, una mayor responsabilidad, prestaciones accesorias o garantías suplementarias, expresándose su naturaleza, cuantía, duración y modalidades.
                                        
        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="70%" y="17%" numero="+" )
          .row.justify-content-center 
            p.p-4.text-small Esta sociedad se forma por la reunión de un fondo social suministrado por accionistas responsables hasta el monto de sus respectivos aportes. Esta será administrada por gestores temporales y revocables y tiene una denominación seguida de las palabras "Sociedad Anónima" o de las letras S.A.
                                        
        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="82%" y="41%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Tiene como objetivo la producción, comercialización y distribución de bienes básicos de consumo familiar, o la prestación de servicios individuales o conjuntos de sus miembros. Sus asociados aportan su capacidad laboral por tiempo indefinido y algunos, además, aportan alguna destreza tecnológica o el conocimiento necesario para el cumplimiento de los objetivos de la empresa. 

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="67%" y="65%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Todos los socios de la entidad, en colectivo, responderán solidaria e ilimitadamente por las operaciones sociales.

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="67%" y="65%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Todos los socios de la entidad, en colectivo, responderán solidaria e ilimitadamente por las operaciones sociales.            

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="51%" y="82%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Creada en la legislación colombiana por la Ley 1258 de 2008. Para efectos tributarios, se rige por las reglas aplicables a las sociedades anónimas. La podrán constituir una o varias personas naturales o jurídicas, quienes serán responsables únicamente hasta por el monto de sus respectivos aportes. 
        
        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="24%" y="65%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Se formará siempre entre uno o más socios que comprometen solidaria e ilimitadamente su responsabilidad por las operaciones sociales, denominados socios gestores, y otro o varios socios que limitan la responsabilidad a sus respectivos aportes, reconocidos como socios comanditarios. 

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="14%" y="41%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Se forma siempre entre uno o más socios que comprometen solidaria e ilimitadamente su responsabilidad por las operaciones sociales reconocidos como socios gestores, y otro o varios socios que limitan la responsabilidad a sus respectivos aportes denominados socios comanditarios. 

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="21%" y="20%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small La sociedad unipersonal no existe como consecuencia de la creación de las S.A.S.; lo que existe es la Empresa Unipersonal, creada por la ley 222 de 1995, que no tiene la característica de sociedad (Gerencie.com, s.f.).

      .row.justify-content-center 
        .col-md-10.mb-5  
          .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
            .row.justify-content-center.p-4                
              p La sociedad es la reunión de personas naturales o jurídicas que unen sus esfuerzos bajo una figura legal, constituida mediante escritura pública y cumpliendo con todos los requisitos de ley para su creación, bajo la cual se asigna un nombre que debe quedar instaurado en todos los estamentos relacionados con la constitución de la empresa y que debe declarar, con claridad, el tipo de responsabilidad a que corresponde. 

    <Separador></Separador>
    #t_2_2.titulo-segundo.color-acento-contenido.mt-5
      h2 2.2 Estructura organizacional

    p.mt-5.mb-5 Conociendo los objetivos que se plantea una empresa, es preciso definir la necesidad de contar con un equipo de trabajo claramente establecido y consciente de las funciones, responsabilidades y alcance de su labor, en el cargo o puesto de trabajo. Para definirlas, es necesario conocer la estructura organizacional denominada también como organigrama o esquema organizacional, que fundamenta el quehacer de la organización. 
    p.mb-5 Las principales áreas funcionales de la organización son:    


    .row.justify-content-center 
        .col-md-8  
          ImagenInfografica.color-acento-botones.mt-5
            template(v-slot:imagen)
              .row.justify-content-center
                .col-sm-10  
                  figure 
                    img(src='@/assets/curso/temas/tema2/img9.png', alt='alt')                
            .cajon.color-acento-botones.tarjeta-second-color.p-4(x="54%" y="1%" numero="+")  
              .row.justify-content-center 
                p.p-4.text-small Esta área está ligada directamente a la razón de ser de la empresa o su misión. En ella se transforma la materia prima en productos terminados, optimizando y garantizando la calidad de los recursos en el proceso productivo, cumpliendo con los estándares de calidad y satisfacción del cliente.
                                            
            .cajon.color-acento-botones.tarjeta-second-color.p-4(x="90%" y="38%" numero="+" )
              .row.justify-content-center 
                p.p-4.text-small Es el área encargada de buscar el talento humano que permitirá llevar a cabo el cumplimiento de objetivos de la organización, a partir de la definición de estrategias para la productividad, ligada a los planes de beneficios, orientados al personal o equipo de trabajo de toda la organización.
                                            
            .cajon.color-acento-botones.tarjeta-second-color.p-4(x="78%" y="84%" numero="+")
              .row.justify-content-center 
                p.p-4.text-small Esta área direcciona los esfuerzos hacia la planificación y diseño de nuevos productos, conforme con las necesidades del cliente y las tendencias del mercado. Define las estrategias de marketing a implementar, según el mercado o segmento, para la captación de clientes mediante una comunicación estratégica.

            .cajon.color-acento-botones.tarjeta-second-color.p-4(x="21%" y="85%" numero="+")
              .row.justify-content-center 
                p.p-4.text-small Es reconocida como alta gerencia, gerencia, dirección, administración, entre otros. En ella se define el rumbo de la empresa, es decir, se establece lo que se quiere lograr, a través de su operación u objetivos; se toman decisiones acerca del rumbo de esta y se dirigen las operaciones que debe desarrollar para alcanzar lo planteado.

            .cajon.color-acento-botones.tarjeta-second-color.p-4(x="12%" y="33%" numero="+")
              .row.justify-content-center 
                p.p-4.text-small Se registran todas las operaciones que realiza la empresa y es responsable de los recursos monetarios y financieros que esta posee; aquí se maximizan los recursos obtenidos por la empresa a través de las inversiones. En esta área, se elaboran los informes financieros y se cumple con las obligaciones fiscales.

    p.mt-5.mb-5 En las grandes empresas y dependiendo de su tamaño, se cuenta con otros departamentos como: innovación, tecnología y servicio al cliente.            

    .row.align-items-end.bg3.h4.p-3 Estructura orgánica

    .row.justify-content-center 
        .col-md-10.mb-5  
          .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
            .row.justify-content-center.p-4                
              p Gracias a la división del trabajo y a la departamentalización, se hace necesario definir una estructura organizacional u orgánica que responda a las necesidades de la empresa e incluya las unidades administrativas requeridas para garantizar su operación exitosa, de manera que refleje la forma en que se dará la integración entre las mismas.

    p.mt-5.mb-5  Los organigramas son representaciones gráficas de la estructura formal de una organización, mostrando la interrelación, niveles jerárquicos, obligaciones y autoridad. Se encuentran clasificados de la siguiente manera:


    .row.justify-content-center 
        .col-md-8.mb-5 
          p.bg4.ml.text-figuras.mt-5.mb-4 #[span.text-bold Figura 5.]  Tipos de organigramas
          figure 
            img(src='@/assets/curso/temas/tema2/img10.png', alt='alt')
          .cajon.tarjeta-nota-img.mb-5
            .row.justify-content-center.m-2
              p.m-2 #[span.text-bold Nota.] Tomado y adaptado de Salgado, Guerrero & Salgado (2016).   

    p.mt-5.mb-5  A continuación, se presenta un ejemplo de un organigrama funcional:  

    .row.justify-content-center 
        .col-md-8.mb-5 
          p.bg4.ml.text-figuras.mt-5.mb-4 #[span.text-bold Figura 6.]  Tipos de organigramas
          figure 
            img(src='@/assets/curso/temas/tema2/img11.png', alt='alt')
          .cajon.tarjeta-nota-img.mb-5
            .row.justify-content-center.m-2
              p.m-2 #[span.text-bold Nota.] Tomado y adaptado de Salgado, Guerrero & Salgado (2016). 

    .row.align-items-end.bg3.h4.p-3 Recursos 

    p.mt-5.mb-5 La operación de la empresa requiere necesariamente, de una serie de recursos que, elegidos y combinados de manera adecuada, se integrarán armoniosamente, garantizando el logro de los objetivos. Entre ellos se encuentran los recursos financieros, materiales, humanos y técnicos.
    p.mb-5 A continuación, se detalla más sobre cada uno de estos recursos:

    .col-md-12.mb-5 
      figure 
        img(src='@/assets/curso/temas/tema2/img12.png', alt='alt') 

    .row.align-items-end.bg3.h4.p-3 Manual de funciones 
    p.mt-5.mb-5   Los manuales de funciones son documentos elaborados, basados en la estructura organizacional que contiene las características, interrelación entre órganos, unidades y puestos de trabajo, donde se reflejan la jerarquía, los grados de autoridad y responsabilidad, y las líneas de comunicación establecidas. Este tema permite evidenciar la dinámica de la organización, mediante los procesos y procedimientos que cada puesto de trabajo debe afrontar, definiendo las reglas de ejecución, el diagrama de operación, y los formatos correspondientes.         

    .row.justify-content-center.mt-5.mb-5
      .col-md-10
        .bloque-texto-g.color-acento-contenido.p-2.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img13.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-ancho.p-3
            p Los elementos del manual de funciones son: el nombre del cargo o puesto de trabajo, el objetivo, cantidad de cargos en la entidad, área a la que pertenece, cargo a quien reporta o depende, alcance, funciones a desarrollar, recursos requeridos para su desempeño, requisitos para ocupar el cargo o competencias requeridas para su desempeño, así como también, conocimientos, habilidades, formación y experiencia.

    .row.align-items-end.bg3.h4.p-3 Responsabilidad social empresarial
    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-7.mb-3
            p.mt-5 La Responsabilidad Social Empresarial (RSE), es la política que le permite a la empresa impactar positivamente el entorno al que pertenece, sumado a que, es una estrategia inherente a la empresa, convertida en una nueva forma de gestión y de hacer negocios, donde la empresa se ocupa para que sus operaciones sean sustentables en lo económico, social y ambiental, reconociendo los intereses de los distintos grupos con los que se relaciona, y buscando la preservación del medio ambiente y la sustentabilidad de las generaciones futuras.
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema2/img14.png", alt="alt")

    p.mt-5.mb-5 La RSE está compuesta por principios y líneas estratégicas que podrá conocer a continuación:

    .row.justify-content-center.bg2.mg-img.mt-5.mg-img-final  
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-gris color-borde-slider").mt-5
        .row(titulo="RSE")
          p Se define como una visión de negocios que integra el respeto por las personas, los valores éticos, la comunidad y el medio ambiente, con la gestión misma de la empresa, independientemente de los productos o servicios que esta ofrece, del sector al que pertenece, de su tamaño o su nacionalidad.

        div(titulo="Principios")
          p Los principios de la Responsabilidad Social Empresarial son: respeto a la dignidad de la persona, empleo digno, solidaridad, subsidiariedad, contribución al bien común, corresponsabilidad, confianza, ética en los negocios, prevención de negocios ilícitos, vinculación con la comunidad, transparencia, honestidad y legalidad, justicia y equidad, empresarialidad y desarrollo social.

        div(titulo="Líneas estratégicas")
          p La RSE es reconocida al realizar acciones encaminadas a la justicia dentro y fuera de la organización, al estar enmarcadas en las siguientes líneas estratégicas:
            ol.lista-ol--cuadro
            li Ética y gobernabilidad empresarial. 
            li Calidad de vida en la empresa (dimensión social del trabajo). 
            li Vinculación y compromiso con la comunidad y su desarrollo. 
            li Cuidado y preservación del medioambiente.           


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
