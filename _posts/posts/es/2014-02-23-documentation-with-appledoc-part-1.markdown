---
layout: post_es
title:  "Documentation with AppleDoc Part 1"
name:  "Documentación con AppleDoc Parte 1"
date:   2014-02-24 16:10:42
categories: es
lang: es
author: "Ricardo Sampayo"
principal_image: "http://i.imgur.com/k7GzSK2.png"
tags:  documentation Objective-C Apple
type: post
description: "Tutorial AppleDoc. Herramienta que ayuda a los desarrolladores de Objective-C a generan la documentación del código en formato HTML"
---

Hace unos días en mi trabajo me tocó desarrollar una aplicación, cuyos requerimientos incluían la documentación del código. Este requerimiento aunque es buena práctica no es lo más divertido de nuestro trabajo.

AppleDoc es una herramienta que ayuda a los desarrolladores de Objective-C a generan la documentación del código, basándose en comentarios con un formato especial en la cabecera de cada uno de los objetos que forman el código fuente. AppleDoc es capaz leer los comentarios del código y generar documentación visualmente atractiva al usuario en formato HTML, al igual que Apple con su documentación de Xcode totalmente indexada y navegable.

A mi me ha resultado bastante útil esta herramienta porque prácticamente te obliga, por medio de advertencia (advertencias que personalmente siempre trato de evitar), a comentar cada uno de los atributos, métodos y clases del código.

***

## Instalación AppleDoc


Instalar AppleDoc es bastante sencillo, bastará con algunas líneas en el terminal de mac. Lo primero que debemos hacer es clonar el repositorio con el siguiente comando git:

<pre>
git clone git://github.com/tomaz/appledoc.git
</pre>

Luego lo instalamos corriendo el siguiente script:

<pre>
sudo sh install-appledoc.sh
</pre>

### Alternativa con [Homebrew][6]

Esta es la forma como yo particularmente lo instalé. Con la ayuda de [Homebrew][6]  sólo es necesaria una línea de comando y listo (Homebrew no instala las plantillas por defecto):
<pre>
brew install appledoc
</pre>

Cualquiera de las alternativas que utilicen para instalar AppleDoc resultará bastante sencilla. Ahora veremos como integrar esta documentación a nuestros proyectos.


***

## Integración de AppleDoc en el proyecto

En primer lugar debemos automatizar el proceso de generación de la documentación en formato HTML. Para esto, vamos a agregar a nuestro proyecto un nuevo target de compilación, para mantener el target principal de proyecto ajeno a la documentación.

Los pasos a seguir son los siguientes:

### Agregamos un nuevo target de compilación al proyecto 

Para esto nos ubicamos en los ajustes del proyectos y presionamos: *Add Target...*

 ![Add Target][7]{.img-responsive}

Una vez hecho esto se despliega una nueva ventana y elegimos un target de compilación.

 ![Add Target Compilation][8]{.img-responsive}

Listo, sólo nos queda agregarle un nombre, en mi caso utilicé *Documentation*, y lo agregamos a nuestro sistema.

### Configuramos el build phase para que llame al AppleDoc

Ahora tenemos que personalizar la forma en que se va a ejecutar el AppleDoc con los argumentos adecuados. En primer lugar, asegúrese de que está seleccionado el target de documentación y nos ubicamos en la pestaña *Build Phase*

Una vez ubicados ahí, agregamos un *Script Build Phase* de la siguiente manera:

 ![Build Fase][9]{.img-responsive}
 
Después de haber agregado esto vemos cómo se agrega una sección más llamada *Run Script* y ahí es donde agregamos el siguiente script

<pre>
/usr/local/bin/appledoc \
--project-name "${PROJECT_NAME}" \
--project-company "RicardoSampayo" \
--company-id "com.ricardosampayo" \
--output "~/Projects/Help/${PROJECT_NAME}" \
--install-docset \
--logformat xcode \
--keep-merged-sections \
--keep-undocumented-objects \
--keep-undocumented-members \
--keep-intermediate-files \
--no-repeat-first-par \
--no-warn-invalid-crossref \
--merge-categories \
--exit-threshold 2 \
--docset-platform-family iphoneos \
--ignore "" \
--include "${PROJECT_DIR}/${PROJECT_NAME}/Documentation/Images" \
--ignore "LoadableCategory.h" \
--index-desc "${PROJECT_DIR}/readme.markdown" \
"${PROJECT_DIR}/${PROJECT_NAME}"
</pre>

Con esta implementación sólo debemos documentar todo el proyecto y compilar este target de documentación y nos daremos cuenta que en la ruta  `--output` se generará un html con la documentación del proyecto.

### Archivo introducción de la documentación

En esta etapa del tutorial vamos a crear la introducción a nuestra documentación html. Simplemente, vamos a crear un archivo con formato *markdown* que ubicaremos en la dirección que definimos en el paso anterior bajo la etiqueta `--index-desc`. En este archivo, escribimos una breve introducción del proyecto y esto se mostrará al principio de la documentación una vez compilamos el target.

### Generar la documentación.

Probablemente en esta parte del tutorial ya intuyan cómo generar la documentación, pero por si acaso es bastante simple, sólo tienen que cambiar el target de ejecución de la aplicación al nuevo target de documentación y luego presionan play para correr el target o simplemente `Cmd-b` para compilarlo.

Una vez termine la compilación, buscamos en la ruta establecida y veremos el conjunto de archivos html con la documentación del proyecto.

### ¿Dónde podemos ver la Documentación creada?

La documentación se pude conseguir obviamente en la ruta establecida en el script de configuración definido en pasos anteriores, bajo la etiqueta `--index-desc`, y se puede abrir con el browser fácilmente e ir navegando por todas las clases.

AppleDoc también indexa la documentación en los archivos de Xcode, así que fácilmente podremos visualizar esta documentación en la ventana de *Documentation & Api Reference*, a la cual podemos acceder desde *Help* o con el atajo `Opt-Cmd-?` y se vera de la siguiente manera:

 ![Documentation][10]{.img-responsive}

*Guardian24 Documentation* es mi archivo de documentación y como pueden ver, muestra todas las clases de mi proyecto como si esta fuera nativa de Apple.

Otra forma de ver esta documentación es con ayuda de herramientas externas como por ejemplo la bastante popular aplicación [Dash][11], que es un navegador de documentación offline con más de 130 lenguajes.

***

## Conclusión

AppleDoc es una alternativa bastante útil y eficiente para documentar nuestro código y generar archivos visualmente atractivos para un usuario final en formato HTML. Otra característica que para mi es positiva, es el hecho de que genere advertencias en el código en caso de olvidar documentar algún objeto, por lo que nunca lo olvidarás.

Recuerden que un código bien documentado agiliza procesos de desarrollo e integración con otros miembros del equipo.

Espero que les haya gustado este tutorial y estén alertas a los próximos, si tienen dudas o comentarios no dudes en hacérmelo saber en la sección de comentarios.

Chao ;)


[2]:https://github.com/tomaz/appledoc
[3]:http://www.stack.nl/~dimitri/doxygen/
[4]:https://developer.apple.com/library/mac/documentation/DeveloperTools/Conceptual/HeaderDoc/intro/intro.html
[5]:https://raw.github.com/onevcat/VVDocumenter-Xcode/master/ScreenShot.gif
[6]:http://brew.sh/
[7]:http://i.imgur.com/csb7Qbo.png
[8]:http://i.imgur.com/QphJSgg.png
[9]:http://i.imgur.com/HICiV4M.png
[10]:http://i.imgur.com/DckRgcd.png
[11]:http://kapeli.com/dash