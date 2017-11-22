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
* Nueva página web con Jekyll 3.6 como CMS
* Sitio Ayuda de Deepin disponible
* Cambio de Github Pages a Gitlab Pages
* Buscador integrado
* Secciones Iconos
* Emojis (con Emoji for Jekyll)
* Motor kramdown para el Markdown
* Añadido Open Graph para SEO
* Favicon listos para varios dispositivos

## Sobre Jekyll
### Ventajas
* Jekyll es un software de creación de blogs estáticos
* Jekyll necesita de una gema Ruby para operar
* Jekyll consume poco espacio que Wordpress y no requiere de base de datos
* Jekyll es personalizable, no hay límites con el estilo o el orden
* Jekyll soporta dominio personalizado (requiere el archivo CMANE)
* Jekyll permite la publicación de posts en pocos pasos, con fecha, categorías y otros añadidos
* Jekyll soporta Markdown para dar formato al texto

### Desventajas
* Jekyll convierte el código a páginas estáticas, que no pueden modificarse en tiempo real; para eso es necesario los widgets de servicios externos
* Jekyll no soporta la caché de imágenes modificadas; es decir, que debemos subir otra imagen para adaptar a la página (digamos, un post en particular) o reducir peso (para la galería) que el original

## Uso de Git y consideraciones
* Jekyll no se desarrolla por sí, requiere un medio para que se ensamble usando el contenido ("código fuente"). En este caso usamos Gitlab Pages, en especial la versión gratuita
* Para subir contenido al Git necesitamos de un programa compatible:
  - Usando un cliente de escritorio, como Atom, Visual Basic Code, etcétera
  - Usando su sitio web, al menos Gitlab tiene interfaz fácil de entender
* Gitlab revisará si el contenido cumple los controles de calidad para que la generación a página estática sea correctamente. A eso lo llamamos "Integración continua"
* La integración continua funciona cada vez que se suba el contenido mediante un parche ("commit" en inglés) y demora unos segundos (dependiendo del "peso" del parche)

### Aclaraciones
* Github también ofrece una versión similar con Github Pages. Sin embargo las razones porque Gitlab es lo ideal son:
  - Generar páginas de categorías (plugin)
  - Tabla de contenido (integrado con el plugin)
  - Errores en la generación de páginas (necesario)
* El buscador incorporado no proviene de Jekyll sino de su plugin Liquid, el cual permite que los resultados estén actualizados
* Una limitación: "Legacy pagination logic will stop working on Jan 1st 2018, update your configs before that time." [Documentación](https://github.com/sverrirs/jekyll-paginate-v2/issues/37).

## Conclusiones
En Deepin en Español, el blog está actualizado con muchas mejoras, rendimiento y detalles que hacen accesible a jóvenes y adultos.

Eso sería un explicación algo sencilla sobre la paǵina que está basada Deepin en Español. Si conocen esta plataforma son bienvenidos, tienen a <a href="https://plus.google.com/communities/115544729561220868525">Google+</a> y <a href="https://github.com/deepin-espanol">Github</a>.

## Lectura adicional
* [Post "10 Must do Jekyll SEO optimizations"](https://blog.webjeda.com/optimize-jekyll-seo/)
* [Post de Devexperto.com](https://devexperto.com/blog-gratis-github-jekyll/)
* [Jekyll en 2017](https://mademistakes.com/articles/using-jekyll-2017/)
