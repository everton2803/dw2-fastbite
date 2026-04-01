# FastBite - Delivery Saudável

Uma aplicação web simples para demonstrar containerização com Docker, usando Node.js e Nginx como reverse proxy.

## 🏗️ Arquitetura

- **Backend**: Node.js com Express rodando na porta 3000 (interna ao container).
- **Proxy Reverso**: Nginx escutando na porta 80 do host, redirecionando requisições para o Node.js.
- **Containerização**: Docker Compose orquestrando dois serviços em uma rede isolada.
- **Segurança**: Node.js não expõe portas diretamente ao host, apenas Nginx é acessível externamente.

## 📋 Pré-requisitos

- Docker instalado e rodando.
- Docker Compose instalado.

## 🚀 Como Executar

1. **Clone ou navegue até o diretório do projeto**:
   ```bash
   cd dw2-fastbite
   ```

2. **Construa e inicie os containers**:
   ```bash
   docker compose build
   docker compose up -d
   ```

3. **Verifique se tudo está rodando**:
   ```bash
   docker compose ps
   ```

4. **Acesse a aplicação**:
   - Abra o navegador em `http://localhost` (porta 80).
   - Você verá a página inicial do FastBite com design responsivo.

## 📁 Estrutura dos Arquivos

- `index.js`: Aplicação Node.js com Express, servindo uma página HTML simples.
- `package.json`: Dependências do Node.js (Express).
- `Dockerfile`: Configuração para construir a imagem do Node.js.
- `nginx.conf`: Configuração do Nginx como reverse proxy.
- `docker-compose.yml`: Orquestração dos serviços (nodejs e nginx).

## 🔧 Comandos Úteis

- **Parar os serviços**:
  ```bash
  docker compose down
  ```

- **Ver logs**:
  ```bash
  docker compose logs -f
  ```

- **Reconstruir após mudanças no código**:
  ```bash
  docker compose build nodejs
  docker compose up -d
  ```

## 📝 Notas

- O Node.js roda em uma rede Docker isolada e não é acessível diretamente.
- O Nginx garante que o site responda na porta 80 sem expor o backend.
