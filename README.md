#  Olimpo Ibérico

Aplicación web desarrollada con **Angular 21** que permite consultar información gastronómica utilizando la API pública **TheMealDB**.
El proyecto implementa autenticación simulada, protección de rutas mediante Guards y consumo de una API REST utilizando **HttpClient** y **RxJS**.

<img width="1437" height="827" alt="WhatsApp Image 2026-06-29 at 3 22 04 PM" src="https://github.com/user-attachments/assets/24e1de8f-89ef-4be8-a7ae-098ac8b294ec" />
<img width="1437" height="827" alt="WhatsApp Image 2026-06-29 at 3 22 04 PM" src="https://github.com/user-attachments/assets/3aabf519-050c-4339-9fc7-a396901d6106" />
<img width="1437" height="827" alt="WhatsApp Image 2026-06-29 at 3 22 04 PM" src="https://github.com/user-attachments/assets/2a821bfb-f3ba-488c-9ece-5ed643fcc4d8" />
<img width="1437" height="827" alt="WhatsApp Image 2026-06-29 at 3 22 04 PM" src="https://github.com/user-attachments/assets/2ce212e4-5581-4fa5-ae22-33e43194821f" />
<img width="1517" height="767" alt="Captura de pantalla 2026-06-29 153140" src="https://github.com/user-attachments/assets/a3be2062-7af9-444b-81bf-2ce84e85632b" />



#  Objetivos

* Desarrollar una aplicación SPA utilizando Angular.
* Implementar autenticación mediante LocalStorage.
* Consumir una API REST utilizando HttpClient.
* Aplicar formularios reactivos con validaciones.
* Proteger rutas mediante Guards.
* Organizar el proyecto siguiendo una arquitectura escalable.



#  Funcionalidades

* 🔐 Inicio de sesión.
* 🏠 Página principal (Home).
* 🔎 Búsqueda de platos por nombre.
* 🔤 Búsqueda de platos por letra inicial.
* 🎲 Obtención de un plato aleatorio.
* 🚫 Protección de rutas para usuarios autenticados.
* 🔓 Cierre de sesión.



#  Tecnologías utilizadas

* Angular 21
* TypeScript
* HTML5
* CSS3
* RxJS
* HttpClient
* Angular Router
* Reactive Forms
* LocalStorage
* TheMealDB API



# Estructura del proyecto

```text
src/
│
├── app/
│
├── core/
│   ├── guards/
│   ├── models/
│   └── services/
│
├── features/
│   ├── auth/
│   ├── home/
│   ├── search-name/
│   ├── search-letter/
│   ├── random-meal/
│   └── not-found/
│
├── app.config.ts
├── app.routes.ts
└── main.ts
```

---

#  Autenticación

El proyecto implementa una autenticación simulada utilizando **LocalStorage**.

Después de iniciar sesión se almacena el estado del usuario y se protege el acceso mediante:

* AuthGuard
* LoginGuard

---

# 🌐 API utilizada

TheMealDB

Endpoints utilizados:

### Buscar por nombre

```http
GET /search.php?s=nombre
```

### Buscar por letra

```http
GET /search.php?f=a
```

### Plato aleatorio

```http
GET /random.php
```

---

#  Arquitectura

El proyecto está organizado en tres capas principales:

### Core

Contiene servicios, modelos y Guards reutilizables.

### Features

Contiene todos los componentes de la aplicación.

### Models

Define las interfaces utilizadas para representar los datos recibidos desde la API.



# Conceptos aplicados

* Componentes Standalone
* Routing
* Guards
* Servicios
* Dependency Injection
* Reactive Forms
* HttpClient
* Observables
* RxJS
* Consumo de APIs REST
* LocalStorage


#  Aprendizajes obtenidos

Durante el desarrollo del proyecto se fortalecieron conocimientos relacionados con Angular, el consumo de APIs REST, la creación de formularios reactivos, la implementación de autenticación simulada, la protección de rutas mediante Guards y la organización de aplicaciones siguiendo una arquitectura basada en componentes y servicios.


#  Autor

**Emely Mariel Feliz**

Proyecto académico desarrollado para la asignatura de Desarrollo Web con Angular.
