# Sistema Financeiro - Projeto da Disciplina de Gestão de Projetos

Este projeto de sistema financeiro foi desenvolvido como parte do trabalho da disciplina de Gestão de Projetos na Fatec de Presidente Prudente. O sistema é construído usando tecnologias modernas e é destinado a fins educacionais.

## Integrantes do Grupo

- Davi Antonaji
- Eduardo Oliveira Fernandes
- Felipe Cesar Silva Cuba
- Fernando Silvestre
- João Victor dos Santos Martins
- Luis Felipe Garção Silva
- Rafael Batista
- Vitor Salesi
- Vivian de Carvalho Teixeira

## Tecnologias Utilizadas

O sistema financeiro utiliza as seguintes tecnologias:

- Backend (API):

  - Python
  - Flask (Framework web em Python)
  - PyMySQL (Banco de Dados)

- Banco de Dados:

  - MySQL 8.0

- Frontend (Web):
  - Node.js
  - Angular

## Pré-requisitos

Para executar este projeto, você precisará ter o Docker e o Docker Compose instalados no seu sistema. Certifique-se de que a virtualização esteja habilitada nas configurações do BIOS.

## Como Iniciar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/ferhsilvestre/sistema-financeiro
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd sistema-financeiro
   ```

3. Abra um terminal, prompt de comando ou PowerShell no diretório do projeto.

   ```bash
   docker-compose up -d
   ```

   Isso construirá as imagens e iniciará todos os serviços (API, banco de dados e frontend) automaticamente.

4. Após a conclusão, você poderá acessar o front-end em seu navegador em http://localhost:4206 e a API em http://localhost:5001

---

Lembre-se de que o projeto está em fase educacional e pode exigir ajustes adicionais ou personalizações, dependendo dos seus requisitos específicos.

Para encerrar os contêineres e parar o ambiente, execute:

```bash
docker-compose down
```
