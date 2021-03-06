## ¿Qué es reactjs?

React es una libreria o mejor conocida como biblioteca de javascript para construir interfaces de usuario, está es su única finalidad por eso es que es muy amada dentro de la comunidad, lo que pasa es que nosotros usamos esta librería para crear sorprendentes interfaces estó a nosotros nos da una garantia de utilizar sus bondades que es declarativo, estó nos permite crear interfaces de usuario muy amigables y de forma sencilla también está basado en componentes por lo cual nosotos vamos a separar cada uno de los elementos de nuestra página web en estos pequeños pedazos llamados componentes y que los vamos a unir para crear sorprendentes aplicaciones, también se aprende una vez y se puede utilizar en muchos lados, _**react** puedes utilizarlo en la **web**, puedes crear sorprendentes interfaces de **escritorio** para windows, mac o linux o también desarrollar **aplicaciones mobile**_

¿Donde inicia todo estó?

Nos vamos a regresar al año del 2013 dentro de facebook ahí es donde nace react y solventaba una pequeña particularidad que era el timeling, querían mejorar la parte principal que hoy en dia utilizamos nosotros en está red social y ahí es donde se empezo a gestionar la implementación de está librería, también paso a implementarse dentro del equipo de instagram y cuando se dieron cuenta de que habían creado un buen producto lo liberaron a la comunidad y ahí es como ha llegado a todos nosotros los desarrolladores que hemos confiado en está librería porque el grande que en esté caso es facebook lo implementa en sus productos y le da confianza porque también mantiene el proyecto contratando ingenieros para que le den seguimiento y hace que también tengamos la confianza de empezarlo a utilizar.

Hay empresas como lo son Airbnb que confian y apoyan mucho al código libre de está librería, también podemos ver a netflix que tiene todo su desarrollo en React, también tenemos a uber que ha empezado esté desarrollo dentro de sus landing-pages así como otros productos que utilizamos día a día como whatsapp-web que está creado con react y también como ustedes lo sabes platzi está creado con react.

## DOM, Virtual DOM y React DOM

¿Qué es el virtual DOM?

Es una herramienta que implementa react para darle performace y velocidad a nuestros desarrollos, esto significa que nostros tenemos una copia field de lo que es el DOM(Document Object Model) de nuestro sitio pero vamos más a detalle a explicarlo, tenemos una aplicacion creada con react la cual tiene una serie de elemento que tenemos que llenar en esté caso es nuestro perfil, imaginemos que tenemos que llenar uno de estos y por cada uno de los elementos que vamos a actualizar nuestro DOM se tenía que refrescar totalmente, esto significa que volvía a presentar cada uno de estos elemetos en nuestro navegador, así es como actualmente trabaja el DOM pero con React y la implementación de virtualDOM ahora tenemos está copia que permite identificar cada uno de estos elementos y saber cual ha sido el que se actualizo esto significa que si yo actualizo mi perfil de twitter al momento de llenar mi usuario y yo al darle guardar, no va ha refrescar toda la página ni presentar en el navegador cada uno de estos elementos si no que solamente va ha presentar la section actualizada de mi perfil en twitter, esto nos da un gran performace y nos da una velocidad para poder crear cosas sorprendetes, imaginemos que tenemos también una aplicación más grande donde tenemos una gran cantidad de elementos, un listado de ingredientes y queremos eliminar algunos o añadir otros cuando lo hacemos con react solo vamos a actualizar está section en particular y luego vamos a tener que refrescar la totalidad de los elementos y ese es el poder que tenemos hoy en día al implementar con react, actualizar el virtualDom para actualizar los bloques que solamente necesitamos y así hacer nuestra aplicación más rápida.

## Create react App y Tipos de Componentes

Vamos a realizar un proyecto de modo de ejemplo para distinguir y a distinguir los tipos de componetes que tenemos, lo que vamos a necesitar es: nuestra terminal(hyper), un editor de código(vscode), y nuestro navegador(chrome).

Para el ejercicio vamos a usar npmx que nos va ha permitir instanciar create-react-app, el cual es un modulo que nos da un bolder-play de toda la configuración de react para empezar a trabajar practicamente al instalarlo 

``npmx create-react-app holamundo`` o ``yarn create react-app my-app``

esto va ha traer todo lo necesario para nuestro proyecto para que veas que carpetas y que elementos tiene y como vamos a poder trabajar con un proyecto totalmente ya con react y react dom y todos los modulos que necesita nuestra aplicación para empezar a trabajar.

En nuestra terminal vemos que ya termino la instalación y que contamos con una serie de scripts que podemos ejecutar desde la instalación, configuración o empezar a utilizar nuestro proyecto.

