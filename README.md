# VisionTest

En este proyecto contaré como fue mi paso a paso. Este proyecto esta optimizado principalmente para Android.

## Instalación y Ejecución

Para instalar y ejecutar esta aplicación, sigue estos pasos:

### Clonar el Repositorio

Primero, debes clonar el repositorio de GitHub. Abre tu terminal y ejecuta:

```bash
git clone https://github.com/Ariel-Eitner/vision-test.git
```

### Instalar Dependencias

Una vez clonado el repositorio, navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm i
```

### Iniciar Metro

Para iniciar el servidor Metro ejecuta:

```bash
npx react-native start
```

### Seleccionar Android

una vez iniciado el servidor de metro, presiona la A para abrir la aplicación en un celular conectado

# TroubleShooting

Debido a que algunas librerías estaban obsoletas o poco mantenidas, me he encontrado con una serie de problemas

## react-native-vision-camera

En esta librería, ellos recomiendan usar react-native-cameraroll para guardar las fotos, pero resulta que la biblioteca no esta mantenida y ya no es compatible con las nuevas versiones y arquitecturas de React Native, por lo que lo solucione de la siguiente forma:

### 1. Investigar otra librería

Debido a que no funcionaba la recomendada, preferí utilizar el sistema fs de react native

```bash
npm i react-native-fs
```

### 2. Resolviendo más Problemas

Este nuevo paquete también me daba errores, por lo que al investigar la documentación, encontré el issue

```bash
#1197 — The Future of react-native-fs
```

En la página

```bash
https://github.com/itinance/react-native-fs/issues/1216
```

En esa página está esta cita

> Hello folks!
>
> As the sorry state of this library started to compromise my projects, I decided to take it into my own hands, to give it the maintenance it well deserves, as a library providing essential functionality for many apps. I got no reply yet from the current owner in #1115, thus at least for the time being my fork of the library will live at https://github.com/birdofpreyru/react-native-fs, and it will be published to NPM under the name @dr.pogodin/react-native-fs.

### 3. Encontrando el paquete final

Al final de cuentas, utilice el paquete recomendado por el anterior:

```bash
npm i @dr.pogodin/react-native-fs
```

# Tecnologias Utilizadas

Debido al poco tiempo y a intentar hacerlo funcional, la app solo tiene unas pocas features, hecha con las siguientes tecnologías:

1. React Native 0.73.40

2. TypeScript

3. Redux Toolkit 2.2.1

4. @dr.pogodin/react-native-fs 2.24.1

# Arquitectura

La arquitectura de este software la hice sobre las bases fundacionales de React y React Native, las cuales permiten tener componentes reutilizables y modulares:

### 1. App.tsx

Punto de entrada principal de la aplicación. Esta la modifique para que pueda aceptar la Store de Redux, para evitar el prop drilling.

### 2. Carpeta src

Aquí mantuve una arquitectura bien delimitada, donde tengo el Front-End separada de la lógica, se divide en varias partes:

- Components: Carpeta dedicada a los renderizados, ya que manejan la parte visual de la APP

- Hooks: Arme hooks personalizados llamados useButtons y useGallery, para poder tener su lógica encapsulada y reutilizarla en todos los componentes que los precisen.

- Icons: Carpeta separada para los iconos

- Redux: Aquí puse los slices, reducers y el store para manejar estados globales.

- Types: Para declaraciones del tipo d.ts para mejorar los tipos de TS.

# Conclusión

Si bien el tiempo que tuve para hacerlo fue reducido, quiero demostrar mis habilidades a la hora de programar, de manejar los tipos de datos y de como he resuelto problemas inesperados como la deprecación de bibliotecas y mi habilidad para adaptarme a esos cambios y cambiar la arquitectura según sea necesario
