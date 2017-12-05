# Deepin en Español 2.0
Los cambios entra la versión 1 y la versión 2 son:
* Nueva página web con Jekyll 3.6 como CMS
* Sitio Ayuda de Deepin disponible
* Cambio de Github Pages a Gitlab Pages
* Buscador integrado (solo Ayuda de Deepin)
* Secciones Iconos
* Emojis (con Emoji for Jekyll)
* Motor kramdown para el Markdown
* Añadido Open Graph para SEO
* Favicon listos para varios dispositivos
* Comprensión de datos (efectivo a largo plazo)
* Caja de comentarios Google+

## Migración a Gitlab Pages
* Se migró de Github Pages a Gitlab Pages para mayor libertad
  - Generar páginas de categorías (plugin);
  - Tabla de contenido (integrado con el plugin);
  - Errores en la generación de páginas (necesario);
* Gitlab Pages no soporta redirección de páginas, para solucionar se añadió una etiqueta en la página `redirect` de la carpeta `_layout`.

## Otros cambios
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

## Bug
* Una limitación: "Legacy pagination logic will stop working on Jan 1st 2018, update your configs before that time". [Documentación](https://github.com/sverrirs/jekyll-paginate-v2/issues/37).
