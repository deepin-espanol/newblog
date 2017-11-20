---
title: "Deepin en Español 2.0"
tags:
    - jekyll
    - blog
categories:
    - noticias
date: 2017-10-02
---

A partir de estos momentos, anunciamos una versión renovada de Deepin en Español para que cualquier usuario(a) pueda usar. Un diseño más acorde a los tiempos modernos.

<img src="{{ site.baseurl }}/images/posts/cinco.jpg" alt="Cinco. Créditos a  Pixabay (https://pixabay.com/es/n%C3%BAmero-d%C3%ADgito-cinco-5-oro-vidrio-2032513/)">

En esta página explicamos como desarrollamos este blog. Inspirado en un [post de eightportions.com](https://eightportions.com/2016-08-21-Migrate-blog-to-GitLab-pages/). Eso sí, hay palabras que nunca habrías oído en la vida y para entenderlas recurre al buscador de Internet.

## En la versión 2.0
* Nueva página web con Jekyll como CMS
* Sitio Ayuda de Deepin disponible
* Cambio de Github Pages a Gitlab Pages
* Buscador integrado
* Secciones Iconos

## Para considerar
### Por qué Jekyll
* Esta página soporta la versión más reciente de Jekyll, un software para generar páginas estáticas a partir de código
* Jekyll es un CMS, sistema de gestión de contenidos, un versión algo "lite" al Wordpress
* Jekyll usa complementos para facilitar otras actividades como paginado o SEO
* Jekyll es instalable en cualquier servidor que permite el lenguaje Ruby

### Cómo se desarrolla
* Al ser un blog sencillo, Jekyll puede diseñar páginas web sin usar base de datos
* Para crear un post basta crear un archivo con un encabezado con la fecha, el título y la categoría del post. Los posts se enriquecen con negritas, cursivas, listados y etcétera
* Jekyll permite editar su código CSS, HTML y JS, haciendo al blog mucho más flexible y personalizado
* Para el dominio, podemos hacer que el mismo Jekyll use un dominio personalizado con un archivo (llamado CMANE)

### Sus desventajas
* Jekyll convierte el código a páginas estáticas; podemos añadir widgets para los comentarios o redes sociales pero los datos se interactúan con servicios externos
* Jekyll no soporta la caché de imágenes modificadas; es decir, que debemos subir otra imagen para adaptar a la página (digamos, un post en particular) o reducir peso (para la galería) que el original

### Uso de Git y desventajas
* Una página Jekyll requiere un medio para que se ensamble y se convierta una paǵina web (no genera en tiempo real). En este caso usamos Gitlab Pages, en especial la versión gratuita
* Para subir contenido al Git necesitamos de un programa compatible:
  - Usando un cliente de escritorio, como Atom, Visual Basic Code, etcétera
  - Usando su sitio web, al menos Gitlab tiene interfaz fácil de entender
* Para que los posts sean generados a páginas estáticas (HTML mejor dicho) Gitlab revisará revisa si el código está listo ("Integración continua", para los expertos")
* Ya generado, la página está lista. Siempre que se suban algunos posts, Gitlab encargará de generarlos

### Aclaraciones
* Github también ofrece una versión similar con Github Pages, sin embargo, tiene limitaciones con los plugins y el espacio almacenado. Es por eso que usaremos Gitlab
  - El ejemplo más relevante sería la paginación de la sección post
* El buscador incorporado no proviene de Jekyll sino de Liquid

Eso sería un explicación algo sencilla sobre la paǵina que está basada Deepin en Español. Si conocen esta plataforma son bienvenidos, tienen a <a href="https://plus.google.com/communities/115544729561220868525">Google+</a> y <a href="https://github.com/deepin-espanol">Github</a>.
