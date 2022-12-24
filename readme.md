<p align="center" >

<img src="./images/logo.png" width="150px" />

</p>

<h1 align="center">
voting.pool
</h1>

Voting.pool é um app de votação 🗳️ com o front e o back sendo desenvoldido com ferramentas da linguagem JavaScript. Para ver o código do [backend](https://github.com/LuigiVanin/ac-voting.pool-back) e [frontend](https://github.com/LuigiVanin/ac-voting.pool-front) você pode acessar seus repos separados ou entrar nas pastas de `/server` e `/web`.

Esse repo é um monorepo dos outros dois repos citados. O projeto em questão teve seu deploy feito na aws(EC2) usando NGINX e Docker.

Algumas das funções do app:

-   O app deve ser capaz de criar novos usuários.
-   usuários podem logar e permanecer logados até efetivarem log out.
-   Todo usuário pode criar **pool** e adicionar qualquer pessoa na **pool**, sendo o dono automaticamente adicionado.
-   Todos os integrantes da **pool** podem votar entre si, porém não em si mesmo.
-   Participantes de uma **pool** podem visualizar os resultados da **pool** após ela ser fechada
-   Somente o dono da **pool** pode fechar a mesma.

<h3 align="center">

<a  href="http://ec2-18-231-116-229.sa-east-1.compute.amazonaws.com"/>

«Acessar Demostração»

</a>

</h3>

<h2>
Preview 👓
</h2>

<p align="center" >

<img  src="./images/voting-pool-mock.png" width="650px" />

## Como Rodar 🚀

Para rodar o projeto localmente é necessário rodar tanto o front quanto o back, então é necessário baixar ambos os repositórios na sua máquina ou baixar o monorepo - para isso use **git clone** ou baixe manualmente.

```bash
> git clone https://github.com/LuigiVanin/voting.pool-monorepo.git
```

Antes de mais nada, é importante lembrar-se que esse projeto necessita do uso de um banco de dados postgres. Por isso, antes mesmo de iniciar o backend é preciso realizar a configuração deste. Após ter feito isto, basta executar as devidas configurações Após setar seu banco postgres, basta configurar o projeto - para isso basta seguir o exemplo de .env, o arquivo `.env.example`.

### 1. Como rodar o Backend

Para rodar o front basta entrar na pasta do mesmo e instalar as dependências:

```bash
> npm i
```

Agora, precisamos setar o banco de dados:

```bash
npx prisma migrate dev
```

Para rodar em desenvolvimento basta usar o seguinte script:

```bash
npm run start:dev
```

### 2. Como rodar o Frontend

Para rodar o front basta entrar na pasta do mesmo e instalar as dependências:

```bash
> npm i
```

Agora, para rodar a versão de desenvolvimento rodamos o seguinte script:

```bash
> npm run dev
```

### 3. Como rodar ambos usando Docker 🐋

Na raiz do projeto rode:

```
> docker-compose -f docker-compose.test.yml up --build
```

Isso irá rodar a aplicação na sua porta 3000!

**OBS.:** Vale salientar que tanto o back quanto o front tem suas aplicações dockerizadas, então é possível roda-las separadamente. O arquivo `docker-compose.test.yml` já dockeriza ambas aplicações e as junta em um porta usando nginx.
<br />

## Como Testar 🧪

Os testes desses repo utilizam das libs do Jest(back) e Cypress(front) - para rodar os respectivos testes basta rodar os scripts corretos!

**No backend** é necessário utilizar o docker para subir o banco de testes e rodar o script:

```bash
npm run test:e2e
```

ou, usando docker compose da pasta `server/`(lembre de setar env file `.env.prod`):

```bash
> docker-compose -f docker-compose.ci.yml up --build --exit-code-from node_app
```

**No frontend**

WIP 🚧🚧🚧

## Features futuras

Essas features serão desenvolvidas conforme o dev(eu) estiver com tempo livre...

-   [x] Adicionar um ReadMe
-   [x] Adicionar compatibilidade com docekr
-   [x] Criar um monorepo
-   [x] Mudar restante das notificações para toasts
-   [x] Corrigir bug da tela de resultado.
-   [ ] Habilitar CI
-   [ ] Finalizar testes de backend.
-   [ ] Finalizar testes de Frontend
-   [x] Migrar toda a aplicação para aws EC2.

---

## Ferramentas Utilizadas 🛠️

<h1 align="center" >

<img src="./images/nest+vue.png" width="350px" />

</h1>

<p align="center">
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D"/>
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
    <img src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white" />
    <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white">
    <img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e">
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white">
    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">
    <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
    <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" />
</p>

## Outras Ferramentas 📦

-   [Axios](https://axios-http.com/).
-   [Chalk](https://www.npmjs.com/package/chalk).
-   [Joi](https://joi.dev/).
-   [pactum](https://pactumjs.github.io/).
-   [Pinia](https://pinia.vuejs.org/)
-   [Vue-Router](https://router.vuejs.org/)

_-> Mais pacotes podem ser vistos nos package.json de cada repo._

## Entre em contato 📞

<br>

<p align="center">
<a href="https://www.linkedin.com/in/luis-felipe-vanin-martins-5a5b38215">
<img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue">
</a>
<a href="mailto:luisfvanin2@gmail.com">
<img src="https://img.shields.io/badge/Gmail:%20luisfvanin2@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white">
</a>
</p>
