# White Trype Cars App

Aplicación móvil basada en React Native/Expo para la potenciación de vehículos.

## Características
- Introducción de referencia de ECU o archivo original.
- Detección del método de lectura (OBD, BENCH o BOOT) con listado de programas compatibles.
- Formulario de contacto cuando la ECU requiere bench/boot.
- Selección de Stage 1, Stage 2 o Stage 3.
  - Stage 1: archivo estándar (€50).
  - Stage 2: extras seleccionables con precio dinámico (primer extra gratis, luego +€10).
  - Stage 3: advertencias en tres fases que deben aceptarse antes de continuar.
- Precio total calculado según la selección del usuario.

## Desarrollo
1. Instalar dependencias (Node.js LTS):
   ```
   npm install
   ```
2. Ejecutar en modo desarrollo (Expo):
   ```
   npm run start
   ```

## Build para Play Store (AAB) con EAS
> Requiere una cuenta gratuita en Expo y tener `eas-cli` (ya en devDependencies).

1. Inicia sesión:
   ```
   npx eas login
   ```
2. Configura EAS (crea `eas.json` si no existe):
   ```
   npx eas build:configure
   ```
3. Genera el **Android App Bundle (.aab)**:
   ```
   npm run build:android
   ```
   Cuando acabe, descarga el `.aab` desde el dashboard o desde la terminal.
4. (Opcional) Envío directo a Play si ya tienes Play Console configurado:
   ```
   npm run submit:android
   ```

## Política de privacidad y Data safety
- Este repo incluye `docs/privacy.html`. Si publicas el repo en GitHub y activas **GitHub Pages** (Source: “Deploy from a branch”, rama `main`, carpeta `/docs`), tendrás una URL pública como:
  ```
  https://<tu-usuario>.github.io/<tu-repo>/privacy.html
  ```
- Usa esa URL en la ficha de Play (Policy > App content > Privacy policy).
- En “Data safety”, puedes declarar “No se recopilan datos” si mantienes la app como está (sin envíos a servidores ni SDKs extra).

## Próximos pasos
- Generación real de archivos mediante IA y control anti-fraude.
- Integración de pagos y sistema de pedidos.
- Mejoras gráficas y pruebas automatizadas.

## Notas de publicación
- Asegúrate de completar en Play Console: **Data safety**, **Content rating**, **política de privacidad** (URL), e indicar si hay **anuncios**.
- Sube primero a una **pista interna** para probar (internal testing).
- Sustituye los placeholders de icono/splash por imágenes PNG reales antes del build final.
