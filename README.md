# Activity Control - Backend
Está aplicação backend será responsável por controlar o cadastro das tarefas e os usuários com suas devidas permissões, com o intuito de trazer controle ao ser utilizada, assim toda tarefa devera conter quem a criou, quem a executou e fotos da atividade concluída.

Combinando as melhores práticas de SOLID, testes unitários e testes de integração, com o intuito de garantir maior confiabilidade no serviço.

## Cadastro de Usuários

**Requisitos Funcionais (RF)**
- [ ] Deve ser possível cadastrar outros usuários. 
- [ ] Deve ser possível cadastrar um avatar para o usuário.

**Regra de Negócios (RN)**
- [ ] Não deve ser possível cadastrar usuários se o usuário logado não for administrador
- [ ] Somente um usuário com poderes de administrador poderá criar outro usuário.
- [ ] Somente um usuário com poderes de administrador poderá atualizar um usuário comum para administrador.

## Recuperação de Senha
**Requisitos Funcionais (RF)**
- [ ] Deve ser possível o usuário recuperar a senha informando o e-mail.
- [ ] O usuário deve receber uma e-mail com o passo a passo para a recuperação de senha.
- [ ] O usuário deve conseguir inserir uma nova senha.

**Regra de Negócios (RN)**
- [ ] O usuário precisa inserir uma nova senha.
- [ ] O link enviado para a recuperação deve expirar em 3 horas.

## Cadastro de Empresas
**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar uma nova empresa.

**Regra de Negócios (RN)**
- [ ] Apenas os usuários administradores poderão cadastrar novas empresas.
- [x] Não deve ser possível cadastrar um CNPJ já existente.

## Cadastro de Departamentos
**Requisitos Funcionais (RF)**
- [ ] Deve ser possível cadastrar um novo departamento.

**Regra de Negócios (RN)**
- [ ] Apenas os usuários administradores poderão cadastrar novos departamentos.

## Cadastro de Cargos
**Requisitos Funcionais (RF)**
- [ ] Deve ser possível cadastrar um novo cargo.

**Regra de Negócios (RN)**
- [ ] Apenas os usuários administradores poderão cadastrar novos cargos.
## Cadastro de Tarefas
**Requisitos Funcionais (RF)**
- [ ] Deve ser possível cadastrar uma nova tarefa.

**Regra de Negócios (RN)**
- [ ] Apenas os usuários administradores poderão cadastrar novas tarefas.

## Cadastro de Setores
**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar um novo setor.

**Regra de Negócios (RN)**
- [ ] Apenas os usuários administradores poderão cadastrar novos setores.

## Cadastro de Imagens da Tarefa
**Requisitos Funcionais (RF)**
- [ ] Deve ser possível cadastrar as imagens da tarefa

**Requisitos Não Funcionais (RNF)**
- [ ] Utilizar o multer para upload de arquivos.

**Regra de Negócios (RN)**
- [ ] O usuário deve poder cadastrar mais de uma imagem para o mesma tarefa.
- [ ] O usuário responsável pelo cadastro deve ser uma administrador.

# Documentação da API On-line
Com o servidor rodando acesse o endereço http://localhost:3333/api-docs/ no seu browser e verifique as rotas disponíveis no sistema.

# Requisitos para a instalação
## Node
É necessário ter instalado na maquina o Node de da versão 12 ou a cima. https://nodejs.org/en/

## Docker
É necessário ter instalado o docker na versão 20.10.2 ou superior e o docker-compose na versão 1.28.5 ou superior https://www.docker.com/

# Como instalar do servidor em ambiente de teste.
(Em Breve)