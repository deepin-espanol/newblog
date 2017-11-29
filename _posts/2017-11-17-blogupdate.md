---
title: "Deepin en Español 2.0"
categories:
    - noticias
date: 2017-11-17
show_comments: true
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
* Comprensión de datos (efectivo a largo plazo)
* Caja de comentarios Google+

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
* Las páginas de Gitlab llevan la URL nombre.gitlab.io. Es posible que exista una [limitación](https://gitlab.com/gitlab-org/gitlab-ee/issues/302) al redirigir el sitio web

## Aclaraciones
En esta sección añadimos detalles muy completos más allá de Jekyll y Git.

### Gitlab Pages
* Github también ofrece una versión similar con Github Pages. Sin embargo las razones porque Gitlab es lo ideal son:
  - Generar páginas de categorías (plugin);
  - Tabla de contenido (integrado con el plugin);
  - Errores en la generación de páginas (necesario);
* Una limitación: "Legacy pagination logic will stop working on Jan 1st 2018, update your configs before that time". [Documentación](https://github.com/sverrirs/jekyll-paginate-v2/issues/37).
* Gitlab Pages no soporta redirección de páginas, para solucionar se añadió una etiqueta en la página `redirect` de la carpeta `_layout`.

### Plantilla
* El diseño de la página web es de CloudCannon con su plantilla Urban. Licenciado bajo MIT.

### Comprensión de página
* Para aligerar la página web, aunque sea el 1 %, usamos HTML Compress. Se añade al inicio de la plantilla default (antes de HTML) y se establece los parámetros en la configuración.
* Se añadió comprensión CASS para la hoja de estilo.

### Comentarios
* Se añadió el soporte para los comentarios de Google+. Para eso se añadió una página especial con cierto código explicado en [webjeda.com](https://blog.webjeda.com/jekyll-comments/).
* Los comentarios de `disqus` están en una página aparta para modificar su código.
* Para activar la caja es necesario añadir `show_comments` en el post correspondiente.

### Buscador
* El buscador incorporado no proviene de Jekyll sino de su plugin Liquid, el cual permite que los resultados estén actualizados.

### Iconos
* Se añadió una página en `_includes`, llamado `_favicon` para los distintos iconos optimizados en computadoras y dispositivos móviles.
* Se añadió "Telegram" y la "Cadena" como iconos para el pie de página.

### Actividades
* Las actividades están en una carpeta especial (`_actividads`). Originalmente llamado Client, para evitar confusión se cambió a Actividad con la carpeta y archivo correpondiente.
* Las páginas llevan un enlace junto al texto "Ver" (el original llevaba "View [enlace]").

### Integrantes
* En la carpeta `_staff_members` se añadieron los integrantes. Para el molde básico está la página `_defaults`.

### Organización
* Se cambió el nombre de la carpeta `company`, original de Urban, a `organization`.

### SEO
* Se comentó la descripción en la página `default.html`
* El plugin Jekyll-SEO-Tag se encarga de extraer el texto para la página.

### CSS
* Se dividió en dos archivos CSS: Start (en Head) y Screen (al final)
* Funciona con hojas de estilos dinámicos (CASS)

### Post
* Son publicaciones. Está en la carpeta _posts si recurres al código fuente
* Hay tres categorías: Avance, comunidad y noticias

## Conclusiones
En Deepin en Español, el blog está actualizado con muchas mejoras, rendimiento y detalles que hacen accesible a jóvenes y adultos.

Eso sería un explicación algo sencilla sobre la paǵina que está basada Deepin en Español. Si conocen esta plataforma son bienvenidos, tienen a <a href="https://plus.google.com/communities/115544729561220868525">Google+</a> y <a href="https://github.com/deepin-espanol">Github</a>.

EL código fuente del blog está en <a href="{{ site.data.externalurl.reposource }}">Gitlab+</a>.

## Lectura adicional
* [Post "10 Must do Jekyll SEO optimizations"](https://blog.webjeda.com/optimize-jekyll-seo/)
* [Post de Devexperto.com](https://devexperto.com/blog-gratis-github-jekyll/)
* [Jekyll en 2017](https://mademistakes.com/articles/using-jekyll-2017/)
* [Rich-Night](http://rich-knight.com/articles/compressing-html-in-jekyll/)
* [Ramificaciones en Git](https://colaboratorio.net/atareao/developer/2017/git-github-primeros-pasos-ramificaciones/)
