# Backend Mercado Comic

## Diagrama de Arquitectura del Backend Mercado Comic (Estilizado)

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
            workflowsFolder(".github/\nworkflows")
            style workflowsFolder fill:#d0e0d0,stroke:#333,stroke-width:1px
            ciWorkflow(".github/workflows/\nci.yml\n(Ejemplo Workflow CI)")
            style ciWorkflow fill:#e0ffe0,stroke:#333,stroke-width:0.5px
            githubFolder --> workflowsFolder
            workflowsFolder --> ciWorkflow
        end

        subgraph Carpeta config
            direction TB
            configFolder("config")
            style configFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
            databaseJs("config/\ndatabase.js\n(Configuración DB)")
            style databaseJs fill:#e0ffe0,stroke:#333,stroke-width:0.5px
            serverJs("config/\nserver.js\n(Configuración Servidor)")
            style serverJs fill:#e0ffe0,stroke:#333,stroke-width:0.5px
            configFolder --> databaseJs
            configFolder --> serverJs
             note over configFolder: Configuración Strapi
        end

        subgraph Carpeta data
            direction TB
            dataFolder("data")
            style dataFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
             note over dataFolder: Datos iniciales (opcional)
        end

        subgraph Carpeta database
            direction TB
            databaseFolder("database")
            style databaseFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
            migrationsFolder("database/\nmigrations")
            style migrationsFolder fill:#d0e0d0,stroke:#333,stroke-width:1px
            migrationFiles("...")
            style migrationFiles fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
            databaseFolder --> migrationsFolder
            migrationsFolder --> migrationFiles
             note over databaseFolder: Configuración Base de Datos
        end

        subgraph Carpeta public
            direction TB
            publicFolder("public")
            style publicFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
            faviconPng("public/\nfavicon.png")
            style faviconPng fill:#e0ffe0,stroke:#333,stroke-width:0.5px
            publicFolder --> faviconPng
             note over publicFolder: Archivos estáticos
        end

        subgraph Carpeta scripts
            direction TB
            scriptsFolder("scripts")
            style scriptsFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
             note over scriptsFolder: Scripts personalizados (opcional)
        end

        subgraph Carpeta src
            direction TB
            srcFolder("src")
            style srcFolder fill:#c0e0c0,stroke:#333,stroke-width:1px

            subgraph Carpeta src/api
                direction TB
                apiFolder("api")
                style apiFolder fill:#d0f0d0,stroke:#333,stroke-width:1px
                 note over apiFolder: Lógica API Strapi
                apiEntitiesFolder("api/\n...\n(Entidades)")
                style apiEntitiesFolder fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                apiControllersFolder("api/\n...\n(Controladores)")
                style apiControllersFolder fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                apiServicesFolder("api/\n...\n(Servicios)")
                style apiServicesFolder fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                apiRoutesFolder("api/\n...\n(Rutas)")
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
                note over componentsFolder: Componentes Strapi\n(reutilizables en el admin)
                componentFilesSrc("...\n(Archivos de Componentes)")
                style componentFilesSrc fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                componentsFolder --> componentFilesSrc
            end

            subgraph Carpeta src/plugins
                direction TB
                pluginsFolder("plugins")
                style pluginsFolder fill:#d0f0d0,stroke:#333,stroke-width:1px
                 note over pluginsFolder: Plugins Strapi\n(personalizaciones)
                 pluginFilesSrc("...\n(Archivos de Plugins)")
                style pluginFilesSrc fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                pluginsFolder --> pluginFilesSrc
            end

            subgraph Carpeta src/admin
                direction TB
                adminFolder("admin")
                style adminFolder fill:#d0f0d0,stroke:#333,stroke-width:1px
                note over adminFolder: Personalización\ndel panel de administración
                adminFilesSrc("...\n(Archivos del Admin)")
                style adminFilesSrc fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
                adminFolder --> adminFilesSrc
            end


            srcFolder --> apiFolder
            srcFolder --> componentsFolder
            srcFolder --> pluginsFolder
            srcFolder --> adminFolder


        end

        subgraph Carpeta types
            direction TB
            typesFolder("types")
            style typesFolder fill:#e0e0e0,stroke:#333,stroke-width:1px
            generatedFolder("types/\ngenerated")
            style generatedFolder fill:#d0e0d0,stroke:#333,stroke-width:1px
            generatedTypes("types/generated\n/...\n(Tipos generados)")
            style generatedTypes fill:#e0ffe0,stroke:#333,stroke-width:0.5px, dasharray: 3 3
            typesFolder --> generatedFolder
            generatedFolder --> generatedTypes
             note over typesFolder: Definiciones de tipos
        end


        envExampleFile(".env.example")
        style envExampleFile fill:#f9f,stroke:#333,stroke-width:1px
        gitignoreFile(".gitignore")
        style gitignoreFile fill:#f9f,stroke:#333,stroke-width:1px
        readmeFile("README.md")
        style readmeFile fill:#f9f,stroke:#333,stroke-width:1px
        datapgHbaConfFile("datapg_hba.conf")
        style datapgHbaConfFile fill:#f9f,stroke:#333,stroke-width:1px
        packageLockJsonFile("package-lock.json")
        style packageLockJsonFile fill:#f9f,stroke:#333,stroke-width:1px
        packageJsonFile("package.json")
        style packageJsonFile fill:#f9f,stroke:#333,stroke-width:1px
        tsConfigJsonFile("tsconfig.json")
        style tsConfigJsonFile fill:#f9f,stroke:#333,stroke-width:1px


        rootFolder --> githubFolder
        rootFolder --> configFolder
        rootFolder --> dataFolder
        rootFolder --> databaseFolder
        rootFolder --> publicFolder
        rootFolder --> scriptsFolder
        rootFolder --> srcFolder
        rootFolder --> typesFolder
        rootFolder --> envExampleFile
        rootFolder --> gitignoreFile
        rootFolder --> readmeFile
        rootFolder --> datapgHbaConfFile
        rootFolder --> packageLockJsonFile
        rootFolder --> packageJsonFile
        rootFolder --> tsConfigJsonFile

    end