Primeramente vamos a momvernos a la nueva carpeta que se creo cuando hicismos `creacte-react-app` en está carpeta vamos a inicializar nuestro proyecto 

Comando para cambiar la version de node desde nvm en linux.
``nvm use --delete-prefix v12.13.1``

- Los Componentes superiores de react son conocidos como **Stateful(con estado)** o componente de clase, esté componente es especial porque tiene **estado** y contiene un **ciclo de vida**.
- El componente **Stateless(sin estado)** como su nombre lo dice no contiene estado ni ciclo de vida, solo es un archivo que returno solo UI.

- Componente **Presentational**: aquellos que solo tienen una parte muy particular de html que se va ha ver en el navegador, y que no tiene absolutamente lógica, no trae ni siquiera propiedades.

## ¿Qué es JSX?

**JSX: JavaScript + HTML**

Es una sintaxis un curiosa porque mezcla html con xml y con javascript que te vas a topar cuando estes trabajando con react. 

Esta es una forma en la que React hace que todo esté dentro del mismo componente, esto significa que no tengamos que tener, una parte aislada para manejar la parte visual, nuestros html o nuestros elementos y otra donde tengamos la lógica si no que nuestro mismo componente pueda vivir con ambos.

Algo que tienes que saber y es que React utiliza clases, vamos a empezar a trabajar con clases de css en nuestro proyecto y es por eso que las clases de css no son llamadas con la palabra *class* como tradicionalmente lo hacemos en html, cuando trabajamos con react y usamos la palabra reservada *className* 

## props: comunicación entre componentes

Así como las funciones en javascript reciben párametros, nosotros podemos pasar propiedades a nuestros componentes no importa si son de tipo o de tipo clase o si son de tipo presentacional, en caso de que desees cambiarlas o editarlas debemos instanciarlas en una nueva variable.

## ¿Qué son los métodos del ciclo de vida?

Todos los componentes en React pasan por una serie de fases que generalmente se denominan “Ciclo de Vida del componente” es un proceso que React hace en cada componente, en algunos casos no podemos verlos como un bloque de código y en otros podemos llamarlos en nuestro componente para asignar una actividad según sea el caso necesario.

Los componentes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores.

### Montaje:

En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el DOM.

### Actualización:

En esta fase nuestro componente está al pendiente de cambios que pueden venir a través de un cambio en “state” o “props” esto en consecuencia realizan una acción dentro de un componente.

### Desmontaje:

En esta etapa nuestro componente “Muere” cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene en el DOM.

### Manejo de Errores:

Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación.

Algo que debemos tener en cuenta es que un componente NO debe pasar por toda las fases, un componente puede ser montado y desmontado sin pasar por la fase de actualización o manejo de errores.

Ahora que entendemos las fases que cumple el ciclo de vida en React vamos a entrar a detalle en cada uno de ellos para ver qué piezas de código se ejecutan y nos ayudarán a crear aplicaciones en React pasando por un ciclo de vida bien estructurado.

### Montado:

Constructor()

Este es el primer método al que se hace un llamado, aquí es donde se inicializan los métodos controladores, eventos del estado.

#### getDerivedStateFromProps()

Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.

#### render()

Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.

#### ComponentDidMount()

Este método se llama inmediatamente que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.

### Actualización: 

#### getDerivedStateFromProps()

Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.

#### shouldComponentUpdate()

Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.

#### render()

Se llama el método render que representa los cambios en el DOM.

#### componentDidUpdate()

Este método es invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.

### Desmontado

#### componentWillUnmount()

Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.

### Manejo de Errores:

#### getDerivedStateFromError()

Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.

#### componentDidCatch()

Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

Ahora que entendemos cada una de las fases que tiene el ciclo de vida de react, podemos utilizarlas según sea necesario en nuestra aplicación y de esta forma crear las interacciones que necesitemos.

## State Events

## Configuración de entorno de trabajo profesional

En esté modulo aprenderemos a construir nuestro proyecto en react pasando desde la instalación la configuración y como vamos a trabajar con las buens prácticas de un profesional que está trabajando hoy en día en el mercado laboral: aprenderás a configurar react, babel, webpack y eslint.

### Agregando compatibilidad con todos los navegadores

Babel es una herramienta que vamos a utilizar los desarrolladores para crear javascript moderno y poderlo transformar a javascript que pueda ser compatible con todos los navegadores, está herramienta nos va ha ayudar mucho a hacer cosas sorprendentes con las nuevas tecnologías que se van añadiendo cada vez a javascript.

babel intalación:
``yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader --dev``

archivo .babelrc
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

### Webpack empaquetando nuestros módulos

"Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

Instalación de Webpack y algunos plugins:

