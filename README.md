# Comandos NPM (Node Package Manager)

- npm init // Cria o package.json para iniciar um projeto node
- npm i nome_pacote // instala um pacote específico
- npm install // instala todos os pacotes do package.json 
ou 
  npm i // instala todos os pacotes do package.json
- npm run nome_do_script // executa um script do package json (apenas o script "start" pode ignorar o comando run)

# Comandos Git

// configura usuário e email do git na máquina
- git config --global user.name "Renan Cavichi"
- git config --global user.email "renancavichi@gmail.com" 

- git init // inicia o git em uma pasta
- git remote add origin _url_do_github_ // vincula meu projeto local ao repositório do github.

# Tópicos Importantes

- O que é framework
- O que é JavaScript
- O que é NPM (Node Package Manager)
- O que é node.js
- O que é o Express
- Protocolo http (Request e Response)
- Métodos http (GET, POST, PUT, PATCH, DELETE)
- Como mudar o formato de importação/exportação de require para import (Adicionar no package.json a propriedade type: "module")
- --watch (parametro para rodar um js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado)
- Router (Para que separar as rotas?)
- Parâmetros de rota. Exemplo: /:id
- O que é Padrão de Projeto
- Sigla MVC
- Para que serve o Padrão de Projeto MVC?
- Qual a responsabilidade das camadas de Modelo, Visão e Controle?

Próximas Aulas

- Prisma ORM
- Validação de Dados (Regras de Negócio) com Zod
- Padrão de Projeto Middleware

## Sintaxe básica de uma rota no express
Sintaxe básica de uma rota da API. Exemplo:

app.post('/produto', (req, res) => {
  res.json({message: 'Criado com sucesso!'})
})

- método: post (criar ou inserir)
- Rota ou endereço: /produto
- tipo de resposta: json