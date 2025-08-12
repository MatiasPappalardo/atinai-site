# Atinai — Sitio estático (Vercel + GitHub)

Sitio estático de Atinai publicado en **Vercel** y conectado al dominio **www.atinai.com**.

## Estructura


/
├─ index.html
└─ (opcional) assets: /css /js /img ...

> **Importante:** el archivo de entrada debe llamarse **`index.html`** y estar en la **raíz** del repo.

## Deploy automático (Vercel)
El proyecto está conectado a Vercel. Cada push a `main` genera un **Production Deployment** automático.

**Configuración en Vercel → Build & Deployment**
- Framework: **Other**
- Build Command: _(vacío)_
- Output Directory: **`.`**
- Root Directory: _(vacío)_

**Dominios**
- `www.atinai.com` → **Primary**  
- `atinai.com` → redirige a `www`

## Cómo actualizar el sitio
### Opción A: editar desde GitHub Web
1. Abrí `index.html`, clic en **✏️ Edit**.
2. Guardá con **Commit changes** a `main`.
3. Vercel publica automáticamente.

### Opción B: desde tu compu
```bash
git clone https://github.com/<usuario>/atinai-site.git
cd atinai-site
# editar index.html
git add index.html
git commit -m "Actualiza contenido"
git push origin main ´´´´


