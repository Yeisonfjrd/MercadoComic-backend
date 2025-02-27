# Backend Mercado Comic

[![project](https://github.com/user-attachments/assets/c903bb27-a7db-415b-94f9-af16d8c6f0bb)](https://mercadocomic.com/)

## Diagrama de Arquitectura del Backend Mercado Comic

```mermaid
graph LR
    subgraph Raíz del Proyecto
        direction TB
        rootFolder("MercadoComic-backend")
        style rootFolder fill:#f0f0f0,stroke:#333,stroke-width:2px
        subgraph Carpeta .github
            direction TB
            githubFolder(".github")
            style githubFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
            workflowsFolder(".github/workflows")
            style workflowsFolder fill:#d0e0d0,stroke:#333,stroke-width:1px
            ciWorkflow(".github/workflows/ci.yml\n(Ejemplo Workflow CI)")
            style ciWorkflow fill:#e0ffe0,stroke:#333,stroke-width:0.5px
            githubFolder --> workflowsFolder
            workflowsFolder --> ciWorkflow
        end

        subgraph Carpeta config
            direction TB
            configFolder("config")
            style configFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
            databaseJs("config/database.js\n(Configuración DB)")
            style databaseJs fill:#e0ffe0,stroke:#333,stroke-width:0.5px
            serverJs("config/server.js\n(Configuración Servidor)")
            style serverJs fill:#e0ffe0,stroke:#333,stroke-width:0.5px
            configFolder --> databaseJs
            configFolder --> serverJs
        end

        subgraph Carpeta data
            direction TB
            dataFolder("data")
            style dataFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
        end

        subgraph Carpeta database
            direction TB
            databaseFolder("database")
            style databaseFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
            migrationsFolder("database/migrations")
            style migrationsFolder fill:#d0e0d0,stroke:#333,stroke-width:1px
            migrationFiles("...")
            style migrationFiles fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
            databaseFolder --> migrationsFolder
            migrationsFolder --> migrationFiles
        end

        subgraph Carpeta public
            direction TB
            publicFolder("public")
            style publicFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
            faviconPng("public/favicon.png")
            style faviconPng fill:#e0ffe0,stroke:#333,stroke-width:0.5px
            publicFolder --> faviconPng
        end

        subgraph Carpeta scripts
            direction TB
            scriptsFolder("scripts")
            style scriptsFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
        end

        subgraph Carpeta src
            direction TB
            srcFolder("src")
            style srcFolder fill:#c0e0c0,stroke:#333,stroke-width:1px

            subgraph Carpeta src/api
                direction TB
                apiFolder("api")
                style apiFolder fill:#d0f0d0,stroke:#333,stroke-width:1px
                apiEntitiesFolder("api/... (Entidades)")
                style apiEntitiesFolder fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                apiControllersFolder("api/... (Controladores)")
                style apiControllersFolder fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                apiServicesFolder("api/... (Servicios)")
                style apiServicesFolder fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                apiRoutesFolder("api/... (Rutas)")
                style apiRoutesFolder fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                apiFolder --> apiEntitiesFolder
                apiFolder --> apiControllersFolder
                apiFolder --> apiServicesFolder
                apiFolder --> apiRoutesFolder
            end

            subgraph Carpeta src/components
                direction TB
                componentsFolder("components")
                style componentsFolder fill:#d0f0d0,stroke:#333,stroke-width:1px
                componentFilesSrc("... (Archivos de Componentes)")
                style componentFilesSrc fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                componentsFolder --> componentFilesSrc
            end

            subgraph Carpeta src/plugins
                direction TB
                pluginsFolder("plugins")
                style pluginsFolder fill:#d0f0d0,stroke:#333,stroke-width:1px
                pluginFilesSrc("... (Archivos de Plugins)")
                style pluginFilesSrc fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                pluginsFolder --> pluginFilesSrc
            end

            subgraph Carpeta src/admin
                direction TB
                adminFolder("admin")
                style adminFolder fill:#d0f0d0,stroke:#333,stroke-width:1px
                adminFilesSrc("... (Archivos del Admin)")
                style adminFilesSrc fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                adminFolder --> adminFilesSrc
            end

            srcFolder --> apiFolder
            srcFolder --> componentsFolder
            srcFolder --> pluginsFolder
            srcFolder --> adminFolder
        end
    end
```

## Tecnologías Usadas

- **Backend Framework:** Strapi
- **Base de Datos:** PostgreSQL
- **Lenguaje:** JavaScript
- **Gestión de Dependencias:** npm

## Instalación y Uso

Para ejecutar este proyecto en tu máquina local:

```bash
npm install  # Instalar dependencias
npm run dev  # Ejecutar en modo desarrollo
```

## Contacto

📌 [LinkedIn](https://www.linkedin.com/in/yeison-fajardo)  
📌 [GitHub](https://github.com/yeisonfjrd)
