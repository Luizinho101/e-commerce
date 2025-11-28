# 🛍️ Shopixx - Catálogo de Produtos E-commerce

Este é um projeto de demonstração de e-commerce construído com Next.js (v16.0.5) e TypeScript, focado na exibição de um catálogo de produtos.

## 🚀 Tecnologias e Dependências

O projeto utiliza as seguintes tecnologias principais, conforme o `package.json`:

* **Framework:** Next.js **(v16.0.5)**
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS (juntamente com PostCSS)
* **API de Dados:** Fake Store API (para buscar os produtos)
* **Bibliotecas de UI:** React **(v19.2.0)** e React DOM **(v19.2.0)**

## ✨ Funcionalidades Principais

* **Listagem de Produtos:** Busca e exibe uma grade de produtos utilizando a **Fake Store API** (`https://fakestoreapi.com/products`).
* **Design Responsivo:** A grade de produtos se adapta automaticamente ao tamanho da tela (2, 3 ou 4 colunas) graças ao Tailwind CSS.
* **Componentes:** Implementação de um `Header` e um `Button` (Adicionar ao Carrinho) reutilizáveis.
* **Tipagem Forte:** Uso de interfaces TypeScript (`Product`) para garantir a estrutura dos dados.


---

## ⚙️ Instalação e Execução

### 1. Clonar o Repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd e-commerce
2. Instalar as Dependências
Bash

npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
3. Executar o Servidor de Desenvolvimento
Inicie o servidor de desenvolvimento:

Bash

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Abra http://localhost:3000 com seu navegador para ver o resultado.

Você pode começar a editar a página modificando app/page.tsx. A página será atualizada automaticamente conforme você edita o arquivo.

