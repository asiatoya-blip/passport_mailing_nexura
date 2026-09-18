# 📐 ARQUITECTURA DE PLANTILLAS - ANÁLISIS DETALLADO

**Fecha**: 2026-09-18  
**Objetivo**: Identificar componentes reutilizables y variables necesarias para evitar duplicación

---

## 🔄 COMPONENTES REUTILIZABLES

### 1. HEADER (Reutilizable - 100%)
```
Variables:
- {{ENTITY_LOGO_URL}}
- {{ENTITY_NAME}}
- {{ENTITY_SECRETARIAT_TITLE}}
```
**Usado en**: Todas las 13 plantillas (inicio y footer)

---

### 2. STEPPER (Reutilizable - 100%)
Componente parametrizado con 4 pasos. Cambia dinámicamente según estado.

```
Variables por paso:
- {{STEP1_BG}} - Color fondo (ej: #22C55E)
- {{STEP1_TEXT}} - Color texto
- {{STEP1_ICON}} - Icono (✓, ✕, ⏱, ↻, o número)
- {{STEP1_LABEL}} - Texto label ("Registro de datos")
- {{LINE1_START}} - Color gradiente línea inicio
- {{LINE1_END}} - Color gradiente línea fin
(Repetir para STEP2, STEP3, STEP4, LINE2, LINE3)
```

**Estados predefinidos en huila.json**:
- `after_registration`: ✓ ✓ ○ ○
- `after_first_payment`: ✓ ✓ ○ ○
- `appointment_scheduled`: ✓ ✓ ⏱ ○
- `appointment_rescheduled`: ✓ ✓ ↻ ○
- `appointment_cancelled`: ✓ ✓ ✕ ○
- `payment_failed`: ✓ ✕ ○ ○
- `second_payment_pending`: ✓ ✓ ⏱ ○
- `complete`: ✓ ✓ ✓ ✓

---

### 3. ALERT BANNER (Reutilizable - 100%)
Componente que cambia color según estado. Usado en cada plantilla con mensajes diferentes.

```
Variables:
- {{ALERT_BG}} - Color fondo (#CFF7D3, #FEE2E2, #FEF3C7, #DBEAFE, etc)
- {{ALERT_ICON}} - Icono (✓, ✕, ⏱, ℹ, ⚠️)
- {{ALERT_TEXT}} - Mensaje de alerta
- {{ALERT_TEXT_COLOR}} - Color texto (#02542D, #991B1B, #92400E, etc)
```

**Colores predefinidos**:
- Verde (éxito): BG=#CFF7D3, TEXT=#02542D
- Rojo (error): BG=#FEE2E2, TEXT=#991B1B
- Naranja (warning): BG=#FEF3C7, TEXT=#92400E
- Azul (info): BG=#DBEAFE, TEXT=#0C4A6E
- Púrpura (reprogramada): BG=#EDE9FE, TEXT=#6B21A8

---

### 4. BOTÓN CTA (Reutilizable - 100%)
```
Variables:
- {{BUTTON_PRIMARY_TEXT}} - Texto del botón
- {{BUTTON_PRIMARY_URL}} - URL destino
```

**Estilos fijos**:
- Color: #0F61E4
- Border-radius: 999px
- Padding: 12px 24px
- Font-size: 16px
- Font-weight: 400

---

### 5. FOOTER (Reutilizable - 100%)
```
Variables:
- {{ENTITY_LOGO_URL}}
- {{ENTITY_NAME}}
- {{ENTITY_SECRETARIAT_TITLE}}
- {{ENTITY_COPYRIGHT}}
- {{ENTITY_SUPPORT_EMAIL}}
```

**Estructura fija**:
- Bloque 1: Logo + Nombre entidad
- Bloque 2: "Gracias por utilizar nuestros servicios"
- Bloque 3: Copyright + Email
- Bloque 4: Iconos redes sociales

---

## 📋 MAPA DE PLANTILLAS (13 Total)

