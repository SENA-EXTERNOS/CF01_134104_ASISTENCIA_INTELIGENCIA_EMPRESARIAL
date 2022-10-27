<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de administración

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3.mt-5.m-top-img
            figure
              img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 La administración se ha convertido en un instrumento que permite alcanzar los objetivos trazados, por el impacto que genera en las organizaciones y por ser el medio para realizarlo. Además, es una ciencia que ha venido evolucionando a lo largo de los años, ganando una indispensable importancia en las empresas, que dependen de esta para lograr una proyección consistente a través del trabajo coordinado entre todos los miembros que la conforman, aunando esfuerzos y optimizando los recursos asignados para llegar al crecimiento, consolidación y trayectoria, a través del tiempo.
            p A continuación, se profundiza en la administración desde la historia que dio su origen, hasta llegar a la implementación en las organizaciones, mediante la aplicación del proceso administrativo.

    
    .row.align-items-end.bg3.h4.p-3 Historia    

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-7.mb-3
            p.mt-5 La administración aparece debido a la necesidad para subsistir desde la época de la prehistoria, donde es utilizada de forma rudimentaria, para organizar grupos, para el trabajo, como la caza a la que se dedicaban los hombres y la agricultura a cargo de las mujeres, conformando grupos por edad y por sexo. Luego, el hombre busca asentamientos, se desarrollan las civilizaciones y aparece el Estado, designando trabajo colectivo y cobrando el tributo. A continuación, una síntesis en cuanto a la trayectoria e historia de la administración:
          .col-sm-5.mb-3.mt-5.m-top-img
            figure
              img(src="@/assets/curso/temas/tema1/img2.png", alt="alt")

    .row.justify-content-center 
    p.bg4.ml.text-figuras #[span.text-bold Figura 1.] Historia de la administración           
      figure
        img(src="@/assets/curso/temas/tema1/img3.png", alt="alt") 
      .cajon.tarjeta-nota-img.mb-5
          .row.justify-content-center.m-2
            p.m-2 #[span.text-bold Nota.] Tomado y adaptado de Münch (2014). 
    
    .row.align-items-end.bg3.h4.p-3 La administración como ciencia, técnica y arte
    p Con el fin de ampliar el universo de la administración, es necesario mencionar que la administración ha sido considerada como una ciencia, una técnica y un arte, como se presenta en la siguiente tabla.             

    .row.justify-content-center 
      .col-md-10      
        p.bg4.ml.text-figuras.mt-5.mb-4 #[span.text-bold Tabla 1.]  La administración como ciencia, técnica y arte
        figure
          img(src="@/assets/curso/temas/tema1/img4.png", alt="alt")
        .cajon.tarjeta-nota-img.mb-5
          .row.justify-content-center.m-2
            p.m-2 #[span.text-bold Nota.] Tomada y adaptada de Sal. 

    .row.align-items-end.bg3.h4.p-3 Elementos y características de la administración

    p.mt-4.mb-4 De acuerdo con las diferentes teorías planteadas acerca de esta ciencia, la administración en sí misma está integrada por los siguientes elementos básicos:                      

    .row.justify-content-center 
      .col-md-6     
        p.bg4.ml.text-figuras.mt-5.mb-4 #[span.text-bold Figura 2.]  Elementos de la administración
        figure
          img(src="@/assets/curso/temas/tema1/img5.png", alt="alt") 

    p.mt-4.mb-4 Todos estos elementos marcan una interacción específica y exclusiva en cada organización, haciendo de esta ciencia un instrumento útil y eficaz, de manera que sea identificada por las siguientes características:
    .row.justify-content-center.mb-4 
      .col-md-6     
        p.bg4.ml.text-figuras.mt-5.mb-4 #[span.text-bold Figura 3.]   Características
        figure
          img(src="@/assets/curso/temas/tema1/img6.png", alt="alt") 

    p.mt-5.mb-5 Con estos fundamentos, es preciso mencionar que, para poner en marcha una empresa, necesariamente se requiere acudir a la administración, realizar un proceso de diseño y proyección que sirve de fundamento para la estructuración de la empresa, donde todo lo anterior se cohesiona para darle vida a la actividad empresarial y, posteriormente, controlar y evaluar los resultados.      

    .row.align-items-end.bg3.h4.p-3 Proceso administrativo

    p.mt-4.mb-5 Es un proceso sistémico e integral donde la administración se implementa a través de dos fases: mecánica y dinámica. La primera fase establece los fundamentos para su implementación y la segunda fase pone en marcha y, a prueba, todo lo definido en la primera.
    .row.justify-content-center 
      .col-md-11  
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4                
            p También cuenta con cuatro etapas: planificación, organización, dirección y control. Cada una cobra importancia en la medida en que la empresa inicia su estructuración para la operación o puesta en marcha de la idea de negocio o emprendimiento, a fin de garantizar el logro de los objetivos, mediante una ejecución dinámica y coordinada que lleve a la organización a su crecimiento, consolidación y permanencia en el mercado.

    p.mt-5.mb-5 A continuación, se podrá conocer más sobre las fases y etapas del proceso administrativo:

      ImagenInfografica.color-acento-botones.mt-5
        template(v-slot:imagen)
          .row.justify-content-center
            .col-sm-10  
              figure 
                img(src='@/assets/curso/temas/tema1/img7.png', alt='alt')                
        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="38%" y="49%" numero="+")  
          .row.justify-content-center 
            p.p-4.text-small En esta etapa, se definen: la razón de ser de la empresa o misión, la visión que se desea alcanzar, los objetivos organizacionales, así como también los propósitos, las premisas, estrategias, políticas, planes, programas, proyectos, presupuestos, procesos y procedimientos, y también la magnitud de la empresa y las áreas que esta requiere para su operación.
                                        
        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="57%" y="49%" numero="+" )
          .row.justify-content-center 
            p.p-4.text-small En esta etapa, se define la estructura orgánica y se designan puestos de trabajo de acuerdo con los objetivos organizaciones y de área o departamento; de esta manera, se forma un conjunto de estructuras que decantan lo establecido en la planeación, para la puesta en marcha de la organización.                                           
                                        
        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="57%" y="65%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small En esta etapa, se incluyen la integración y la dirección; la integración encargada de articular los elementos y recursos de la organización para una adecuada operación; en cuanto a la dirección, se encarga de poner en marcha las determinantes definidas en las etapas anteriores, obteniendo resultados de estas. En suma, la integración y la dirección hacen parte de un solo dinamismo que pone en marcha todo lo diseñado y estructurado en las etapas anteriores, dando lugar a la ejecución. 

        .cajon.color-acento-botones.tarjeta-second-color.p-4(x="38%" y="65%" numero="+")
          .row.justify-content-center 
            p.p-4.text-small Esta etapa se realiza basada en los principios de los estándares de excepción, del equilibrio y del carácter medial, del control de lo que confluye en una evaluación estructurada de resultados, manteniendo un equilibrio entre lo realizado y el deber ser, los cuales se ven reflejados en el proceso establecido para ser implementado en la organización. 


    p.mt-5.mb-5 Luego de conocer los fundamentos de la administración, concentrados en su definición y el proceso administrativo, se concluye que la planeación es considerada el fundamento de la organización y, por lo tanto, las etapas de organización, dirección y control se constituyen en columnas o pilares de la empresa de esta manera:            

    .row.justify-content-center.bg2.mg-img.mt-5.mb-5.mg-img-final
      .row.justify-content-center.mt-5
        .col-md-6
          figure 
            img(src='@/assets/curso/temas/tema1/img8.png', alt='alt')         



               










    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
