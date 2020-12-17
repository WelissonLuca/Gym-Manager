 <p align="center"> <img src="https://camo.githubusercontent.com/047366567218e6f144fb666cf9d0d1c2f34dc5a6e6af816aeead27d9f1e8350f/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d6c61756e6368626173652f6c6f676f2e706e67"></p>

  <h1 align="center">  Gym Manager  </h1>

  <p align="center">Projeto desenvolvido durante o bootcamp <a href"https://rocketseat.com.br/">LaunchBase</a> Da <a href"https://rocketseat.com.br/"> Rocketseat</a> . </p>

<p align="center">


  <img alt="GitHub contagem de linguagens" src="https://img.shields.io/github/languages/count/WelissonLuca/Gym-Manager?color=%2304D361&style=plastic">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/languages/code-size/WelissonLuca/Gym-Manager?style=plastic">

  
  
  <img alt="licensa" src="https://img.shields.io/github/license/WelissonLuca/Gym-Manager?style=plastic">

  <img src="https://img.shields.io/github/forks/WelissonLuca/Gym-Manager?style=plastic">

<a href="https://github.com/WelissonLuca/FoodFy/tree/master/commits/master">
    <img alt="GitHub último commit" src="https://img.shields.io/github/last-commit/WelissonLuca/Gym-Manager?style=plastic">
  </a>

  <p align="center" ><a href="https://github.com/WelissonLuca" > <img alt="Welisson" src="https://img.shields.io/badge/Desenvolvido%20por-Welisson%20Luca-brightgreen"></a></p>

  

<hr>

## 📕 Indice


* [📋 Sobre](#📋-Sobre-o-Gym-Manager)
* [🕹 Funcionalidades](#🕹-Funcionalidades)
* [🖥 Tecnologias:](#🖥-Tecnologias)
* [🔌 Dependencias](#🔌-Dependencias)
* [👩🏿‍💻 Como executar o projeto](#👩🏿‍💻-Como-executar-o-projeto)
* [🏋️‍♀️ Como contribuir para o projeto](#🏋️‍♀️-Como-contribuir-para-o-projeto)
* [🦸 Autor](#🦸-Autor)
* [📝 Licença](#📝-Licença)


## 🏋️‍♀️ Sobre o Gym Manager

<p align="left"> O Gym Manager é uma aplicação web de gerenciamento de academia, responsável pelo controle de instrutores e membros.  </p>

<hr>

## 🕹 Funcionalidades

<p> 🚧 O projeto ainda esta em fase de desenvolvimento, podendo ser adicionado novas funcionalidades e tecnologias com o passar do tempo. 🚧</p>


## Implementadas
- ✔️ Criar, visualizar, editar e apagar instrutores e membros.

- ✔️ Filtrar instrutores e membros

- ✔️ Paginação

- ✔️ Sistema totalmente dinâmico com nunjucks
- ✔️ Banco de dados PostegreSQL 

## Futuramente implementadas
- 🚧 Modo Dark

- 🚧 Alteração de tipografia

- 🚧 Translate








## 🖥 Tecnologias:
- <a href="https://www.w3schools.com/html/">HTML</a>
- <a href="https://www.w3schools.com/css/default.asp">CSS</a>
- <a href="https://www.w3schools.com/js/default.asp">JavaScript</a>
- <a href="https://nodejs.org/en/">Node</a>
- <a href="https://www.npmjs.com/">NPM</a>
- <a href="https://www.postgresql.org/">PostegreSQL</a>

<hr>

 ## 🔌 Dependencias
- <a href="https://www.npmjs.com/package/express">Express</a>
- <a href="https://www.npmjs.com/package/nunjucks">Nunjucks</a>
- <a href="https://www.npmjs.com/package/nodemon">Nodemon</a>
- <a href="https://www.npmjs.com/package/browser-sync">Browser-Sync</a>
- <a href="https://www.npmjs.com/package/npm-run-all">Npm-run-all</a>
- <a href="https://www.npmjs.com/package/MethodOverride">MethodOverride</a>


<hr />

## 👩🏿‍💻 Como executar o projeto

Antes de tudo você vai precisar instalar na sua maquina, os seguintes arquivos:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/),[PostegreSQL](https://nodejs.org/en/). 
Além disto um editor de codígo fonte, eu recomendo o uso do  [VSCode](https://code.visualstudio.com/)

#### 🧭 Rodando a aplicação

1. Clone este repositório

	```bash
	git clone https://github.com/WelissonLuca/FoodFy
	```

2. Acesse a pasta do projeto no seu *vscode*

	```bash
	cd Gym-Manager
	```

3. Instale as dependências

	```bash
	npm i
	```

4. Crie é importe o banco de dados
	```bash
	psql -U postgres -c "CREATE DATABASE gymmanager"
	psql -U postgres -d gymmanager <gymmanager.sql

	Você também pode criar e importar manualmente o banco de dados usando o Postbird ou pgAdmin.

	Conexão com o banco de dados: edite o arquivo db.js dentro da pasta src/config com o seu user e password do Postgres.	

	```	
	



5. Execute a aplicação 

	```bash
	npm start
	```



<p align="center">A aplicação será aberta na porta:3000 - acesse http://localhost:3000</p>
<hr>


## 🏋️‍♀️ Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

## 🦸 Autor

 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/62263143?s=460&u=2d740bbcbd193e223e104d59cca9a1b0b8831152&v=4" width="100px;" alt=""/>

<p>WELISSON LUCA</p> 
<p align="left">
<a href="https://www.linkedin.com/in/welisson-luca-assun%C3%A7%C3%A2o-vilar-483697189/" target="blank"><img align="center" src="https://cdn.iconscout.com/icon/free/png-64/linkedin-208-916919.png" alt="welisson luca" width="40" /></a>
<a href="mailto:welissonluca17@gmail.com?subject=Hello%20again" target="blank" style="margin:20px"><img align="center" src="https://cdn.iconscout.com/icon/free/png-64/google-search-engine-logo-sign-find-gmail-6-4981.png" alt="welisson luca" width="40" /></a>
<a href="https://api.whatsapp.com/send?phone=5591999145682&text=Informe%20seu%20nome%20%C3%A9%20qual%20o%20assunto.!" target="blank" ><img align="center" src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-151-675795.png" alt="welisson luca" width="40" /></a>



</p>

<hr>

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por Welisson Luca 👋🏻 [Entre em contato!](https://api.whatsapp.com/send?phone=5591999145682&text=Informe%20seu%20nome%20%C3%A9%20qual%20o%20assunto.!)












