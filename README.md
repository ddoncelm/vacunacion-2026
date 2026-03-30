# VacunaApp SAS 💉
### Calendario Vacunal Andalucía 2026 — Instrucción DGSPyOF-1/2026

Aplicación web de consulta rápida del calendario vacunal para profesionales de enfermería de Atención Primaria del Servicio Andaluz de Salud.

---

## 🚀 Despliegue en Netlify

1. **Fork / clona** este repositorio en tu cuenta de GitHub
2. En [netlify.com](https://netlify.com), crea un nuevo site → **"Import an existing project"**
3. Selecciona tu repositorio de GitHub
4. Configuración de build:
   - **Publish directory:** `.` (punto, directorio raíz)
   - No se necesita build command
5. Haz clic en **Deploy site**

El sitio se desplegará automáticamente. Cada vez que hagas un `git push`, Netlify actualizará la app automáticamente.

---

## 🔑 Cambiar la contraseña de acceso

La contraseña está definida en el archivo `app.js`, línea 8:

```javascript
const PASSWORD = "SAS2026";
```

Para cambiarla:

1. Abre el archivo `app.js` en GitHub (botón de edición ✏️)
2. Busca la línea `const PASSWORD = "SAS2026";`
3. Cambia `"SAS2026"` por tu nueva contraseña (entre comillas)
4. Haz clic en **"Commit changes"**
5. Netlify actualizará la app automáticamente en 1-2 minutos

> **Nota de seguridad:** Esta contraseña es del lado del cliente (frontend). Es suficiente para un control de acceso básico, pero no es un sistema de autenticación seguro para datos sensibles. Úsala para filtrar acceso casual.

---

## ⬆️ Actualizar el calendario desde la app

La app incluye una pestaña **"⬆ Actualizar"** que permite actualizar automáticamente todo el calendario vacunal subiendo el nuevo PDF oficial de la Junta de Andalucía.

### Cómo funciona:
1. Accede a la pestaña **⬆ Actualizar**
2. Introduce tu [API key de Anthropic](https://console.anthropic.com/settings/keys) (se usa solo localmente, no se almacena en ningún servidor)
3. Arrastra o selecciona el PDF oficial de la Instrucción DGSPyOF
4. Pulsa **"Analizar PDF y actualizar calendario"**
5. La IA (Claude) leerá el PDF completo y extraerá todos los datos automáticamente
6. Revisa el resumen de datos extraídos y confirma
7. El calendario se actualiza en memoria de inmediato
8. Descarga el archivo `data.js` generado y súbelo a tu repositorio de GitHub para que la actualización sea **permanente**

> **Nota:** Necesitas una API key de Anthropic. Puedes obtenerla en [console.anthropic.com](https://console.anthropic.com/settings/keys). El coste de una consulta es de aproximadamente 0,10–0,20 €.

---



### Por Edad
- Selector deslizante para meses (0–24) o años (2–80+)
- Botones de acceso rápido a edades clave
- Tarjetas de vacunas con: nombre comercial, vía, zona de administración
- Modal con ficha completa al pulsar cada vacuna

### Por Vacuna
- Grid de todas las vacunas del calendario
- Panel detallado con: posología completa, calendario de administración, zona, vía, notas clave

### Grupos de Riesgo
- Filtros por tipo: neumococo, herpes zóster, meningococo, VPH, hepatitis A/B, mpox
- Indicaciones de alto riesgo y riesgo moderado
- Pautas especiales y notas importantes

---

## 📋 Vacunas incluidas

| Sigla | Vacuna | Comercial SSPA |
|-------|--------|----------------|
| VRS | Anticuerpo monoclonal anti-VRS | Beyfortus® |
| Tdpa | Tétanos-Difteria-Tosferina adulto | Boostrix® |
| DTPa-VPI | Tétanos-Difteria-Tosferina-Polio infantil | Tetraxim® |
| Td | Tétanos-Difteria adulto | Diftavax® |
| HEX | Hexavalente | Hexyon® |
| RV | Rotavirus | Rotarix® |
| VNC20 | Neumococo conjugada 20-valente | Prevenar 20® |
| MenB | Meningococo B | Bexsero® |
| MenACWY | Meningococo ACWY | Nimenrix® / Menquadfi® |
| TV | Triple vírica | M-M-RvaxPro® |
| VVZ | Varicela | Varivax® |
| VPH | Papilomavirus | Gardasil 9® |
| HZ | Herpes zóster | Shingrix® |
| Gripe | Gripe estacional | Influvac® / Flucelvax® / Efluelda® |
| COVID | COVID-19 | Comirnaty LP.8.1® / Bivermax® |

---

## 🎨 Colores corporativos

Paleta Junta de Andalucía:
- Verde: `#009A44`
- Verde oscuro: `#006633`
- Verde claro: `#E8F5EE`

---

## 📄 Fuente

Instrucción DGSPyOF-1/2026. Actualización enero 2026.  
Dirección General de Salud Pública y Ordenación Farmacéutica.  
Servicio Andaluz de Salud. Junta de Andalucía.

---

*Desarrollado con ❤️ — [doncelproject](mailto:doncel.project@gmail.com)*
