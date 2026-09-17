# 📧 Sistema de Mailing Modular para Pasaportes (White-Label)

> **Design System de Correos Electrónicos Transaccionales en MJML**  
> Arquitectura desacoplada de contenido + Marca Blanca para cualquier Gobernación

---

## 🎯 Descripción del Proyecto

Sistema modular y escalable de plantillas de correo electrónico para la gestión integral del trámite de expedición de pasaportes. Construido con **MJML** siguiendo el principio de **Zero Hardcoded Copy** para permitir que múltiples entidades (Gobernaciones) reutilicen el mismo código con solo cambiar un archivo de configuración JSON.

### Características Principales

- ✅ **15 Componentes Atómicos Reutilizables**: Bloques visuales independientes y composables
- ✅ **13 Plantillas Transaccionales**: Cobertura completa del flujo de pasaportes
- ✅ **100% Outlook-Compatible**: Tablas anidadas, sin Flexbox, comentarios MSO condicionales
- ✅ **White-Label / Marca Blanca**: Variables Handlebars para multi-entidad
- ✅ **Responsive Design**: Mobile-first, ancho 640px, imágenes @2x
- ✅ **CSAT Integrado**: Encuestas de satisfacción con URLs parametrizadas
- ✅ **QR Dinámico**: Inyección de códigos QR en tiempo real
- ✅ **Iconografía Material Symbols**: PNG rasterizados (sin SVG)
- ✅ **MJML Native**: Compilable con npm, sin dependencias externas complejas

---

## 📁 Estructura del Proyecto

```
passport-mailing/
├── package.json                          # npm scripts y dependencias
├── README.md                             # Este archivo
├── .gitignore                            # Git exclusions
├── .claude/
│   └── context.md                        # Documentación técnica
├── src/
│   ├── components/                       # 15 bloques atómicos MJML
│   │   ├── head-styles.mjml
│   │   ├── header.mjml
│   │   ├── title-hero.mjml
│   │   ├── stepper.mjml
│   │   ├── alert-banner.mjml
│   │   ├── data-list-card.mjml
│   │   ├── pricing-selector.mjml
│   │   ├── qr-appointment-card.mjml
│   │   ├── notice-cancilleria.mjml
│   │   ├── notice-requirements.mjml
│   │   ├── csat-survey.mjml
│   │   ├── office-hours.mjml
│   │   ├── hero-image.mjml
│   │   ├── buttons.mjml
│   │   └── footer.mjml
│   ├── templates/                        # 13 plantillas finales
│   │   ├── 01-datos-registrados.mjml
│   │   ├── 02-primer-pago-aprobado.mjml
│   │   ├── 03-primer-pago-rechazado.mjml
│   │   ├── 04-cita-agendada-exitosa.mjml
│   │   ├── 05-cita-reprogramada.mjml
│   │   ├── 06-cita-cancelada.mjml
│   │   ├── 07-recordatorio-agendamiento.mjml
│   │   ├── 08-solicitud-segundo-pago.mjml
│   │   ├── 09-segundo-pago-aprobado.mjml
│   │   ├── 10-pasaporte-listo-recoger.mjml
│   │   ├── 11-recordatorio-cita-proxima.mjml
│   │   ├── 12-cita-requisitos-extendidos.mjml
│   │   └── 13-cita-requisitos-adjunto.mjml
│   └── data/
│       └── entities/
│           └── huila.json                # Diccionario de configuración Gobernación del Huila
├── assets/
│   ├── icons/                            # Iconos PNG rasterizados
│   └── images/                           # Imágenes hero y logos
└── dist/                                 # Output HTML compilado (generado)
```

---

## 🚀 Instalación y Uso

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-organizacion/passport-mailing.git
cd passport-mailing
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Compilar Plantillas

```bash
# Compilación única
npm run build

# Modo watch (desarrollo)
npm run watch
```

**Resultado**: Las plantillas MJML se compilan a archivos `.html` en la carpeta `dist/`.

---

## 📧 Plantillas Disponibles

### Flujo de Registro y Pagos

