# 📧 Guía de Uso: Stepper Dinámico y Botones

Documento que explica cómo usar el stepper dinámico y los botones con estilos correctos.

---

## 🔄 STEPPER DINÁMICO CON LÍNEAS DE AVANCE

### ¿Cómo funciona?

El stepper muestra el progreso del usuario a través de 4 pasos:

```
Paso 1          Paso 2          Paso 3          Paso 4
 ✓───────────────✓───────────────⚠───────────────○
Registro      Primer pago    Agendamiento    Segundo pago
```

Cada línea de conexión tiene un **gradiente dinámico** que indica qué paso está completado:
- **Verde (#22C55E)** = Completado
- **Amarillo/Naranja (#FCD34D)** = En progreso / Esperando acción
- **Gris (#E5E7EB)** = Pendiente
- **Rojo (#EF4444)** = Error / Rechazado

### Variables Requeridas

Para cada plantilla, debes proporcionar estas variables:

#### Variables del Stepper:
```handlebars
{{STEP1_BG}}      - Color de fondo del círculo 1
{{STEP1_TEXT}}    - Color de texto/icono en paso 1
{{STEP1_ICON}}    - Contenido del icono (ej: ✓, 1, ✕, ℹ)

{{STEP2_BG}}      - Color de fondo del círculo 2
{{STEP2_TEXT}}    - Color de texto/icono en paso 2
{{STEP2_ICON}}    - Contenido del icono

{{STEP3_BG}}      - Color de fondo del círculo 3
{{STEP3_TEXT}}    - Color de texto/icono en paso 3
{{STEP3_ICON}}    - Contenido del icono

{{STEP4_BG}}      - Color de fondo del círculo 4
{{STEP4_TEXT}}    - Color de texto/icono en paso 4
{{STEP4_ICON}}    - Contenido del icono
```

#### Variables de las Líneas:
```handlebars
{{LINE1_START}}   - Color inicio de la línea 1→2
{{LINE1_END}}     - Color fin de la línea 1→2

{{LINE2_START}}   - Color inicio de la línea 2→3
{{LINE2_END}}     - Color fin de la línea 2→3

{{LINE3_START}}   - Color inicio de la línea 3→4
{{LINE3_END}}     - Color fin de la línea 3→4
```

### Ejemplos de Estados Pre-configurados

En `src/data/entities/huila.json` tienes 4 ejemplos configurados:

#### 1. Después del Registro (`after_registration`)
```json
"after_registration": {
  "STEP1_BG": "#22C55E",    // ✓ Registro completado (verde)
  "STEP1_ICON": "✓",
  
  "STEP2_BG": "#F3F4F6",    // 2 Primer pago (gris, pendiente)
  "STEP2_ICON": "2",
  
  "STEP3_BG": "#F3F4F6",    // 3 Agendamiento (gris, pendiente)
  "STEP3_ICON": "3",
  
  "STEP4_BG": "#F3F4F6",    // 4 Segundo pago (gris, pendiente)
  "STEP4_ICON": "4",
  
  "LINE1_START": "#22C55E",  // ✓──→ Línea verde a amarillo
  "LINE1_END": "#FCD34D",
  
  "LINE2_START": "#FCD34D",  // ──→ Transición a gris
  "LINE2_END": "#E5E7EB",
  
  "LINE3_START": "#E5E7EB",  // ──→ Todo gris
  "LINE3_END": "#E5E7EB"
}
```

Resultado visual:
```
  ✓───────────────○───────────────○───────────────○
Registro       Primer pago    Agendamiento    Segundo pago
```

#### 2. Después de Primer Pago (`after_first_payment`)
```json
"after_first_payment": {
  "STEP1_BG": "#22C55E",     // ✓ Completado
  "STEP1_ICON": "✓",
  
  "STEP2_BG": "#22C55E",     // ✓ Completado
  "STEP2_ICON": "✓",
  
  "STEP3_BG": "#F3F4F6",     // 3 Pendiente
  "STEP3_ICON": "3",
  
  "STEP4_BG": "#F3F4F6",     // 4 Pendiente
  "STEP4_ICON": "4",
  
  "LINE1_START": "#22C55E",   // Verde completa
  "LINE1_END": "#22C55E",
  
  "LINE2_START": "#22C55E",   // ──→ Verde a amarillo
  "LINE2_END": "#FCD34D",
  
  "LINE3_START": "#FCD34D",   // ──→ Amarillo a gris
  "LINE3_END": "#E5E7EB"
}
```

Resultado visual:
```
  ✓───────────────✓───────────────○───────────────○
Registro       Primer pago    Agendamiento    Segundo pago
```

#### 3. Cita Agendada (`appointment_scheduled`)
```json
"appointment_scheduled": {
  "STEP1_BG": "#22C55E",     // ✓ Completado
  "STEP1_ICON": "✓",
  
  "STEP2_BG": "#22C55E",     // ✓ Completado
  "STEP2_ICON": "✓",
  
  "STEP3_BG": "#FCD34D",     // ℹ En progreso
  "STEP3_ICON": "ℹ",
  
  "STEP4_BG": "#F3F4F6",     // 4 Pendiente
  "STEP4_ICON": "4",
  
  "LINE1_START": "#22C55E",   // Verde completa
  "LINE1_END": "#22C55E",
  
  "LINE2_START": "#22C55E",   // Verde completa
  "LINE2_END": "#22C55E",
  
  "LINE3_START": "#22C55E",   // ──→ Verde a amarillo
  "LINE3_END": "#FCD34D"
}
```

Resultado visual:
```
  ✓───────────────✓───────────────⚠───────────────○
Registro       Primer pago    Agendamiento    Segundo pago
```

#### 4. Error en Pago (`payment_failed`)
```json
"payment_failed": {
  "STEP1_BG": "#22C55E",     // ✓ Completado
  "STEP1_ICON": "✓",
  
  "STEP2_BG": "#EF4444",     // ✕ Rechazado (rojo)
  "STEP2_ICON": "✕",
  
  "STEP3_BG": "#F3F4F6",     // 3 Pendiente
  "STEP3_ICON": "3",
  
  "STEP4_BG": "#F3F4F6",     // 4 Pendiente
  "STEP4_ICON": "4",
  
  "LINE1_START": "#22C55E",   // ──→ Verde a rojo
  "LINE1_END": "#EF4444",
  
  "LINE2_START": "#E5E7EB",   // Todo gris (no prosigue)
  "LINE2_END": "#E5E7EB",
  
  "LINE3_START": "#E5E7EB",
  "LINE3_END": "#E5E7EB"
}
```

Resultado visual:
```
  ✓───────────────✕───────────────○───────────────○
Registro       Primer pago    Agendamiento    Segundo pago
```

---

## 🔘 BOTONES CON ESTILOS CORRECTOS

### Botón Primario (Azul sólido)

**Características:**
- Border-radius: **100px** (completamente redondeado)
- Width: **auto** (hug content - solo ocupa el espacio del contenido)
- Padding: 14px 32px
- Background: #1A6FE8 (azul)
- Color: #FFFFFF (blanco)
- Font-weight: 700 (bold)

**Comportamiento:**
- Se usa cuando es la única llamada a la acción o la principal
- Se adapta al tamaño del texto (no fuerza ancho)
- En móvil también mantiene su tamaño compacto

**Uso en HTML:**
```html
<a href="https://..." style="
  display: inline-block;
  padding: 14px 32px;
  background-color: #1A6FE8;
  color: #FFFFFF;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 700;
">
  Continuar con el primer pago
</a>
```

**Ejemplo visual:**
```
[   Continuar con el primer pago   ]  ← Botón compacto, solo ocupa su contenido
```

### Botón Secundario (Outline azul)

**Características:**
- Border-radius: **100px** (completamente redondeado)
- Width: **100%** (fill container - ocupa todo el ancho disponible)
- Padding: 14px 32px
- Background: #FFFFFF (blanco)
- Border: 2px solid #1A6FE8 (azul)
- Color: #1A6FE8 (azul)
- Font-weight: 700 (bold)

**Comportamiento:**
- Se usa cuando es una acción secundaria o alternativa
- Fuerza el ancho completo del contenedor
- El outline mantiene la jerarquía visual clara

**Uso en HTML:**
```html
<a href="https://..." style="
  display: block;
  width: 100%;
  padding: 14px 32px;
  background-color: #FFFFFF;
  border: 2px solid #1A6FE8;
  border-radius: 100px;
  color: #1A6FE8;
  text-decoration: none;
  font-weight: 700;
  box-sizing: border-box;
  text-align: center;
">
  ¿Necesita reprogramar o cancelar?
</a>
```

**Ejemplo visual:**
```
[  ¿Necesita reprogramar o cancelar?  ]  ← Botón que ocupa todo el ancho
```

### Cuándo usar cada uno:

| Situación | Tipo | Razón |
|-----------|------|-------|
| Pago principal | Primario | Es la CTA (Call To Action) principal |
| Opción alternativa | Secundario | Permite acciones secundarias sin confusión visual |
| Botón único en sección | Primario | No hay conflicto, es el único |
| Dos botones: una acción principal + opción | Primario + Secundario | Jerarquía visual clara |
| Botón en QR card | Primario | Mantiene compacto porque está en card |
| Botón de descuento electoral | Secundario | Opción secundaria, necesita ancho completo |

---

## 🎨 PALETA DE COLORES PARA ESTADOS

### Verde (Completado):
- Background: `#22C55E`
- Text/Icon: `#FFFFFF`
- Icon: `✓`

### Amarillo/Naranja (En Progreso):
- Background: `#FCD34D`
- Text/Icon: `#FFFFFF`
- Icon: `⚠` o `ℹ`

### Gris (Pendiente):
- Background: `#F3F4F6`
- Text/Icon: `#9CA3AF`
- Icon: `1`, `2`, `3`, `4`

### Rojo (Error):
- Background: `#EF4444`
- Text/Icon: `#FFFFFF`
- Icon: `✕`

---

## 🚀 CÓMO CREAR NUEVOS ESTADOS

1. **Copia un estado existente** en `src/data/entities/huila.json`
2. **Renombra la clave** (ej: `appointment_rescheduled`)
3. **Ajusta los colores** según el estado que quieras representar
4. **Usa variables gradientes** para las líneas
5. **Asigna el estado** en la plantilla que corresponda

**Ejemplo: Estado "Cita Reprogramada" (estado púrpura)**
```json
"appointment_rescheduled": {
  "STEP1_BG": "#22C55E",
  "STEP1_TEXT": "#FFFFFF",
  "STEP1_ICON": "✓",
  
  "STEP2_BG": "#22C55E",
  "STEP2_TEXT": "#FFFFFF",
  "STEP2_ICON": "✓",
  
  "STEP3_BG": "#A855F7",      // Púrpura (estado especial)
  "STEP3_TEXT": "#FFFFFF",
  "STEP3_ICON": "↻",          // Icono de reprogramación
  
  "STEP4_BG": "#F3F4F6",
  "STEP4_TEXT": "#9CA3AF",
  "STEP4_ICON": "4",
  
  "LINE1_START": "#22C55E",
  "LINE1_END": "#22C55E",
  
  "LINE2_START": "#22C55E",
  "LINE2_END": "#22C55E",
  
  "LINE3_START": "#22C55E",
  "LINE3_END": "#A855F7"       // Púrpura
}
```

---

## 📝 NOTAS IMPORTANTES

- ✅ **Todos los valores son CSS válidos**: puedes usar hex, rgb, etc.
- ✅ **Las líneas usan gradientes**: permite transiciones suaves entre estados
- ✅ **Los botones responden a móvil**: border-radius 100px se ve bien en todas las pantallas
- ✅ **100% compatible con Outlook**: layouts basados en tablas, sin CSS avanzado
- ✅ **Variables parametrizadas**: permite white-label para múltiples entidades

---

**Última actualización**: 2026-09-18
