Esto es un proyecto de Master en Desarrollo Web Full Stack, Multicloud y Multiplatarforma en Tajamar Madrid.
INDICE 1. Requisitos. 2. Que es y para que sirve React. 3. Instalación de React. 4. Estructura de proyecto. 5. Que es y como funciona un Componente. 6. Creacion de un Componente simple.

1º)Requisitos

-Tener un editor de código: Visual Studio Code o similar.
Si no lo tenéis os dejo el link de descarga https://code.visualstudio.com

2º)¿Qué es y para que sirve React?

Es una Librería desarrollada por Facebook.

Lo podemos implementar en un proyecto clásico, es decir, en una web que tengamos completamente hecha con Java, con PHP y un framework como Laravel para tener ciertas funcionalidades en concreto, como la reactividad.

Se le puede considerar un Framework porque nos ofrece un marco de trabajo para desarrollar web apps de un tipo concreto.

Utiliza un lenguaje especial llamado JSX ES6 que mezcla html y javascript, nos ofrece ciertas ventajas como prevenirnos de ataques XSS e inyecciones de código.
JSX no es un requisito para usar React, usar React sin JSX es especialmente conveniente cuando no quieres configurar herramientas de compilación en tu entorno de desarrollo,
por lo tanto, cualquier cosa que se pueda hacer con JSX se puede hacer con Javascript puro.

Personalmente, me parece que se puede aprovechar más su potencia trabajando con ello como framework que como librería.

Así que nos vamos a centrar en REACT como framework, dado que su finalidad principal es el desarrollo de web apps SPA (Single Page Application).

Una SPA es una web app que no recarga la página en ningún momento, toda la navegación que hay es completamente dinámica y asíncrona, lo cual es impresionante, porque recogemos y mostramos los datos en el front-end de una manera mucho más rápida y dinámica.

¿Por qué ocurre esto?
Porque son apps reactivas y la reactividad implica que yo modifico algo en el front-end y automáticamente se modifica en la clase del componente; que modifico algo en la clase del componente, pues se muestra automáticamente en el front-end, todo de manera instantánea al guardar el código.

El back-end en react va por Ajax (axios), lo que también favorece a que sea una comunicación más efectiva y rápida todavía; por ejemplo, si voy a sacar un dato del back-end, no necesito recargar la pantalla, sino que se lanza una petición asíncrona (una petición http) por detrás de una petición ajax y el framework nos recoge el resultado de esa Api o de ese back-end al cual estamos haciendo la petición.

En definitiva, es un Index HTML en el que lo que hacemos es implementar React.

3º) Instalación de React

Lo primero que tenemos que hacer es instalar Node.js, que está pensado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, está diseñado para realizar aplicaciones network escalables.
Realizamos la descarga en la página web https://nodejs.org/es .

Descargamos la versión LTS dado que es más estable.

A continuación, hay que abrir la consola de comandos, si estas en Windows tienes que abrir el cmd o consola del sistema, si estás en Mac o Linux lo que tienes que hacer es abrir la terminal.

En Windows: pulsar Windows + R, escribir cmd y pulsar enter.

Comando para Linux: Ctrl + Alt + T.

Si estás en Mac: Haz clic en el icono de Launchpad en el Dock, escribe Terminal en el campo de búsqueda y, a continuación, haz clic en Terminal.

Si queremos saber que versión de Node.js tenemos, introducimos el comando node -v.

Una vez abierta hay que actualizar npm, que es el gestor de paquetes de node.js que nos permite instalar las diferentes librerías; el comando para realizar dicha instalación es
npm install -g npm@latest.

Si queremos ver cuál es la última versión del gestor de paquetes que tenemos, introducimos el comando npm --version o npm -v.

Ahora vamos a limpiar la caché para impedir que se nos descarguen versiones más antiguas, para eso introducimos el comando npm cache clean --force.

De esta manera limpiamos la caché de node y de npm en concreto, ahora introducimos el comando cls en Windows o clear para Linux o Mac y limpiamos la pantalla de nuestro cmd o terminal.

Para instalar el framework de REACT, y poder generar un proyecto base, lo que vamos hacer es utilizar un paquete que se llama create react app que es un paquete de facebook. Es este de aquí: https://github.com/facebook/create-react-app.
Es un modulo de node.js, y para ello ponemos el siguiente comando en nuestro cmd/terminal npx create-react-app + nombre del proyecto
para indicarle donde se tiene que montar el proyecto (no se permite camel case ni mayúsculas).

Una vez se haya instalado (HAPPY HACKING!) introducimos la ruta de nuestro proyecto e introducimos el comando code .

