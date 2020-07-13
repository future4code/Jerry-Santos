# Exercício aula 52


## Exercício 1

a. Remove a coluna salário da tabela.

b. Iria renomear a coluna e mantendo as definições.

c. Mantém o nome da coluna, mas altera suas definições.

d. OK


## Exercício 2

a. UPDATE Actor
SET 
	name = "Fernanda M",
	birth_date = "1929-10-20"
WHERE id = "003";

b. UPDATE Actor
SET name="Juliana Pães"
WHERE name="Juliana Paes"; 

UPDATE Actor
SET name="Juliana Paes"
WHERE name="Juliana Pães";

c. UPDATE Actor
SET 
	name = "Pedro Paulo",
    salary= 80000,
	birth_date = "1980-03-26",
    gender= "male"
WHERE id = "005";

d. Não acusa um erro, mas nenhuma linha da tabela é alterada porque ela não existe.


## Exercício 3

a. DELETE FROM Actor WHERE name = "Fernanda M";

b. DELETE FROM Actor WHERE gender="male" AND salary > 1000000;


## Exercício 4

a. SELECT MAX(salary)
FROM Actor;

b. SELECT MIN(salary)
FROM Actor
WHERE gender="female";

c. SELECT COUNT(* ) FROM Actor
WHERE gender="female";

d. SELECT SUM(salary) FROM Actor; 


## Exercício 5

a. Ela calcula quantos atores de cada sexo existem e mostra o resultado com um contador pra cada.

b. SELECT id, name from Actor
ORDER BY name DESC;

c. SELECT * FROM Actor
ORDER BY salary ASC;

d. SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e. SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;


## Exercício 6

a. OK

b. OK

c. OK

d. O comando é executado, mas não altera nenhuma linha porque ela não existe.


## Exercício 7 

a. SELECT * FROM Movies
WHERE evaluation > 7.5;

b. SELECT AVG(evaluation) FROM Movies;

c. SELECT COUNT(* ) FROM Movies
WHERE playing_limit_date > CURDATE();

d. SELECT COUNT(* ) FROM Movies
WHERE release_date > CURDATE();

e. SELECT MAX(evaluation) FROM Movies;

f. SELECT MIN(evaluation) FROM Movies;


## Exercício 8

a. SELECT * FROM Movies
ORDER BY name ASC;

b. SELECT * FROM Movies
ORDER BY name DESC
LIMIT 5;

c. SELECT * FROM Movies
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;

d. SELECT * FROM Movies
ORDER BY evaluation DESC
LIMIT 3;