| # | Plantilla | Disparador | Estado Workflow |
|---|-----------|-----------|---|
| **01** | Datos Registrados | Registro exitoso | ✓ Paso 1 |
| **02** | Primer Pago Aprobado | Pago procesado | ✓ Pasos 1-2 |
| **03** | Primer Pago Rechazado | Transacción fallida | ✓ Paso 1, ✕ Paso 2 |

### Flujo de Agendamiento

| # | Plantilla | Disparador | Notas |
|---|-----------|-----------|---|
| **04** | Cita Agendada Exitosa | Confirmación de cita | Incluye QR + botón calendario |
| **05** | Cita Reprogramada | Cambio de fecha | Estado visual morado (🔄) |
| **06** | Cita Cancelada | Cancelación por usuario | Opción para reagendar |
| **07** | Recordatorio Agendamiento | Pago sin cita (timeout) | Llamado a acción urgente |
| **11** | Recordatorio Cita Próxima | 24h antes de cita | Sin stepper |

### Flujo de Segundo Pago y Entrega

| # | Plantilla | Disparador | Notas |
|---|-----------|-----------|---|
| **08** | Solicitud Segundo Pago | Cita confirmada | Muestra tarifas + descuento electoral |
| **09** | Segundo Pago Aprobado | Segundo pago procesado | Todos los pasos completados ✓ |
| **10** | Pasaporte Listo | Expedición completada | Foto hero + horarios entrega |

### Variantes de Requisitos

| # | Plantilla | Variante | Contenido |
|---|-----------|----------|---|
| **12** | Requisitos Extendidos | Categorías desglosadas | Adultos / Menores / Casos especiales |
| **13** | Requisitos Adjunto | Referencia a PDF | Mención a documento adjunto |

---

## 🔧 Configuración por Entidad (White-Label)

### Crear Nueva Entidad

1. **Duplica** `src/data/entities/huila.json`
2. **Renómbrala**: `src/data/entities/atlantico.json`
3. **Edita los campos**:

```json
{
  "entity_metadata": {
    "entity_name": "Gobernación del Atlántico",
    "entity_secretariat_title": "Secretaría de Gobierno - Departamento de Pasaportes",
    "entity_logo_url": "https://cdn.ejemplo.com/logos/gobernacion-atlantico.png",
    "entity_support_email": "pasaportes@gobatlantico.gov.co",
    "entity_copyright": "© 2026 Gobernación del Atlántico. Todos los derechos reservados.",
    "office_address": "Cra. 5 #82-120, Barranquilla, Atlántico"
    // ... resto de campos
  }
}
```

4. **En tu backend**: Cargar `atlantico.json` en lugar de `huila.json` al renderizar

---

## 📝 Variables Disponibles (Handlebars)

### Metadatos de Entidad
```handlebars
{{ENTITY_NAME}}                    # Gobernación del Huila
{{ENTITY_SECRETARIAT_TITLE}}       # Secretaría de Gobierno
{{ENTITY_LOGO_URL}}                # URL del escudo
{{ENTITY_SUPPORT_EMAIL}}           # Email de soporte
{{ENTITY_COPYRIGHT}}               # Leyenda legal
{{OFFICE_ADDRESS}}                 # Dirección física
{{OFFICE_HOURS_WEEKDAY}}           # Horarios entre semana
{{OFFICE_HOURS_WEEKEND}}           # Horarios fines de semana
```

### Datos del Ciudadano
```handlebars
{{CITIZEN_NAME}}                   # Nombre completo
{{CITIZEN_ID}}                     # Cédula
{{CITIZEN_DOB}}                    # Fecha de nacimiento
```

### Cita y Pagos
```handlebars
{{APPOINTMENT_DATE}}               # Fecha (ej: 25 de Septiembre, 2026)
{{APPOINTMENT_TIME}}               # Hora (ej: 9:30 AM)
{{QR_CODE_IMAGE_URL}}              # URL de imagen QR dinámica
{{CALENDAR_ADD_URL}}               # Enlace "Agregar al calendario"
{{PAYMENT_AMOUNT}}                 # Monto pagado (ej: $121.000)
{{TRANSACTION_ID}}                 # ID de transacción
{{PAYMENT_DATE}}                   # Fecha del pago
```

