<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Plan de mejoramiento
    
    .row.justify-content-center.mb-5
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3
            figure
              img(src="@/assets/curso/temas/tema6/img1.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 El desarrollo innovador del sector productivo y en especial, de la tecnología, han generado en la sociedad cambios constantes que obligan a adaptarse a los nuevos modelos económicos, generadores de riqueza, siendo necesario esforzarse por implementar una mejora continua de manera constante, acercándose todo lo posible al usuario y al consumidor. Por lo tanto, se hace necesario desarrollar en las organizaciones, la capacidad superior de atender de manera eficiente, las solicitudes del cliente con el fin de optimizar la gestión empresarial.

    .row.justify-content-center.mt-5.mb-5
      .col-md-10
        .bloque-texto-g.color-acento-contenido.p-2.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img2.png')})`}"
          )                             
          .bloque-texto-g__texto.p-3
            p El plan de mejoramiento es un conjunto de medidas de cambio que se toman en una organización, para mejorar su rendimiento en la actividad misional a la que se dedica la organización. Estas medidas pueden ser de muchos tipos: organizativas, curriculares, etc. 

    .row.align-items-end.bg3.h4.p-3 Modelos de mejoramiento 

    p.mt-5.mb-5 Dentro del plan de mejoramiento, existen varios modelos de mejora para desafiar los problemas, alcanzar los ideales propuestos, ofrecer control de calidad y mejorar la eficiencia, además de contribuir con la gestión de los procesos.
    p.mb-5 Entre los modelos de mejora se encuentran los siguientes:

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4.bg5(titulo="Acciones preventivas")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema6/img3.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0            
            p Son medidas preventivas para solucionar la causa de un problema o de un proceso, antes de su aparición y evitar la ocurrencia del problema; se utilizan de la siguiente manera:
            ul.lista-ul
              li 
                i.fa.fa-circle
                | Antes que suceda el problema, es decir, ante el hallazgo de un riesgo.
              li 
                i.fa.fa-circle
                | Se reemplaza el riesgo inminente por la mejora continua en el momento adecuado.                
              li 
                i.fa.fa-circle
                | Se evalúa la causa y se establecen acciones de mejora para prevenir la ocurrencia. 
            p En conclusión, las medidas preventivas son recursos útiles activos ante un problema potencial, que se puede prevenir antes que ocurra.

      .py-3.py-md-4.bg5(titulo="Acciones correctivas")
        .row.justify-content-center                                        
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema6/img4.png', alt='').img400.m-auto                    
          .col-lg-7
            p Son actividades que se establecen para corregir el problema sucedido, son las acciones realizadas para neutralizar el problema y controlarlo a través de las medidas necesarias, evitando su repetición; se utilizan de la siguiente manera:
            ul.lista-ul
              li 
                i.fa.fa-circle
                | Después que sucede el problema. 
              li 
                i.fa.fa-circle
                | Se evalúa la causa y se crea un plan para prevenir la irregularidad.                
              li 
                i.fa.fa-circle
                | Se propone una actividad después de la ocurrencia del hecho.            
   

      .py-3.py-md-4.bg5(titulo="Acciones de mejora")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema6/img5.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            p Impulsan los procesos de la organización que están sujetos a la existencia de problemas que ponen en riesgo la rentabilidad de la organización; es por eso que las acciones que se planteen, deben conducir a resultados positivos y a la oportunidad de reducir el impacto de riesgo en los procesos. Las acciones de mejora deben contar con el siguiente esquema:
            ul.lista-ul
              li 
                i.fa.fa-circle 
                p.mb-0 #[b Planificación de las acciones:] al realizar el análisis de las técnicas de causas, se procede a formular las acciones que se implementarán para corregir los síntomas y problemas latentes en la organización. 
              li 
                i.fa.fa-circle
                p.mb-0 #[b Estado de la acción:] acción implementada, aún por implementar.
              li 
                i.fa.fa-circle
                p.mb-0 #[b Fecha de implementación de la acción:] una vez la acción se haya planificado y su estado sea aún por implementar.
              li 
                i.fa.fa-circle
                p.mb-0 #[b Notas:] espacio para detallar observaciones sobre la implementación.

    .row.align-items-end.bg3.h4.p-3 Técnicas de análisis de causas
    p.mt-5.mb-5 Son procedimientos útiles para identificar los aspectos de los problemas y cómo poder responder a ellos. Se basa en la idea de que la gestión eficaz debe encontrar una manera de prevenir los problemas antes que ocurran y afecten el trabajo de la organización.  
    p.mb-5 A continuación, se presentan algunas de estas técnicas útiles para que se puedan formular las acciones de mejora pertinentes:

    
      .row.justify-content-center
        .col-lg-12
          PasosA.color-acento-contenido.mb-5(tipo="n")
            .row
              .col-lg
                h3 Diagrama de Pareto
                p Identifica las áreas con mayor propensión al problema, para acertar en las áreas de mejora. Esta herramienta se usa para destapar los problemas y las alternativas de soluciones a realizar, debido a que arroja como resultado un gráfico de barras en el que el tamaño de las barras refleja la huella de los problemas así: de izquierda a derecha (impacto más alto hasta el impacto más bajo). De esta manera, le ayuda a comprender hacia adónde dirigir sus esfuerzos de mejora. 
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema6/img6.png', alt='').img125

            .row
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema6/img7.png', alt='').img125
              .col-lg
                h3 Diagrama de dispersión
                p Se usan ampliamente para analizar problemas, gracias a que evidencia la relación entre variables; el eje horizontal representa el tiempo, es decir, fechas y, el eje vertical representa el tiempo calculado en días. Por ende, cada punto que se refleja en el diagrama representa una actividad, además de reflejar la correlación entre el problema y la causa, permitiendo así, evaluar cuál tiene el mayor impacto y urge resolver de inmediato. 

            .row
              .col-lg
                h3 Diagrama de espina de pescado
                p Denominada también como diagrama de causa y efecto. Esta herramienta en forma de pescado, donde el problema se representa como la cabeza del pez y las espinas representan las principales causas identificadas; es una herramienta ideal y efectiva para la mejora del proceso, y es útil para generar lluvia de ideas en circunstancias en que la información existente es poca.
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema6/img8.png', alt='').img125

            .row
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema6/img9.png', alt='').img125
              .col-lg
                h3 Método de los 5 porqués
                p Permite llegar a la esencia del problema para solucionarlo, además de lograr una mejora continua en cualquier nivel de la organización. Su aplicación consiste en reunirse en un equipo de trabajo, en el cual se requiere que los colaboradores estén lo más concentrados posible para que comprendan lo que realmente sucede en el lugar de trabajo. Es denominado el método de los 5 porqués, al realizar la pregunta que se repite tantas veces como sea necesario por parte del líder del equipo para develar el problema inicial y tomar las medidas necesarias para implementar la mejor acción de mejora.

            .row
              .col-lg
                h3 Árbol del problema
                p Esta técnica representa al problema desde un análisis de este y se plasma en el árbol; en este caso, el problema sustenta en la raíz las causas, el tronco presenta el problema principal y en las ramas y hojas, los efectos como resultados de las causas. Lo anterior, permite establecer el problema, las causas y los efectos para interpretar, comprender y analizar mejor el problema. 
              .col-6
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema6/img10.png', alt='').img125   

     
          .row.justify-content-center.mb5.mt-5 
            .col-md-12.mb-5  
              .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
                .row.justify-content-center.p-4                
                  p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.




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
