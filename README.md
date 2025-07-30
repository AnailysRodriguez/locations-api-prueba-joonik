# 🗺️ Locations API - Prueba Técnica JOONIK

Proyecto de prueba técnica para listar y administrar sedes desde una API RESTful desarrollada en Laravel 12, con consumo desde un frontend en React + Vite + Material UI.

---

## 🧱 Estructura del Proyecto

```
locations-api-prueba-joonik/
├── backend/        ← Laravel 12 (API REST con PostgreSQL)
├── frontend/       ← React + Vite + Material UI
└── README.md
```

---

## 📦 Requisitos

- PHP ≥ 8.2
- Composer
- Node.js ≥ 18.x
- PostgreSQL ≥ 13
- Git
- [Opcional] Docker (para contenedores)

---

## 🔧 Configuración del Backend (Laravel 12)

1. Clona el repositorio:

```bash
git clone https://github.com/tu_usuario/locations-api-prueba-joonik.git
cd locations-api-prueba-joonik/backend
```

2. Instala las dependencias de Laravel:

```bash
composer install
```

3. Copia el archivo `.env` y configúralo:

```bash
cp .env.example .env
```

Edita el `.env` con tu configuración local de PostgreSQL:

```dotenv
DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=locations_db
DB_USERNAME=postgres
DB_PASSWORD=tu_password

API_KEY=SoyAbundancia11
```

4. Genera la clave de aplicación:

```bash
php artisan key:generate
```

5. Ejecuta las migraciones y el seeder para cargar las sedes:

```bash
php artisan migrate --seed
```

6. Levanta el servidor local:

```bash
php artisan serve
```

Tu API estará en: `http://localhost:8000/api/locations`

---

## 🖥️ Configuración del Frontend (React + Vite + MUI)

1. Abre una nueva terminal y navega al frontend:

```bash
cd ../frontend
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea el archivo `.env` para configurar la URL de la API:

```dotenv
VITE_API_URL=http://localhost:8000/api
VITE_API_KEY=SoyAbundancia11
```

4. Ejecuta la aplicación React:

```bash
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

---

## 🔁 Test de la API

Puedes testear el endpoint con `curl`:

```bash
curl -H "x-api-key: SoyAbundancia11" http://localhost:8000/api/locations
```

Deberías ver la lista de sedes con nombre, imagen y fecha formateada.

---

## 🎯 Funcionalidades Completadas

- ✔️ Listado de sedes con nombre, imagen y fecha de creación.
- ✔️ Modo claro/oscuro.
- ✔️ Filtro por nombre.
- ✔️ Recarga manual.
- ✔️ Protección por API Key.
- ✔️ Seeders con imágenes personalizadas.

---

## 🧪 ¿Pruebas Unitarias?

No requeridas explícitamente en esta prueba técnica.  
(Pero el sistema es fácilmente testeable mediante PHPUnit o Pest).

---

## 🚀 Despliegue en Render

El backend y frontend pueden ser desplegados en [Render](https://render.com).  
Si deseas, se pueden generar los archivos `render.yaml` y configuración adicional.

---

## 👩‍💻 Autora

**Anailys Lisett Rodríguez Gil**  
Desarrolladora Full Stack  
[GitHub](https://github.com/) | [LinkedIn](https://www.linkedin.com/)