# GS1_WebDev_06-2025

# 🌧️ Pluvius Web – Interatividade e Funcionalidade com JavaScript

Este repositório contém a entrega da disciplina **WebDev** do projeto interdisciplinar **Global Solution 2025.1** da FIAP. A solução proposta visa auxiliar a população de Porto Alegre e outras regiões afetadas por enchentes, fornecendo informações educativas, um sistema de relatos comunitários e funcionalidades interativas por meio de uma aplicação web simples, acessível e responsiva.

---

## 👥 Integrantes

- **Caio Nascimento Caminha** – RM: 564789
- **Lucas Henrique Viana Estevam Sena** – RM: 566246

---

## 🎯 Objetivo

Desenvolver uma aplicação web **sem frameworks**, utilizando **JavaScript puro (vanilla)**, com foco em:

- **Educar** a população sobre como agir em enchentes
- **Coletar relatos comunitários**
- **Promover interatividade e personalização da interface**

---

## 📁 Estrutura do Projeto

├── index.html # Página inicial com carrossel, menu e seção problema
├── src/
│ ├── css/
│ │ ├── home.css # Estilo específico da home
│ │ └── style.css # Estilo geral e temas
│ ├── js/
│ │ ├── script.js # Funções gerais (tema, quiz, validação, menu)
│ │ └── carrosel.js # Comportamento do carrossel de imagens
│ ├── assets/
│ │ └── images/ # Imagens do carrossel e ícones do menu
│ └── pages/
│ ├── quiz.html # Quiz interativo com 10 perguntas
│ └── relato.html # Formulário para relatar alagamento

---

## 💻 Funcionalidades Implementadas

| Funcionalidade              | Descrição                                                                   |
| --------------------------- | --------------------------------------------------------------------------- |
| ✅ **Quiz interativo**      | Página com 10 perguntas sobre enchentes, com pontuação final                |
| ✅ **Formulário validado**  | Formulário para envio de relatos com validação JS (nome, cidade, descrição) |
| ✅ **Slideshow/carrossel**  | Carrossel de imagens sobre enchentes em Porto Alegre                        |
| ✅ **Temas personalizados** | Botões no menu para mudar o fundo (☀️ Claro, 🌙 Escuro, 💧 Azul)            |
| ✅ **Menu hambúrguer**      | Responsivo para mobile com abertura e fechamento em JS                      |
| ✅ **Responsividade**       | Layout adaptado para celular, tablet e desktop                              |
| ✅ **Sem frameworks**       | 100% HTML, CSS e JS puros                                                   |

---

## 🌈 Temas de Cor

No canto superior direito do menu, há três ícones:

- ☀️ **Light Mode** – fundo branco, texto escuro
- 🌙 **Dark Mode** – fundo escuro, texto claro
- 💧 **Blue Mode** – tons azulados para simular ambiente de emergência hídrica

---

## 📷 Carrossel de Imagens

Na seção “Home”, o carrossel mostra 5 imagens reais da enchente de 2024 em Porto Alegre, com botões de navegação esquerda/direita.

---

## 🧪 Quiz Interativo

- 10 perguntas objetivas sobre como agir em enchentes
- Resultado final com pontuação
- Lógica feita em JS com validação de seleção

---

## 📝 Validação de Formulário

Na página de relatos:

- Campos obrigatórios: nome, cidade e descrição
- Validação em JavaScript impede envio incompleto
- Mensagem de erro exibida em tempo real

---

## 🧠 Tecnologias Utilizadas

- `HTML5`
- `CSS3` (Flexbox, variáveis CSS, media queries)
- `JavaScript Puro`
- Sem bibliotecas/frameworks

---

## 🚀 Como Rodar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/Caioncaminha/GS1_WebDev_06-2025.git
```

2. Execute "index.html" com a extensão Live Server.
