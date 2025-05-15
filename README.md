# 🛍️ E-Commerce React — Proyecto Final

## 📌 Descripción

Este proyecto es una aplicación web de e-commerce desarrollada con **React** como Proyecto Final del curso de ReactJS. La aplicación permite a los usuarios navegar por un catálogo de productos, filtrar por categorías, visualizar detalles de cada producto, agregar productos a un carrito de compras, y finalizar su compra a través de un checkout que genera una orden almacenada en **Firestore**.

## 🚀 Tecnologías utilizadas

- ⚛️ ReactJS
- 🛒 React Context API
- 🔥 Firebase Firestore
- 🛣️ React Router DOM
- 🖥️ Vite
- 💅 CSS / Estilos personalizados

---

## 📦 Funcionalidades

✅ Listado dinámico de productos desde **Firestore**

✅ Vista en detalle de cada producto

✅ Filtro de productos por categoría

✅ Agregar y quitar productos del carrito

✅ Visualización del carrito con subtotales y total

✅ Checkout con formulario de compra

✅ Generación de orden de compra en **Firestore** y visualización del ID de la compra

✅ Navegación SPA sin recarga de página

✅ Validación de stock en selección de cantidad

✅ Renderizado condicional
  
✅ CartWidget con cantidad total de productos en tiempo real

---

## 🔥 Firebase Configuración

Para conectar la app con Firebase, se utiliza un archivo `firebaseConfig.js` con las credenciales del proyecto que estan como variables de entorno desde un archivo `.env`:

```
VITE_FIRESTORE_API_KEY=xxxxxxxxxxxxxx 
VITE_FIRESTORE_AUTH_DOMAIN=xxxxxxxxxxxxxx 
VITE_FIRESTORE_PROJECT_ID=xxxxxxxxxxxxxx 
VITE_FIRESTORE_STORAGE_BUCKET=xxxxxxxxxxxxxx 
VITE_FIRESTORE_MESSAGING_SENDER_ID=xxxxxxxxxxxxxx 
VITE_FIRESTORE_APP_ID=xxxxxxxxxxxxxx
```

## 📝 Cómo probar el proyecto

Instalar las dependencias

```
npm install
```
Configurar las credenciales de Firebase


Crear un archivo .env en la raíz del proyecto con las variables de entorno de Firebase.

Ejecutar la aplicación

```
npm run dev 
```

Abrir en el navegador

Ir a http://localhost:5173/ para visualizar la aplicación en funcionamiento.