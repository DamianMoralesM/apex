# Apex Desafío 
Desarrollar un pequeño programa en Node.js utilizando técnicas de Web scraping. El mismo debe descargar el contenido del sitio https://www.naranja.com/comercios-amigos
y extraer las "preguntas frecuentes" y sus respuestas para luego almacenarlas en un archivo estructurado.

También necesitamos que crees en Angular una página que consulte tu archivo y liste su información de manera agradable. Es importante que la página muestre en algún lugar la fecha y hora en la que la información se actualizó por última vez. 


# Solución

## Cliente
App en Angular que consulta el archivo guardado en /assets. Si el archivo no está no muestra información sino un mensaje de error.

## Server

Solución con Webscrapping utilizando el módulo cheerio para parsear el sitio web, extraer las faqs y posteriormente guardarlas en /assets del cliente. El archivo cuenta con las faqs y la última fecha de edición ya que el cliente no tiene acceso al sistema de archivos del dispositivo. Lo ideal sería que se guardar en el server o en un servicio cloud y que el cliente consulte apuntando a esa dirección. Podría considerarse mecanimos de autenticación utilizando SSH pero para simplificar la solución se decidió guardarla en /assets. 

### Para generar el archivo
```
node index
```
