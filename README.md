# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0-next.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).






# Lanchonete
O projeto lanchonete e um projeto que desenvolvi do zero todas as funcionalidades fiz ele para a matéria de programação web do instituto federal do goiás como e um para acessar ele como um administrador entre com o seguinte login.
Login: admin
senha:123
Fiz esse projeto com angular, scss para as cores e algumas funcionalidades e bootstrap, essas tecnologias foram usadas para o aprendizado das mesmas.

The cafeteria project is a project that I developed from scratch all the functionalities I made it for the web programming subject of the federal institute of goiás how and one to access it as an administrator enter with the following login.
Login: admin
password:123
I made this project with angular, scss for the colors and some features and bootstrap, these technologies were used to learn them.


## Login

O projeto tem login com dois tipos de usuários diferentes, dois papéis diferentes, o papel de administrador e o papel de usuário comum, o administrador seria o perfil de dono do estabelecimento e do usuário, perfil do comprador.

The project has login with two different types of users, two different roles, the role of administrator and the role of common user, the administrator would be the owner of the establishment and the user, the profile of the buyer.

## Segurança/security

Assim que você logar como usuário eu uso algumas propriedades do angular como o guard para proteger as rotas de administrador e o ng if para esconder os botões de administrador e uma segurança mais visual no front end, no back end e feito uma autenticação jwt onde para se fazer requisição para administrador tem de se estar logado como administrador  e guardado dentro do token que expira em 30 minutos (eu fiz uma gambiarra para isso funcionar pois não havia conhecimento sobre cookie no spring para assim mandar o token por cookie pro front end ao invés no body da requisição).

As soon as you log in as a user I use some angular properties such as guard to protect the admin routes and ng if to hide the admin buttons and more visual security on the front end, on the back end and done a jwt authentication where to if you make a request to administrator you have to be logged in as administrator and kept inside the token that expires in 30 minutes (I made a workaround for this to work because there was no knowledge about cookies in spring to send the token by cookie to the front end instead in the body of the request).

## Registro de usuário / user Register

Na mesma tela de login existe um botão chamado registro, ele leva para uma tela de registro onde é feito o registro de usuário.

On the same login screen there is a button called registration, it takes you to a registration screen where the user registration is done.
## Registro de adm / adm register

Para registrar um administrador precisa estar logado como administrador pois existe um botão que só aparece para o administrador que faz a requisição para registro de adm, no back end só adm pode fazer a requisição também.

To register an administrator you need to be logged in as an administrator because there is a button that only appears for the administrator who makes the request for adm registration, in the back end then adm can also make the request.

## Produtos / Products

A tela de produtos seria uma tela que teria uma categoria de todos os produtos, por exemplo hambúrguer, pizza etc… essa tela redireciona para o produto específico, o hambúrguer leva para uma tela com todos os hambúrguer, pizza para todas as pizzas, nessa tela só pode ter um de cada produto já pra tela que é redirecionada teria mais de um. para o administrador aparece 3 botões com ícones, o ícone de adicionar remover e alterar, em adicionar ele adiciona o produto relacionado com a sua categoria remover ele remove a categoria se não tiver nenhum produto e alterar ele altera o nome ou foto  da categoria.

The products screen would be a screen that would have a category of all products, for example hamburger, pizza etc… this screen redirects to the specific product, the hamburger leads to a screen with all the hamburgers, pizza for all the pizzas, on that screen there can only be one of each product, since the screen that is redirected would have more than one. for the administrator, 3 buttons with icons appear, the add icon remove and change, in add it adds the product related to its category remove it removes the category if it has no product and change it changes the name or photo of the category.

## promoção / sale

A tela de promoção e uma tela onde teria todas as promoções do estabelecimento para o administrador aparecem dois botões um botão de remover e um botão para alterar a promoção.

The sale screen and a screen where you would have all the sale of the establishment for the administrator, two buttons appear, a button to remove and a button to change the sale.
## Adicionar produtos / add products

Uma tela que aparece somente para o administrador onde adiciona uma categoria para um produto específico na tela de produtos só pode ser adicionado um nome e uma imagem para cada produto.

A screen that appears only for the administrator where you add a category for a specific product on the products screen you can only add a name and an image for each product.

## Adicionar promoção / add sale

Uma tela que é acessada somente pelo administrador onde adiciona as informações de promoção do estabelecimento.

A screen that is accessed only by the administrator where he adds the establishment's sale information.
## carrinho / cart

a tela de carrinho pode ser acessada por todos os usuários, quando quando o usuário clicar em comprar em algum produto/promoção e levado para uma tela com as informações do produto e ele clica em adicionar o carrinho  e adicionado um produto/promoção, no carrinho tem a foto, nome e preço ao apertar em comprar por enquanto só aparece um alert que exibe uma mensagem que foi comprado, no futuro vou adicionar uma tela de compra e no back para remover todas as informações do carrinho.

the cart screen can be accessed by all users, when when the user clicks on buy some product/sale and is taken to a screen with the product information and he clicks on add to cart and a product/sale is added to the cart it has the photo, name and price when pressing buy for now only an alert appears that displays a message that it was purchased, in the future I will add a purchase screen and in the back to remove all the information from the cart.

## imagem / image

as imagens são adicionadas no back end de forma incorreta, eu adiciono a base 64 da imagem no back end, dessa forma até que funciona, o problema é que a base 64 e um link enorme onde precisaria de um servidor potente para guardar cada imagem, tem formas corretas de guardar uma imagem no banco de dados que consome menos memória, como tive um tempo curto para fazer isso fiz dessa forma mesmo só para mostrar o projeto, no futuro vou encontrar uma forma mais eficiente de fazer isso.

the images are added incorrectly to the back end, I add the base 64 of the image to the back end, that way it even works, the problem is that the base 64 is a huge link where I would need a powerful server to store each image, there are correct ways to store an image in the database that consumes less memory, as I had a short time to do it, I did it that way just to show the project, in the future I will find a more efficient way to do it.

