# 🚀 Guía: Desplegar a GitHub

Este proyecto está completamente preparado para GitHub. Sigue estos pasos para crear el repositorio remoto.

---

## 📋 Requisitos Previos

✅ **Git instalado** en tu máquina ([descargar aquí](https://git-scm.com/))  
✅ **Cuenta GitHub** ([crear aquí](https://github.com/signup))  
✅ **Token de acceso personal** (para autenticación)

---

## 🔑 Crear Token de Acceso Personal (GitHub)

1. Ve a **GitHub → Settings → Developer settings → Personal access tokens**
2. Click en **"Generate new token"**
3. Dale un nombre: `passport-mailing-deploy`
4. Selecciona permisos:
   - ✅ `repo` (acceso a repositorios)
   - ✅ `workflow` (para CI/CD)
5. Genera el token y **cópialo** (no podrás verlo de nuevo)

---

## 📝 Pasos para Desplegar

### 1. Abre una Terminal/PowerShell

Navega a la carpeta del proyecto:
```powershell
cd "C:\Users\lfabi\AppData\Roaming\Claude\scratch-workspaces\cda15bfd-6b1e-4bd8-99c2-4d7b83b6092a\858596ef-4bdd-4d49-8d19-2f88c407b3c7\scratch-2026-09-17-e079aa"
```

### 2. Inicializa Git Localmente

```bash
git init
git config user.email "soporte@nexura.com"
git config user.name "Nexura Development"
```

### 3. Agrega Todos los Archivos

```bash
git add .
```

### 4. Primer Commit

```bash
git commit -m "Initial commit: Sistema de mailing modular para pasaportes

- 15 componentes atómicos MJML reutilizables
- 13 plantillas transaccionales completas
- Arquitectura White-Label multi-entidad
- Diccionario de configuración para Gobernación del Huila
- 100% compatible con Outlook, Gmail, Apple Mail
- CSAT integrado con URLs parametrizadas
- QR dinámico para citas
- Documentación completa README + CONTRIBUTING"
```

### 5. Crea Repositorio en GitHub

Ve a **GitHub → New Repository** y sigue estos pasos:

| Campo | Valor |
|-------|-------|
| **Repository name** | `passport-mailing` |
| **Description** | Sistema modular de mailing para trámite de pasaportes |
| **Public/Private** | Public (o Private si es interno) |
| **Initialize** | ❌ NO inicialices README/gitignore (ya lo tenemos) |

**Copiar URL** del repositorio que se genere (ej: `https://github.com/tu-usuario/passport-mailing.git`)

### 6. Conecta el Repositorio Remoto

```bash
git remote add origin https://github.com/tu-usuario/passport-mailing.git
git branch -M main
```

### 7. Push Inicial a GitHub

```bash
git push -u origin main
```

**Se te pedirá autenticación:**
- **Usuario**: Tu usuario de GitHub
- **Contraseña**: El token que creaste (NO tu contraseña real)

---

## ✅ Verificación

Abre `https://github.com/tu-usuario/passport-mailing` en tu navegador.

Deberías ver:
- ✅ Todos los archivos (components, templates, src/, README.md, etc.)
- ✅ Contador de commits ("1 commit")
- ✅ Archivo README.md renderizado

---

## 🔄 Configuración Adicional (Opcional pero Recomendada)

### 1. Añade Descripción al Repositorio

En GitHub → **About** → Edit:
- **Description**: "Sistema modular de plantillas de email para expedición de pasaportes"
- **Topics**: `mjml`, `email-templates`, `white-label`, `transactional-email`
- **Website**: (si tienes documentación online)

### 2. Crea Ramas de Protección

GitHub → **Settings → Branches → Add branch protection rule**:
- Branch name pattern: `main`
- ✅ Require pull request reviews
- ✅ Require status checks

### 3. Configura Secrets (Para CI/CD)

Si planeas integración continua:
- GitHub → **Settings → Secrets and variables → Actions**
- Añade variables de entorno necesarias

---

## 📦 Próximos Commits (Workflow Sugerido)

Después de esto, puedes trabajar así:

```bash
# Crear rama para nueva feature
git checkout -b feature/nueva-plantilla

# Editar archivos...

# Commit de cambios
git add src/templates/14-notificacion.mjml
git commit -m "feat: agregar plantilla de notificación de retraso"

# Push a rama de feature
git push -u origin feature/nueva-plantilla

# En GitHub: crear Pull Request
# Revisar → Merge a main
```

---

## 🆘 Troubleshooting

### "Error: Repository already exists"
```bash
# Solución: elimina la carpeta .git y reinicia
rm -r .git
# Luego repite desde el paso "Inicializa Git Localmente"
```

### "fatal: couldn't read Password"
```bash
# Asegúrate de usar tu TOKEN, no tu contraseña
# Token debe tener permiso 'repo' activado
```

### "Everything up-to-date"
```bash
# Ya hiciste push. Para nuevos cambios:
git add .
git commit -m "tu mensaje"
git push origin main
```

---

## 📚 Documentación Adicional

- [GitHub Docs - Creating a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
- [Git - First Time Setup](https://git-scm.com/book/es/v2/Comenzando-Configuraci%C3%B3n-Inicial-de-Git)
- [GitHub - Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

## ✨ Una vez en GitHub

Tu repositorio estará listo para:

✅ **Compartir** con el equipo  
✅ **Documentación** automática en README  
✅ **Control de versiones** y historial  
✅ **Colaboración** via Pull Requests  
✅ **Issues** para reportar bugs  
✅ **GitHub Pages** para documentación estática  
✅ **GitHub Actions** para CI/CD  

---

**¡Listo! Tu proyecto estará publicado en GitHub.** 🎉
