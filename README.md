
- [Pré-requisitos](#pré-requisito)
- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)

- [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
- [Acesso ao Projeto](#acesso-ao-projeto)
- [Pessoas Desenvolvedoras do Projeto](#autores)
- [Conclusão](#conclusão)

# Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

1. Acesse https://github.com/brnlf1990/financial-controler-back-end para configurar o back-end.

2. Baixe o repositório do front-end:
            
            git clone https://github.com/brnlf1990/financial-controler-front-end.git

3. Acesse o diretório financial-project:

        cd financial-project

4. E execute o comando npm install para instalar as dependências listadas no arquivo package.json:
   
        npm install

5. Execute a aplicação:

        npm run start


Se precisar de mais ajuda, é só chamar!

#
# ![Easy Bucket](./src/images/eblogo.png)


# Descrição do Projeto
Projeto criado para um controle das financeiro mais preciso. Nesse projeto tera a pagina principal onde o cliente irá encontrar um calendario que podera interagir com os dias. Cada dia possui uma janela onde os dados sobre controle de gastos ou de entrada será salvo. Após salvo, cada dia irá conter sua própria lista onde o usuario podera verificar seus gastos mais precisamente. O site também tem a lista com todos os itens gastos e  de entrada.
# Tecnologia utilizada:
Front-end:

<img align="center" alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img align="center" alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img align="center" alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">


#  Funcionalidades do projeto
Abaixo as funcionalidade do site:

- Registro
                
Aqui é onde o usuario cria sua conta, é necessario inserir todos os dados. Colocar um email e no avatar só é aceito um link com uma foto. Após finalizado usuario será redirecionado para a pagina de login e uma mensagem em verde será exibida

<p> <img  src="./gif//register.gif"/> </p>

- Login
Essa pagina onde o usuario irá entrar no aplicativo. Necessário inserir os dados corretamente.
<p> <img  src="./gif//login.gif"/> </p>

- Página principal

Aqui está uma versão ajustada do texto que você forneceu, com uma estrutura mais clara e linguagem refinada:

Após fazer login, o usuário terá acesso ao aplicativo. Ao selecionar um dia no calendário, uma janela será exibida, permitindo que o usuário adicione itens classificados como gastos ou entradas.

Gastos: incluem todas as atividades que resultem na saída de dinheiro.

Entradas: representam qualquer atividade que gere entrada de dinheiro.
Cada janela será uma lista própria, exibindo todas as atividades associadas ao dia selecionado. Ao lado dessa lista, serão apresentados:

O valor total dos gastos.
O saldo atual em caixa.

Além disso, na área abaixo do calendário, haverá listas consolidadas com todos os itens adicionados ao longo dos dias do calendário.
<p> <img width=600px  src="./gif/main.gif"/> </p>

- Menu

No menu, o usuário pode navegar para outras páginas. Atualmente, a página Atividades está em construção. Ao clicar nessa opção, uma tela será exibida com a possibilidade de retornar ao Dashboard.

Caso o usuário selecione a opção Sair, ele será deslogado do site, e o token de autenticação será excluído do navegador.
<p> <img  src="./gif//navigation.gif"/> </p>

- Noticias
Há também uma janela de notícias, onde são exibidas diversas informações relacionadas a negócios. Ao clicar em uma das notícias, será aberta outra página com o site correspondente. Para fornecer essa lista de notícias, foi utilizada uma API de terceiros.
<p> <img  src="./gif/news.gif"/> </p>

# Acesso ao projeto
🏗️ Este setor esta em construção.

# Autores
 [<img loading="lazy" src="https://avatars.githubusercontent.com/u/114805570?s=400&u=a591c1f671119e0c150e6a5178465b744cd8c912&v=4" width=115><br><sub>Bruno Lopes Furuya</sub>](https://github.com/brnlf1990) 
# Conclusão

Com essa aplicação Fullstack, meus conhecimentos em React, JavaScript, Node.js, Express.js e MongoDB foram significativamente aprimorados. Aprendi a utilizar o Moment.js, uma biblioteca voltada para a manipulação de calendários e datas. Também aprofundei minha compreensão sobre o método map para iterar em arrays. Meus conhecimentos em manipulação de arrays também evoluíram, e agora compreendo de forma mais eficiente como acessar e trabalhar com os dados contidos dentro de arrays.

Além disso, passei a utilizar o Trello como ferramenta para organizar as tarefas e definir prazos, o que me proporcionou uma visão mais clara sobre como estruturar e planejar o trabalho antes de começar. 