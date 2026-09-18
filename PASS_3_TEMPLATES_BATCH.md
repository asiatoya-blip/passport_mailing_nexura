# 📋 PASS 3 - BATCH DE PLANTILLAS 02-13

**Estrategia**: Crear las 12 plantillas restantes en lote, basándose en el patrón de 01.

---

## 📊 MAPA DE PLANTILLAS

| # | Plantilla | Stepper State | Contenido Principal | CTA |
|---|-----------|---------------|---------------------|-----|
| 01 | datos-registrados | After Registration (✓ 1/4) | Datos + Tarifas | Continuar pago 1 |
| 02 | primer-pago-aprobado | After 1st Payment (✓ 2/4) | Confirmación pago | Agendar cita |
| 03 | primer-pago-rechazado | Payment Failed (✕ 2/4) | Error + Reintento | Reintentar pago |
| 04 | cita-agendada-exitosa | Appointment (⏱ 3/4) | QR + Datos cita | Descargar QR |
| 05 | cita-reprogramada | Rescheduled (↻ 3/4) | Nueva fecha | Aceptar fecha |
| 06 | cita-cancelada | Cancelled (○ 3/4) | Confirmación | Agendar nueva |
| 07 | recordatorio-agendamiento | Pending (○ 3/4) | Recordatorio | Agendar ahora |
| 08 | solicitud-segundo-pago | Awaiting 2nd (○ 3/4) | Tarifas pago 2 | Continuar pago 2 |
| 09 | segundo-pago-aprobado | Complete (✓ 4/4) | Confirmación final | Instrucciones |
| 10 | pasaporte-listo-recoger | Complete (✓ 4/4) | Notificación entrega | Descargar trámite |
| 11 | recordatorio-cita-proxima | Appointment (⏱ 3/4) | Recordatorio 24h | Confirmar asistencia |
| 12 | cita-requisitos-extendidos | Appointment (⏱ 3/4) | Requisitos por tipo | Ver PDF |
| 13 | cita-requisitos-adjunto | Appointment (⏱ 3/4) | Referencia PDF | Descargar PDF |

---

## 🎨 ESTRUCTURA BASE PARA TODAS

```mjml
<mjml>
  <mj-head>
    <mj-include path="../components/head-styles.mjml" />
    <mj-title>{{PAGE_TITLE}}</mj-title>
  </mj-head>

  <mj-body background-color="#F9FAFB" padding="0">
    <mj-section background-color="#F9FAFB" padding="20px 0">
      <mj-column width="640">
        <mj-spacer height="12px" />
        
        <!-- HEADER -->
        <mj-include path="../components/header.mjml" />
        
        <!-- TITLE HERO -->
        <mj-section background-color="#FFFFFF" padding="32px 20px" 
                    style="border-radius: 16px; margin: 12px 20px 0 20px; border: 1px solid #E5E5EA;">
          <mj-column>
            <mj-text align="center" font-size="28px" color="#1F2937" 
                     font-weight="700" font-family="'Plus Jakarta Sans', Arial, sans-serif" margin="0">
              {{PAGE_TITLE}}
            </mj-text>
          </mj-column>
        </mj-section>
        
        <!-- STEPPER -->
        <mj-section background-color="transparent" padding="20px 20px 0 20px">
          <mj-column>
            <mj-include path="../components/stepper.mjml" />
          </mj-column>
        </mj-section>
        
        <!-- ALERTAS Y CONTENIDO ESPECÍFICO -->
        [Aquí va contenido específico de cada plantilla]
        
        <!-- FOOTER -->
        <mj-section background-color="transparent" padding="20px 0">
          <mj-column>
            <mj-include path="../components/footer.mjml" />
          </mj-column>
        </mj-section>
        
        <mj-spacer height="12px" />
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

---

## 📝 CONTENIDO ESPECÍFICO POR PLANTILLA

### **02 - Primer Pago Aprobado**
```
Title: "¡Primer pago aprobado!"
Stepper: ✓ ✓ ○ ○ (pasos 1-2 completados)
Alert: Verde (pago procesado)
Contenido:
  - Confirmación de transacción
  - Datos de pago
  - Próximo paso: Agendar cita
CTA: Agendar cita ahora
```

### **03 - Primer Pago Rechazado**
```
Title: "Primer pago no procesado"
Stepper: ✓ ✕ ○ ○ (error en paso 2)
Alert: Roja (transacción rechazada)
Contenido:
  - Motivo del rechazo
  - Opciones de reintento
  - Contacto de soporte
