# anna11
This project is for experimenting with Vaadin web components with ViteJS bundler and development server (Danesi).

- The first version was a remake of [LitElement basics tutorial with TypeScript, 2020 video](https://youtu.be/1jn-NR4jiPk)
- Additional great explanation is this page [Lit Basics on Vaadin Fusion website](https://vaadin.com/docs/latest/fusion/application/lit)
- The project was initiated with [ViteJS](https://vitejs.dev/): **npm init vite**
    - Run this command in the parent folder of the actual repo folder that you want to create, since *it creates the folder itself*.
    - Select **vanilla-ts** template; don't select lit-element, since it creates a library project that cannot be deployed on Azure.
        ```
        Project name: anna11
        Select a framework: vanilla
        Select a variant: vanilla-ts
        ```
    - The initializer will not automatically installs the packages.
- **npm install** to install the packages the Vite initializer included in the **package.json**
- Open **tsconfig.json** and modify these settings especially **target=ES2021** and **useDefineForClassFields=false** as shown here, otherwise the application will not work properly:
    ```json
        "target": "ES2021", // or ES2018, ES2019, ES2020 BUT NEVER EVER esnext
        "useDefineForClassFields": false, // simply delete this
        "module": "ESNext", // or the same as defined in target
        "moduleResolution": "Node",
        "inlineSourceMap": true, // or any other source mapping settings you like
    ```
- **npm i -D eslint** to install the linter (see my other videos and projects for details, I use more or less the same settings)
- **npx eslint --init** to create *.eslintrc* and include the TypeScript rules
- **npm i lit** Installs one of the lightest and coolest web app development technology so far.
- **npm** *@vaadin/vaadin-text-field @vaadin/vaadin-button @vaadin/vaadin-ordered-layout @vaadin/vaadin-grid @vaadin/vaadin-form-layout* to install the vaadin components used in the project


