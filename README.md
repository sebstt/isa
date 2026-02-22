# Proyecto: 3 Meses Contigo

Pequeña web con varias vistas (fotos, canciones, cartas) preparada para subida manual a GitHub.

Pasos para subir manualmente al repositorio remoto (GitHub):

1. Inicializar repo local (si no existe):

```bash
cd /ruta/al/proyecto/is
git init
git add .
git commit -m "Inicial commit: versión limpia para subir"
```

2. Crear repo en GitHub (desde la web) y copiar la URL remota.

3. Vincular remoto y subir:

```bash
git remote add origin https://github.com/USUARIO/NOMBRE-REPO.git
git branch -M main
git push -u origin main
```

Notas:

- Asegúrate de no subir archivos grandes (videos/audio) si no quieres que ocupen espacio en el repo.
- `.gitignore` ya incluye entradas comunes para IDEs y archivos temporales.
- Revisa las rutas relativas en `html/index.html` y `js/script.js` si mueves la estructura de carpetas.

Si quieres, hago el commit y creo la rama `main` localmente por ti, o te doy los comandos para que copies y pegues.
