# 📊 ANÁLISIS DE FIGMA - Mailing Pasaportes

**Fecha Análisis**: 2026-09-18  
**Proyecto**: Mailing - Pasaportes  
**Estado**: EN ANÁLISIS

---

## 📐 ESPECIFICACIONES GLOBALES

### Dimensiones y Layout
- **Canvas Width**: 640px
- **Márgenes laterales**: 20px (left/right)
- **Área de contenido**: 600px
- **Border-radius global**: 16px (en cajas/contenedores)
- **Stroke/Border**: 1px solid #E5E5EA (gris claro)

### Tipografía
- **Font Principal**: Plus Jakarta Sans
- **Fallback**: Arial, Helvetica, sans-serif

### Paleta de Colores
- **Primario**: #1A6FE8 (Azul)
- **Verde (Completado)**: #22C55E
- **Amarillo (Aviso)**: #FCD34D
- **Rojo (Error)**: #EF4444
- **Gris (Pendiente)**: #F3F4F6
- **Gris Oscuro (Texto)**: #6B7280
- **Gris Borde**: #E5E5EA (grey-5)

---

## 🎨 COMPONENTES POR ANALIZAR

### 1. Header/Cabecera
**Ubicación Figma**: node-id=167-????
- [ ] Logo + Título Secretaría
- [ ] Divisor inferior (border)
- [ ] Padding y márgenes
- [ ] Color de fondo

### 2. Stepper (Paso a Paso)
**Ubicación Figma**: node-id=167-????
- [ ] 4 pasos: Registro, Primer Pago, Agendamiento, Segundo Pago
- [ ] Líneas dinámicas con gradientes
- [ ] Iconos dinámicos (40px caja, 30px ícono):
  - ✓ Check (verde)
  - ✕ X (rojo)
  - ⏱ Reloj (naranja)
  - ↻ Sync (púrpura)
  - Números (1,2,3,4 - gris)
- [ ] Colores de caja según estado

### 3. Title-Hero
**Ubicación Figma**: node-id=167-????
- [ ] Título grande centrado
- [ ] Color y tamaño de fuente
- [ ] Padding

### 4. Content Cards (Cajas de Contenido)
**Ubicación Figma**: node-id=167-????
- [ ] Border-radius: 16px
- [ ] Stroke: 1px #E5E5EA
- [ ] Padding interno
- [ ] Sombra (si la hay)

### 5. Alert Banner (Avisos)
**Ubicación Figma**: node-id=167-????
- [ ] Variantes de color (verde, rojo, amarillo, azul)
- [ ] Icono + Texto
- [ ] Border-radius: 16px
- [ ] Padding

### 6. Pricing Selector (Tarifas)
**Ubicación Figma**: node-id=167-????
- [ ] 3 opciones de pasaporte
- [ ] Iconos + Precio + Descripción
- [ ] Card styling
- [ ] "RECOMENDADO" badge si aplica

### 7. Botones
**Ubicación Figma**: node-id=167-????
- [ ] Primario: Azul #1A6FE8, border-radius 100px, width auto
- [ ] Secundario: Outline azul, border-radius 100px, width 100%
- [ ] Padding: 14px 32px
- [ ] Font-weight: 700

### 8. Footer
**Ubicación Figma**: node-id=167-????
- [ ] **Bloque 1**: Logo + Texto de entidad
- [ ] **Bloque 2**: "Gracias por utilizar nuestros servicios"
- [ ] **Bloque 3**: Copyright + Email
- [ ] **Bloque 4**: Iconos redes sociales (TikTok, X, Facebook, Instagram, YouTube)
- [ ] Divisores entre bloques
- [ ] Border-radius: 16px

### 9. QR Appointment Card
**Ubicación Figma**: node-id=167-????
- [ ] 2 columnas: Datos cita + Código QR
- [ ] Styling y layout

### 10. CSAT Survey (Encuesta Satisfacción)
**Ubicación Figma**: node-id=167-????
- [ ] Título: "¿Cómo fue tu experiencia?"
- [ ] 5 emojis con etiquetas:
  - 😩 Muy difícil
  - 😞 Difícil
  - 😐 Normal
  - 😊 Fácil
  - 😄 Muy fácil
- [ ] URLs con parámetros dinámicos

### 11. Data List Card
**Ubicación Figma**: node-id=167-????
- [ ] Clave-Valor con iconos
- [ ] Styling

### 12. Notice Components
**Ubicación Figma**: node-id=167-????
- [ ] Notice SITAC
- [ ] Notice Requisitos (3 variantes)

### 13. Office Hours
**Ubicación Figma**: node-id=167-????
- [ ] Horarios con emojis (☀️ día, 🌙 noche, 🏢 oficina)

---

## 📋 PLANTILLAS A COMPLETAR

### 01-datos-registrados.html
**Contenido esperado** (basado en Figma):
- [ ] Header con logo
- [ ] Título: "Datos registrados exitosamente"
- [ ] Stepper (paso 1 ✓, resto gris)
- [ ] Alert banner verde
- [ ] Datos registrados (tabla clave-valor)
- [ ] Tarifas (3 opciones)
- [ ] Botón primario "Continuar con el primer pago"
- [ ] Bloque de aviso amarillo
- [ ] Footer completo

### 02-primer-pago-aprobado.html
- [ ] Header
- [ ] Título: "Primer pago aprobado"
- [ ] Stepper (pasos 1-2 ✓)
- [ ] Alert banner
- [ ] Confirmación de pago
- [ ] Footer

### 03-primer-pago-rechazado.html
- [ ] Stepper con error (rojo)
- [ ] Alert rojo
- [ ] Botón para reintentar

### 04-cita-agendada-exitosa.html
- [ ] Stepper (pasos 1-2 ✓, paso 3 en progreso)
- [ ] QR + datos cita
- [ ] Requisitos
- [ ] Footer

### 05-cita-reprogramada.html
- [ ] Stepper con estado púrpura (↻)
- [ ] Nuevos datos de cita

### 06-cita-cancelada.html
- [ ] Alert rojo
- [ ] Opciones de reprogramación

### 07-recordatorio-agendamiento.html
- [ ] CTA para agendar
- [ ] Stepper en estado naranja (⏱)

### 08-solicitud-segundo-pago.html
- [ ] Solicitud pago 2
- [ ] Tarifas
- [ ] Botón continuar

### 09-segundo-pago-aprobado.html
- [ ] Stepper completo (4/4 ✓)
- [ ] Confirmación final

### 10-pasaporte-listo-recoger.html
- [ ] Notificación de entrega
- [ ] Instrucciones

### 11-recordatorio-cita-proxima.html
- [ ] Recordatorio 24h
- [ ] Datos de cita

### 12-cita-requisitos-extendidos.html
- [ ] Requisitos por categoría
- [ ] Listados

### 13-cita-requisitos-adjunto.html
- [ ] Referencia a PDF adjunto
- [ ] Instrucciones

---

## 🎯 ACCIÓN INMEDIATA

**Orden de implementación**:
1. Documentar especificaciones exactas de cada componente
2. Actualizar componentes MJML (header, stepper, footer, etc.)
3. Crear estructura de assets (src/assets/icons/, src/assets/logos/)
4. Completar plantilla 01-datos-registrados.html como referencia
5. Aplicar mismo patrón a las 12 restantes
6. Commit y push
7. Verificar en GitHub Pages

---

**Estado**: Pendiente análisis detallado de 13 frames de Figma
