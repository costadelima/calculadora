# Calculadora de preços de PetShops

Nesse projeto é feito uma calculadora de preços para banhos em PetShops para uma determinada região de Belo Horizonte. Os PetShops escolhidos foram determinados a partir da distância do canil do senhor Eduardo que trabalha com raças de cachorros de portes pequenos e grandes. A calculadora mostra qual o melhor PetShop e qual o valor total da conta. Inicialmente é levado em considereção os preços dos banhos e se por acaso o preço for o mesmo é levado em consideração a menor distância do canil ao PetShop.  

## Desições de Projeto
Para esse projeto foi criado uma classe PetShops em que cada novo PetShop deve ser instânciado. Foi levado em consideração a complexidade O(1) e por isso cada PetShop é instanciado em uma variável e tem seus valores comparados com condicionais. Entretanto para aumentar a escalabilidade, por exemplo adicionando 1000 PetShops, pode-se mudar o projeto e instanciar os novos PetShops em um vetor, o que irá alterar a complexidade para O(N).

### Instalação

Para utilizar a calculadora basta acessar o link: https://costadelima.github.io/calculadora/index.html

Para executar localmente a calculadora em seu computador faça o download do projeto no link:  https://github.com/costadelima/calculadora
 Após o download descompacte o arquivo e abra o arquivo index.html em seu navegador.

## Construído com

* [Bootstrap 4](https://getbootstrap.com/) - Framework front-end de CSS utilizado.

## Autor

* **Luiz Flávio Costa de Lima** 
[GitHub](http://github.com/costadelima)
[Site pessoal](https://costadelima.github.io)

## Dicas

* Para criar um servidor local em sua máquina e desenvolver sem precisar ficar recarregando a página a cada instante para ver os resultados, pode-se utilizar o [Gulp](https://gulpjs.com/)

