# 📋 PASS 3 - PLAN DE TRABAJO DETALLADO

**Estado**: En Progreso  
**Tareas**: 13/13 plantillas por crear  
**Prioridad**: ALTA

---

## ✅ COMPLETADO EN PASS 2

- ✅ Componentes MJML actualizados (header, stepper, footer)
- ✅ Plantilla 01 (datos-registrados) 100% completa
- ✅ Estructura de assets definida
- ✅ Análisis de Figma documentado
- ✅ Mapa de contenido para todas las plantillas

---

## 🎯 TAREAS PENDIENTES PASS 3

### **FASE 1: Crear plantillas 02-13** (12 archivos)

Cada plantilla sigue el patrón:
```
1. Header (logo + entidad)
2. Title Hero (título centrado)
3. Stepper dinámico (estado específico)
4. Alert banner (verde/rojo/naranja/azul)
5. Contenido específico (varía por plantilla)
6. CTA/Botón (acción específica)
7. Footer (4 bloques)
```

**Plantillas a crear:**

```
📋 02-primer-pago-aprobado.mjml
   Contenido: Confirmación de pago
   Stepper: ✓ ✓ ○ ○
   CTA: Agendar cita
   
📋 03-primer-pago-rechazado.mjml
   Contenido: Error + Opciones reintento
   Stepper: ✓ ✕ ○ ○
   CTA: Reintentar pago
   
📋 04-cita-agendada-exitosa.mjml
   Contenido: QR + Datos cita + Requisitos
   Stepper: ✓ ✓ ⏱ ○
   CTA: Descargar QR
   
📋 05-cita-reprogramada.mjml
   Contenido: Nueva fecha + Código confirmación
   Stepper: ✓ ✓ ↻ ○
   CTA: Aceptar fecha
   
📋 06-cita-cancelada.mjml
   Contenido: Confirmación + Reembolso info
   Stepper: ✓ ✓ ○ ○
   CTA: Agendar nueva
   
📋 07-recordatorio-agendamiento.mjml
   Contenido: Instrucciones agendar
   Stepper: ✓ ✓ ⏱ ○
   CTA: Agendar ahora
   
📋 08-solicitud-segundo-pago.mjml
   Contenido: Tarifas pago 2 + Descuento electoral
   Stepper: ✓ ✓ ⏱ ○
   CTA: Continuar pago 2
   
📋 09-segundo-pago-aprobado.mjml
   Contenido: Confirmación final + Código trámite
   Stepper: ✓ ✓ ✓ ✓ (COMPLETO)
   CTA: Ver estado
   
📋 10-pasaporte-listo-recoger.mjml
   Contenido: Código + Fecha entrega + Instrucciones
   Stepper: ✓ ✓ ✓ ✓ (COMPLETO)
   CTA: Descargar comprobante
   
📋 11-recordatorio-cita-proxima.mjml
   Contenido: Fecha/Hora + Requisitos + Ubicación
   Stepper: ✓ ✓ ⏱ ○
   CTA: Confirmar asistencia
   
📋 12-cita-requisitos-extendidos.mjml
   Contenido: 3+ bloques de requisitos por tipo
   Stepper: ✓ ✓ ⏱ ○
   CTA: Descargar checklist
   
📋 13-cita-requisitos-adjunto.mjml
   Contenido: Referencia PDF adjunto
   Stepper: ✓ ✓ ⏱ ○
   CTA: Descargar PDF
```

---

### **FASE 2: Actualizar huila.json**

Agregar variables faltantes para todas las plantillas:
- PAYMENT_AMOUNT, PAYMENT_REFERENCE, PAYMENT_DATE
- APPOINTMENT_DATE, APPOINTMENT_TIME, APPOINTMENT_CODE
- RESCHEDULED_DATE, CANCELLATION_REASON, REFUND_INFO
- SECOND_PAYMENT_TARIFFS, SECOND_PAYMENT_DISCOUNT
- DELIVERY_DATE, DELIVERY_CODE, DELIVERY_LOCATION
- OFFICE_HOURS, REQUIREMENTS_ADULT, REQUIREMENTS_MINOR, REQUIREMENTS_SPECIAL
- Y más según cada plantilla

---

### **FASE 3: Crear iconos PNG** (si es necesario)

Iconos stepper (40x40px, ícono 30x30px):
- ✓ check-green-40x40.png
- ✕ x-red-40x40.png
- ⏱ clock-orange-40x40.png
- ↻ sync-purple-40x40.png

**Nota**: Hasta que no se suban, las plantillas mostrarán texto/emojis

---

### **FASE 4: Testing y Validación**

1. Compilar localmente (npm run build)
2. Verificar en GitHub Pages
3. Validar en clientes de email:
   - Outlook Desktop 2021
   - Gmail (web)
   - Apple Mail
   - Thunderbird

---

## 📊 ESTIMACIÓN DE TRABAJO

| Tarea | Archivos | Tiempo Est. |
|-------|----------|------------|
| Crear 02-13.mjml | 12 | 15-20 min |
| Actualizar huila.json | 1 | 5-10 min |
| Crear iconos PNG | 4 | 10-15 min |
| Testing en GitHub Pages | 1 | 5 min |
| Commit y Push | 1 | 2 min |

**Total estimado**: 37-42 minutos

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

1. **Crear todas las 12 plantillas** basadas en el patrón de 01
   - Copiar estructura base
   - Adaptar contenido específico
   - Variables Handlebars correctas

2. **Consolidar huila.json** con todas las variables necesarias

3. **Hacer commit final** con todas las plantillas

4. **Testing en GitHub Pages** para validar funcionamiento

5. **QA Final**: Revisar en navegador, móvil, clientes email

---

## 📝 NOTAS IMPORTANTES

- Todas las plantillas deben usar el mismo layout/estructura
- Las variables deben estar en huila.json (no hardcoded)
- El stepper debe reflejar el estado correcto de cada trámite
- Los colores de alert banner varían según el tipo (verde/rojo/naranja/azul)
- Los botones CTA varían según la acción siguiente

---

## ✨ CHECKLIST FINAL

```
PLANTILLAS:
☐ 01-datos-registrados.mjml (ya existe v2)
☐ 02-primer-pago-aprobado.mjml
☐ 03-primer-pago-rechazado.mjml
☐ 04-cita-agendada-exitosa.mjml
☐ 05-cita-reprogramada.mjml
☐ 06-cita-cancelada.mjml
☐ 07-recordatorio-agendamiento.mjml
☐ 08-solicitud-segundo-pago.mjml
☐ 09-segundo-pago-aprobado.mjml
☐ 10-pasaporte-listo-recoger.mjml
☐ 11-recordatorio-cita-proxima.mjml
☐ 12-cita-requisitos-extendidos.mjml
☐ 13-cita-requisitos-adjunto.mjml

DATA:
☐ huila.json (variables completas)

ASSETS:
☐ check-green-40x40.png
☐ x-red-40x40.png
☐ clock-orange-40x40.png
☐ sync-purple-40x40.png

TESTING:
☐ GitHub Pages OK
☐ Outlook Desktop OK
☐ Gmail OK
☐ Apple Mail OK

FINAL:
☐ Commit y Push
☐ Documentación actualizada
```

---

**Estado**: LISTO PARA IMPLEMENTACIÓN
