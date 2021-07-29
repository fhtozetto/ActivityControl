# Activity Control - Backend
Está aplicação backend será responsável por controlar o cadastro das tarefas e os usuários com suas devidas permissões, com o intuito de trazer controle ao ser utilizada, assim toda tarefa devera conter quem a criou, quem a executou e fotos da atividade concluída.

Combinando as melhores práticas de SOLID, testes unitários e testes de integração, com o intuito de garantir maior confiabilidade no serviço.

Esse modelo abaixo mostra como deverá ficar o relacionamento entre as tabelas do banco de dados ao concluir o projeto.
![Cat](https://raw.githubusercontent.com/fhtozetto/ActivityControl-Backend/master/data_model.png)

## Cadastro de conta
**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar uma conta.
- [x] Deve ser possível alterar os dados de uma conta.
- [ ] Deve ser Possível apagar uma conta.

**Requisitos Não Funcionais (RNF)**
- [ ] Criar teste unitário do cadastro de conta.
- [ ] Criar teste de integração do cadastro de conta.
- [ ] Criar teste unitário para o alteração de conta.
- [ ] Criar teste de integração para alteração de conta.
- [ ] Criar teste unitário para apagar uma conta.
- [ ] Criar teste de integração para apagar uma conta.

**Regra de Negócios (RN)**
- [ ] só será possível excluir uma conta caso ele não tenha registros vinculados. 

## Cadastro de grupo
**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar um grupo.
- [x] Deve ser possível alterar os dados de um grupo.
- [ ] Deve ser possível excluir um grupo. 

**Requisitos Não Funcionais (RNF)**
- [ ] Criar teste unitário do cadastro de grupo.
- [ ] Criar teste de integração do cadastro de grupo.
- [ ] Criar teste unitário para o alteração de grupo.
- [ ] Criar teste de integração para alteração de grupo.
- [ ] Criar teste unitário para apagar um grupo.
- [ ] Criar teste de integração para apagar um grupo.

**Regra de Negócios (RN)**
- [ ] só será possível excluir um grupo caso ele não tenha registros vinculados.

## Cadastro de Empresas
**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar uma nova empresa.
- [x] Deve ser possível alterar o cadastro da empresa.
- [ ] Deve ser possível localizar uma empresa pelo nome.
- [x] Deve ser possível localizar uma empresa pelo cnpj.

**Requisitos Não Funcionais (RNF)**
- [ ] Criar teste unitário do cadastro de empresa.
- [ ] Criar teste de integração do cadastro de empresa.
- [ ] Criar teste unitário para o alteração de empresa.
- [ ] Criar teste de integração para alteração de empresa.
- [ ] Criar teste unitário para apagar uma empresa.
- [ ] Criar teste de integração para apagar uma empresa.
- [ ] Criar teste unitário para localizar empresa.
- [ ] Criar teste de integração para localizar empresa.

**Regra de Negócios (RN)**
- [x] Não deve ser possível cadastrar um CNPJ já existente.

## Cadastro de Departamentos
**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar um novo departamento.
- [x] Deve ser possível alterar o cadastro da departamento.
- [ ] Deve ser possível apagar um departamento.
- [ ] Deve ser possível localizar um departamento pelo nome.

**Requisitos Não Funcionais (RNF)**
- [ ] Criar teste unitário para o cadastro de departamento.
- [ ] Criar teste de integração para o cadastro de departamento.
- [ ] Criar teste unitário para o alteração de departamento.
- [ ] Criar teste de integração para alteração de departamento.
- [ ] Criar teste unitário para apagar uma departamento.
- [ ] Criar teste de integração para apagar uma departamento.
- [ ] Criar teste unitário para localizar departamento.
- [ ] Criar teste de integração para localizar departamento.

**Regra de Negócios (RN)**
- [x] Qualquer usuário poderá pesquisar os departamentos. 


---

# Documentação da API On-line
Com o servidor rodando acesse o endereço http://localhost:3333/api-docs/ no seu browser e verifique as rotas disponíveis no sistema.

# Requisitos para a instalação
## Node
É necessário ter instalado no computador o Node na versão 12 ou a cima. https://nodejs.org/

## Docker
É necessário ter instalado o docker na versão 20.10.2 ou superior e o docker-compose na versão 1.28.5 ou superior https://www.docker.com/

# Como instalar do servidor em ambiente de teste.
(Em Breve)