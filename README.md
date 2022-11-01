# Projeto de Teste

Esse projeto é composto de 3 atividades, um algoritmo para determinar se parênteses são balanceados,
um backend em node e um frontend em react

## Instruções para executar o software

Primeiramente é necessário uma máquina com NodeJS (recomendada v16.18.0 LTS) e Docker + Docker Compose

### Rodando o algoritmo de parênteses

Entre no diretório do algoritmo com `cd balanced_brackets`

Instale as dependências com `npm install`

Rode o algoritmo com `npm run app "{string de entrada}"`

Exemplo `npm run app "()[]{}"` produz a saída `A string '()[]{}' é balanceada.`

Se desejar, rode os testes automatizados com `npm run test`

### Rodando o backend

Entre no diretório do backend com `cd backend`

Instale as dependências com `npm install`

Crie um arquivo de ambiente chamado `.env`

O formato das variáveis ambientes se encontram no arquivo `.env.example`, para desenvolvimento local apenas copiar os conteudos de `.env.example` para `.env` é suficiente

É necessário uma instância de banco PostgreSQL, o diretório do backend possui um arquivo `docker-compose.yml` com especificações de um container PostgreSQL, indico utilizá-lo rodando `docker-compose up postgres`. Ou caso já tenha uma instância de preferência altere as variáveis ambientes do `.env` para as configurações do banco já existente.

Levante o servidor com `npm run dev`

Por padrão o servidor estará ouvindo em `http://localhost:8000` expondo 2 endpoints REST, `/person` e `/contact`

## Rodando o frontend

É necessário que o backend esteja rodando

Entre no diretório do backend com `cd frontend`

Instale as dependências com `npm install`

Rode o app React com `npm run dev`

Por padrão o app estará rodando em `http://localhost:5173`