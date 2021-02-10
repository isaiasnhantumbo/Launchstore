<br/>
<h1 align="center">Launchstore</h1>
<p align="center">
    <!-- <img src ="./public/assets/foodfy.gif" >  -->
</p>
<h2 align="center"> 
	🚧  Launchstore  Em construção...  🚧
</h2>
<br>

# Índice
   * [Descrição do Projecto](#descrição-do-projecto)
   * [Features](#-features)
   * [Tecnologias usadas](#-tecnologias-usadas)
   * [Pré-requisitos](#-pré-requisitos)
   * [Rodando o projecto na sua maquina](#-rodando-o-projecto-na-sua-maquina-iniciando-o-servidor)
   * [Licença](#-licença)


## 📖 Descrição do Projecto

<p align="center">
<!-- TODO:PReview do Foody -->
Launchstore é um e-commerce Que  foi construindo durante o bootcamp Launchbase da Rockeaseat.
</p>


---



<!-- <h1 align="center"><a href="https://isaiasnhantumbo.github.io/Foodfy">Acessar Demonstração</a></h1> -->

## ✅ Features

Uma pequena lista de coisas que pode fazer no Launchstore:
  - [x] Ver Produtos
  <!-- - [x] Ver receitas de vários chef's 
  - [x] Ver os detalhes da receita
  - [x] Ver como preparar a receita
  - [x] Ver os ingredientes da receita
  - [x] Ver o autor da receita -->
  <!-- - [ ] Cadastrar a sua receita -->

<!-- preview das features -->


<p align="center">
  <!-- <img src = "http://i.imgur.com/0iorG20.png" width=700> -->
</p>

---
## 🛠 Tecnologias usadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Html](https://developer.mozilla.org/pt-PT/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-PT/docs/Glossary/CSS)
- [Node.js](https://nodejs.org/en/)
- [Javascript](https://developer.mozilla.org/pt-PT/docs/Glossary/JavaScript)
- [Nunjucks](https://www.typescriptlang.org/)
- [Nodejs](https://nodejs.org/en/)
- [Express](https://www.typescriptlang.or)

---

<!-- ## ⛈  Desafios do projecto
......
  - [x] Criar um header com dois links: `Teachers` e `Students` [Desafio 4-1: Header](https://github.com/Rocketseat/bootcamp-launchbase-desafios-04/archive/master.zip)
  ---
  - [x] Nessa etapa você deve utilizar o browser-sync e criar um card para apresentação das informações do professor.
  - [x] Utilize as libs `browser-sync` e `npm-run-all` e rode os processos da sua aplicação e do `browser-sync` em paralelo.
  - [x] Esse componente deve ser dividido em duas seções: imagem e detalhes. As seguintes informações são obrigatórias:

- Imagem randômica de uma coleção de professores (utilize a api do unsplash);
- Nome completo;
- Idade;
- Grau de escolaridade (ex.: Doutorado);
- Tipo de aula (presencial ou à distância);
- Acompanhamento (ex.: Matemática e Física);
- Desde (data de cadastro na plataforma).
- ---
  ### Desafio 4-3: Formulário e Rota de cadastro do Professor

- [x] Nessa etapa você deve criar um formulário de cadastro do professor e uma rota do tipo `post` que irá realizar as validações e salvar os dados enviados.
Os seguintes campos são necessários:
- Avatar url: campo do tipo `url` para cadastrar o caminho da imagem do professor;
- Nome completo: campo do tipo `text`;
- Data de nascimento: campo do tipo `date`;
- Grau de escolaridade: campo do tipo `select` ([documentação do select](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select)) que deve conter as opções **Ensino Médio Completo, Ensino Superior Completo, Mestrado e Doutorado**;
- Tipo de aula: campo do tipo `radio` que deve conter as opções **Presencial e À distância**;
- Área de atuação: campo do tipo `text` que deve conter as informações das matérias que o professor pode lecionar.
- [x] Crie um arquivo `teachers.js` na raiz do seu projeto e faça a validação de todos os campos utilizando `keys` e o constructor `Object`. Além disso, utilize o método `writeFile` da lib `fs` para gerar um arquivo json que irá conter um array de todos os professores cadastrados. Ao final desses dois processos (validação e salvamento), faça o redirecionamento para a página de listagem de professores.
 ### Desafio 4-4: Apresentação, edição e formatação dos dados de um professor
- [x] Nessa etapa você deve criar duas rotas: uma para apresentar os dados do professor (show) e outra para a edição dos dados cadastrados (edit). Além disso, realize a formatação dos dados cadastrados para a correta exibição no HTML
- [x] Crie uma rota para lidar com a apresentação dos dados cadastrados de um professor. Dentro do arquivo `teachers.js`, crie um método `show` para buscar e retornar o professor a partir do `id` fornecido na rota. Os seguintes dados precisam ser formatados:

- Idade: Crie um arquivo `utils.js` que exporta uma função chamada `age`. Essa função deve retornar a idade a partir do parâmetro (data de nascimento) informado;
- Grau de escolaridade: crie uma função `graduation` no arquivo `utils.js`. Essa função deve retornar o grau de escolaridade formatado a partir do valor do select informado (ex.: **Ensino Médio Completo** para o valor **medio** do `select`);
- Acompanhamento: Utilize o método `split` da string para gerar um array com as matérias que o professor leciona;
- Desde: Utilize o constructor `Intl` e seus métodos para gerar uma data no formato `dia/mes/ano`.

Ao fim da apresentação dos dados, crie um link que irá redirecionar para a rota de edição dos dados cadastrados.
- [x] Crie uma rota para lidar com a edição dos dados cadastrados de um professor. Dentro do arquivo `teachers.js`, crie um método `edit` para buscar e retornar o professor a partir do `id` fornecido na rota. Utilize a mesma interface da rota de apresentação dos dados do professor (lembrando de fazer o reaproveitamento do form com um arquivo `fields.njk`). Por fim, crie uma função chamada `date` no arquivo `utils.js`. Essa função deve retornar a data no formato `yyyy-mm-dd` para a correta exibição no input do tipo `date` no HTML (lembre de tratar os dias e meses menores que 10 utilizando o método `splice` da string). 
---
 ### Desafio 4-5: HTTP: PUT e DELETE
- [x] Nessa etapa você irá implementar duas rotas: PUT e DELETE para a atualização e remoção, respectivamente, dos dados cadastrados de um professor.
- [x] Crie uma rota para receber os dados do formulário de edição e propagar no arquivo `json`. Lembre de sobrescrever o método POST do form para PUT (utilize a lib `method-override`). Dentro do arquivo `teachers.js`, crie um método `update` para buscar e retornar o professor a partir do `id` fornecido na rota. Faça a busca pelo professor a partir do `id` e atualize no arquivo `json` os dados que foram alterados (utilize o constructor `Number` para formatar o id como número). Por fim, redirecione para a página de apresentação dos dados de um professor (show).
- [x] Crie um botão na página de apresentação dos dados do professor. Esse botão irá chamar uma rota para deletar o professor do arquivo `json`. Lembre de sobrescrever o método POST do form para DELETE (utilize a lib `method-override`). Dentro do arquivo `teachers.js`, crie um método `delete` e gere um array com todos os professores, exceto o que deve ser removido (`filter`). Por fim, redirecione para a página de listagem dos professores.
- [x]  O botão de deletar deve ficar ao lado do botão de editar;
- [x]  O botão de deletar deve ser da cor vermelha.
 ---
 ###  Desafio 4-6: Listagem de professores
 - [x] Nessa etapa você deve listar todos os professores salvos no arquivo `json` e apresentá-los em formato de tabela.
 - [x] Crie uma rota para repassar para o arquivo de listagem os dados dos professores salvos no arquivo `json`.
 - [x] Crie um arquivo que irá mostrar os dados dos professores em formato de tabela. Utilize `Nome completo`, `Acompanhamento` e `Ação` como cabeçalhos.
 - [x] A tabela deve ocupar todo o espaçamento do cartão;
- [x] Os cabeçalhos e os valores devem estar centralizados;
- [x] A imagem deve ser apresentada antes do nome. Deve ter formato circular e tamanho de 40px;
- [x] O campo `Acompanhamento` deve apresentar as matérias lecionadas de forma separada (array, assim como na página de apresentação de dados de um professor).
 ---
 ###  Desafio 4-7: Estruturando estudantes
- [X] Nessa etapa você deve reaproveitar para os estudantes toda a estrutura já criada para os professores. Além disso, deve implementar a lógica do menu ativo.
- [X] Reaproveite o código obedecendo os seguintes padrões:

- [X] Crie um arquivo `students.js` com a mesma estrutura que o `teachers.js`. Insira ambos os arquivos dentro uma pasta `controllers`;
- [X] Crie um array `students` vazio dentro do arquivo `json`;
- [X] Crie uma pasta `students` com a mesma estrutura de views que os professores;
- [X] Crie as rotas dos estudantes seguindo a mesma estrutura dos professores.

### Menu Ativo

- [x] Crie um arquivo `scripts.js` e implemente a lógica do menu ativo utilizando o `location` e o `includes` da string. Além disso, implemente um botão de cadastro nas páginas de listagem de professores e estudantes.

### Formulário

- [X] Faça os ajustes de professores para estudantes no formulário de criação. Além disso, remova os campos:
-  Grau de escolaridade;
- Tipo de aula;
- Acompanhamento;
- Desde.
- --
 - Adicione os campos:

- Email: campo do tipo `email`;
- Ano escolar: campo do tipo `select` com todas as opções de anos escolares entre 5º ano do ensino fundamental e 3º ano do ensino médio;
- Carga horária semanal: campo do tipo `number` que indica a quantidade de horas de aulas particulares que o aluno irá ter por semana.

### Salvando os dados

- [X] Faça os ajustes de professores para estudantes no método `post` do arquivo `students.js`. Além disso, implemente a nova estratégia de `id` (evitar repetição).

### Apresentação

- [X] Faça os ajustes de professores para estudantes na página de apresentação dos dados de um estudante. Além disso, faça duas alterações no arquivo `utils.js`:

- [X] Altere o retorno da função `date` para `day`, `month`, `year`, `iso` e `birthDay` (lembre de fazer o ajuste no método `edit` para buscar o `.iso`).
- [X] Crie uma função chamada `grade` que retorna os dados formatados a partir do valor selecionado no select (ex.: o valor 1EF representa **1º Ano do Ensino Fundamental**).

### Edição

- [X] Faça os ajustes de professores para estudantes na página de edição dos dados de um estudante. Implemente o campo `Aniverśario` onde é apresentado o dia e o mês do aniversário do estudante. Além disso, altere tanto no `edit.njk` dos professores quanto no dos alunos a `url` da seção de avatar. Utilize o campo `avatar_url` cadastrado em vez da api do unsplash.

### Remoção

- [X] Crie um arquivo `confirm.njk` e importe ele no seu arquivo `edit.njk`. Esse arquivo deve ser responsável por escutar o evento (`addEventListener`) de submit do form de remoção e solicitar pela confirmação do usuário (`confirm`). Caso o usuário cancele a remoção, deve-se cancelar o form (método `preventDefault`).

### Listagem

-[X] Faça os ajustes de professores para estudantes na página de listagem dos dados de um estudante. Remova a coluna de `Acompanhamento` e adicione as de `Email` e `Ano escolar`.




--- -->

## ⚠ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---
## 🎲 Rodando o projecto na sua maquina (iniciando o servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/isaiasnhantumbo/Launchstore>

# Acesse a pasta do projeto no terminal/cmd
$ cd Launchstore

# Abra a pasta no Visual Studio Code
$ code .

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

---


## 📘 Licença
Este projecto usa a  [MIT License](LICENSE).
****
<h1 align="center">
👨🏽‍🏫 
<br>
Desenvolvido por
<br>
 Isaias Nhantumbo Junior
</h1>
</p>
<h1 align="center"> 🤝 &nbsp;Vamos nos conectar ?👨 </h1>

<p align="center">
<a href="https://isaiasnhantumbo.github.io/"><img alt="Website" src="https://img.shields.io/badge/Website-isaias_nhantumbo-blue?style=flat-square&logo=google-chrome"></a>
<a href="https://www.youtube.com/channel/UCOyeYkH0MwJ6RrXTcEFFdAQ?view_as=subscriber"><img alt="Youtube" src="https://img.shields.io/badge/Channel-Isaias_Inside-blue?style=flat-square&logo=youtube"></a>
<a href="https://www.linkedin.com/in/isaias-nhantumbo-junior-733bb619b/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Isaias%20Nhantumbo%20Junior-green?style=flat-square&logo=linkedin"></a>
<a href="https://www.instagram.com/isaias_here/"><img alt="Instagram" src="https://img.shields.io/badge/Instagram-isaias__here_-blue??style=for-the-badge&logo=instagram"></a>
</p>
****