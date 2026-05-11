# ⚽ FC Barcelona - Proyecto Web

Página web del **FC Barcelona (Fútbol Masculino)** desarrollada como tarea de Docker Compose para el Taller de Desarrollo.

## 📋 Contenido

- **Plantilla Actual**: Jugadores de la temporada 2024/2025 con sus características (posición, nacionalidad, altura, peso, pie dominante, etc.)
- **Leyendas**: Jugadores históricos que marcaron la historia del club (goles, partidos, títulos)
- **Palmarés**: Logros históricos del FC Barcelona (Champions League, Ligas, Copas, hitos memorables)

## 🛠️ Tecnologías

| Tecnología     | Uso                          |
|----------------|------------------------------|
| **Node.js**    | Runtime del backend          |
| **Express**    | Framework API REST           |
| **React**      | Frontend (con Vite)          |
| **PostgreSQL 16** | Base de datos relacional |
| **Docker**     | Contenedorización            |
| **Docker Compose** | Orquestación de servicios |

## 📁 Estructura del Proyecto

```
Tarea-_Docker/
├── Backend/                          # API REST (Node.js + Express)
│   ├── controllers/                  # Lógica de negocio
│   │   ├── jugadoresActualesController.js
│   │   ├── jugadoresHistoricosController.js
│   │   └── logrosHistoricosController.js
│   ├── routes/                       # Definición de rutas
│   │   ├── jugadoresActuales.js
│   │   ├── jugadoresHistoricos.js
│   │   └── logrosHistoricos.js
│   ├── db.js                         # Conexión a PostgreSQL
│   ├── index.js                      # Punto de entrada del servidor
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── Frontend/                         # Aplicación React (Vite)
│   ├── src/
│   │   ├── components/               # Componentes reutilizables
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.css
│   │   │   ├── PlayerCard/
│   │   │   │   ├── PlayerCard.jsx
│   │   │   │   └── PlayerCard.css
│   │   │   └── Footer/
│   │   │       ├── Footer.jsx
│   │   │       └── Footer.css
│   │   ├── pages/                    # Páginas de la aplicación
│   │   │   ├── Home/
│   │   │   │   ├── Home.jsx
│   │   │   │   └── Home.css
│   │   │   ├── JugadoresActuales/
│   │   │   │   ├── JugadoresActuales.jsx
│   │   │   │   └── JugadoresActuales.css
│   │   │   ├── JugadoresHistoricos/
│   │   │   │   ├── JugadoresHistoricos.jsx
│   │   │   │   └── JugadoresHistoricos.css
│   │   │   └── Logros/
│   │   │       ├── Logros.jsx
│   │   │       └── Logros.css
│   │   ├── services/                 # Servicios de API
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── Database/                         # Scripts de base de datos
│   └── init.sql                      # Creación de tablas + datos iniciales
│
├── docker-compose.yml                # Orquestación de servicios
└── README.md
```

## 🚀 Cómo Ejecutar

### Con Docker Compose (Recomendado)

```bash
# Levantar todos los servicios
docker compose up --build

# Levantar en segundo plano
docker compose up --build -d

# Detener los servicios
docker compose down

# Detener y eliminar volúmenes (resetear BD)
docker compose down -v
```

### Acceso

| Servicio   | URL                           |
|------------|-------------------------------|
| Frontend   | http://localhost:5173          |
| Backend    | http://localhost:3001          |
| API Docs   | http://localhost:3001/         |

### Endpoints de la API

| Método | Endpoint                              | Descripción                    |
|--------|---------------------------------------|--------------------------------|
| GET    | `/api/jugadores-actuales`            | Todos los jugadores actuales   |
| GET    | `/api/jugadores-actuales/:id`        | Jugador actual por ID          |
| GET    | `/api/jugadores-historicos`          | Todos los jugadores históricos |
| GET    | `/api/jugadores-historicos/:id`      | Jugador histórico por ID       |
| GET    | `/api/logros`                        | Todos los logros históricos    |
| GET    | `/api/logros/:id`                    | Logro por ID                   |
| GET    | `/api/logros/categoria/:categoria`   | Logros por categoría           |
