#App

GymPass style app

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário autenticado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário autenticado;
- [x] Deve ser possível o usuário autenticado obter seu histórico de check-ins;
- [x] Deve ser possível o usuário autenticado buscar academias próximas (até 10 Kms);
- [x] Deve ser possível o usuário autenticado buscar academias pelo nome;
- [x] Deve ser possível o usuário autenticado realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário autenticado;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócios)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);
