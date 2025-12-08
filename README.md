# AS Burger - Sistema de Comandas (Frontend)

Sistema de gestión de comandas para restaurante de hamburguesas, desarrollado con Angular 17.

## Descripción

Este proyecto es el resultado de un proceso de **reingeniería de software** aplicado al sistema original de comandas "AS Burger". El sistema permite la gestión completa de pedidos, usuarios, menú y estadísticas de ventas para un restaurante de hamburguesas.

### Proceso de Reingeniería Aplicado

Este sistema fue sometido a un proceso completo de reingeniería que incluyó:

1. **Ingeniería Inversa**: Análisis y comprensión del sistema existente, extracción de la lógica de negocio y documentación del código fuente original.

2. **Reestructuración de Documentos**: Reorganización de la estructura de archivos y carpetas para mejorar la mantenibilidad y escalabilidad del proyecto.

3. **Reestructuración de Código**: Refactorización del código existente aplicando mejores prácticas, patrones de diseño y optimización del rendimiento.

4. **Ingeniería Progresiva**: Integración de nuevos requerimientos y funcionalidades al sistema existente, incluyendo:
   - Mejoras en la interfaz de usuario (UI/UX)
   - Nuevos componentes y vistas
   - Optimización del flujo de trabajo
   - Implementación de nuevas características solicitadas

5. **Creación de Nuevos Diagramas**: Documentación visual actualizada del sistema incluyendo diagramas de arquitectura, flujo de datos y casos de uso.

## Créditos

- **Sistema Original**: Desarrollado por **Lizeth Abril González Vázquez**
- **Reingeniería**: Aplicada como parte del proyecto de la materia de Reingeniería de Software

## Repositorios

### Repositorios Originales
| Proyecto | Enlace |
|----------|--------|
| Frontend Original | [project-front](https://github.com/LizethVqz/project-front.git) |
| Backend Original | [project-ws](https://github.com/LizethVqz/project-ws.git) |

### Repositorios con Reingeniería
| Proyecto | Enlace |
|----------|--------|
| Frontend (este repo) | [Front-ASBurger-Reingenieria](https://github.com/bum-spark/Front-ASBurger-Reingenieria.git) |
| Backend | [Back-ASBurger-Reingenieria](https://github.com/bum-spark/Back-ASBurger-Reingenieria.git) |

## Tecnologías Utilizadas

- **Angular** 17.1.0
- **TypeScript** 5.3.2
- **Tailwind CSS** 3.4.18
- **DaisyUI** 4.12.24
- **Angular Material** 17.3.8
- **Chart.js** + ng2-charts (para gráficas)
- **Socket.IO** (comunicación en tiempo real)

## Instalación y Ejecución

### Prerrequisitos

- **Node.js** (versión 18.x o superior recomendada)
- **npm** (incluido con Node.js)
- **Angular CLI** versión 17.1.2

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/bum-spark/Front-ASBurger-Reingenieria.git
   cd Front-ASBurger-Reingenieria
   ```

2. **Instalar Angular CLI** (si no lo tienes instalado)
   ```bash
   npm install -g @angular/cli@17.1.2
   ```

3. **Instalar dependencias del proyecto**
   ```bash
   npm install
   ```

4. **Ejecutar el servidor de desarrollo**
   ```bash
   ng serve
   ```

5. **Acceder a la aplicación**
   
   Navega a `http://localhost:4200/` en tu navegador. La aplicación se recargará automáticamente cuando realices cambios en los archivos fuente.

### Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `ng serve` | Inicia el servidor de desarrollo |
| `ng build` | Compila el proyecto para producción |
| `ng test` | Ejecuta las pruebas unitarias |
| `ng generate component nombre` | Genera un nuevo componente |

## Estructura del Proyecto

```
src/
├── app/
│   ├── environments/      # Configuración de entornos
│   ├── guards/            # Guards de autenticación
│   ├── interfaces/        # Modelos e interfaces TypeScript
│   ├── private/           # Módulo privado (requiere autenticación)
│   │   ├── chef-order-view/   # Vista de órdenes para chef
│   │   ├── dash-admin/        # Dashboard administrativo
│   │   ├── menu/              # Gestión del menú
│   │   ├── order-view/        # Vista de órdenes
│   │   └── user/              # Gestión de usuarios
│   ├── public/            # Módulo público
│   │   └── auth/          # Autenticación (login/registro)
│   └── services/          # Servicios (API, WebSockets, etc.)
└── assets/                # Recursos estáticos
```

## Nota Importante

Este es únicamente el **Frontend** del sistema. Para el funcionamiento completo de la aplicación, es necesario tener corriendo también el **Backend** disponible en el repositorio correspondiente.

## Licencia

Este proyecto fue desarrollado con fines educativos como parte de la materia de Reingeniería de Software.
