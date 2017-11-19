---
title: "Deepin en Español 2.0"
tags:
    - jekyll
    - blog
categories:
    - noticias
date: 2017-10-02
---

<img src="{{ site.urlimg }}posts/cinco.jpg" alt="Cinco. Créditos a  Pixabay (https://pixabay.com/es/n%C3%BAmero-d%C3%ADgito-cinco-5-oro-vidrio-2032513/)">

A partir de estos momentos, anunciamos una versión renovada de Deepin en Español. Hemos dieñado para que cualquier usuario(a) puede usar, con un diseño más acorde a los tiempos modernos.

En esta página explicamos como desarrollamos este blog. Inspirado en un [post de eightportions.com](https://eightportions.com/2016-08-21-Migrate-blog-to-GitLab-pages/)

## Para considerar
### Cómo está diseñada esta página
* Esta página soporta la versión más reciente Jekyll
* Es un CMS, sistema de gestión de contenidos, que no consume muchos recursos y se adapta a cualquier situación. Está entre un proyecto de HTML y un servicio avanzado como Wordpress
* Jekyll usa complementos para facilitar otras actividades como paginado o SEO

### Cómo se desarrolla
* Al ser un blog sencillo, Jekyll puede diseñar páginas web sin usar base de datos
* Para crear un post basta añadir un encabezado y empezar a escribir
* Una página Jekyll requiere un medio para que se ensamble y se convierta una paǵina web. En este caso usamos Gitlab Pages, en especial la versión gratuita
* Github también ofrece una versión similar con Github Pages, sin embargo, tiene limitaciones con los plugins y el espacio almacenado. Es por eso que usaremos Gitlab
* Para el dominio, podemos hacer que el mismo Jekyll use un dominio personalizado con un archivo (llamado CMANE)

### Sus desventajas
* Jekyll convierte el código a páginas estáticas; podemos añadir widgets para los comentarios o redes sociales pero los datos se interactúan con servicios externos
* Jekyll no soporta la caché de imágenes modificadas; es decir, que debemos subir otra imagen para adaptar a la página (digamos, un post en particular) o reducir peso (para la galería) que el original
* Al usar Gitlab Pages, es necesario conocer el funcionamiento de Git, un veterano sistema de revisión (por lo menos, la versión web de Gitlab tiene interfaz fácil de entender)
* Para publicar o editar un post es necesario subir al Git y proceder. Eso puede tomar algo tiempo ya que Gitlab debe revisar si hay errores de código (Integración continua, para los expertos)

Eso sería un explicación algo sencilla sobre la paǵina que está basada Deepin en Español. Si conocen esta plataforma son bienvenidos, tienen a <a href="https://plus.google.com/communities/115544729561220868525">Google+</a> y <a href="https://github.com/deepin-espanol">Github</a>.
