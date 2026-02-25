## Problema

Tenho dificuldade em saber quanto vai entrar e quanto vai sair de dinheiro no mês.

## Solução

Criar um sistema que ajuda a organizar isso (mesmo que manualmente, por enquanto).

# 1️⃣ Objetivo do Sistema

Permitir que o usuário:

- Cadastre seus gastos
- Visualize seus custos fixos e variáveis
- Entenda quanto já gastou no mês
- Saiba quanto ainda pode gastar
- Tenha clareza financeira mensal

---

# 2️⃣ Escopo do MVP

Versão inicial simples, com:

- Cadastro de usuário
- Autenticação básica
- Cadastro de gastos
- Dashboard mensal
- Categorias de gastos

Sem:

- Cartão de crédito
- Parcelamento
- Integração bancária
- Multiplos usuários por conta
- Planejamento anual

---

# 3️⃣ Perfis de Usuário

### Usuário padrão

- Pode acessar apenas seus próprios dados
- Pode cadastrar, editar e excluir gastos
- Pode visualizar seu dashboard mensal

---

# 4️⃣ Funcionalidades

## 🔐 4.1 Autenticação

### Cadastro

Usuário deve informar:

- Nome
- Email (único)
- Senha

Regras:

- Email deve ser válido
- Senha mínima de 6 caracteres
- Email não pode estar duplicado

---

### Login

- Email + senha
- Retorna token (JWT ou sessão simples)

---

## 💸 4.2 Gestão de Gastos

Usuário pode:

### Criar gasto

Campos obrigatórios:

- Nome (ex: “Aluguel”)
- Valor (decimal > 0)
- Categoria
- Data
- Tipo:
  - Fixo
  - Variável

---

### Editar gasto

Pode alterar todos os campos exceto:

- Usuário dono

---

### Excluir gasto

Remove definitivamente.

---

## 🏷 4.3 Categorias

Inicialmente:

- Pode ser texto livre

(Depois pode evoluir para tabela de categorias)

---

# 5️⃣ Dashboard Principal

A tela principal deve mostrar:

### 📊 Resumo do mês atual

- Total gasto no mês
- Total de gastos fixos
- Total de gastos variáveis
- Quantidade de lançamentos

---

### 💰 Indicador principal

Se o usuário cadastrar uma renda mensal fixa (opcional no MVP), mostrar:

- Renda
- Total gasto
- Quanto sobra

Se não houver renda cadastrada:

- Mostrar apenas total gasto

---

### 📅 Filtro por mês

Usuário pode visualizar:

- Mês atual (default)
- Meses anteriores

---

# 6️⃣ Regras de Negócio

1. Usuário só pode ver seus próprios gastos
2. Valor deve ser maior que zero
3. Gastos pertencem a um único usuário
4. Dashboard considera apenas gastos do mês selecionado
5. Gastos fixos e variáveis devem ser separados no cálculo

---

# 7️⃣ Modelo Conceitual Inicial

## Entidades

### User

- Id
- Name
- Email
- PasswordHash
- CreatedAt

---

### Expense

- Id
- UserId
- Name
- Amount
- Category
- Date
- Type (Fixed | Variable)
- CreatedAt

---

# 8️⃣ Casos de Uso (UseCases)

### RegisterUser

### LoginUser

### CreateExpense

### UpdateExpense

### DeleteExpense

### GetMonthlyDashboard

### ListExpensesByMonth

---

# 9️⃣ Requisitos Não Funcionais

- Senha deve ser armazenada com hash
- API deve validar entrada
- Separação por usuário
- Estrutura baseada em Clean Architecture
- Testes unitários para regras de negócio

---

# 🔟 Evoluções Futuras (fora do MVP)

- Orçamento por categoria
- Meta mensal de gastos
- Gráfico de evolução
- Planejamento anual
- Exportar para CSV
- Parcelamentos
- Alertas quando ultrapassar limite
