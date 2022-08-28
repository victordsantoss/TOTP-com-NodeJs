# Autenticação TOTP
O Time-based One-Time Password algorithm (TOTP) é um algoritmo capaz de gerar senhas pseudoaleatórias em um determinado período de tempo por meio de chave privada compartilhada. 

## Objetivo
O Objetivo desse projeto é mostrar de maneira simples, mas eficaz, a geração de Qr Code dinâmicos como uso de autenticação em dois fatores usando TOTP. 

## Dependências
Para rodar o projeto se faz necessário a instalação NodeJs e o gerenciador de pacotes NPM.

Para a implementação do TOTP foi usada a bibliotca [OTPLIB](https://www.npmjs.com/package/otplib).

## Funcionamento
A api irá gerar um token de validação a cada 30 segundos que será responsável por gerar um novo Jwt nesse intervalo de tempo, além de autenticá-lo na aplicação responsável por ler o QrCode. 

## Screenshots

## Como rodar? 

### Api

* Instalar dependências
``` shell
npm install
```

* Iniciar servidor 
``` shell
nodemon index.js
```

### Web