| # | Plantilla | Stepper | Alert | Contenido Único | Componentes Extra |
|---|-----------|---------|-------|-----------------|------------------|
| 01 | Datos Registrados | ✓✓○○ (verde) | Verde | Pricing 3 opciones, Datos registrados | Data List Card |
| 02 | Primer Pago Aprobado | ✓✓○○ (verde) | Verde | Confirmación pago | Tabla detalles pago |
| 03 | Primer Pago Rechazado | ✓✕○○ (rojo) | Rojo | Error + reintento | Tabla detalles pago |
| 04 | Cita Agendada Exitosa | ✓✓⏱○ (naranja) | Naranja | QR + Datos cita | QR Code, Datos cita |
| 05 | Cita Reprogramada | ✓✓↻○ (púrpura) | Púrpura | Nueva fecha + confirmación | Datos cita reprogramada |
| 06 | Cita Cancelada | ✓✓✕○ (rojo) | Rojo | Resumen cancelación | Datos cancelación |
| 07 | Recordatorio Agendamiento | ✓✓⏱○ (naranja) | Naranja | Instrucciones | Texto descriptivo |
| 08 | Solicitud Segundo Pago | ✓✓⏱○ (naranja) | Naranja | Tarifas segundo pago | Tabla tarifas |
| 09 | Segundo Pago Aprobado | ✓✓✓✓ (verde) | Verde | Confirmación final | Tabla detalles pago |
| 10 | Pasaporte Listo | ✓✓✓✓ (verde) | Verde | Notificación entrega | Imagen pasaporte, Horarios |
| 11 | Recordatorio Cita Próxima | ✓✓⏱○ (naranja) | Naranja | Reminder 24h | Datos cita + requisitos |
| 12 | Requisitos Extendidos | ✓✓⏱○ (naranja) | Azul | 3+ bloques requisitos | Listas requisitos |
| 13 | Requisitos Adjunto | ✓✓⏱○ (naranja) | Amarillo | PDF adjunto | Texto referencia |

---

## 🎨 CONTENIDO ÚNICO POR PLANTILLA

### Plantilla 01 - Datos Registrados
**Stepper**: after_registration (✓✓○○)  
**Alert**: Verde - "Hemos recibido el registro exitosamente"  
**Contenido**:
- Data List Card (6 campos: nombre, cédula, nacimiento, email, teléfono, municipio)
- Pricing Selector (3 opciones: Ordinario, Ejecutivo, Emergencia)
- 2x Notice Cards (Requisitos, SITAC)

**Variables específicas**:
```
- {{CITIZEN_FULLNAME}}
- {{CITIZEN_ID}}
- {{CITIZEN_DOB}}
- {{CITIZEN_EMAIL}}
- {{CITIZEN_PHONE}}
- {{CITIZEN_MUNICIPALITY}}
- {{TARIFF_ORDINARIO_PRICE}}
- {{TARIFF_ORDINARIO_DAYS}}
- {{TARIFF_EJECUTIVO_PRICE}}
- {{TARIFF_EJECUTIVO_DAYS}}
- {{TARIFF_EMERGENCIA_PRICE}}
- {{TARIFF_EMERGENCIA_DAYS}}
```

---

### Plantilla 02 - Primer Pago Aprobado
**Stepper**: after_first_payment (✓✓○○)  
**Alert**: Verde - "Hemos recibido el primer pago"  
**Contenido**:
- Payment Details Table (6 campos: Estado, Tipo pasaporte, Método, Fecha/Hora, ID, Email, Monto)

**Variables específicas**:
```
- {{PAYMENT_STATE}} - "Aprobado"
- {{PAYMENT_PASSPORT_TYPE}} - "Pasaporte Ordinario"
- {{PAYMENT_METHOD}} - "PSE"
- {{PAYMENT_DATE}} - "13/03/2026 - 09:12 A.M."
- {{PAYMENT_ID}} - "1.001.236.547"
- {{PAYMENT_EMAIL}} - "user@example.com"
- {{PAYMENT_AMOUNT}} - "$ 237.600"
```

---

### Plantilla 03 - Primer Pago Rechazado
**Stepper**: payment_failed (✓✕○○)  
**Alert**: Rojo - "No recibimos el primer pago"  
**Contenido**:
- Payment Details Table (igual a 02, pero con STATE="Rechazado")
- Texto de reintento

**Variables**: Mismas que 02

---

### Plantilla 04 - Cita Agendada Exitosamente
**Stepper**: appointment_scheduled (✓✓⏱○)  
**Alert**: Naranja - "Cita agendada correctamente"  
**Contenido**:
- QR Code (imagen)
- Appointment Details Table (4 campos: ID, Fecha, Hora, Ubicación)
- Requirements Notice Card

