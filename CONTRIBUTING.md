# Guía de Contribución

¡Gracias por tu interés en contribuir al Sistema de Mailing para Pasaportes!

## 🎯 Cómo Contribuir

### 1. Reportar Bugs

Si encuentras un error, por favor:
- Abre un **Issue** en GitHub
- Incluye título descriptivo
- Describe los pasos para reproducir
- Especifica el cliente de email afectado (Outlook, Gmail, etc.)
- Adjunta screenshot si es posible

**Ejemplo**:
```
Título: Botón "Agendar cita" no visible en Outlook 2016

Pasos:
1. Abrir plantilla 04-cita-agendada-exitosa.mjml en Outlook 2016
2. Desplazarse hasta la sección de botones

Resultado esperado: Botón azul legible
Resultado actual: Texto blanco en fondo blanco

Cliente afectado: Outlook 2016 Desktop
```

### 2. Sugerir Mejoras

Para proponer nuevas features o cambios:
- Abre un **Discussion** (no Issue) con la etiqueta `enhancement`
- Describe el caso de uso
- Explica beneficios esperados

### 3. Enviar Pull Requests

#### Workflow:

1. **Fork** el repositorio
   ```bash
   git clone https://github.com/tu-usuario/passport-mailing.git
   cd passport-mailing
   ```

2. **Crea una rama descriptiva**
   ```bash
   # Para nueva plantilla
   git checkout -b feature/nueva-plantilla-notificacion
   
   # Para bug fix
   git checkout -b fix/boton-outlook-2016
   ```

3. **Realiza tus cambios**
   - Edita archivos MJML
   - Prueba localmente: `npm run build`
   - Valida en múltiples clientes de email

4. **Commit con mensajes claros**
   ```bash
   git add .
   git commit -m "feat: agregar plantilla de notificación de retraso

   - Nueva plantilla 14-notificacion-retraso-expedicion.mjml
   - Incluye estimer amarillo y enlace de soporte
   - Testeado en Outlook, Gmail, Apple Mail"
   ```

5. **Push a tu fork**
   ```bash
   git push origin feature/nueva-plantilla-notificacion
   ```

6. **Abre Pull Request** con descripción detallada

---

## 📋 Estándares de Código

### Archivos MJML

**Estructura esperada**:
```mjml
<mjml>
  <mj-head>
    <mj-font name="Plus Jakarta Sans" href="..." />
    <mj-attributes><!-- reseteos --></mj-attributes>
    <mj-raw><!--[if mso]>...<![endif]--></mj-raw>
  </mj-head>
  <mj-body background-color="#F5F6FA" width="640px">
    <!-- contenido -->
  </mj-body>
</mjml>
```

**Convenciones**:
- ✅ Ancho fijo: `640px`
- ✅ Usar variables Handlebars: `{{VARIABLE_NAME}}`
- ✅ No hardcodear textos (crear variable)
- ✅ Comentarios MSO para Outlook: `<!--[if mso]>...<![endif]-->`
- ✅ Colores HEX en mayúsculas: `#1A6FE8`
- ✅ Padding/margin consistente (múltiplos de 4px)

**Ejemplo - INCORRECTO**:
```mjml
<mj-text color="blue">
  Bienvenido, Juan Pérez
</mj-text>
```

**Ejemplo - CORRECTO**:
```mjml
<mj-text color="#1A6FE8">
  Bienvenido, {{CITIZEN_NAME}}
</mj-text>
```

### JSON de Entidades

**Ubicación**: `src/data/entities/[nombre].json`

**Estructura requerida**:
```json
{
  "entity_metadata": {
    "entity_name": "string",
    "entity_secretariat_title": "string",
    "entity_logo_url": "string (URL)",
    "entity_support_email": "string (email)",
    "entity_copyright": "string"
  },
  "tariffs": { /* ... */ },
  "policies": { /* ... */ },
  "messages": { /* ... */ }
}
```

---

## 🧪 Testing

### Validar Cambios Localmente

1. **Compilar**:
   ```bash
   npm run build
   ```

2. **Revisar output en `dist/`**

3. **Probar en múltiples clientes**:
   - Outlook (Desktop)
   - Gmail (Web + App)
   - Apple Mail
   - Mobile (iOS Mail, Gmail)

### Herramientas Recomendadas

- **Litmus**: https://www.litmus.com/ (previsualización en 70+ clientes)
- **Email on Acid**: https://www.emailonacid.com/
- **MJML Online Editor**: https://mjml.io/try-it-live

---

## 📝 Commit Messages

Sigue **Conventional Commits**:

```
<tipo>(<scope>): <descripción corta>

<descripción larga (opcional)>

<referencias (opcional)>
```

**Tipos**:
- `feat`: Nueva plantilla o componente
- `fix`: Corrección de bug (especifica cliente afectado)
- `refactor`: Cambio sin afectar funcionalidad
- `docs`: Actualización de documentación
- `style`: Cambios de formato (sin lógica)
- `test`: Adición de tests

**Ejemplos**:
```
feat(templates): agregar plantilla de cita cancelada

fix(outlook): ajustar ancho de botones en Outlook 2016

docs: actualizar guía de variables Handlebars

refactor(components): simplificar estructura alert-banner
```

---

## 🚀 Proceso de Review

1. **Automático**: Tests de estructura MJML
2. **Manual**: Revisión de mantainers
   - Validar compatibilidad con clientes de email
   - Revisar cumplimiento de estándares
   - Probar funcionalidad CSAT/QR si aplica

3. **Feedback**: Se solicitan cambios si es necesario

4. **Merge**: Aprobación final y merge a `main`

---

## 📅 Release Schedule

- **Versiones menores** (0.X.0): Nuevas plantillas
- **Parches** (0.0.X): Bug fixes
- **Mayor** (X.0.0): Cambios arquitectónicos

---

## 💬 Preguntas?

- **Documentación**: Consulta [README.md](README.md)
- **Email**: soporte@nexura.com
- **Discussions**: [GitHub Discussions](https://github.com/tu-organizacion/passport-mailing/discussions)

---

¡Agradecemos tu aporte! 🙌
