#Anotações sobre o back-end da Sema Omnistack.

- Metódos HTTP:

* GET    : Buscar/listar informações do back-end. 
* POST   : Criar uma informação no back-end.
* PUT    : Atualizar uma informação no back-end.
* DELETE : Deletar uma informação no back-end.

- Tipos de Parâmetros:

* Query Params : Parâmetros nomeados na rota após "?". Ex: xxxx?name=jose.
* Route Params : Parâmetros utilizados para indentificar recursos. Ex: /users/:id.
* Request Body : Corpo da requisição, utilizado para criar ou alterar recursos. Ex: URL com JSON.

- Banco de dados: Knex.js

* Driver        : SELECT * FROM users
* Query Builder : table('users).select('*).where()