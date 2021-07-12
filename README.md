# Activity Control - Backend
Está aplicação backend será responsável por controlar o cadastro das tarefas e os usuários com suas devidas permissões, com o intuito de trazer controle ao ser utilizada, assim toda tarefa devera conter quem a criou, quem a executou e fotos da atividade concluída.

Combinando as melhores práticas de SOLID, testes unitários e testes de integração, com o intuito de garantir maior confiabilidade no serviço.

Esse modelo abaixo mostra como deverá ficar o relacionamento entre as tabelas do banco de dados ao concluir o projeto.
![Cat](https://raw.githubusercontent.com/fhtozetto/ActivityControl-Backend/master/data_model.png)

## Cadastro de Usuários

**Requisitos Funcionais (RF)**
- [ ] Deve ser possível cadastrar usuário. 
- [ ] Deve ser possível cadastrar um avatar para o usuário.
- [ ] Deve ser possível alterar os dados de um usuário.
- [ ] Deve ser possível localizar um usuário pelo nome.
- [ ] Deve ser possível localizar um usuário pelo e-mail.

**Requisitos Não Funcionais (RNF)**
- [ ] Criar teste unitário para o cadastro de usuário.
- [ ] Criar teste de integração para cadastro de usuário.
- [ ] Criar teste unitário para o alteração de usuário.
- [ ] Criar teste de integração para alteração de usuário.
- [ ] Criar teste unitário para localizar usuário.
- [ ] Criar teste de integração para localizar usuário.

**Regra de Negócios (RN)**
- [ ] Não deve ser possível cadastrar usuários se o usuário logado não for administrador
- [ ] Somente um usuário com poderes de administrador poderá criar outro usuário.
- [ ] Somente um usuário com poderes de administrador poderá atualizar um usuário comum para administrador.
- [ ] O usuário poderá alterar apenas os dados de sua própria conta.
- [ ] Somente usuário administrador poderá lista todos os usuário do sistema.

## Recuperação de Senha
**Requisitos Funcionais (RF)**
- [ ] Deve ser possível o usuário recuperar a senha informando o e-mail.
- [ ] O usuário deve receber uma e-mail com o passo a passo para a recuperação de senha.
- [ ] O usuário deve conseguir inserir uma nova senha.

**Requisitos Não Funcionais (RNF)**
- [ ] Criar teste unitário para o envio de e-mail.

**Regra de Negócios (RN)**
- [ ] O usuário precisa inserir uma nova senha.
- [ ] O link enviado para a recuperação deve expirar em 3 horas.

## Cadastro de Empresas
**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar uma nova empresa.
- [ ] Deve ser possível alterar o cadastro da empresa.
- [ ] Deve ser possível localizar uma empresa pelo nome.
- [x] Deve ser possível localizar uma empresa pelo cnpj.

**Requisitos Não Funcionais (RNF)**
- [ ] Criar teste unitário do cadastro de empresa.
- [ ] Criar teste de integração do cadastro de empresa.
- [ ] Criar teste unitário para o alteração de empresa.
- [ ] Criar teste de integração para alteração de empresa.
- [ ] Criar teste unitário para localizar empresa.
- [ ] Criar teste de integração para localizar empresa.

**Regra de Negócios (RN)**
- [ ] Apenas os usuários administradores poderão cadastrar novas empresas.
- [ ] Apenas os usuários administradores poderão alterar o cadastro das empresas.
- [x] Não deve ser possível cadastrar um CNPJ já existente.

## Cadastro de Departamentos
**Requisitos Funcionais (RF)**
- [ ] Deve ser possível cadastrar um novo departamento.
- [ ] Deve ser possível alterar o cadastro da departamento.
- [ ] Deve ser possível localizar um departamento pelo nome.

**Requisitos Não Funcionais (RNF)**
- [ ] Criar teste unitário para o cadastro de departamento.
- [ ] Criar teste de integração para o cadastro de departamento.
- [ ] Criar teste unitário para o alteração de departamento.
- [ ] Criar teste de integração para alteração de departamento.
- [ ] Criar teste unitário para localizar departamento.
- [ ] Criar teste de integração para localizar departamento.

**Regra de Negócios (RN)**
- [ ] Apenas os usuários administradores poderão cadastrar novos departamentos.
- [ ] Qualquer usuário poderá pesquisar os departamentos. 

## Cadastro de Cargos
**Requisitos Funcionais (RF)**
- [ ] Deve ser possível cadastrar um novo cargo.
- [ ] Deve ser possível alterar o cadastro da cargo.
- [ ] Deve ser possível localizar cargo.

**Requisitos Não Funcionais (RNF)**
- [ ] Criar teste unitário para o cadastro de cargo.
- [ ] Criar teste de integração para o cadastro de cargo.
- [ ] Criar teste unitário para o alteração de cargo.
- [ ] Criar teste de integração para alteração de cargo.
- [ ] Criar teste unitário para localizar cargo.
- [ ] Criar teste de integração para localizar cargo.

**Regra de Negócios (RN)**
- [ ] Apenas os usuários administradores poderão cadastrar novos cargos.
- [ ] Qualquer usuário poderá pesquisar os cargos. 

## Cadastro de Tarefas
**Requisitos Funcionais (RF)**
- [ ] Deve ser possível cadastrar uma nova tarefa.
- [ ] Deve ser possível localizar as tarefas pela descrição.
- [ ] Deve ser possível localizar as tarefas pela data.
- [ ] Deve ser possível localizar as tarefas pela prioridade.
- [ ] Deve ser possível localizar as tarefas pela data de conclusão.

**Requisitos Não Funcionais (RNF)**
- [ ] Criar teste unitário para o cadastro de tarefa.
- [ ] Criar teste de integração para o cadastro de tarefa.
- [ ] Criar teste unitário para o alteração de tarefa.
- [ ] Criar teste de integração para alteração de tarefa.
- [ ] Criar teste unitário para localizar tarefa.
- [ ] Criar teste de integração para localizar tarefa.

**Regra de Negócios (RN)**
- [ ] Apenas os usuários administradores poderão cadastrar novas tarefas.
- [ ] Sómente o usuário que cadastrou a tarefa poderá editar o registro (descrição e observação).
- [ ] Qualquer usuário poderá pesquisar as tarefas. 

## Cadastro de Setores
**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar um novo setor.
- [ ] Deve ser possível alterar o cadastro de setor.
- [ ] Deve ser possível localizar setor.

**Requisitos Não Funcionais (RNF)**
- [ ] Criar teste unitário para o cadastro de setor.
- [ ] Criar teste de integração para o cadastro de setor.
- [ ] Criar teste unitário para o alteração de setor.
- [ ] Criar teste de integração para alteração de setor.
- [ ] Criar teste unitário para localizar setor.
- [ ] Criar teste de integração para localizar setor.

**Regra de Negócios (RN)**
- [ ] Apenas os usuários administradores poderão cadastrar novos setores.
- [ ] Qualquer usuário poderá pesquisar os setores. 

## Cadastro de Imagens da Tarefa
**Requisitos Funcionais (RF)**
- [ ] Deve ser possível cadastrar as imagens da tarefa.

**Requisitos Não Funcionais (RNF)**
- [ ] Utilizar o multer para upload de arquivos.

**Regra de Negócios (RN)**
- [ ] O usuário deve poder cadastrar mais de uma imagem para o mesma tarefa.
- [ ] Qualquer usuário poderá cadastrar uma imagem.

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