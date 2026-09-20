# 🎞️ Sistema de Cine - Trabajo Práctico #1

## 📌 Introducción
Este repositorio contiene el código fuente y la documentación para el desarrollo de un Sistema de Cine integral. La aplicación web abarca tanto la experiencia del cliente para la gestión y compra de entradas, como las herramientas administrativas y operativas requeridas por el personal del establecimiento. El objetivo principal es construir una solución robusta aplicando los conocimientos adquiridos durante la cursada de la materia.

## 🧑‍🎓 Datos del Alumno

| Campo | Detalle |
|---|---|
| **Nombre** | Franco Espósito |
| **Materia** | Programación 4 |
| **División** | 141 |
| **Rama de Trabajo** | `feature/develop` |

*(Nota: Una vez se obtenga una versión usable, se realizará el despliegue y push a la rama `main` como release).*

---

## 🛠️ Tecnologías Utilizadas
- **Frontend / Framework:** Angular
- **Backend / Persistencia:** Supabase
- **Formato de Aplicación:** PWA (Progressive Web App)
- **Control de Versiones:** Git & GitHub

---

## 🚀 Requerimientos del Sistema

### 1. 🎞️ Módulo de Películas y Cartelera
- **Catálogo:** Gestión completa de películas disponibles y próximos estrenos.
- **Detalles:** Nombre, imagen (póster), sinopsis, duración y múltiples géneros.
- **Clasificación por Edad:** Restricción automatizada (menores de 13/18 años no pueden comprar sin adulto, advertencia obligatoria).
- **Formatos e Idiomas:** Soporte de proyecciones en 2D, 3D, 4D y 5D; en Castellano o Subtitulada.
- **Exploración:** Buscador de películas y filtrado por género.
- **Destacados:** Visualización de las 3 películas más vendidas en la pantalla principal.

### 2. 🏛️ Salas y Funciones
- **Gestión:** Administración integral de salas y funciones.
- **Asignación Automática:** El sistema asigna salas de forma inteligente, impidiendo que haya funciones simultáneas en un mismo espacio.
- **Intervalo de Limpieza:** Restricción de al menos 30 minutos entre funciones de una misma sala, validado con la duración de la película.
- **Estructura de la Sala:** 20 filas numeradas con letras (A a T) y 3 columnas con 4, 20 y 4 butacas respectivamente.

### 3. 💺 Butacas Inteligentes
- **Mapa Interactivo:** Selección visual con disponibilidad y bloqueo en tiempo real.
- **Butacas Accesibles:** Las filas J y K son exclusivas para personas con discapacidad (distribución de 2, 10 y 2 butacas por columna) y deben estar resaltadas visualmente.
- **Butacas VIP:** Las últimas 3 filas (R, S y T) tienen un precio diferencial más alto, con advertencia clara al usuario y resaltado visual.

### 4. 🎟️ Compra de Entradas y Código QR
- **Modalidades:** Compra para usuarios registrados o usuarios invitados (anónimos).
- **Flujo:** Selección de película, función, butacas y pago.
- **Validación Universal (QR):** Generación de entrada en PDF con un único código QR. Este código sirve para validar la entrada al cine y retirar los productos del Candy Bar. Se desactiva automáticamente tras su uso completo. Permite validación por escaneo o ingreso manual.

### 5. 🍿 Experiencia del Cliente
- **Candy Bar:** Venta de productos categorizados (pochoclos, bebidas) y combos especiales configurables desde el admin, comprados junto con la entrada.
- **Reseñas:** Sistema de calificación por estrellas y comentarios por parte del público, mostrando promedio en el detalle de la película.
- **Fidelización:** Los usuarios registrados suman puntos (1 punto = 1 peso gastado). Estos puntos se canjean por entradas o comida según el costo definido por el administrador.
- **Cupones:** Sistema de descuentos porcentuales (ej. 20% de bienvenida al registrarse o promociones para >50 años).
- **Mis Películas:** Historial de películas vistas por el usuario con pósters, fechas y reseñas dejadas.
- **Próximamente y Preventa:** Alertas de estrenos y venta anticipada (ej. 7 días antes) con precio promocional automático.
- **Cancelaciones y Crédito:** Posibilidad de cancelar compras hasta 2 horas antes de la función. No hay reintegro de dinero, sino saldo a favor en la billetera virtual del usuario para futuras compras.

### 6. 🛠️ Backoffice Administrativo
- **Gestión Integral (ABM):** Películas, salas, funciones, butacas, productos, combos, recompensas de fidelización, precios y cupones.
- **Auditoría (Logs):** Registro de actividad que detalla quién hizo un cambio, qué hizo y cuándo ocurrió (creación de funciones, cambio de precios, validación de QR).
- **Reportes y Estadísticas:**
  - Facturación diaria y entradas vendidas.
  - Gráficos de películas más vistas por semana y mes.
  - Producto de Candy Bar más vendido.
  - Exportación de reportes a PDF y Excel.

---

## 🏗️ Arquitectura y Decisiones Técnicas
> *Esta sección será completada a medida que se desarrolle el proyecto, documentando los patrones utilizados y la estructura técnica.*

### Frontend (Angular)
- *A definir.*

### Backend (Supabase)
- *A definir (Modelo Relacional, Autenticación, Políticas de Seguridad RLS, Storage).*

### Lógica de Negocio Relevante
- *A definir.*
