# Tech Lead - case

## Menu
- [Processo](#processo)
- [Arquitetura](#arquitetura)
  - [NodeJS](#nodejs)
  - [Express](#express)
  - [Prisma](#prisma)
  - [Redis](#redis)
  - [MySQL](#mysql)
- [Performance](#performance)
- [Trade-offs](#tradeoff)

## Processo <a id="processo"></a>
A criação da estrutura básica foi baseada no prazo para desenvolvimento e facilidades de implementação. Iniciei realizando a definição da tecnologia do front, back e banco de dados.
Em seguinte, realizei a criação das pastas e configuração dos arquivos Docker, fazendo tentativas de melhor estrutura para atender back e front dentro de uma mesma estrutura.

## Arquitetura <a id="arquitetura"></a>
Abaixo irei explicar os motivos de escolha das tecnologias utilizadas.

### NodeJS <a id="nodejs"></a>
  - Simples, prático e performático. Node utilizando Typescript, temos linguagem tipada e conseguimos manter uma estrutura escalável.

### Express <a id="express"></a>
  - Fácil implementação e com lógica de simples compreensão. Como é um projeto de prazo curto e performance desejada, facilita a manutenção.

### Prisma <a id="prisma"></a>
  - Método simples de consumo do banco de dados, tempo de resposta bom e diversas possibilidades de estruturação de consulta, podendo ser utilizado em diversos tipos de banco.

### Redis <a id="redis"></a>
  - Como é necessário uma performance no retorno das consultas e levando em consideração que o usuário possívelmente irá atualizar a página diversas vezes durante o dia. Caso não tenha atualização da base, é retornado o valor do cache, reduzindo o tempo de resposta de 1 segundo para aproximadamente 5ms.

### MySQL <a id="mysql"></a>
  - Estrutura simples para injeção dos dados enviados para consumo.

## Performance <a id="performance"></a>
  - Foi criado indice nos campos que possívelmente terão filtragem: origin, response_status_id, created_at. Quando é realizado a consulta com os filtros apresentados, o retorno é salvo em cache e na consulta seguinte é retornado esse valor cacheado. Assim, evitamos um gargalo no banco de dados com consultas seguidas.

### Números
  - Primeira consulta ao endpoint por volume de dados:
    - 15 mil registros: **Origin:** EMAIL - **Status:** INVALIDO
      - 1ª consulta: 30ms
      - 2ª consulta: 5ms
    - +6 milhões de registros: **Origin:** EMAIL - **Status:** PENDENTE
      - 1ª consulta: 3s
      - 2ª consulta: 5ms
    

## Trade-offs <a id="tradeoff"></a>
  - *Retorno dos dados tratados* X *Retorno dos dados limpos*: Quando realizamos toda a lógica através de um endpoint, acabamos capando as possibilidades de exibição desses dados no front para o cliente. Por Exemplo, quando calculamos as taxas de conversão diretamente no backend, o tempo de resposta da API fica mais lenta, poís a lógica precisa realizar um número maior de calculos e carregar uma quantidade maior de dados para isso. Quando retornamos por origin, status e periodo, conseguimos ter um tempo de resposta excelente filiado a uma maior possibilidade de exibições no front, onde podemos ter uma maior autonomia nas comparações necessárias e personalização de cliente para cliente mesmo consumindo uma mesma API.