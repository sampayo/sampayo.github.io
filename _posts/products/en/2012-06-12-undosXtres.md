---
layout: product
title:  "UndosXtres.com Catalog - iOS"
name:  "UndosXtres.com Catalog - iOS"
date:   2012-06-12 16:10:42
categories: en portfolio
lang: en
author: "Ricardo Sampayo"
principal_image: "http://i.imgur.com/PU5EwTu.png"
tags: ["Objective-C", iOS7, MuleSoft, undosXtres.com, CodeFuel]
type: product

urls: ["<a href='http://undosxtres.com' target='_blank' title='Visita la página del cliente'>UndosXtres.com</a>", "<a href='http://www.codeFuel.me'  target='_blank' title='Visita la página del desarrollador'>CodeFuel</a>"]
wrench: ["Objective-C", iOS7]
users: ["<a href='http://twitter.com/ricardosampayo_'  target='_blank' title='Twitter de Ricardo Sampayo'>@RicardoSampayo_</a>","<a href='https://twitter.com/Enf_4eva'  target='_blank' title='Twitter de Jonathan Wiesel'>@enf_4eva</a>"]
images: ["http://i.imgur.com/mRTlBax.png" , "http://i.imgur.com/E2p2Uoc.png"]
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
