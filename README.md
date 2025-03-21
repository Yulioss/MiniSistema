# Proyecto  MiniSistema en Angular 16

Este proyecto es una aplicación web desarrollada con Angular 16. Utiliza TypeScript y está diseñado para consumir una API REST.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js (versión recomendada: 18.x o superior)](https://nodejs.org/)
- [Angular CLI (versión 16)](https://angular.io/cli)
- [Git](https://git-scm.com/)

Para verificar que tienes Node.js y Angular CLI instalados, ejecuta:

```sh
node -v  # Debería devolver v18.x o superior
ng version  # Debería mostrar Angular CLI: 16.x.x
```
###  **Instalación de Dependencias**
```sh
npm install
```

### **Configuración de Variables de Entorno**
Este proyecto usa variables de entorno. Puedes configurarlas en el archivo `src/app/environments/environment.development.ts`:
```sh
production: false,
apiURL:"https://localhost:7000/api"
```
### **Ejecutar el Proyecto**
```sh
ng serve
```