``yarn add webpack webpack-cli html-webpack-plugin html-loader  --dev``

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)|bower_components/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ]
}const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)|bower_components/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ]
}
```

### Webpack Dev Server: Reporte de errores y Cambios en tiempo real

Uno de los recursos más importantes a la hora de trabajar con react es poder probar lo que estamos construyendo, para eso nos vamos a poder ayudar de webpack y construir un entorno de desarrollo local que nos permita ver los cambios en tiempo real, para estó nos vamos a mover dentro de nuestra terminal y aquí vamos a instalar un paquete de webpack que nos va ha ayudar a crear esto.

``yarn add webpack-dev-server --dev``

Ahora lo que necesitamos es crear un script dentro de nuestro archivo de packages y ahí vamos a colocar la instrucción necesaria para correr nuestro entorno local

### Estilos Sass

Los preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

Instalación de Sass:

``yarn add --dev mini-css-extract-plugin css-loader node-sass sass-loader``

Configuración de Sass en Webpack (webpack.config.js):

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// ...
module: {
  rules: [
    {
      test: /\.(s*)css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        'css-loader',
        'sass-loader',
      ],
    }, 
  ],
},

// ...

plugins: [
  new MiniCssExtractPlugin({
    filename: 'assets/[name].css',
  }),
],`
```

### Configuración final: ESLint y Git Ignore

El Git Ignore es un archivo que nos permite definir qué archivos NO queremos publicar en nuestros repositorios. Solo debemos crear el archivo .gitignore y escribir los nombres de los archivos y/o carpetas que no queremos publicar.
Los linters como ESLint son herramientas que nos ayudan a seguir buenas prácticas o guías de estilo de nuestro código.
Se encargan de revisar el código que escribimos para indicarnos dónde tenemos errores o posibles errores. En algunos casos también pueden solucionar los errores automáticamente. De esta manera podemos solucionar los errores incluso antes de que sucedan.
Instalación de ESLint:

``npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y``

Podemos configurar las reglas de ESLint en el archivo .eslintrc.

### Añadiendo imágenes con Webpack

Vamos a usar File Loader para acceder a las imágenes de nuestro proyecto desde el código.

Inicialmente, estos archivos estáticos se encuentran junto al código de desarrollo. Pero al momento de compilar, Webpack guardará las imágenes en una nueva carpeta junto al código para producción y actualizará nuestros componentes (o donde sea que usemos las imágenes) con los nuevos nombres y rutas de los archivos.

Instalación de File Loader:

``npm install --save-dev file-loader``

Configuración de File Loader en Webpack (webpack.config.js):

```js
rules: [
  {
    test: /\.(png|gif|jpg)$/,
    use: [
      {
        loader: 'file-loader',
        options: { name: 'assets/[hash].[ext]' },
      }
    ],
  },
],
```

Uso de File Loader con React:

```js
import React from 'react';
import nombreDeLaImagen from '../assets/static/nombre-del-archivo';

const Component = () => (
  <img src={nombreDeLaImagen} />
);

export default Component;
```

### Imports, Variables y Fuentes de Google en Sass

Así como JavaScript, Sass nos permite almacenar valores en variables que podemos usar en cualquier otra parte de nuestras hojas de estilo.

```css
$theme-font: 'Muli, sans-serif;
$main-color: #8f57fd;

body {
  background: $main-color;
  font-family: $theme-font;
}
```

Podemos guardar nuestras variables en un archivo especial e importarlo desde los archivos de estilo donde queremos usar estas variables.

```css
# Vars.scss
$theme-font: 'Muli, sans-serif;
$main-color: #8f57fd;

# App.scss
@import ""./Vars.scss""

`body {
  background: $main-color;
  font-family: $theme-font;
}
```

También podemos importar hojas de estilo externas a nuestra aplicación. Por ejemplo: las fuentes de Google.

```css
@import url(https://fonts.googleapis.com/css?family=Muli&display-swap)
```

### Creando una Fake API

Vamos a usar JSON Server para crear una Fake API: una API ““falsa”” construida a partir de un archivo JSON que nos permite preparar nuestro código para consumir una API de verdad en el futuro.

Instalación de JSON Server:

``sudo npm install json-server -g``

Recuerda que en Windows debes correr tu terminal de comandos en modo administrador.

Ejecutar el servidor de JSON Server:

```bash json-server archivoParaTuAPI.json```

### React Hooks

React Hooks fue presentado en octubre del 2018 en React-conf de las Vegas US por Adan Abramov quien nos contó y nos mostro como trabajar con esta implementación que nos da estados y ciclo de vida a nuestros componentes de tipo función o mejor conocidos como **Stateless** 

#### Motivación

