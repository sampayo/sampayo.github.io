---
layout: product
title:  "Mulesoft express eployment as Tomcat service"
name:  "Desplegar el Mule ESB en un servidor de aplicaciones."
date:   2012-12-06 16:10:42
categories: es portfolio
lang: es
author: "Ricardo Sampayo"
principal_image: "http://i.imgur.com/rfPoXTZ.png"
tags: ["Objective-C", iOS7, Java, PHP, MuleSoft, CasaOliveira, CodeFuel]
type: product

type: product
urls: ["<a href='http://elmundodelvino.com' title='Visita la página del cliente'>Casa Oliveira</a>", "<a href='http://www.codeFuel.me' title='Visita la página del desarrollador'>CodeFuel</a>"]
wrench: ["Objective-C", iOS7, Java, PHP, MuleSoft]
users: <a href='http://twitter.com/ricardosampayo_' title='Twitter de Ricardo Sampayo'>@ricardosampayo_</a>
images: ["http://i.imgur.com/rfPoXTZ.png" , "http://i.imgur.com/BV52hVp.png" , "http://i.imgur.com/QAAskjP.png", "http://i.imgur.com/mswXKDh.png", "http://i.imgur.com/wV7EyaZ.png"]
abstract: ""
---

Hace unos días trabajando en una aplicación, que requería de una herramienta de comunicación transnacional como los es [Mule ESB](http://www.mulesoft.org/), me toco implantar la herramienta en un servidor de aplicaciones, lo que resulto complicado gracias a la falta de documentación (o basqueadas erróneas), por lo que decidí montar mi solución en el blog. 

Nos las arreglamos para implementar una aplicación de Mule de manera rápida y simple que era casi demasiado fácil para ser verdad:

* Descargar el [Mule Standalone](http://www.mulesoft.org/download-mule-esb-community-edition).
* Descomprimir en la ubicación del servidor de su deseo.
* Coloque su aplicación que se exporto de MuleSoft con el formato adecuado en la carpeta / mule-standalone/apps dentro de su servidor.


Ahora está listo para ejecutar la aplicación, vaya al directorio /mule-standalone/bin y usted puede arrancar el servicio con *./mule* y detenerlo usando **Ctrl-C**.

O bien, puede manejar el servicio como un demonio utilizando en su lugar *mule start* (para iniciar) / *mula stop* (para detener) / *mula restart* (para reiniciar)

Ahora tiene su aplicación Mule ejecuta en una instancia independiente de Mule ESB que utiliza su propia instancia de Tomcat. Usted no tendrá que instalar o personalizar un servidor Tomcat porque independiente Mule obtendrá una para usted.

Por cierto, este método de instalación es un producto de la experimentación y de mucho ensayo y error.
