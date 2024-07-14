# Aplicativo de Gerenciamento de Produtos

Este é um aplicativo simples de gerenciamento de produtos desenvolvido em React Native utilizando Expo, SQLite e Expo Router.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:<br>
<br>
- **components/**: Contém componentes reutilizáveis como Input e Product.<br>
- **database/**: Contém hooks personalizados para operações CRUD no banco de dados SQLite.<br>
- **screens/**: Contém os componentes de tela do aplicativo, como Index e Details.

## Padrão de Estrutura

O projeto segue um padrão de estruturação baseado em componentes funcionais e hooks personalizados, garantindo uma separação clara de responsabilidades e promovendo a reutilização de código.

## Como Rodar Localmente

Para rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

- **Node.js** (instalação via [Node.js website](https://nodejs.org/))<br>
- **Expo CLI** (instalação via npm: `npm install -g expo-cli`)

## Passos

## Clone o repositório
```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd Crud-React-Native
```
## Instale as dependências
```
npm install
```
## Inicie o servidor de desenvolvimento
```
npm start
```
## Abra o aplicativo no seu dispositivo

Escaneie o QR code gerado com o aplicativo Expo Go (disponível na App Store ou Google Play) ou <br>
Execute em um emulador Android/iOS clicando na opção apropriada no terminal aberto durante npm start.

## Banco de Dados
O aplicativo utiliza SQLite como banco de dados local, inicializado com uma tabela products contendo campos para id, name e quantity. A inicialização do banco de dados é realizada através do método initializedDatabase no arquivo database/initializeDatabase.ts.

Este projeto exemplifica um aplicativo básico em React Native com integração de banco de dados local, navegação entre telas e componentes reutilizáveis, proporcionando uma base para desenvolvimento de aplicações móveis simples.
