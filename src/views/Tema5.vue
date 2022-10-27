<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Inteligencia empresarial
    
    .row.justify-content-center.mb-5
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3.mt-5.m-top-img
            figure
              img(src="@/assets/curso/temas/tema5/img1.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 El dinamismo de la innovación en diferentes áreas y en tecnología, especialmente, ha venido generando una constante evolución de las sociedades que obligan a las empresas a cerrar la brecha entre usuario y consumidor al máximo posible, y a dotarse de una robusta capacidad para dar respuestas concretas y prácticas en atención a los retos que traen los nuevos modelos económicos, generadores de riqueza, optimizando de esta manera, toda la actividad empresarial.
            .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
              .row.justify-content-center.p-4               
                p En este sentido, el conocido #[i Business Intelligence (BI)] cumple esta función como un conjunto de aplicaciones, estrategias y metodologías del mundo de los datos, el cual ha ido evolucionando desde su aparición, a comienzos de los años 90, hasta la actualidad.

    .row.justify-content-center.mt-5.mb-5
      .col-md-10
        .bloque-texto-g.color-acento-contenido.p-2.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img2.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.p-3
            p La inteligencia empresarial es el proceso de recolectar, almacenar, analizar y administrar los datos, para transformarlos en decisiones estratégicas que permitan la definición de acciones encaminadas a lograr el éxito empresarial.

    .row.justify-content-center.mb-5
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3.mt-5.m-top-img
            figure
              img(src="@/assets/curso/temas/tema5/img3.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 El dinamismo de la innovación en diferentes áreas y en tecnología, especialmente, ha venido generando una constante evolución de las sociedades que obligan a las empresas a cerrar la brecha entre usuario y consumidor al máximo posible, y a dotarse de una robusta capacidad para dar respuestas concretas y prácticas en atención a los retos que traen los nuevos modelos económicos, generadores de riqueza, optimizando de esta manera, toda la actividad empresarial.
            .bloque-texto-b.color-primario.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0  La aplicación de la técnica de BI en la empresa, permite manejar, procesar y actualizar gran cantidad de datos, pudiendo ser capaz de relacionarse entre sí, extrayendo información útil con alto valor empresarial, con el fin de facilitar y optimizar la toma de decisiones dentro de la empresa a la misma velocidad que cambian los escenarios económicos. (p.10)                
                p.mt-5.text-bold.texto-cajon-b Como afirma López (2018)
                i.fas.fa-quote-right

    <Separador></Separador>
    #t_5_1.titulo-segundo.color-acento-contenido.mt-5
      h2 5.1 Clases, recursos y técnicas

    p.mt-5.mb-5 La inteligencia empresarial aplicada a cualquier organización, opera como una fuerza transformadora del ecosistema empresarial, generando nuevos impulsos y oportunidades de negocio; al ser implementada, influye necesariamente en todos los niveles de la organización y más directamente en los niveles superior y estratégico, los que deciden sobre el rumbo de la empresa.  
    p.mb-5 A continuación, se presenta el impacto de la inteligencia empresarial en cada nivel jerárquico de la organización:

    .row.justify-content-center.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-tarjeta-avatar.h-tarjeta-avatar.p-4
          .row.justify-content-center.mb-5
            .col-5
              figure
                img(src='@/assets/curso/temas/tema5/img4.png', alt='alt')
          h3.text-center Nivel estratégico
          p Facilita y confiere a la alta dirección, contar con información, analizarla y monitorear las tendencias y evoluciones; de esta manera, puede valorar el nivel de consecución de los objetivos estratégicos de la organización, tomando acciones rápidas.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-tarjeta-avatar.h-tarjeta-avatar.p-4
          .row.justify-content-center.mb-5
            .col-5
              figure
                img(src='@/assets/curso/temas/tema5/img5.png', alt='alt') 
          h3.text-center Nivel táctico
          p Permite que la gerencia que se encuentra en este nivel, junto con los analistas de datos, puedan hacer uso de herramientas analíticas para poder llegar a conclusiones, accediendo a información sin necesidad de recurrir a otros estamentos.          
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-tarjeta-avatar.h-tarjeta-avatar.p-3
          .row.justify-content-center.mb-5
            .col-5
              figure
                img(src='@/assets/curso/temas/tema5/img6.png', alt='alt') 
          h3.text-center Nivel operativo
          p Facilita a los empleados información directa y clara sobre los procedimientos a seguir, mediante instrucciones precisas. Esta información se representa a través de informes con datos actualizados.
          
    .row.align-items-end.bg3.h4.p-3 Recursos 
    p.mt-5.mb-5 De acuerdo con lo anterior, se evidencia que inteligencia empresarial sirve de soporte para el ensamble de diferentes herramientas que permiten la elaboración de estrategias para la toma de decisiones, que arrojan como resultado elementos y cuadros de mando de la organización.
    p.mb-5 Los recursos utilizados en la inteligencia empresarial son:

    .col-md-12
      TabsA.color-acento-botones.mt-5.mb-5
        .tarjeta.color-borde-slider.color-slider.bg5.p-4(titulo="Fuente de datos")
          .row.justify-content-center
            .col-md-7
              p Los datos son la fuente principal de abastecimiento del #[i Business Intelligence] y en ellos se ubica gran cantidad de información necesaria para poder tener una buena inteligencia de negocios.
            .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema5/img7.png' alt='')             
        .tarjeta.color-borde-slider.color-slider.bg5.p-4(class="small-text" titulo="ETL")
          .row.justify-content-center
            .col-md-7
              p Traducido (E: extraer, T: transformar y L: cargar). Es un tipo de integración de datos que define los procesos de extracción de datos para ser cargados a su almacenamiento. Como un sistema de información y de organización.
            .col-md-5 
              figure
                  img(src='@/assets/curso/temas/tema5/img8.png' alt='')                          
                  
        .tarjeta.color-borde-slider.color-slider.bg5.p-4(titulo="Data Warehouse")
          .row.justify-content-center
            .col-md-7
              p Es conocido con este nombre al contenedor o contenedores donde las empresas clasifican y acumulan información suministrada desde diferentes fuentes de datos.
            .col-md-5 
                figure
                    img(src='@/assets/curso/temas/tema5/img9.png' alt='')    

        .tarjeta.color-borde-slider.color-slider.bg5.p-4(titulo="Data Marts")
          .row.justify-content-center
            .col-md-7
              p Subconjunto de datos almacenados en contenedores pequeños clasificados para almacenar datos específicos de la organización.
            .col-md-5 
                figure
                    img(src='@/assets/curso/temas/tema5/img10.png' alt='')  

        .tarjeta.color-borde-slider.color-slider.bg5.p-4(titulo="Informes")
          .row.justify-content-center
            .col-md-7
              p “Representación detallada de información extraída de los datos o materia prima inicial, para ser publicados en gráficas; muy útiles para la optimización de información, de gran valía para la toma de decisiones” (López, 2018).
            .col-md-5 
                figure
                    img(src='@/assets/curso/temas/tema5/img10.png' alt='') 

    .row.align-items-end.bg3.h4.p-3 Técnicas   

    .row.justify-content-center.mb-5
      .tarjeta
        .row.justify-content-left
          .col-sm-7.mb-3
            p.mt-5 Las técnicas utilizadas para recopilar información, optimizando cada contacto con el cliente mediante los diferentes medios o canales que ha dispuesto la organización, son las siguientes:
          .col-sm-5.mb-3.mt-5.m-top-img
            figure
              img(src="@/assets/curso/temas/tema5/img12.png", alt="alt")

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-tarjeta-avatar-gris.h-tarjeta-avatar-gris.p-4
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema5/img13.png' alt='alt')
        h2.text-center Encuestas online
        p.texto-centro Son el método más económico para recopilar datos y llegar a una gran audiencia. Los resultados se obtienen en tiempo real, la inversión es menor y el encuestado necesita muy poco tiempo para responderlas, lo que a su vez proporciona buenos índices de respuesta a la encuesta.

      .tarjeta.color-tarjeta-avatar-gris.h-tarjeta-avatar-gris.p-4
        .row.justify-content-center.mb-4
          .col-7
            img(src='@/assets/curso/temas/tema5/img14.png' alt='alt')
        h2.texto-centro Encuesta personal
        p.texto-centro Uno de los métodos más efectivos para obtener información precisa, son las entrevistas cara a cara. Suele ser más costoso que otros métodos y requiere de un cierto grado de experiencia para recopilar información valiosa.

      .tarjeta.color-tarjeta-avatar-gris.h-tarjeta-avatar-gris.p-4
        .row.justify-content-center.mb-5
          .col-7
            img(src='@/assets/curso/temas/tema5/img15.png' alt='alt')
        h2.texto-centro Encuestas telefónicas
        p.texto-centro Son un poco más costosas que las encuestas online, pero mucho más económicas que las encuestas personales. 

      .tarjeta.color-tarjeta-avatar-gris.h-tarjeta-avatar-gris.p-4
        .row.justify-content-center.mb-5
          .col-7
            img(src='@/assets/curso/temas/tema5/img16.png' alt='alt')
        h2.texto-centro Cuestionarios
        p.texto-centro Es un conjunto de preguntas utilizadas con fines de investigación, que pueden ser tanto cualitativas como cuantitativas. 

      .tarjeta.color-tarjeta-avatar-gris.h-tarjeta-avatar-gris.p-4
        .row.justify-content-center.mb-5
          .col-7
            img(src='@/assets/curso/temas/tema5/img17.png' alt='AvatarTop')
        h2.texto-centro Sondeos
        p.texto-centro Este método consta de una sola pregunta. La tasa de respuesta para los sondeos es extremadamente alta, porque es muy fácil de contestar y requiere de muy poco tiempo.

      .tarjeta.color-tarjeta-avatar-gris.h-tarjeta-avatar-gris.p-4
        .row.justify-content-center.mb-5
          .col-7
            img(src='@/assets/curso/temas/tema5/img18.png' alt='AvatarTop')
        h2.texto-centro Formularios online 
        p.texto-centro Se utilizan para recopilar información específica de un encuestado en cada campo como: edad, género, ingresos, entre otros. 

    p.mt-5  Las siguientes son algunas de las ventajas de la inteligencia empresarial:

    .row.justify-content-center.mb-5
      .col-7
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/img19.png", alt="alt").img100
            .col.b-bottom              
              p Ayuda a aumentar la productividad en la empresa.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/img20.png", alt="alt").img100
            .col.b-bottom            
              p Brinda una visión holística de la institución, organizada por segmentos en varios departamentos, productos, servicios, lo que permite identificar áreas que requieren mejora.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/img21.png", alt="alt").img100
            .col.b-bottom         
              p La tecnología aporta a las organizaciones dinamismo y agilidad a través de la simplificación del análisis automatizado, avanzado, reduciendo el tiempo y el esfuerzo para lograr procesos empresariales más eficientes.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/img22.png", alt="alt").img100
            .col.b-bottom         
              p A través de un software de #[i Business Intelligence], se pueden generar informes gráficos muy fáciles de comprender, aún para personas sin conocimientos técnicos en el significado de las métricas.

    <Separador></Separador>
    #t_5_2.titulo-segundo.color-acento-contenido.mt-5
      h2 5.2 #[i E-commerce]

    p.mt-5.mb-5 Con el desarrollo de las nuevas tecnologías de la información, resulta innegable reconocer la manera como estos avances han influido en la vida de todo ser humano, llegando incluso a condicionar aspectos tan relevantes para este, como la manera de relacionarse, de comunicarse y la forma en que satisface sus necesidades.

    .row.justify-content-center 
      .col-md-10.mb-5  
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4                       
            p Estas nuevas condiciones han generado un naciente universo digital de interacciones, que ofrece nuevas posibilidades a las que las organizaciones no son ajenas, puesto que, conociendo las herramientas adecuadas, les puede significar hacerse acreedoras de importantes ventajas comerciales y competitivas.
      .col-md-6.mt-5
        figure
          img(src="@/assets/curso/temas/tema5/img23.png", alt="alt").img100 

    p.mt-5.mb-5 A continuación, se conocerán algunos elementos claves del #[i e-commerce:]
    .row.justify-content-center
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-gris color-borde-slider").mt-5
        .row(titulo="Concepto")
          p #[i E-commerce] se conoce como el conjunto de relaciones comerciales establecidas por varios individuos que buscan en esencia, ejecutar operaciones de compra, venta y distribuciones de bienes y servicios soportados en Internet.

        div(titulo="E-commerce como estrategia de mercado")
          p El #[i E-commerce] es la estrategia de mercado más utilizada en la economía digital; esta es también conocida como la economía del Internet, comercio electrónico que opera soportado en las tecnologías de la información y la comunicación, las cuales están inmersas en los procesos de comercialización y en algunos casos productivos.

        div(titulo="Oferta del e-commerce")
          p #[i E-commerce] oferta desde contenidos hasta bienes, los cuales requieren sellarse mediante medios de pagos electrónico, pero dada la naturaleza cambiante del ambiente digital, los negocios deben actualizar sus estrategias de mercado con el fin de tener mayor cobertura y atender diferentes necesidades relacionadas con las fuentes de ingresos, las formas de pago, los canales que facilitan la interacción entre cliente y vendedor; todo esto lleva al desarrollo de diferentes modelos de #[i e-commerce.]

    p.mt-5.mb-5 Dadas las condiciones en que se materializa el comercio electrónico, son muchos los beneficios que se pueden obtener de este ambiente de negocios, tanto para las empresas como para los usuarios.
    p.mb-5 Los modelos de #[i e-commerce] que se destacan son: 

    .row.justify-content-center.bg2.mg-img.mt-5.mg-img-final
      .row.justify-content-center.mb-5
        SlyderF(columnas="col-sm-4")     
          .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema5/img24.png", alt="alt")
              .crd_hover_txt--body.text-center
                h5.mb-3 Consumidor a consumidor (C2C)   
                p.mb-0 Funciona como mercado casero digital en el que las personas venden productos propios.

          .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema5/img25.png", alt="alt")
              .crd_hover_txt--body.text-center
                h5.mb-3 Inter-empresarial (B2B) 
                p.mb-0 Bajo este modelo, una empresa compra bienes o servicios de otra empresa.

          .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema5/img26.png", alt="alt")
              .crd_hover_txt--body.text-center
                h5.mb-3 Empresa a consumidor (B2C)  
                p.mb-0 Este tipo de comercio minorista se produce cuando un consumidor compra un artículo por Internet, para su uso.

          .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema5/img27.png", alt="alt")
              .crd_hover_txt--body.text-center
                h5.mb-3 Consumidor a empresa (C2B) 
                p.mb-0 En esta modalidad, es el consumidor el que crea valor para un negocio, dando una referencia en línea, de la tienda, o también ofreciendo sus productos a empresas que se dedican a la comercialización de artículos de segunda mano.

          .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema5/img28.png", alt="alt")
              .crd_hover_txt--body.text-center
                h5.mb-3 Empresa a gobierno (B2G) 
                p.mb-0 Ocurre cuando las empresas privadas intercambian bienes o servicios con una entidad gubernamental.

          .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema5/img29.png", alt="alt")
              .crd_hover_txt--body.text-center
                h5.mb-3 Consumidor a gobierno (C2G) 
                p.mb-0 Incluye todas las operaciones por las cuales los consumidores cumplen con responsabilidades gubernamentales, tales como el pago de impuestos, compra de activos del orden público, o pagos de multas, entre otros.

          .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema5/img30.png", alt="alt")
              .crd_hover_txt--body.text-center
                h5.mb-3 Tiendas online
                p.mb-0 Tienen las mismas características de las tiendas físicas, pero adaptan sus servicios para el intercambio de artículos a distancia y medios de pago electrónico, o a través de plataformas recaudadoras.

          .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema5/img31.png", alt="alt")
              .crd_hover_txt--body.text-center
                h5.mb-3 Afiliación
                p.mb-0 En este tipo de comercio, el intercambio de los no bienes no se hace directamente con el productor; el negocio se hace a través de una plataforma que sirve de intermediario entre oferente y comprador y, a su vez, cobra una comisión por la transacción.

          .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema5/img32.png", alt="alt")
              .crd_hover_txt--body.text-center
                h5.mb-3 #[i Marketplace]
                p.mb-0 Es una gran plataforma que ofrece espacios en los que muchos vendedores pueden ofrecer sus productos o servicios y en las que los consumidores pueden consultar una gran variedad de estos.

          .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema5/img33.png", alt="alt")
              .crd_hover_txt--body.text-center
                h5.mb-3 Suscripción
                p.mb-0 Es un modelo de negocio con oferta de contenidos digitales, útil para adquirir bienes o servicios con frecuencia de compra recurrente; este modelo permite recibir ingresos por anticipado, así como programar las ventas de forma periódica.

          .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema5/img34.png", alt="alt")
              .crd_hover_txt--body.text-center
                h5.mb-3 Servicios personales o consultoría
                p.mb-0 Es cualquier intercambio de dinero por tiempo, como asesorías, educación online, talleres.






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