**Variables específicas**:
```
- {{APPOINTMENT_QR_URL}} - URL de imagen QR
- {{APPOINTMENT_ID}} - "1.001.236.547"
- {{APPOINTMENT_DATE}} - "13/03/2026"
- {{APPOINTMENT_TIME}} - "09:40 A.M."
- {{APPOINTMENT_LOCATION}} - "Cra. 4 #8-60, Neiva, Huila"
```

---

### Plantilla 05 - Cita Reprogramada
**Stepper**: appointment_rescheduled (✓✓↻○)  
**Alert**: Púrpura - "Cita reprogramada"  
**Contenido**:
- QR Code (imagen)
- Appointment Details Table (datos de nueva cita)
- Confirmation code

**Variables**: Mismas que 04 + {{RESCHEDULE_REASON}}

---

### Plantilla 06 - Cita Cancelada
**Stepper**: appointment_cancelled (✓✓✕○)  
**Alert**: Rojo - "Cita cancelada"  
**Contenido**:
- Cancellation Summary Table (3 campos: Fecha, Motivo, Nombre)
- Reembolso info

**Variables específicas**:
```
- {{CANCELLATION_DATE}} - "11/03/2026"
- {{CANCELLATION_REASON}} - "Cancelada por el ciudadano"
- {{CANCELLATION_CITIZEN}} - "Fabian Alejandro Siatoya León"
```

---

### Plantilla 07 - Recordatorio Agendamiento
**Stepper**: appointment_scheduled (✓✓⏱○)  
**Alert**: Naranja - "Ha realizado su primer pago pero aún no ha agendado"  
**Contenido**:
- Texto descriptivo con instrucciones
- Button: "Agendar cita"

**Variables específicas**:
```
- {{CITIZEN_FIRSTNAME}}
- {{SCHEDULING_DEADLINE}}
```

---

### Plantilla 08 - Solicitud Segundo Pago
**Stepper**: second_payment_pending (✓✓⏱○)  
**Alert**: Naranja - "Complete su trámite realizando el segundo pago"  
**Contenido**:
- Second Payment Tariffs Table (3 opciones: Ordinario, Ejecutivo, Emergencia)
- Electoral certificate discount info

**Variables específicas**:
```
- {{SECOND_TARIFF_ORDINARIO}} - "$ 116.600"
- {{SECOND_TARIFF_EJECUTIVO}} - "$ 256.400"
- {{SECOND_TARIFF_EMERGENCIA}} - "$ 201.700"
- {{ELECTORAL_DISCOUNT}} - "10%"
```

---

### Plantilla 09 - Segundo Pago Aprobado
**Stepper**: complete (✓✓✓✓)  
**Alert**: Verde - "Trámite completado"  
**Contenido**:
- Payment Details Table (confirmación final)
- Completion code
- CSAT Survey (5 emojis)

**Variables**: Mismas que 02 + {{COMPLETION_CODE}}

---

### Plantilla 10 - Pasaporte Listo para Recoger
**Stepper**: complete (✓✓✓✓)  
**Alert**: Verde - "Pasaporte expedido"  
**Contenido**:
- Hero Image (foto pasaporte)
- Office Hours Table (3 horarios: Mañana, Tarde, Viernes)
- Pickup instructions

**Variables específicas**:
```
- {{DELIVERY_IMAGE_URL}} - Imagen pasaporte
- {{DELIVERY_CODE}} - Código trámite
- {{DELIVERY_HOURS_MORNING}} - "07:05 A.M. a 11:45 A.M."
- {{DELIVERY_HOURS_AFTERNOON}} - "02:00 P.M. a 04:45 P.M."
- {{DELIVERY_HOURS_FRIDAY}} - "02:05 P.M. a 04:30 P.M."
```

---

### Plantilla 11 - Recordatorio Cita Próxima (24h)
**Stepper**: appointment_scheduled (✓✓⏱○)  
**Alert**: Naranja - "Recuerde cumplir con agendamiento"  
**Contenido**:
- Appointment Details Table (Cédula, Fecha, Hora)
- Requirements Notice Card
- 10-minute advance notice + cancellation policy

**Variables**: Mismas que 04

---

### Plantilla 12 - Requisitos Extendidos
**Stepper**: appointment_scheduled (✓✓⏱○)  
**Alert**: Azul - "Información importante"  
**Contenido**:
- 3 bloques de requisitos (Adultos, Menores, Casos especiales)
- Cada bloque es una lista con checkbox

