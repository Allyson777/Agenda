<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Agenda" />

  &#xa0;

  <!-- <a href="https://agenda.netlify.app">Demo</a> -->
</div>

<h1 align="center">Agenda</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/Allyson/agenda?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/Allyson/agenda?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Allyson/agenda?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/Allyson/agenda?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/Allyson/agenda?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/Allyson/agenda?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/Allyson/agenda?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Agenda 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/Allyson" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Describe your project

## :sparkles: Features ##

:heavy_check_mark: Feature 1;\
:heavy_check_mark: Feature 2;\
:heavy_check_mark: Feature 3;

## :rocket: Technologies ##

The following tools were used in this project:

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/Allyson/agenda

### Laravel
Dentro da pasta `backend` siga as seguintes instruções.
1. Instale as dependências:
    ```bash
    composer install
    ```
2. Crie o arquivo de variáveis globais do projeto **backend**:
    ```bash
    cp .env.example .env
    ```
3. Após isso insira as credenciais do banco de dados no arquivo `.env`
4. Crie o schema no banco de dados. O nome do banco deve ser o valor contido na variável `DB_DATABASE` presente no arquivo `.env`. 
5. Gere a chave do projeto:
    ```bash
    php artisan key:generate
    ```
6. Crie o link simbólico com o diretório storage:
    ```bash
    php artisan storage:link
    ```
7. Rode as migrations:
    ```bash
    php artisan migrate --seed
    ```
   1. Caso as migrations já tenham sido rodadas anteriormente no seu banco de dados, execute o comando:
        ```bash
        php artisan migrate:fresh --seed
        ```
8. Inicie o servidor **backend**:
    ```bash
    php artisan serve
    ```
    1. O servidor **backend** será iniciado por padrão no endereço `http://127.0.0.1:8000`. 
### React.js/Next.js
Tenha o gerenciador de pacotes <a href="https://pnpm.io/pt/installation">pnpm</a> instalado globalmente em sua máquina.

Dentro da pasta `frontend` siga as seguintes instruções.
1. Instale as dependências:
    ```bash
    pnpm install
    ```
2. Crie o arquivo de variáveis globais do projeto **frontend**:
    ```bash
    cp .env.local.example .env.local
    ```
3. Inicie o servidor **frontend**:
    ```bash
    pnpm dev
    ```
    1. O servidor **frontend** será iniciado por padrão no endereço `http://127.0.0.1:3000`. 
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/Allyson" target="_blank">Allyson Pina</a>

&#xa0;

<a href="#top">Back to top</a>