La gente se empezaba a complicar un poco con mantener las clases, esto significa que no entendian como trabajar con el constructor, como inicializar un estado así como el binding de las funciones que estabamos trabajando es por esto que empezaron a ver la opciones que ahora las tenemos como **react-hooks**. Otra la de las motivaciones es que teníamos problemas con los compontes y se volvia una cascada de elementos y que era un poco más complejo transmitir las propiedades entre cada uno de estos elementos teniendo *react-hooks* ahora vamos a poder hacer llamados para manejar un estado o un ciclo de vida en el componente más lejano sin necesidad de estar transmitiendo entre cada uno de ellos información. 

Teniendo en cuenta estas cosas que te estoy contando es que vamos a implementar en nuestro proyecto React-Hooks y para esto debes de saber que: **Solo esta disponible en la versión 16.8 en adelante**. Hay que tener en cuenta esto porque si estas trabajando con una versión anterior de React es que no vas a poder implementar estas cualidades en tu proyecto.

### useEffect y useState

Con *useState* vamos a manejar el estado y con *useEffect* vamos a hacer las transmisiones, podemos hacer peticiones de una API o un evento que se tenga que transmitir dentro de nuestros componentes así como también estar escuchando algún cambio que valla ha ser necesario 

### Lectura React Hooks

Los **React Hooks** son una característica de React que tenemos disponible a partir de la versión 16.8. Nos permiten agregar estado y ciclo de vida a nuestros componentes creados como funciones.

El Hook `useState` nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.

El argumento que enviamos a esta función es el valor por defecto de nuestro estado (initial state).

```jsx
import React, { useState } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  return <div>{name}div>;
}
```

El Hook `useEffect` nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.

El primer argumento que le enviamos a `useEffect` es una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.

El segundo argumento es un array donde podemos especificar qué propiedades deben cambiar para que React vuelva a llamar nuestro código. Si el componente actualiza pero estas props no cambian, la función no se ejecutará.

Por defecto, cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.

```jsx
import React, { useState, useEffect } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  useEffect(() => {
    document.title = name;
    return () => {
      document.title = 'el componente se desmontó';
    };
  }, [name]);

  return <div>{name}div>;
}
```

No olvides importar las funciones de los hooks desde la librería de React. También puedes usarlos de esta forma: ``React.useNombreDelHook``.

### Conectando la información de la API

Ahora lo que vamos a hacer es obtener la información de la fakeApi y transmitirsela a los demás componentes para así poder traer la información presentada en nuestro carousel y cada uno de los items que pueda tener.

### Custom Hooks

Una de las caracterisiticas de react-hooks es poder crear nuestros propios custom hooks lo que nos va a permitir separar la lógica de los componentes a una función que vamos a poder ejecutar a algún otro de los componentes y donde los necesitemos.

Vamos a ir a nuestro container y vamos a quitar nuestros lógica de ahí para crear un custom hook que podamos utilizar cuando lo necesitemos y donde sea necesario, en esté caso puede ser aquí o en cualquier otro componente, para lo que vamos a hacer es crear primeramente una carpeta la cual le vamos a llamar hooks porque ahí vamos a añadir cuantos hooks necesitemos.

### PropTypes

PropTypes nos ofrece una manera dinámica de verificar las propiedades que le pasamos a nuestros componentes con esto nosotros tenemos la forma de verificar el tipo de dato que le estamos pasando, si es un string, si es un booleano, si es un número, array o función y de está forma identificar como está construido nuestro componente, también tenemos la opción de pedirlos como requeridos o pasar por defecto algunos valores con estó en mente vamos ha añadir proptypes a nuestro componente de CarouselItem para poderle tener está historia de lo que le estamos pasando como propiedades.

Los PropTypes son una propiedad de nuestros componentes que nos permiten especificar qué tipo de elementos son nuestras props: arrays, strings, números, etc.

Instalación de PropTypes:

``npm install --save prop-types``

Uso de PropTypes:
```jsx
import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ name, lastName, age, list }) => {
  // ...
};

Component.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  list: PropTypes.array,
};

export default Component;
```

Por defecto, enviar todas nuestras props es opcional, pero con los propTypes podemos especificar cuáles props son obligatorias para que nuestro componente funcione correctamente con el atributo ``isRequired``.

```js
Component.propTypes = {
  name: PropTypes.string.isRequired, // obligatorio
  lastName: PropTypes.string.isRequired, // obligatorio
  age: PropTypes.number, // opcional,
  list: PropTypes.array, // opcional
};
```

### Debuggeando React con React DevTools

React DevTools es una herramienta muy parecida al Inspector de Elementos. Nos permite visualizar, analizar e interactuar con nuestros componentes de React desde el navegador.

Encuentra más información sobre está herramienta en: github.com/facebook/react-devtools.