**Variables específicas**:
```
- {{REQUIREMENTS_ADULTS}} - Array de requisitos
- {{REQUIREMENTS_MINORS}} - Array de requisitos
- {{REQUIREMENTS_SPECIAL}} - Array de requisitos
```

---

### Plantilla 13 - Requisitos Adjunto (PDF)
**Stepper**: appointment_scheduled (✓✓⏱○)  
**Alert**: Amarillo - "Documento adjunto"  
**Contenido**:
- Texto referencia PDF
- Download link

**Variables específicas**:
```
- {{REQUIREMENTS_PDF_URL}}
- {{REQUIREMENTS_PDF_NAME}}
```

---

## 📦 COMPONENTES A CREAR/ACTUALIZAR

### COMPONENTES EXISTENTES (Solo necesitan variables):
1. ✅ `header.mjml` - Reutilizable
2. ✅ `stepper.mjml` - Reutilizable
3. ✅ `buttons.mjml` - Reutilizable
4. ✅ `footer.mjml` - Reutilizable
5. ✅ `alert-banner.mjml` - Reutilizable

### COMPONENTES NUEVOS A CREAR:
1. 🆕 `data-list.mjml` - Para mostrar datos en lista (nombre, ID, fecha, email, etc.)
2. 🆕 `pricing-selector.mjml` - Tabla con 3 opciones de tarifa
3. 🆕 `payment-details.mjml` - Tabla con detalles de pago
4. 🆕 `appointment-details.mjml` - Tabla con datos de cita
5. 🆕 `qr-code-section.mjml` - QR + instrucciones
6. 🆕 `requirements-list.mjml` - Bloque de requisitos
7. 🆕 `notice-card.mjml` - Card de notificación (⚠️, ℹ️)
8. 🆕 `office-hours.mjml` - Tabla de horarios
9. 🆕 `csat-survey.mjml` - Survey de satisfacción (5 emojis)
10. 🆕 `tariffs-table.mjml` - Tabla tarifas segundo pago
11. 🆕 `hero-image.mjml` - Imagen grande (pasaporte)

---

## 🔧 ESTRUCTURA MJML POR PLANTILLA

Cada plantilla MJML seguirá este orden:

```
<mjml>
  <mj-head>
    <mj-include path="../components/head-styles.mjml" />
    <mj-title>{{PAGE_TITLE}}</mj-title>
  </mj-head>

  <mj-body background-color="#F9FAFB" padding="0">
    <mj-section background-color="#F9FAFB" padding="20px 0">
      <mj-column width="640">
        
        <!-- 1. HEADER -->
        <mj-include path="../components/header.mjml" />
        
        <!-- 2. TITLE HERO -->
        [Título centrado en caja blanca]
        
        <!-- 3. STEPPER -->
        <mj-include path="../components/stepper.mjml" />
        
        <!-- 4. ALERT BANNER -->
        <mj-include path="../components/alert-banner.mjml" />
        
        <!-- 5. CONTENIDO ÚNICO (varía por plantilla) -->
        [Data list, QR, Tablas, etc.]
        
        <!-- 6. BOTÓN CTA (obligatorio) -->
        <mj-include path="../components/buttons.mjml" />
        
        <!-- 7. NOTICE CARDS (si aplica) -->
        [Cards de requisitos, SITAC, etc.]
        
        <!-- 8. FOOTER -->
        <mj-include path="../components/footer.mjml" />
        
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

---

## 📊 ESTIMACIÓN DE TRABAJO

| Fase | Tarea | Archivos | Tiempo |
|------|-------|----------|--------|
| 1 | Crear 11 componentes nuevos | 11 | 2 horas |
| 2 | Crear plantilla 01 (referencia completa) | 1 | 45 min |
| 3 | Adaptar plantillas 02-13 | 12 | 1.5 horas |
| 4 | Actualizar huila.json con variables | 1 | 30 min |
| 5 | Testing y compilación | - | 30 min |
| **TOTAL** | | **25** | **~5 horas** |

---

## 🎯 PRÓXIMOS PASOS

1. ✅ **FASE 1**: Crear 11 componentes MJML nuevos
2. ✅ **FASE 2**: Crear plantilla 01 completa como referencia
3. ✅ **FASE 3**: Adaptar plantillas 02-13 (reutilizando componentes)
4. ✅ **FASE 4**: Compilar y testear
5. ✅ **FASE 5**: Desplegar en GitHub Pages

---

**Status**: 📋 PLAN LISTO PARA IMPLEMENTACIÓN

