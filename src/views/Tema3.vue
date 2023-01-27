<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diagnóstico organizacional
    
    .row.justify-content-center.mb-5
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3.mt-5.m-top-img
            figure
              img(src="@/assets/curso/temas/tema3/img1.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 El diagnóstico organizacional es una herramienta importante en la vida institucional, gracias a que a través de ella se comprenden a fondo, sus situaciones y sus causas. Este proceso permite analizar, de manera profunda y consciente, el desempeño estructural con el fin de aportar a unos resultados óptimos en cuanto a la realización de actividades, procesos y procedimientos, y el logro de los objetivos organizacionales.

    .row.align-items-end.bg3.h4.p-3 Diagnóstico funcional y cultural
    .row.justify-content-center.mb-5
      .tarjeta
        .row.justify-content-left
          .col-sm-7.mb-3
            p.mt-5 El diagnóstico organizacional se puede dividir en tipos: funcional y cultural. Cada uno aborda sus propios objetivos, métodos y técnicas, pero aún así se complementan. 
            p.mt-5.mb-5 A continuación, lo invitamos a descargar el documento #[span.text-bold “Métodos y técnicas para el diagnóstico organizacional”] , el cual presenta cómo los métodos y técnicas coadyuvan a realizar un excelente análisis del entorno y de las variables, con el fin de dar respuesta a las inquietudes y los objetivos que dan origen a su aplicación.
          .col-sm-5.mb-3.mt-5.m-top-img
            figure
              img(src="@/assets/curso/temas/tema3/img2.png", alt="alt")

      .col-md-10
        .tarjeta.color-tarjeta-descargas.p-3.mt-5.mb-5
          .row.justify-content-md-center
            .col-auto.mt-2
                img(src="@/assets/curso/temas/tema3/img3.png")
            .col-md-7
                h4.mt-3.text-white Métodos y técnicas para el diagnóstico organizacional
                p.text-small.text-white A continuación, lo invitamos a descargar el documento #[span.text-bold “Métodos y técnicas para el diagnóstico organizacional”]  
            .col-lg-1.mt-4
                a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Anexo 1 - Métodos y técnicas para el diagnóstico organizacional.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download  

      p.mt-5.mb-5  Para llevar a cabo un diagnóstico, se utiliza una gran diversidad de herramientas, dependiendo de la profundidad deseada, de las variables que se desean investigar, de los recursos disponibles y de los grupos o niveles específicos entre los que se van a aplicar.

      .col-md-10
        .tarjeta.color-tarjeta-descargas.p-3.mt-5.mb-5
          .row.justify-content-md-center
            .col-auto.mt-2
                img(src="@/assets/curso/temas/tema3/img3.png")
            .col-md-7
                h4.mt-3.text-white Procedimiento para elaborar un diagnóstico organizacional
                p.text-small.text-white A continuación, lo invitamos a descargar el documento “Procedimiento para elaborar un diagnóstico organizacional” para profundizar sobre este tema.
            .col-lg-1.mt-4
                a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Anexo 2 - Procedimiento para realizar un diagnóstico organizacional.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download 

      .row.align-items-end.bg3.h4.p-3 Matrices diagnósticas
      p.mt-5.mb-5  Las matrices diagnósticas han sido diseñadas con el fin de condensar diferentes factores, claves en el éxito de una organización, para medirlos desde la realidad de su desempeño y operación empresarial. 
      p.mb-5  Existen diversas matrices diagnósticas como se puede observar a continuación:

    .row.justify-content-center.bg2.mg-img.mt-5.mg-img-final
      .row.justify-content-md-center    
        .col-md-9  
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-gris color-borde-slider").mt-5
            .row(titulo="Matriz DOFA ")
              p El análisis DOFA está diseñado para ayudar al estratega a encontrar el mejor acoplamiento entre las tendencias del medio, las oportunidades y amenazas y las capacidades internas, fortalezas y debilidades de la empresa. Dicho análisis permitirá, a la organización, formular estrategias para aprovechar sus fortalezas, prevenir el efecto de sus debilidades, utilizar a tiempo sus oportunidades y anticiparse al efecto de las amenazas.

            div(titulo="Matriz de Perfil Competitivo – PCI")
              p El Perfil de Capacidad Interna, es una forma para hacer un diagnóstico a las empresas, permitiendo evaluar las fortalezas y las debilidades y donde se puede evidenciar cuáles fueron los factores internos que afectan o benefician su normal funcionamiento. Su implementación consiste en determinar las áreas estratégicas y los factores críticos de ellas, a evaluar, con el fin de aplicar la matriz y realizar un análisis por área para luego consolidarlo por organización. (Pedraza, Sastoque, Serrano & Tarazona, 2016)

            div(titulo="Matriz de Evaluación de los Factores Internos – EFI ")
              p Busca consolidar y analizar las fortalezas y debilidades más relevantes de la organización. Es una herramienta para formular estrategias y se implementa asignando un peso relativo a cada factor (0 a 10) tomando 0 como sin importancia hasta llegar a 10 que significa muy importante.
              p Asimismo, es importante aclarar que se asigna una calificación entre 1 y 2 a cada una de las debilidades y entre 3 y 4 a las fortalezas, con el fin de indicar el factor que este representa, así:
              ol.lista-ol
                li 
                  span.text-bold 1: 
                  | Debilidad mayor.   
                li 
                  span.text-bold 2: 
                  | Debilidad menor.  
                li 
                  span.text-bold 3: 
                  | Fortaleza menor.  
                li 
                  span.text-bold 4: 
                  | Fortaleza mayor.
            div(titulo="Matriz de Evaluación de los Factores Externos – EFE")
              p Este instrumento tiene como fin develar la posición estratégica que tiene la organización en el ámbito al que pertenece. En ella se resumen y evalúan las oportunidades y amenazas de la empresa; se implementa, elaborando una lista de oportunidades y amenazas del medio, se evalúa la importancia relativa de cada una para el desempeño de la unidad empresarial, y se asigna un rango; considerando que las oportunidades suelen tener pesos más elevados que el de las amenazas, se asigna a criterio propio, una calificación de 1 a 4 a cada uno de los factores concluyentes del éxito, con el fin de subrayar si las estrategias actuales responden, con pertinencia, al factor crítico que corresponde y que está haciendo la misma para enfrentarlo.

            div(titulo="Matriz de Perfil de Oportunidades y Amenazas – POAM")
              p Es un método que ayuda a identificar y evaluar amenazas y oportunidades potenciales de una empresa. Cuando un grupo estratégico evalúa su impacto e importancia, se identifica si la amenaza causada por un aspecto en el entorno, se configura en amenaza u oportunidad. Para la elaboración de la POAM se necesita:
                ul.lista-ul
                  li
                    ul
                      li 
                        i.lista-ul__vineta
                        | Obtención de la información primaria y secundaria.
                      li 
                        i.lista-ul__vineta
                        | Identificación de las oportunidades y amenazas.  
                      li 
                        i.lista-ul__vineta
                        | El grupo estratégico selecciona las áreas de análisis.                         
                      li 
                        i.lista-ul__vineta
                        | Priorización y calificación de los factores externos.                       
                      li 
                        i.lista-ul__vineta
                        | Calificación del impacto.                  
        .col-md-3.mt-5
          figure
            img(src="@/assets/curso/temas/tema3/img4.png", alt="alt")  

        p.mt-5 De acuerdo con lo anterior, se concluye la existencia de diferentes matrices o herramientas, para evaluar el contexto interno y externo de una organización, siendo de gran importancia la suma de ellas, pues cada una, con sus complementarios, permite dilucidar el panorama de la organización, encontrando estrategias que aporten a potencializar fortalezas, así como a convertir debilidades en fortalezas, a producir las oportunidades que brinda el entorno y, especialmente, a prepararse para evitar los impactos de la ocurrencia de amenazas.
           

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
