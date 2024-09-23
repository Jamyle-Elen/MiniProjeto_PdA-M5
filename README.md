# **Floresta Amazônica - Ação e Preservação**

[![English Version](https://img.shields.io/badge/Version-English-blue)](./README_en.md)

## 📝 **Sobre**
A aplicação **Floresta Amazônica** é uma landing page interativa desenvolvida com o objetivo de conscientizar os usuários sobre a preservação da Floresta Amazônica e as consequências devastadoras de sua destruição. Com uma abordagem visual impactante, o projeto apresenta duas versões do ecossistema: uma versão da floresta em seu estado natural, e uma versão degradada pelos incêndios e destruição ambiental.

Ao alternar entre os modos **escuro** e **claro**, o usuário pode visualizar, respectivamente, a floresta em seu estado preservado e sua contraparte destruída. Além disso, o botão de **Denunciar** conecta automaticamente o usuário ao número de telefone **192**, permitindo que eles denunciem queimadas clandestinas, contribuindo para a preservação do bioma amazônico.

Este projeto utiliza diversas tecnologias, incluindo **Node.js** para o backend, com rotas que fornecem informações sobre incêndios, destruição da floresta e atualizações recentes.

## 🌍 **Problematização**
A Floresta Amazônica, o maior bioma tropical do mundo, está enfrentando um dos maiores desafios ambientais da história recente: a destruição por queimadas ilegais e desmatamento desenfreado. Essa devastação ameaça a biodiversidade, contribui para a mudança climática e afeta diretamente as populações locais que dependem da floresta para sua subsistência.

A falta de mecanismos de denúncia acessíveis e a rápida propagação de incêndios muitas vezes impedem uma resposta eficaz das autoridades. Este projeto visa abordar essa questão ao facilitar a comunicação direta entre o público e as autoridades competentes, fornecendo uma ferramenta prática para que qualquer pessoa possa denunciar atividades ilegais na Amazônia.

## 🌱 **Impacto**
A aplicação **Floresta Amazônica** busca não só conscientizar, mas também empoderar as pessoas a tomarem uma atitude contra a destruição da floresta. Ao facilitar a comunicação com as autoridades competentes e divulgar informações precisas, o projeto espera contribuir ativamente para a preservação desse importante bioma e promover um futuro mais sustentável.

## 💡 **Solução Tecnológica: Floresta Amazônica**
A aplicação **Floresta Amazônica** foi projetada para ser uma ferramenta acessível de conscientização e denúncia, proporcionando uma maneira simples e intuitiva de informar as autoridades sobre queimadas clandestinas. Através da alternância de modos visuais e da implementação de rotas dinâmicas, o projeto oferece:

- **Visualização Dual**: Uma maneira de alternar entre o estado preservado e destruído da floresta, sensibilizando o público para os impactos ambientais.
- **Denúncia Direta**: Com apenas um clique no botão "Denunciar", o usuário é conectado ao número **192**, facilitando a denúncia de queimadas ilegais diretamente às autoridades.
- **Informações quase em Tempo Real**: Exibição dos dados mais recentes sobre áreas afetadas, espécies ameaçadas e número de focos de incêndio, atualizados constantemente.

## 🔄 **Rotas da API**
As seguintes rotas foram implementadas para gerenciar as informações sobre a floresta e os incêndios:

| Método | Rota                       | Função                                                                       |
| ------ | -------------------------- | ---------------------------------------------------------------------------- |
| POST   | `/createData`              | Adiciona novos dados sobre incêndios e destruição na Amazônia                |
| GET    | `/getFireData`             | Retorna as informações atuais sobre focos de incêndio                        |
| GET    | `/getLastUpdate`           | Retorna a data da última atualização dos dados sobre incêndios               |
| POST   | `/createForest`            | Adiciona novos dados sobre a situação da floresta                            |
| GET    | `/getForestData`           | Retorna os dados sobre o estado atual da floresta (preservada e destruída)   |


# 📥 Instalações/Configuração do ambiente
Antes de instalar as dependências do projeto, certifique-se de que o Node.js esteja instalado em seu sistema. O [Node.js](https://nodejs.org/en/download/prebuilt-installer) é uma plataforma de JavaScript que permite executar código JavaScript fora do navegador e é necessário para gerenciar pacotes e executar scripts do projeto.

Uma vez que o Node.js esteja instalado, você pode instalar todas as dependências do projeto executando o seguinte comando na raiz do diretório do projeto:
```
  npm install
```
ou 
```
  npm i
```
Este comando irá ler o arquivo package.json do projeto e instalar automaticamente todas as bibliotecas e pacotes necessários para o funcionamento do projeto.

### 💻 Como rodar?

- Abra o terminal
- Verifica se está na pasta certa `/frontend/src` se não tiver:
  ```
  cd /frontend/src
  ```
- Então coloca no terminal dessa forma:
  ```
  npm i
  ```
  ```
   npm run dev
  ```

  Agora para rodar o backend:
  
- Abra outro terminal
- Verifique novamente se está na pasta certa `/backend/src` se não estiver:
  ```
  cd /backend/src
  ```
- Entao coloca no terminal dessa forma:
  ```
  npm i
  ```
  ```
  npm start
  ```
- Pronto, agora é só testar
