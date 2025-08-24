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

## Construcción
1. Instalar dependencias (se requiere Node.js):
   ```
   npm install
   ```
2. Ejecutar en modo desarrollo:
   ```
   npm start
   ```
3. Para generar un APK listo para Play Store con Expo:
   ```
   npx expo build:android
   ```

## Próximos pasos
- Generación real de archivos mediante IA y control anti-fraude.
- Integración de pagos y sistema de pedidos.
- Mejoras gráficas y pruebas automatizadas.