para abrir nuestro proyecto en Visual Studio Code que es donde vamos a trabajar.

A continuación, introducimos el comando npm start para que nos lance el servidor, el cuál siempre tenemos que tener abierto para trabajar y que en este caso es local http://Localhost:3000

4º) Estructura de un proyecto (SCAFFOLDING)

En la parte izquierda de nuestro editor de código podemos ver toda la estructura de carpetas o scaffolding que nos trae por defecto nuestro proyecto (node.js/public/src/gitignore…).

Empezando desde arriba encontramos la carpeta node modules, que es donde se descargan todas las dependencias, librerías como la del propio react, y todos los paquetes que necesitemos y queramos que tenga nuestro proyecto.

La siguiente es la de public, donde se encuentran todos los archivos públicos como el manifest.json que es la configuración básica de la pwa (las aplicaciones web progresivas son una evolución natural de las aplicaciones web que difuminan la barrera entre la web y las aplicaciones), index html y el favIcon.

Luego estaría la carpeta SRC, dentro encontramos el logo, el index.js donde cargaremos componentes (como el componente App que podemos observar arriba). A continuación, está App.test.js, que es un fichero para hacer testing, el componente App.js importará nuestro primer componente, y, por último, dentro de la carpeta src, estaría el componente App.css .

Ahora nos encontramos con el .gitignore, que nos sirve para ignorar archivos/carpetas de nuestro proyecto para que no se publiquen, como el node_modules. Podemos introducir los archivos que nosotros queramos dentro del gitignore.

Luego tenemos el archivo package.json que es básicamente el archivo de configuración del proyecto base donde encontramos el nombre del proyecto, las dependencias instaladas, los scripts, etc.

Si nos situamos encima del script start, hacemos click con el boton derecho y
le damos a run script, nos abrirá el servidor.

Por último, nos encontramos con un README donde nos trae documentación muy interesante de react.

5º)Explicación de que es un componente y como se estructura.

Un componente es un archivo js que se usa para construir interfaces de usuario de manera rápida y eficiente. Es la parte lógica que controla un trozo de pantalla como por ejemplo el nav, el footer, un article, una sectión, una parte de la lógica de la app, etc.Y el conjunto de todos los componentes hacen la aplicación.

Para crear un componente debemos hacerlo dentro de la carpeta src, podemos crearlo con boton derecho new file de una manera desordenada o podemos crearnos nuestra carpeta Components, dentro de src con click derecho new folder y dentro de esta, crear una carpeta por cada componente, de manera que este lo más ordenado posible.

Los componentes pueden recibir propiedades que son las PROPS, o los import de librerias específicas como la de axios de ajax para hacer peticiones a las APIS, u otros componentes con los que se tenga que comunicar por necesidad de la funcionalidad de la app. Dan soporte a la vista, en definitiva, son una especie de controlador o mediador, recibe datos, los procesa, los envía al back-end, los devuelve a la vista etc.

Estructura de un componente

    Ø Los imports: que se utilizan para importar componentes o librerías dentro del componente en el cual nos encontremos como, por ejemplo:
     import React, {Component} from "react".

    import React, { Component } from "react";



    Ø La clase que está compuesta por el método render, que es
    el único método requerido en un componente de clase, que se usa para representar los nodos DOM. Es donde se renderiza la vista y el return que es donde escribimos el código de la vista.

    class HelloWorld extends Component {
      render() {
        return (
          <React.Fragment>
            <h1>Hello World</h1>
            <h2> It´s my first React!</h2>
            <h3>Thanks! for see my tutorial!</h3>
          </React.Fragment>
        );
      }
    }




    Ø El export default que es explícitamente necesario para poder exportar nuestro componente al componente padre para que se visualice.

     export default HelloWorld;

6º)Creación del Componente simple

A la hora de crear un componente debemos tener en cuenta algunas peculiaridades como las siguientes:

    § Se debe empezar el nombre con mayúscula y si contiene otra palabra utilizar camel case.

    § No puede devolver más de un nodo de html, una forma de solucionarlo sería con un <div>{código}</div> o con
    <React.Fragment>{código}</React.Fragment> ya que estamos utilizando Jsx.

    //Como queremos trabjar en JSX ES6 lo primero que tenemos que hacer
    //es importar el component de react.

    import React, { Component } from "react";
    class HelloWorld extends Component {
      render() {
        return (
          <React.Fragment>
            <h1>Hello World</h1>
            <h2> It´s my first React!</h2>
            <h3>Thanks! for see my tutorial!</h3>
          </React.Fragment>
        );
      }
    }
    export default HelloWorld;
    //Creacion de un componente simple
