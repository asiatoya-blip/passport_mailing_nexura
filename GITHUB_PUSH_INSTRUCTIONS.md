# 🚀 Instrucciones para Push a GitHub

## ✅ Estado Actual del Repositorio

Tu repositorio local **ya está inicializado y con el primer commit realizado**:

```
Commit Hash: 7704577
Mensaje: Initial commit: Sistema de mailing modular para pasaportes
Archivos: 37 cambios, 2132 inserciones
Rama: master
Estado: Clean (nada para comitear)
```

---

## 📋 Pasos para Hacer Push a GitHub

### **PASO 1: Crear Repositorio en GitHub**

1. Ve a **https://github.com/new**
2. Rellena los datos:
   - **Repository name**: `passport-mailing`
   - **Description**: `Sistema modular de plantillas de email para expedición de pasaportes`
   - **Public/Private**: Public
   - ❌ **NO marques**: "Add a README file", "Add .gitignore", "Choose a license"

3. Click en **"Create repository"**

4. **Copia la URL** que aparece (ejemplo: `https://github.com/tu-usuario/passport-mailing.git`)

---

### **PASO 2: Conectar Repositorio Remoto**

En tu terminal PowerShell, ejecuta:

```powershell
# Asegúrate de estar en la carpeta correcta
cd "C:\Users\lfabi\AppData\Roaming\Claude\scratch-workspaces\cda15bfd-6b1e-4bd8-99c2-4d7b83b6092a\858596ef-4bdd-4d49-8d19-2f88c407b3c7\scratch-2026-09-17-e079aa"

# Agrega el repositorio remoto (reemplaza URL)
git remote add origin https://github.com/TU_USUARIO/passport-mailing.git

# Renombra la rama a 'main' (GitHub usa 'main' por defecto ahora)
git branch -M main

# Verifica que se agregó el remoto
git remote -v
```

**Resultado esperado**:
```
origin  https://github.com/tu-usuario/passport-mailing.git (fetch)
origin  https://github.com/tu-usuario/passport-mailing.git (push)
```

---

### **PASO 3: Push Inicial a GitHub**

```powershell
git push -u origin main
```

**Se te pedirá autenticación:**

#### Opción A: Con Token (Recomendado)

1. Ve a **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Click **"Generate new token"**
3. Nombre: `passport-mailing-push`
4. Selecciona: ✅ `repo`, ✅ `workflow`
5. **Copia el token**
6. En la terminal:
   - **Username**: Tu usuario de GitHub
   - **Password**: Pega el token (NO tu contraseña real)

#### Opción B: Con Credenciales de Git Configuradas

Si tienes Windows Credential Manager:
- La autenticación ocurre automáticamente

---

### **PASO 4: Verificar Push**

Abre `https://github.com/tu-usuario/passport-mailing` en tu navegador.

Deberías ver:
- ✅ Todos los archivos listados
- ✅ Carpetas `src/`, `assets/`, `.claude/`
- ✅ Archivos `README.md`, `LICENSE`, `CONTRIBUTING.md`
- ✅ **1 commit** en el historial

---

## 🆘 Troubleshooting

### Error: "Repository already exists"
```powershell
# Si accidentalmente hiciste git init dos veces:
rm -r .git
# Luego repite desde PASO 2
```

### Error: "fatal: 'origin' does not appear to be a 'git' repository"
```powershell
# Verifica que el remoto se agregó:
git remote -v

# Si no aparece, repite:
git remote add origin https://github.com/tu-usuario/passport-mailing.git
```

### Error: "Authentication failed"
```powershell
# Usa HTTPS en lugar de SSH (la URL debe empezar con https://)
# Verifica que tu token sea válido y tenga permiso 'repo'
```

### Error: "Updates were rejected because the tip of your current branch is behind"
```powershell
# GitHub creó un commit (ej: con README automático)
# Solución: Primero en GitHub, espera a que aparezcan tus archivos
```

---

## ✨ Después del Push

Una vez en GitHub, puedes:

1. **Editar README en GitHub**
   - Click en README.md → pencil icon
   - GitHub mostrará preview en tiempo real

2. **Crear ramas para features**
   ```powershell
   git checkout -b feature/nueva-plantilla
   # ... edita archivos
   git add .
   git commit -m "feat: agregar plantilla X"
   git push -u origin feature/nueva-plantilla
   ```

3. **Crear Pull Requests**
   - En GitHub, aparecerá automáticamente opción "Compare & pull request"

4. **Configurar protección de rama**
   - GitHub → Settings → Branches → Add rule para `main`

---

## 📝 Comandos Rápidos de Referencia

```powershell
# Ver estado
git status

# Ver commits
git log --oneline

# Ver remoto configurado
git remote -v

# Hacer push después de nuevos commits
git push origin main

# Descargar cambios del remoto
git pull origin main

# Crear nueva rama
git checkout -b nombre-rama

# Cambiar a rama existente
git checkout nombre-rama

# Ver todas las ramas
git branch -a
```

---

## 🎯 URL de Referencia

Después de push exitoso, tu repositorio estará en:

```
https://github.com/tu-usuario/passport-mailing
```

**Comparte este enlace con tu equipo para que puedan clonar:**
```powershell
git clone https://github.com/tu-usuario/passport-mailing.git
cd passport-mailing
npm install
npm run build
```

---

¡**Listo para empujar!** 🚀

Si encuentras algún problema, revisa la sección de Troubleshooting o consulta la documentación oficial de GitHub: https://docs.github.com/en
