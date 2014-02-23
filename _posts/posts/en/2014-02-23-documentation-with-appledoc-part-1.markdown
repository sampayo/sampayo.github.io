---
layout: post_es
title:  "Documentation with AppleDoc Part 1"
name:  "Documentation with AppleDoc Part 1"
date:   2014-02-24 16:10:42
categories: en
lang: en
author: "Ricardo Sampayo"
principal_image: "http://i.imgur.com/k7GzSK2.png"
tags:  documentation Objective-C Apple
type: post
description: "Tutorial AppleDoc.tool that helps developers to generate Objective-C code documentation based on comments in HTML format"
---

A few days ago in my work I had to develop an application, which included the documentation requirements of the code. This requirement is a good practice but is not the most fun of our work. 

AppleDoc is a tool that helps developers to generate Objective-C code documentation based on comments with a special format in the top of each of the objects that make up the source code. AppleDoc is able to read the code and generate visually appealing to the user documentation in HTML format, like Apple Xcode documentation, which is fully indexed and browsable. 

This tool is very useful for me, because virtually forces you through warnings (i personally try to avoid warnings), to comment on each of the attributes, methods and classes

***

## Instalation AppleDoc


AppleDoc's instalation is very easy. You only need few lines in computer's terminal. At first we should clone de git repository with the following command:

<pre>
git clone git://github.com/tomaz/appledoc.git
</pre>

Then we install it running the following script: 

<pre>
sudo sh install-appledoc.sh
</pre>

### Alternative with [Homebrew][6]

This is how I installed it, with the help of [Homebrew] [6], and you only need a command line and that's it (Homebrew templates not installed by default): 

<pre>
brew install appledoc
</pre>

Any of the alternatives that you use to install AppleDoc will be quite simple. Now we will see how to integrate this documentation to our projects.

***

## AppleDoc's Integration in the project 

At first we should automate the generation process of documentation in HTML format. For this, we will add to our project a new build target in order to keep the main target of the project separated of the documentation. 

The steps are:

### Add a new build target to the project 

For this we must to be locate in the project's setings and then we press *Add Target ... * 

![Add Target][7]{.img-responsive}

Once done this, we display a new windows and chose  a build target. 

![Add destination Compilation][8]{.img-responsive}

Done, now we only need to put a name, in my case i used *Documentation* and we add it to our project. 

### Configuration the build phase to call AppleDoc 

Now we need to customize how we are going to run the AppleDoc with the appropriate arguments. At first, you must to make sure that you are selecting the documentation's target and we go to select build phase tap.

Once we are located there, we  will add a *Script Build Phase* as follows: 

 ![Build Phase][9]{.img-responsive}
 
After you have added this we see how a section is added, it is called *Run Script* and here is where we add the following script

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

With this implementation we only need to document the entire project and compile this documentation target and werealize that in the path `--output` it will generate a project's documentation in HTML. 

### Overview of documentation 

At this stage of the tutorial we will create the introduction to our html documentation. Simply, we will create a file with a *markdown* format, that we will locate in the direction defined in the previous step under the label `--index-desc`. In this file, we write a brief introduction of the project and we will show this to the top of the documentation once we compile the target.

### Generate the documentation. 

Probably in this part of the tutorial you intuit how to generate the documentation, but just in case is quite simple, you just have to change the run target of the application to the new documentation target and then press run to execute the target or just `Cmd-b` to compile. 

Once the compilation finished, we look in the path setted, and we will see the HTML files with the project documentation.

### Where can we see the documentation created? 

We can find the documentation in the established path in the configuration script defined in previous steps, under the label `--index-desc`, and you can easily open the browser and go surfing all classes. 

Appledoc also indexes documents on file in Xcode, so we can easily use this documentation in the Windows *Documentation & API Reference*, which we can access from *Help* or with the shortcut `Cmd-Opt-?` and it will look as follows:

![Documentation][10]{.img-responsive}


My documentation file is *Guardian24 Documentation* and as you can see, it shows every class of my project like it was native to Apple. 

Another way to see this documentation is using external tools such as the very popular [Dash] [11], which is a documentation offline browser with over 130 languages.

***

## Conclusion 

AppleDoc is a very useful and efficient alternative to document our code files and generate visually appealing files for a final user in HTML format. Another feature, that is positive for me, is the fact that AppleDoc generates warnings in the code in the case that you forget to document an object, so you never forget. 

Remember that a well-documented code streamlines development processes and integration with other team members. 

I hope you have enjoyed this tutorial and be alert to the next, if you have questions or comments please let me know in the comments section.

Bye ;)


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