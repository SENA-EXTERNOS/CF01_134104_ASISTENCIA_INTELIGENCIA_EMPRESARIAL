<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Direccionamiento estratégico
    
    .row.justify-content-center.mb-5
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3.mt-5.m-top-img
            figure
              img(src="@/assets/curso/temas/tema4/img1.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 El direccionamiento estratégico ha sido de gran aporte al desarrollo científico de la administración y, por lo tanto, de las organizaciones; este conglomerado es el resultado de ese avance estratégico, dando a las organizaciones la oportunidad de convertirse en líderes en el mercado al que pertenecen.

    p.mt-5.mb-5   Para ampliar la información, lo invitamos a ver el siguiente video:
    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/XT67xhTTxEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video      
      


    .row.align-items-end.bg3.h4.p-3 Fundamentos de la planeación 
    p.mt-5.mb-5 La planeación es la primera etapa de la administración y se constituye como un proceso mediante el cual se busca aumentar la probabilidad de resultados futuros deseados sobre la probabilidad de ocurrencia al azar; en ella se determina lo que se va a hacer, las decisiones que se deben tomar, se establecen políticas, se definen métodos específicos, procedimientos y se construyen células de trabajo, entre otras.
    p.mb-5 La planeación puede ser:

    .col-md-12
      TabsA.color-acento-botones.mt-5.mb-5
        .tarjeta.color-borde-slider.color-slider.p-4(titulo="Estratégica")
          .row.justify-content-center
            .col-md-7
              p Se rige por la obtención, uso y disposición de los medios necesarios para alcanzar los objetivos generales de la organización.
            .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema4/img2.png' alt='')             
        .tarjeta.color-borde-slider.color-slider.p-4(class="small-text" titulo="Funcional")
          .row.justify-content-center
            .col-md-7
              p Determina planes más específicos que se refieren a cada una de las áreas de la empresa y se subordinan a los planes estratégicos. 
            .col-md-5 
              figure
                  img(src='@/assets/curso/temas/tema4/img3.png' alt='')                          
                  
        .tarjeta.color-borde-slider.color-slider.p-4(titulo="Operativa")
          .row.justify-content-center
            .col-md-7
              p Consiste en la formulación y asignación de actividades detalladas que deben ejecutar los últimos niveles jerárquicos de la empresa.
            .col-md-5 
                figure
                    img(src='@/assets/curso/temas/tema4/img4.png' alt='') 

      .row.align-items-end.bg3.h4.p-3 Etapas de la planeación
      p.mt-5.mb-5  El direccionamiento estratégico de una organización implica proyectarla en un período de tiempo y visionarla o soñar cómo se desea ser en un período determinado, para hacerlo se deben definir con claridad y ser ampliamente difundidas la visión, misión, propósitos, objetivos organizacionales de manera que se tiene una imagen global que debe ir tomando forma en el desarrollo de la planificación estratégica. 
      p.mb-5 La planeación, a su vez, tiene unas etapas que se abordan de lo general a lo particular, coincidiendo desde lo estratégico a lo operativo, de la siguiente manera:

      ImagenInfografica.color-acento-botones.mt-5
        template(v-slot:imagen)
          .row.justify-content-center
            .col-sm-10  
              figure 
                img(src='@/assets/curso/temas/tema4/img5.png', alt='alt')                
        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="9%" y="6%" numero="+")  
          .row.justify-content-center 
            p.p-4.text-small Es la planificación de los recursos monetarios requeridos para lograr los objetivos. Su función implica optimizar los recursos, haciendo una distribución y asignación adecuada de los recursos disponibles.
                                        
        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="43%" y="7%" numero="+" )
          .row.justify-content-center 
            p.p-4.text-small La planeación estratégica es la identificación sistemática de las oportunidades y amenazas que pueden surgir en el futuro, las cuales, combinadas con otros datos importantes, proporcionan la base para que una organización tome decisiones acertadas en el presente.
                                        
        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="76%" y="7%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Es la imagen futura de una organización, definida con base en la realidad, no tiene límite de tiempo y se define por un periodo mayor al definido para el cumplimiento de los objetivos. 

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="76%" y="36%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Se refiere al conjunto de valores, principios, prácticas y creencias que son la razón de ser de la empresa; representan su compromiso con la sociedad y dan vida a la cultura organizacional dándole sentido a cada acción de la organización.

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="42%" y="36%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Proceso que consiste en la determinación de los factores que influyen en el cumplimiento de los propósitos y en la determinación de los medios para lograrlo.

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="9%" y="36%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Se caracterizan por desarrollar un conjunto de actividades con objetivos definidos en los que pueden intervenir una o varias áreas de la empresa y cómo puede ser ejecutado por personal externo con el fin de obtener resultados de calidad en excelentes condiciones y resultados.
        
        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="76%" y="65%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Es el proyecto de vida de la organización; gracias a ella se reconoce la empresa en su quehacer y su propósito de creación, para quién está creada, quiénes trabajan en ella. Esta declaración debe tener estrecha relación con la visión y es permanente.

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="9%" y="65%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Son planeaciones que detallan el conjunto de actividades a realizar, responsables, tiempos y recursos necesarios para su ejecución.

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="76%" y="95%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Reflejan los resultados que la empresa espera alcanzar, se caracterizan por tener un tiempo específico, tienen estrecha relación con la misión y están definidos de manera numérica o cuantitativa.

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="53%" y="95%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Enmarca los lineamientos generales que deben aplicarse al tomar decisiones y son conocidos como guías que orientan la acción.

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="31%" y="95%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Representan los cursos o caminos de acción que la empresa elige, donde se emplearán los esfuerzos y recursos para lograr los objetivos en condiciones más ventajosas. Se caracterizan por ser consistentes y aportar al logro de los objetivos.

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="9%" y="95%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Es la planificación proyectada para 3 a 5 años, tiempo mediante el cual se espera alcanzar los objetivos estratégicos propuestos, definiendo con claridad las metas a lograr y la ruta a seguir, por la empresa.

      .row.justify-content-center.mt-5
        .col-md-10
          .tarjeta.color-tarjeta-descargas.p-3.mt-5.mb-5
            .row.justify-content-md-center
              .col-md-1.mt-4
                  img(src="@/assets/curso/temas/tema3/img3.png")
              .col-md-8
                  h4.mt-3.text-white Planeación estratégica
                  p.text-small.text-white Para profundizar más sobre este tema, lo invitamos a descargar el documento #[span.text-bold “Planeación estratégica”] donde podrá conocer los componentes, el proceso y los modelos de la planeación estratégica.
              .col-lg-1.mt-4
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Anexo3.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

      .row.justify-content-center 
        .col-md-10.mb-5  
          .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
            .row.justify-content-center.p-4                
              p En conclusión, la dirección estratégica es el arte y la ciencia de poner en práctica y desarrollar todos los potenciales de una empresa, con el fin de asegurar su supervivencia a largo plazo, y mejorar su competitividad, eficacia, eficiencia y productividad.

      .row.align-items-end.bg3.h4.p-3 Indicadores de gestión y actividad

      .row.justify-content-center 
        .col-md-10.mb-5  
          .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
            .row.justify-content-center.p-4                
              p Los indicadores cumplen la misión de comunicar, de forma sencilla y a través de la cuantificación, los resultados del proceso o de la operación. Una gestión se basa en el adecuado seguimiento de mediciones preestablecidas; esto se debe a que asegura un seguimiento recurrente del desempeño en tareas esenciales para el crecimiento y la sostenibilidad del negocio. 

      .row.justify-content-center.mb-5
        .tarjeta
          .row.justify-content-left
            .col-sm-5.mb-3.mt-5.m-top-img
              figure
                img(src="@/assets/curso/temas/tema4/img6.png", alt="alt")
            .col-sm-7.mb-3
              p.mt-5 #[span.text-bold Los indicadores de gestión], por su aplicación particular para medir el comportamiento y desempeño organizacional, se construyen a partir del objetivo de lo que se espera analizar, definiendo un valor de referencia o parámetro con el fin de contar con un punto de partida para comparar resultados contra el criterio establecido; es necesario definir indicadores confiables por lo que se debe definir con claridad la fuente de la información, el rango que debe tomar el indicador y el responsable de generar esta información.
              p En cuanto a #[span.text-bold los indicadores de actividad] se tienen algunos como: rotación de inventarios, rotación de inventarios para empresas comerciales, rotación de inventarios para empresas industriales y ciclo de efectivo, entre otros.

      p.mt-5.mb-5 A continuación, se presentan los indicadores de gestión y de actividad:

      .row.justify-content-center.bg2.mg-img.mt-5.mg-img-final
        .row.justify-content-center.mb-5
          SlyderF(columnas="col-sm-4")     
            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema4/img7.png", alt="alt")
                .crd_hover_txt--body.text-center
                  h5.mb-3 Cualitativos  
                  p.mb-0 Miden percepciones subjetivas sobre el desarrollo de funciones de la empresa.

            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema4/img8.png", alt="alt")
                .crd_hover_txt--body.text-center
                  h5.mb-3 Cuantitativos
                  p.mb-0 Miden procesos de producción y servicio expresados en valores numéricos.

            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema4/img9.png", alt="alt")
                .crd_hover_txt--body.text-center
                  h5.mb-3 Gestión de recursos humanos
                  p.mb-0 De acuerdo con los puntos críticos a evaluar, el responsable o el equipo de trabajo del área o dependencia debe elegir y diseñar los indicadores requeridos para evaluar su gestión.

            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema4/img10.png", alt="alt")
                .crd_hover_txt--body.text-center
                  h5.mb-3 Gestión de servicio al cliente
                  p.mb-0 Analiza la cantidad de quejas o reclamos que se gestionan en la organización.

            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema4/img11.png", alt="alt")
                .crd_hover_txt--body.text-center
                  h5.mb-3 Gestión de eficacia
                  p.mb-0 Determina el grado de cumplimiento de una actividad programada.

            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema4/img12.png", alt="alt")
                .crd_hover_txt--body.text-center
                  h5.mb-3 Eficiencia
                  p.mb-0 Mide la efectividad en la realización de una actividad programada.  

            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema4/img13.png", alt="alt")
                .crd_hover_txt--body.text-center
                  h5.mb-3 Rotación de inventarios
                  p.mb-0 Determina el número de veces que el inventario de la empresa rota o la cantidad de veces que se convierte en efectivo.

            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema4/img15.png", alt="alt")
                .crd_hover_txt--body.text-center
                  h5.mb-3 Rotación de activos fijos
                  p.mb-0 Mide la capacidad de los activos para aportar a las ventas, o la cantidad de veces en que los activos produjeron ventas.

            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema4/img16.png", alt="alt")
                .crd_hover_txt--body.text-center
                  h5.mb-3 Rotación de los activos operacionales
                  p.mb-0 Los cuales son: las cuentas por cobrar, los inventarios y los activos fijos.

            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema4/img17.png", alt="alt")
                .crd_hover_txt--body.text-center
                  h5.mb-3 Rotación de los activos totales
                  p.mb-0 Mide la capacidad del activo de la empresa, para producir ventas.




  

</template>

<script>
export default {
  name: 'Tema3',
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
