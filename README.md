# Projeto Final - API REST de Blog
**Módulo: Banco de Dados**   
**Professor: [Walisson Silva](https://www.walissonsilva.com)**

## Objetivo do Projeto

Desenvolver a API Rest de um Blog, a qual possua rotas que permitam:

1. Obter dados de todos os posts
2. Obter dados de um post específico
3. Adicionar um post
4. Alterar os dados de um post
5. Remover um post
6. Obter todos os posts de uma categoria específica (Opcional)

## Requisitos do Sistema

O Blog será composto por vários artigos. Cada artigo deve conter um título, subtítulo, autor, conteúdo, data de publicação, categoria, tags e um slug.

Cada artigo só pode pertecer a uma categoria, mas pode conter várias tags. A mesma tag pode ser utilizada em vários posts. Além disso, cada post só possui um autor.

## Modelagem de Dados

Por meio dos requisitos apresentados na seção anterior, faça uma Modelagem de Dados semelhante àquelas feitas durante as aulas. Ou seja, passe pelo Modelo Conceitual, Lógico e, por fim, o Modelo Físico.

Não esqueça de criar o Diagrama Entidade-Relaciomento.

## Desenvolvimento do Projeto

O desenvolvimento do projeto deve ser feito utilizando o **Node.js**. **Não será necessário desenvolver o Front-end da aplicação, nesse momento.** Basta criar as rotas que irão devolver os dados de interesse para uma possível integração futura com o Front-End.

**Nesse momento, você não precisa incluir as tags no projeto do Node. Embora tenha considerado elas na modelagem de dados, considere apenas a categoria e o autor.**

## Rotas

Como descrito no Objetivo, sua API deve conter apenas 6 rotas:

### 1. Obter dados de todos os posts
  
Uma rota para apenas obter todos os dados de cada artigo/post armazenado no banco.

- Método: ???
- Body: ???
- Reponse: ???

### 2. Obter dados de um post específico

Nesta rota você deve receber algum parâmetro único para que, por meio dele, você possa devolver os dados de post específico.

> Sugestão: você pode utilizar o slug

- Método: ???
- Body: ???
- Response: ???

### 3. Adicionar um post

Nesta rota você deve receber os dados de um post para que você possa inseri-lo no banco de dados.

> Quais são os dados que devem ser enviados pelo body do Request?

- Método: ???
- Body: ???
- Response: ???

### 4. Alterar os dados de um post

Nesta rota você deverá receber um identificador único de um post. Além disso, você precisa receber os novos dados que devem ser inseridos naquele post. Dessa forma, será possível localizar o post a ser atualizado e, assim, inserir os novos dados recebidos.

- Método: ???
- Body: ???
- Response: ???

### 5. Remover um post

Nesta rota você [também] deverá receber um identificador único de um post. Por meio desse identificador, apenas remova esse post específico.

### 6. Obter todos os posts de uma categoria específica (Opcional)

## Dicas

1. Para criar o slug de um post, você pode utilizar o *package* [`slugify`](https://www.npmjs.com/package/slugify) no Node.
2. Para testar as suas rotas, utilize o [Insomnia Core](https://insomnia.rest/download/).