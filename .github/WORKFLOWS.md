# GitHub Actions Workflows

Este repositorio incluye dos workflows automatizados de GitHub Actions para garantizar la calidad y disponibilidad de las plantillas de correo electrónico.

---

## 📋 Workflows Disponibles

### 1. **Build & Deploy to GitHub Pages** (`deploy.yml`)

Compila las plantillas MJML y publica automáticamente en GitHub Pages.

**Disparadores:**
- ✅ Push a `main`
- ✅ Pull requests a `main`

**Acciones:**
1. Clona el repositorio
2. Instala Node.js 18 + dependencias
3. Ejecuta `npm run build`
4. Verifica la salida en `dist/`
5. Publica en GitHub Pages

**Resultado:**
- 🌐 URL: `https://asiatoya-blip.github.io/passport_mailing_nexura/`
- 📁 Plantillas compiladas disponibles públicamente

---

### 2. **Validate MJML Templates** (`validate.yml`)

Valida la sintaxis MJML y verifica que el build sea exitoso en cada cambio.

**Disparadores:**
- ✅ Push a `main` o `develop` (si hay cambios en `src/**`)
- ✅ Pull requests a `main` (si hay cambios en `src/**`)

**Acciones:**
1. Valida todos los archivos MJML
2. Compila plantillas
3. Cuenta templates y componentes
4. Verifica output en `dist/`
5. Comenta en PRs con resultado

**Resultado:**
- ✅ Feedback automático en Pull Requests
- 🔍 Validación antes de merge

---

## 🚀 Configuración de GitHub Pages

### Paso 1: Habilitar GitHub Pages

1. Ve a **Settings → Pages**
2. **Source**: Selecciona "GitHub Actions"
3. Guarda cambios

### Paso 2: Verificar Workflow

1. Ve a **Actions** en tu repositorio
2. Busca "Build & Deploy to GitHub Pages"
3. Debería mostrar ✅ **Completed**

### Paso 3: Acceder a las Plantillas

Una vez publicado:
```
https://asiatoya-blip.github.io/passport_mailing_nexura/
```

Verás un listado de las plantillas HTML compiladas:
- `01-datos-registrados.html`
- `02-primer-pago-aprobado.html`
- ... (todas las 13 plantillas)

---

## 📊 Monitoreo de Workflows

### Ver Estado de Workflows

1. Ve a **Actions** en tu repositorio
2. Haz clic en el workflow que quieras ver
3. Verás un historial de ejecuciones

### Badges en README

Puedes añadir badges de estado en tu `README.md`:

```markdown
[![Build & Deploy](https://github.com/asiatoya-blip/passport_mailing_nexura/actions/workflows/deploy.yml/badge.svg)](https://github.com/asiatoya-blip/passport_mailing_nexura/actions/workflows/deploy.yml)

[![Validate MJML](https://github.com/asiatoya-blip/passport_mailing_nexura/actions/workflows/validate.yml/badge.svg)](https://github.com/asiatoya-blip/passport_mailing_nexura/actions/workflows/validate.yml)
```

---

## 🔧 Personalizar Workflows

### Cambiar Node.js Version

Edita el archivo `.github/workflows/deploy.yml`:
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'  # Cambia a otra versión
```

### Cambiar rama de deploy

Cambia `main` por tu rama en ambos workflows:
```yaml
on:
  push:
    branches:
      - main  # Cambia aquí
```

### Añadir validación adicional

Puedes añadir más pasos en `validate.yml`, como:
- ESLint para JavaScript
- Email client testing
- Accessibility checks

---

## 📈 Variables de Entorno

Si necesitas variables secretas (API keys, tokens, etc.):

1. Ve a **Settings → Secrets and variables → Actions**
2. Click **"New repository secret"**
3. Añade `NAME` y `VALUE`
4. Usa en workflows:
```yaml
- name: Deploy
  env:
    MY_SECRET: ${{ secrets.MY_SECRET }}
  run: echo "Using secret"
```

---

## 🆘 Troubleshooting

### Workflow falla en build

1. Revisa los **logs** en Actions
2. Verifica que `npm run build` funciona localmente
3. Confirma que `src/templates/*.mjml` existen
4. Revisa la sintaxis MJML

### GitHub Pages no actualiza

1. Verifica que el workflow **deploy** terminó exitosamente
2. Espera 1-2 minutos para propagación de CDN
3. Limpia caché del navegador (Ctrl+Shift+Del)
4. Revisa que **Settings → Pages → Source** está en "GitHub Actions"

### Errores de permisos

1. Ve a **Settings → Actions → General**
2. **Workflow permissions**: Selecciona "Read and write permissions"
3. Marca **"Allow GitHub Actions to create and approve pull requests"**

---

## 📝 Ejemplo de Uso

Cuando haces push a `main`:

```bash
$ git add .github/workflows/
$ git commit -m "feat: add GitHub Actions workflows"
$ git push origin main
```

GitHub Actions automáticamente:
1. ✅ Valida la sintaxis MJML
2. ✅ Compila a HTML
3. ✅ Publica en GitHub Pages
4. 📧 Notifica en PRs si hay errores

---

## 🎯 Próximos Pasos

- [ ] Habilitar GitHub Pages (Settings → Pages)
- [ ] Verificar que workflows se ejecutan (Actions tab)
- [ ] Visitar tu sitio en GitHub Pages
- [ ] Añadir badges de status en README
- [ ] Configurar protección de rama (require workflow success)

---

**Documentación oficial:**
- [GitHub Actions](https://docs.github.com/en/actions)
- [GitHub Pages](https://docs.github.com/en/pages)
- [MJML Documentation](https://mjml.io/)
