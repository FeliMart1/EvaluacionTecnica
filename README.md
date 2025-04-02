# 🎬 Movie API

Esta es una API desarrollada en Node.js con Express que permite gestionar películas y favoritos utilizando la API de TheMovieDB (TMDB). Los usuarios pueden autenticarse, obtener películas y guardar sus favoritas.

## 📌 Características

- Autenticación de usuarios con JWT.
- Obtención de películas desde TheMovieDB.
- Filtrado de películas por palabra clave.
- Guardado y recuperación de películas favoritas por usuario.
- Validación de datos con Joi.

## 🚀 Instalación

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/FeliMart1/EvaluacionTecnica.git
cd EvaluacionTecnica
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Iniciar el servidor
```bash
npm run dev
```
El servidor se ejecutará en `http://localhost:3001`

## 📡 Endpoints

### 🔑 Autenticación
| Método | Endpoint        | Descripción |
|--------|---------------|-------------|
| POST   | `/api/auth/login` | Iniciar sesión y obtener token JWT. |
| POST   | `/api/auth/logout` | Cerrar sesión e invalidar el token. |

### 🎥 Películas
| Método | Endpoint          | Descripción |
|--------|-----------------|-------------|
| GET    | `/api/movies`   | Obtener lista de películas (con o sin keyword). |

### ⭐ Favoritos
| Método | Endpoint          | Descripción |
|--------|-----------------|-------------|
| POST   | `/api/favorites` | Agregar película a favoritos (requiere autenticación). |
| GET    | `/api/favorites` | Obtener películas favoritas del usuario autenticado. |

## 📜 Notas
- Para usar los endpoints protegidos, se debe incluir el token en los headers:
  ```json
  { "Authorization": "Bearer tu_token" }
  ```
- La API obtiene las películas desde TheMovieDB y les asigna un `suggestionScore` aleatorio.

## 📌 Tecnologías utilizadas
- Node.js
- Express.js
- JWT para autenticación
- Joi para validaciones
- Axios para consumir TheMovieDB

¡Gracias por usar Movie API! 🎬🍿

