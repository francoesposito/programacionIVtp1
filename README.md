# 🎞️ Sistema de Cine - Trabajo Práctico #1

## Introducción
Este repositorio contiene el código fuente y la documentación para el desarrollo de un Sistema de Cine integral. La aplicación web abarca tanto la experiencia del cliente para la gestión y compra de entradas, como las herramientas administrativas y operativas requeridas por el personal del establecimiento. El objetivo principal es construir una solución robusta aplicando los conocimientos adquiridos durante la cursada de la materia.

## Datos del Alumno

| Campo | Detalle |
|---|---|
| **Nombre** | Franco Espósito |
| **Materia** | Programación 4 |
| **División** | 141 |
| **Rama de Trabajo** | `feature/develop` |
| **Repositorio GitHub** | [https://github.com/francoesposito/programacionIVtp1.git](https://github.com/francoesposito/programacionIVtp1.git) |
| **Despliegue Vercel** | [https://cine-sooty.vercel.app/](https://cine-sooty.vercel.app/) |
| **Base de Datos Supabase** | [https://idgggbimcwrofxxxwsxa.supabase.co](https://idgggbimcwrofxxxwsxa.supabase.co) |

---

## Tecnologías Utilizadas
- **Frontend / Framework:** Angular (Standalone components, Signals, Control Flow).
- **UI Framework:** Ionic (con estilo visual propio y producido, descartando el look por defecto del framework).
- **Backend / Persistencia:** Supabase (Auth, Database, Storage, Realtime, Edge Functions/RPC).
- **Formato de Aplicación:** PWA (Progressive Web App) con Service Worker para caché offline.
- **Control de Versiones:** Git & GitHub.
- **Despliegue:** Vercel (Frontend) desde el inicio del proyecto.

---

## Actores del Sistema
1. **Cliente Invitado (Anónimo):** Puede explorar la cartelera, ver detalles y comprar entradas sin estar registrado (no acumula puntos).
2. **Cliente Registrado:** Además de lo anterior, tiene perfil, acumula puntos, usa billetera virtual e historial de compras.
3. **Empleado (Personal del Cine):** Encargado de validar códigos QR e ingresos.
4. **Administrador (Backoffice):** Gestiona películas, salas, funciones, combos, cupones y visualiza reportes.

---

## Requisitos Funcionales (RF)

### Módulo de Usuarios y Autenticación
- **RF-01 | Registro de Usuarios:** El sistema recopilará obligatoriamente los siguientes datos: mail, nombre, apellido, fecha de nacimiento, tipo de sangre, color de ojos y cantidad de días de vacaciones por año.
- **RF-02 | Login y Autenticación:** Inicio de sesión y manejo de sesiones mediante Supabase Auth, incluyendo integración con OAuth (Google y GitHub). 
- **RF-03 | Gestión de Perfil:** El perfil del usuario debe mostrar datos personales, puntos acumulados, historial de canjes, saldo en billetera virtual y el historial de películas vistas (con pósters, fechas y reseñas dejadas).

### Módulo de Películas y Cartelera
- **RF-04 | Catálogo y Detalles:** Gestión de películas disponibles y próximos estrenos, incluyendo nombre, póster (vía Supabase Storage), sinopsis, duración y géneros.
- **RF-05 | Exploración y Destacados:** Buscador de películas, filtrado por género y visualización de las 3 películas más vendidas en la pantalla principal.
- **RF-06 | Formatos e Idiomas:** Soporte de proyecciones en 2D, 3D, 4D y 5D; Castellano o Subtitulada.
- **RF-07 | Preventa y Próximamente:** Configuración de preventa específica película por película, con alertas de estreno y precio promocional automático.

### Módulo de Salas y Funciones
- **RF-08 | Gestión de Salas:** Administración integral de salas, cada una estructurada en 20 filas (A a T) y 3 columnas (4, 20 y 4 butacas).
- **RF-09 | Asignación Automática:** Asignación inteligente de salas impidiendo funciones simultáneas.
- **RF-10 | Mapa Interactivo de Butacas:** Selección visual con disponibilidad y bloqueo en tiempo real utilizando Supabase Realtime.

### Módulo de Compra y Pagos
- **RF-11 | Compra de Entradas:** Flujo de selección de película, función, butacas y pago. Se incluirán combos destacados del Candy Bar en la pantalla de compra.
- **RF-12 | Generación de QR:** Generación de entrada en PDF con un único código QR (que valida tanto la entrada al cine como el retiro en el Candy Bar).
- **RF-13 | Billetera y Crédito:** El crédito de la billetera virtual es combinable con otros métodos de pago al realizar una compra.
- **RF-14 | Cupones y Fidelización:** Uso de cupones porcentuales. Los puntos acumulados (1 punto = 1 peso) se canjean por comida o entradas.
- **RF-15 | Transacción Atómica:** La confirmación de compra (entrada, reserva de butacas, generación de QR, uso de cupón y suma/resta de puntos) se procesará en una única operación transaccional mediante RPC o Edge Function en Supabase.

### Módulo de Backoffice y Empleados
- **RF-16 | Gestión Integral (ABM):** Administración de películas, funciones, butacas, combos, recompensas y cupones.
- **RF-17 | Auditoría (Logs):** Registro de actividad que detalla quién hizo un cambio, qué hizo y cuándo ocurrió.
- **RF-18 | Reportes y Estadísticas:** Facturación, entradas vendidas, gráficos por semana/mes y combos más vendidos. Exportación a PDF y Excel.
- **RF-19 | Validación de QR:** Funcionalidad para empleados de escanear y desactivar QRs tras su uso completo.

### Notificaciones y PWA
- **RF-20 | Notificaciones Push:** El sistema enviará recordatorios automáticos 24 hs y 2 hs antes de la función (incluyendo sala, hora y QR), una notificación al validar el QR en el cine, y alertas de estreno.
- **RF-21 | PWA Offline:** Instalación de la aplicación como PWA incluyendo un Service Worker que permita el caché offline de la cartelera de películas.

---

## Reglas de Negocio (RN)

- **RN-01 | Restricción Etaria:** Al menor de edad no se le permite comprar la entrada (el sistema bloquea la compra validando la fecha de nacimiento). Además, toda entrada emitida para películas con restricción debe aclarar explícitamente que el menor debe concurrir acompañado por un adulto.
- **RN-02 | Intervalo de Limpieza:** Restricción de al menos 30 minutos de limpieza entre funciones de una misma sala, validado contra la duración de la película.
- **RN-03 | Butacas VIP:** Las filas R, S y T tienen un precio diferencial más alto, con advertencia clara al usuario y resaltado visual.
- **RN-04 | Butacas Accesibles:** Las filas J y K son exclusivas para personas con discapacidad (distribución 2, 10, 2), y deben estar resaltadas visualmente.
- **RN-05 | Butacas Contiguas:** Las butacas seleccionadas en una misma compra deben ser adyacentes, comprobado mediante un validador propio.
- **RN-06 | Puntos Intransferibles:** Los puntos obtenidos mediante el sistema de fidelización son estrictamente personales e intransferibles entre usuarios.
- **RN-07 | Cancelaciones:** Sólo se permite cancelar compras hasta 2 horas antes de la función. No hay reintegro de dinero en medios de pago, sino como saldo a favor en la billetera virtual.

---

## Requisitos No Funcionales (RNF)

- **RNF-01 | Seguridad (RLS):** Uso de Políticas de Seguridad a Nivel de Fila (Row Level Security - RLS) en Supabase para proteger los datos (ej: cada usuario solo puede ver su perfil y modificar su propio saldo/entradas).
- **RNF-02 | Desempeño y Sincronización:** Uso de Supabase Realtime para asegurar que los bloqueos de butacas impacten a todos los usuarios conectados de manera inmediata.
- **RNF-03 | Soporte Offline:** El service worker debe garantizar la carga inicial rápida y el funcionamiento básico (visualización de cartelera) sin conexión a internet.

---

## Fuera de Alcance
- **Mapa Físico del Edificio:** No se incluirá navegación indoor, layout del recinto, ni mapas tridimensionales del cine.
- **Pasarelas de Pago Reales:** Los pagos serán simulados.

---

## Arquitectura y Decisiones Técnicas

### Frontend (Angular)
- **Arquitectura Base:** Aplicación Angular bajo el enfoque de Standalone Components, prescindiendo de NgModules. Utilización de Signals para la reactividad y el nuevo Control Flow (`@if`, `@for`).
- **Lazy Loading:** Las rutas de administración (`/admin`) y de empleados (`/empleado`) se cargan mediante lazy loading para optimizar el bundle inicial y están protegidas mediante Guards.

### Backend (Supabase)
- **Base de Datos:** Modelo relacional implementado en PostgreSQL.
- **Autenticación:** Supabase Auth gestionando sesiones y OAuth.
- **Almacenamiento (Storage):** Buckets configurados para almacenar pósters de películas, avatares de usuarios e imágenes promocionales.
- **Lógica de Servidor:** Funciones RPC o Supabase Edge Functions para lógicas críticas (como la transacción atómica de compra).

### Soporte IA (Decisiones Técnicas)
Se decidió utilizar un agente de IA (Google Antigravity) como apoyo para acelerar el desarrollo y asistir en el diseño técnico inicial. Cabe destacar que la IA se utiliza exclusivamente como herramienta de soporte; todas las decisiones de arquitectura, configuración de políticas RLS y reglas de negocio son analizadas, comprendidas y justificadas individualmente para su defensa oral.

---

## Matriz de Trazabilidad Técnica

| Concepto de Cursada | Requisito Relacionado / Implementación |
|---------------------|----------------------------------------|
| **Standalone Components** | Arquitectura base del proyecto, abarcando todos los módulos y componentes de la PWA. |
| **Signals & Control Flow** | Manejo del estado del carrito de compras y control de la disponibilidad de butacas en tiempo real. |
| **Lazy Loading & Guards** | Rutas exclusivas `/admin` y `/empleado`, cargadas asíncronamente y protegidas según el rol del usuario logueado. |
| **Pipes Custom** | `duracion` (transforma min. a "Xh Ym"), `precioArs` (moneda), `edad` (cálculo de edad basado en la fecha de nacimiento). |
| **Directivas Custom** | `appHighlightButaca` (resaltado visual de butacas VIP y Accesibles), `appRestrictEdad` (bloqueo visual según clasificación). |
| **Validadores Custom** | Validador propio para garantizar la selección de **butacas contiguas** (RN-05). |
| **Supabase Realtime** | Actualización en vivo del mapa interactivo de butacas (RF-10). |

---

## Historias de Usuario Principales (Casos de Uso)

**HU-01: Compra Atómica de Entrada y Productos**
> *Como cliente registrado, quiero seleccionar una película, butacas contiguas y un combo destacado, pagando con mi crédito virtual y tarjeta de forma combinada, para obtener mi entrada rápidamente.*
- **Criterio de Aceptación:** El sistema verifica restricciones de edad; valida que las butacas sean contiguas (validador custom); procesa todo en una transacción atómica; genera el PDF con QR; envía notificación push y descuenta el saldo correspondiente.

**HU-02: Gestión de Cancelaciones**
> *Como cliente registrado, quiero cancelar mi compra si falta más de 2 horas para la función, para recibir el valor de las entradas como crédito en mi billetera virtual.*
- **Criterio de Aceptación:** El sistema valida la regla de 2 horas; anula la validez del QR; suma el saldo íntegro a la billetera virtual del cliente; libera las butacas en la base de datos (Realtime) y revierte los puntos de fidelización sumados.

**HU-03: Asignación Segura de Salas**
> *Como administrador, quiero crear funciones en las salas asegurándome de que haya al menos 30 minutos de limpieza entre películas.*
- **Criterio de Aceptación:** El sistema cruza horarios de inicio y duraciones de las películas en esa sala; si hay solapamiento o no se respeta el margen de 30 min (RN-02), la operación es rechazada con un mensaje de error explicativo.
