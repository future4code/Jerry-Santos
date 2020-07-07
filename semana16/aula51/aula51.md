# Exercícios aula 51

## Exercício 1

a. O NOT NULL significa que não pode conter um valor nulo.

b. O primeiro comando mostra uma lista de dbs com os itens information_schema e julian_jerry_santos_db. O segundo mostra a tabela Actor que criei e em que db ela se encontra.

c. O resultado acusa um erro de sintaxe.


## Exercício 2

a. OK

b. Porque houve uma tentativa de duplicar a chave primária, porém isso não é possível.

c. O valores repassados não conferem com as colunas

d. Falta o campo nome.

e. O tipo da data está incorreto, faltam aspas.

f. OK


## Exercício 3

a. SELECT * FROM Actor
WHERE gender="female";

b. SELECT salary from Actor
WHERE name="Tony Ramos";

c. O resultado diz que não há nenhuma linha com esse requisito.

d. SELECT id, name, salary FROM Actor
WHERE salary <= 500000;

e. Ele informa que não há um campo "nome" na lista. A correção é "name".


## Exercício 4

a.  Selecione todas as linha na tabela Actor quando o nome começar com a letra A ou começar com a letra J e o salário for maior que 300k.

b. SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c. SELECT * FROM Actor
WHERE name LIKE "%g%";

d. SELECT * FROM Actor 
WHERE (name LIKE "%g%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;


## Exercício 5

a. A query tem um id como chave primária, um nome, uma sinopse que comporta até 65.535 caracteres, uma data de lançamento e uma nota que é do tipo inteiro. 

b. OK

c. OK

d. OK

e. OK


## Exercício 6

a. SELECT id, name, evaluation FROM Movies
WHERE id = "004";

b. SELECT * FROM Movies
WHERE name = "Ó paí, ó";

c. SELECT id, name, synopsis FROM Movies
WHERE evaluation >=7;


## Exercício 7

a. SELECT * FROM Movies
WHERE name LIKE "%vida%";

b. SELECT * FROM Movies
WHERE name OR synopsis LIKE "%carnaval%";

c. SELECT * FROM Movies
WHERE release_date <= "2020-07-06";

d. SELECT * FROM Movies
WHERE (name OR synopsis LIKE "%carnaval%") AND evaluation > 7;