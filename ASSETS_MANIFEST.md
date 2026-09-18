# 📦 Assets Manifest - Dónde Subir Cada Recurso

## Estructura de Carpetas

```
src/
├── assets/
│   ├── icons/
│   │   ├── stepper/
│   │   │   ├── check-green-40x40.png       (✓ icono 30x30 en caja 40x40 #22C55E)
│   │   │   ├── x-red-40x40.png             (✕ icono 30x30 en caja 40x40 #EF4444)
│   │   │   ├── clock-orange-40x40.png      (⏱ icono 30x30 en caja 40x40 #FCD34D)
│   │   │   └── sync-purple-40x40.png       (↻ icono 30x30 en caja 40x40 #A855F7)
│   │   └── general/
│   │       ├── envelope.png                 (para email)
│   │       ├── phone.png                    (para teléfono)
│   │       ├── location.png                 (para dirección)
│   │       ├── calendar.png                 (para fechas)
│   │       └── info.png                     (para avisos)
│   └── logos/
│       ├── gobernacion-huila-shield.png    (logo escudo Huila)
│       └── gobernacion-huila-full.png      (logo completo Huila)
└── components/
    └── [componentes MJML]
```

## 📋 Iconos del Stepper (CRÍTICO)

| Estado | Archivo | Caja | Ícono | Color Fondo | Uso |
|--------|---------|------|-------|-------------|-----|
| Completado | `check-green-40x40.png` | 40x40px | ✓ 30x30px | #22C55E | Pasos finalizados |
| Rechazado | `x-red-40x40.png` | 40x40px | ✕ 30x30px | #EF4444 | Pagos rechazados |
| Progreso | `clock-orange-40x40.png` | 40x40px | ⏱ 30x30px | #FCD34D | En procesamiento |
| Reprogramado | `sync-purple-40x40.png` | 40x40px | ↻ 30x30px | #A855F7 | Citas reprogramadas |
| Pendiente | (Número 1,2,3,4) | 40x40px | Texto | #F3F4F6 | No completado |

## 🔗 URLs en huila.json

```json
{
  "assets": {
    "logo": "src/assets/logos/gobernacion-huila-shield.png",
    "logo_full": "src/assets/logos/gobernacion-huila-full.png",
    "stepper_icons": {
      "check": "src/assets/icons/stepper/check-green-40x40.png",
      "error": "src/assets/icons/stepper/x-red-40x40.png",
      "progress": "src/assets/icons/stepper/clock-orange-40x40.png",
      "rescheduled": "src/assets/icons/stepper/sync-purple-40x40.png"
    }
  }
}
```

## ✅ Próximos Pasos

1. **Crear carpeta estructura**: `src/assets/icons/stepper/` y `src/assets/logos/`
2. **Subir iconos**: PNG 40x40 con ícono 30x30 centrado
3. **Actualizar componentes**: Referenciar rutas correctas
4. **Validar en GitHub Pages**: Los iconos deben cargarse correctamente

## 📌 NOTA IMPORTANTE

Los archivos PNG deben:
- Dimensión exacta: 40x40px
- Ícono centrado: 30x30px
- Fondo: color sólido (sin transparencia) según tabla arriba
- Formato: PNG optimizado
- Nombre: exacto como se lista arriba
