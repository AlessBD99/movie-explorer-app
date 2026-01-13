# Arquitectura Movie Explorer App

Esta aplicación utiliza una arquitectura basada en **MVC (Model-View-Controller)** y **Services**, diseñada para ser escalable, testeable y mantenible, siguiendo los principios **SOLID**.

## Capas de la Arquitectura

### 1. Model (Capa de Dominio)
Ubicada en `src/core/models/`.
- Define las interfaces y tipos de datos que utiliza la aplicación.
- Es independiente de frameworks o librerías externas.

### 2. View (Capa de Presentación)
Ubicada en `src/pages/` y `src/components/`.
- Componentes de React que se encargan únicamente de renderizar la UI.
- No deben contener lógica de negocio compleja ni llamadas directas a APIs.

### 3. Controller (Lógica de Orquestación)
Ubicada en `src/hooks/`.
- Implementada mediante **Custom Hooks**.
- Orquesta el estado de la vista y consume los servicios.
- Separa la lógica de React de la lógica de negocio pura.

### 4. Service (Lógica de Negocio)
Ubicada en `src/core/services/`.
- Clases que contienen la lógica de negocio.
- Utilizan repositorios para obtener o persistir datos.

### 5. Repository (Abstracción de Datos)
Ubicada en `src/core/repositories/`.
- **Interfaces (`IMovieRepository`)**: Definen el contrato de acceso a datos (Principio de Inversión de Dependencia).
- **Implementaciones (`ApiMovieRepository`)**: Implementan el contrato usando tecnologías específicas (Axios, Fetch, Mock data, etc.).

## Aplicación de Principios SOLID

- **S (Single Responsibility)**: Cada clase/función tiene una única razón de cambio. Los componentes solo pintan, los servicios solo procesan lógica, los hooks solo gestionan estado.
- **O (Open/Closed)**: Los servicios están abiertos a extensión (mediante nuevas implementaciones de repositorios) pero cerrados a modificación.
- **L (Liskov Substitution)**: Cualquier implementación de `IMovieRepository` puede ser usada por `MovieService` sin que este último sepa cuál es.
- **I (Interface Segregation)**: Se definen interfaces específicas para cada necesidad de datos en lugar de una interfaz gigante.
- **D (Dependency Inversion)**: Los módulos de alto nivel (`MovieService`) dependen de abstracciones (`IMovieRepository`), no de detalles de bajo nivel (`ApiMovieRepository`).

## Estructura de Carpetas

```text
src/
├── core/
│   ├── models/       <-- Model
│   ├── services/     <-- Service
│   └── repositories/ <-- Data Access (Interface + Implementation)
├── hooks/            <-- Controller (React logic)
├── pages/            <-- View (Page components)
├── components/       <-- View (Reusable components)
└── api/              <-- API clients config (e.g., Axios setup)
```
