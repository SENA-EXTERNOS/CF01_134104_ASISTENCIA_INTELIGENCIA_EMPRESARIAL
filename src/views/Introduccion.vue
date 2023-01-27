<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-4.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/introduccion.png", alt="alt")
          .col-sm-8.mb-3
            p.mt-5 Apreciado aprendiz, bienvenido a este componente formativo donde se aborda, el análisis del entorno en el que se desarrolla una empresa, el diseño de la organización y la ejecución de todo lo planeado, enfilado a cumplir con el direccionamiento estratégico que esta tiene definido.

            p En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente recurso educativo.
       
    figure.mt-5
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video      
  
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