### Tarifas
```handlebars
{{PRICE_ORDINARIO}}                # $121.000
{{PRICE_EJECUTIVO}}                # $121.000
{{PRICE_EMERGENCIA}}               # $121.000
{{PRICE_P2_ORD}}                   # Segundo pago ordinario
{{PRICE_P2_EXE}}                   # Segundo pago ejecutivo
{{PRICE_P2_EME}}                   # Segundo pago emergencia
```

### CSAT (Encuestas)
```handlebars
{{CSAT_BASE_URL}}                  # Base URL del servidor de encuestas
{{CSAT_TIPO}}                      # Tipo de trámite (payment, schedule, etc)
{{TRAMITE_ID}}                     # ID único del trámite
```

---

## 🔌 Integración Backend

### Ejemplo con Node.js + MJML Engine

```javascript
const mjml2html = require('mjml');
const fs = require('fs');
const Handlebars = require('handlebars');

// 1. Cargar entidad y datos de ciudadano
const entityConfig = JSON.parse(fs.readFileSync('src/data/entities/huila.json'));
const citizenData = {
  citizen_name: "Juan Pérez",
  citizen_id: "1234567890",
  appointment_date: "25 de Septiembre, 2026",
  // ... más datos
};

// 2. Leer template MJML
const templateContent = fs.readFileSync('src/templates/04-cita-agendada-exitosa.mjml', 'utf8');

// 3. Compilar variables Handlebars
const templateFn = Handlebars.compile(templateContent);
const mjmlWithData = templateFn({ ...entityConfig, ...citizenData });

// 4. Compilar MJML a HTML
const { html } = mjml2html(mjmlWithData);

// 5. Enviar por SendGrid / AWS SES
await sendGridClient.send({
  to: citizenData.email,
  from: entityConfig.entity_support_email,
  subject: "¡Cita agendada exitosamente!",
  html: html
});
```

---

## 🧪 Testing & Validación

### Email Client Compatibility
- ✅ **Outlook Desktop** (2010+): Comentarios MSO, tablas anidadas
- ✅ **Gmail**: Sin SVG, sin flexbox
- ✅ **Apple Mail**: Responsive, imágenes @2x
- ✅ **Mobile**: 640px responsive

### Herramientas Recomendadas
- **Litmus** o **Email on Acid**: Previsualización en 70+ clientes
- **MJML Validator**: `mjml-validate` en línea

### Pruebas CSAT
```
1. Copiar {{CSAT_BASE_URL}} con valor real: https://api.tudominio.com/survey
2. Hacer click en emoji del email test
3. Verificar que se envíe score + type + id a la API
```

---

## 🎨 Personalización de Estilos

### Colores Principales

- **Primario (Botones)**: `#1A6FE8` (Azul)
- **Fondo General**: `#F5F6FA` (Gris muy claro)
- **Tarjetas**: `#FFFFFF` (Blanco)
- **Exitoso**: `#DCFCE7` (Verde claro)
- **Error**: `#FEE2E2` (Rojo claro)
- **Advertencia**: `#FEF3C7` (Amarillo claro)

**Para cambiar**: Editar valores HEX en los archivos MJML bajo `background-color` y `color`.

### Tipografía

- **Font Principal**: Plus Jakarta Sans (Google Fonts)
- **Fallback Outlook**: Arial, Helvetica

---

## 🤝 Contribución

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-plantilla`
3. Haz commits descriptivos
4. Push a la rama: `git push origin feature/nueva-plantilla`
5. Abre un Pull Request

---

## 📄 Licencia

MIT License - Consulta [LICENSE](LICENSE) para más detalles.

---

## 📞 Soporte

Para reportar bugs o sugerir mejoras:
- **Issues**: [GitHub Issues](https://github.com/tu-organizacion/passport-mailing/issues)
- **Email**: soporte@nexura.com

---

## 📚 Recursos Adicionales

- [MJML Documentación Oficial](https://mjml.io/)
- [Google Fonts: Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- [Material Symbols](https://fonts.google.com/icons)
- [Email Estándares HTML](https://www.caniemail.com/)

---

**Versión**: 1.0.0  
**Última actualización**: Septiembre 17, 2026  
**Autor**: soporte@nexura.com