CTA: Reintentar el pago
```

### **04 - Cita Agendada Exitosa**
```
Title: "¡Cita agendada exitosamente!"
Stepper: ✓ ✓ ⏱ ○ (pasos 1-3, en progreso)
Alert: Naranja (agendamiento confirmado)
Contenido:
  - QR code para validación
  - Datos de la cita
  - Requisitos a llevar
  - Avisos importantes (llegar 10 min antes)
CTA: Descargar QR
```

### **05 - Cita Reprogramada**
```
Title: "¡Cita reprogramada!"
Stepper: ✓ ✓ ↻ ○ (paso 3 reprogramado - púrpura)
Alert: Naranja (nueva fecha asignada)
Contenido:
  - Nueva fecha y hora
  - Código de confirmación
  - Cambios realizados
CTA: Aceptar nueva fecha
```

### **06 - Cita Cancelada**
```
Title: "Cita cancelada"
Stepper: ✓ ✓ ○ ○ (reset después de cancelación)
Alert: Roja (cancelación confirmada)
Contenido:
  - Motivo de cancelación
  - Política de reembolso
  - Opción de agendar nueva
CTA: Agendar nueva cita
```

### **07 - Recordatorio Agendamiento**
```
Title: "No olvides agendar tu cita"
Stepper: ✓ ✓ ⏱ ○ (paso 3 pendiente)
Alert: Azul (recordatorio)
Contenido:
  - Instrucciones para agendar
  - Beneficios de agendar ahora
  - Plazo disponible
CTA: Agendar cita ahora
```

### **08 - Solicitud Segundo Pago**
```
Title: "Completa tu trámite: segundo pago"
Stepper: ✓ ✓ ⏱ ○ (esperando pago 2)
Alert: Azul (solicitud de pago)
Contenido:
  - Tarifas segundo pago
  - Información de descuento electoral
  - Instrucciones de pago
  - Plazo límite
CTA: Continuar al segundo pago
```

### **09 - Segundo Pago Aprobado**
```
Title: "¡Trámite completado!"
Stepper: ✓ ✓ ✓ ✓ (TODO COMPLETADO)
Alert: Verde (proceso finalizado)
Contenido:
  - Confirmación de pagos
  - Código de trámite
  - Instrucciones de entrega
  - Fechas estimadas
CTA: Ver estado de trámite
```

### **10 - Pasaporte Listo para Recoger**
```
Title: "¡Tu pasaporte está listo!"
Stepper: ✓ ✓ ✓ ✓ (COMPLETO)
Alert: Verde (documento expedido)
Contenido:
  - Código de trámite
  - Fecha de entrega
  - Instrucciones de retiro
  - Horarios de oficina
  - Documentos a llevar
CTA: Descargar comprobante
```

### **11 - Recordatorio Cita Próxima (24h)**
```
Title: "Recordatorio: Tu cita es mañana"
Stepper: ✓ ✓ ⏱ ○ (cita en progreso)
Alert: Naranja (recordatorio próximo)
Contenido:
  - Fecha y hora exacta
  - Ubicación de oficina
  - Requisitos a llevar
  - Tiempo de llegada recomendado
  - Código de cita
CTA: Confirmar asistencia
```

### **12 - Requisitos Extendidos**
```
Title: "Requisitos por categoría"
Stepper: ✓ ✓ ⏱ ○
Alert: Azul (información)
Contenido:
  - 3+ bloques de requisitos (Adultos, Menores, Casos especiales)
  - Cada bloque con checklist
  - Avisos importantes
  - Link a documentación
CTA: Descargar checklist
```

### **13 - Requisitos Adjunto PDF**
```
Title: "Requisitos de tu trámite"
Stepper: ✓ ✓ ⏱ ○
Alert: Amarilla (documento adjunto)
Contenido:
  - Referencia a PDF adjunto
  - Vista previa de requisitos
  - Instrucciones de descarga
  - Nota sobre lectura antes de cita
CTA: Descargar PDF
```

---

## ✅ PRÓXIMOS PASOS

1. Crear los 12 archivos .mjml en lote
2. Copiar estructura base de 01
3. Adaptar contenido específico de cada plantilla
4. Actualizar variables en huila.json
5. Commit y push
6. Testear en GitHub Pages
