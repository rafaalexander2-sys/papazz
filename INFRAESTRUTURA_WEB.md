# 🌐 GUIA COMPLETO: INFRAESTRUTURA WEB GRATUITA

## 📋 RESUMO EXECUTIVO

**Objetivo:** Construir Web App totalmente **GRATUITO** que pode virar app mobile depois  
**Custo total:** R$ 0/mês (até validar com milhares de usuários)  
**Tempo de setup:** 15-30 minutos  
**Conhecimento necessário:** ZERO (IA faz tudo)

---

## 💻 STACK TECNOLÓGICO COMPLETO

### Frontend (Grátis):
```
✅ React 18 com Vite
   - Framework JavaScript moderno
   - Build ultrarrápido (5-10x mais rápido que Create React App)
   - Hot Module Replacement (vê mudanças instantaneamente)

✅ Tailwind CSS
   - Estilização utility-first
   - Não precisa escrever CSS customizado
   - Responsivo out of the box

✅ React Router v6
   - Navegação entre páginas (SPA)
   - URLs amigáveis (/receitas, /cronograma)

✅ Lucide React
   - Ícones SVG leves e bonitos
   - Alternativa aos emojis
   - +1000 ícones disponíveis
```

### Backend Serverless (Grátis):

**Opção 1 - Firebase (Google) - RECOMENDADO:**
```
✅ Authentication
   - Login com email/senha
   - Login social (Google, Facebook)
   - Gerenciamento de sessões
   - Grátis até: 50.000 usuários ativos/mês

✅ Firestore (Database NoSQL)
   - Banco de dados em tempo real
   - Sincronização automática
   - Queries poderosas
   - Grátis até: 50k leituras/dia, 20k escritas/dia

✅ Storage
   - Armazenar imagens de receitas
   - Upload de fotos de perfil
   - Grátis até: 1GB de storage, 10GB de transfer

✅ Analytics
   - Rastrear eventos
   - Funis de conversão
   - Totalmente grátis

✅ Cloud Functions (se precisar)
   - Rodar código no backend
   - Webhooks, processamento
   - Grátis até: 2M invocações/mês
```

**Opção 2 - Supabase (Open Source) - ALTERNATIVA:**
```
✅ PostgreSQL Database (SQL)
   - Banco relacional completo
   - Grátis até: 500MB database

✅ Authentication
   - Similar ao Firebase
   - Login social incluído

✅ Storage
   - 1GB grátis

✅ Edge Functions
   - Rodar código serverless
   - 500k invocações/mês grátis

✅ Vantagem: Open source, pode self-host no futuro
```

### Hospedagem (Grátis para sempre):

**Opção 1 - Vercel (RECOMENDADA):**
```
✅ Deploy automático via Git
   - Git push → site no ar em 30s
   - Zero configuração

✅ SSL/HTTPS grátis
   - Certificado automático
   - Renovação automática

✅ CDN Global
   - Site rápido no mundo todo
   - Edge network

✅ Domínio grátis
   - seu-app.vercel.app
   - Domínio custom também grátis

✅ Analytics integrado
   - Web Vitals
   - Performance

✅ Limites generosos:
   - 100GB bandwidth/mês
   - Builds ilimitados
   - 100 domains
   - Serverless functions

✅ Preview deployments
   - Cada branch = URL de teste
   - Testar antes de produção
```

**Opção 2 - Netlify:**
```
✅ Similar à Vercel
✅ 100GB bandwidth/mês
✅ 300 build minutes/mês
✅ Forms integrados (formulários)
✅ Identity (auth simples)
```

**Opção 3 - Cloudflare Pages:**
```
✅ Bandwidth ILIMITADO
✅ 500 builds/mês
✅ CDN da Cloudflare
✅ Workers (edge functions)
```

### Pagamentos:

**Opção 1 - Stripe (Internacional):**
```
✅ Assinaturas recorrentes
✅ Checkout hospedado (mais fácil)
✅ Dashboard completo
✅ Webhooks para confirmação
✅ Custo: 3.99% + R$ 0,40 por transação
✅ Sem mensalidade
```

**Opção 2 - Mercado Pago (Brasil):**
```
✅ PIX disponível
✅ Cartões nacionais
✅ Assinaturas
✅ Custo: 4.99% por transação
✅ Integração brasileira
```

### Anúncios:

```
✅ Google AdSense
   - Aplicar após ter conteúdo
   - Aprovação em 1-2 semanas
   - Placeholder até aprovar
   - CPM: R$ 2-5 por 1000 views
```

### Controle de Versão:

```
✅ GitHub
   - Repositório público ou privado (grátis)
   - Git para versionamento
   - Integração com Vercel/Netlify
   - Actions para CI/CD (grátis)
```

---

## 🏗️ INFRAESTRUTURA MODERNA

### Como funciona o workflow:

```
┌─────────────────────────────────────────────────────┐
│  SEU COMPUTADOR (Desenvolvimento)                   │
│  - VS Code                                          │
│  - npm run dev (http://localhost:5173)             │
│  - Testar mudanças instantaneamente                 │
└─────────────────┬───────────────────────────────────┘
                  │
                  │ git add .
                  │ git commit -m "feat: nova funcionalidade"
                  │ git push
                  ↓
┌─────────────────────────────────────────────────────┐
│  GITHUB (Código-fonte)                              │
│  - Repositório central                              │
│  - Histórico de mudanças                            │
│  - Colaboração                                      │
└─────────────────┬───────────────────────────────────┘
                  │
                  │ Webhook automático
                  │ (dispara quando faz push)
                  ↓
┌─────────────────────────────────────────────────────┐
│  VERCEL (Build & Deploy)                            │
│  1. Detecta mudança no GitHub                       │
│  2. Clona código                                    │
│  3. npm install (instala dependências)              │
│  4. npm run build (compila React)                   │
│  5. Deploy na CDN global                            │
│  ⏱️  Tempo total: 30-60 segundos                     │
└─────────────────┬───────────────────────────────────┘
                  │
                  │ Site atualizado
                  ↓
┌─────────────────────────────────────────────────────┐
│  PRODUÇÃO (Site no ar)                              │
│  https://receitas-do-bebe.vercel.app                │
│  - SSL automático                                   │
│  - CDN global (rápido no mundo todo)                │
│  - Automaticamente responsivo                       │
└─────────────────────────────────────────────────────┘
```

### Ambientes Automáticos:

```
Production (Produção)
├─ URL: https://receitas-do-bebe.vercel.app
├─ Branch: main
├─ Atualiza: quando push na main
└─ Usuários: vêem esta versão

Preview (Pré-visualização)
├─ URL: https://receitas-do-bebe-git-feature-xyz.vercel.app
├─ Branch: feature/qualquer-branch
├─ Atualiza: quando push na branch
└─ Usuários: não vêem, só você testa
   Perfeito para testar antes de ir pra produção!

Development (Local)
├─ URL: http://localhost:5173
├─ Roda: npm run dev
└─ Usuários: só você no seu computador
```

---

## 🚀 SETUP DO PROJETO (PASSO A PASSO)

### 1️⃣ Instalar Ferramentas (FAZER UMA VEZ):

**A) Node.js (JavaScript Runtime):**
```
1. Acessar: https://nodejs.org
2. Download: versão LTS (Long Term Support)
3. Instalar: next, next, finish
4. Verificar (abrir terminal):
   node --version  → deve mostrar v18.x.x ou v20.x.x
   npm --version   → deve mostrar 9.x.x ou 10.x.x
```

**B) Git (Controle de Versão):**
```
1. Acessar: https://git-scm.com
2. Download: versão para seu sistema
3. Instalar: next, next, finish
4. Verificar (terminal):
   git --version  → deve mostrar git version 2.x.x
```

**C) VS Code (Editor de Código):**
```
1. Acessar: https://code.visualstudio.com
2. Download
3. Instalar
4. Abrir VS Code
5. Instalar extensões (opcional mas recomendado):
   - ES7+ React/Redux snippets
   - Tailwind CSS IntelliSense
   - Prettier
   - GitLens
```

---

### 2️⃣ Criar Projeto:

**Opção A - Manual (Linha de Comando):**

```bash
# Abrir terminal (Windows: cmd ou PowerShell, Mac: Terminal)

# 1. Criar pasta do projeto
mkdir receitas-do-bebe
cd receitas-do-bebe

# 2. Criar projeto React com Vite
npm create vite@latest . -- --template react
# Responder: y (yes para instalar)

# 3. Instalar dependências
npm install

# 4. Instalar Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 5. Instalar React Router
npm install react-router-dom

# 6. Instalar Lucide React (ícones)
npm install lucide-react

# 7. Testar (rodar projeto local)
npm run dev

# Terminal vai mostrar:
# VITE v5.x.x  ready in XXX ms
# ➜  Local:   http://localhost:5173/
# ➜  press h + enter to show help

# 8. Abrir no navegador: http://localhost:5173
# Deve aparecer a tela inicial do Vite
```

**Opção B - Com IA (Mais fácil):**

```
Prompt para Claude/ChatGPT:

"Crie um script bash que:
1. Cria pasta receitas-do-bebe
2. Inicializa projeto React com Vite
3. Instala Tailwind CSS configurado
4. Instala React Router
5. Instala Lucide React
6. Cria estrutura de pastas conforme o DESIGN_SYSTEM.md

Ao final, mostre os comandos para eu copiar e colar no terminal."
```

---

### 3️⃣ Configurar Tailwind CSS:

**Editar: `tailwind.config.js`**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral': {
          start: '#FF8B94',
          end: '#FFB5A7'
        },
        'pessego': {
          start: '#FFB347',
          end: '#FFCC7A'
        },
        'menta': {
          start: '#C9E4DE',
          end: '#B5E7DD'
        },
        'agua': {
          start: '#B5E7DD',
          end: '#A7D8C9'
        },
        'dourado': {
          start: '#FFD700',
          end: '#FFA500'
        },
        'primario': {
          start: '#FF6B6B',
          end: '#FF8B8B'
        }
      },
      fontFamily: {
        'titulo': ['Fredoka', 'sans-serif'],
        'corpo': ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        'pequeno': '10px',
        'medio': '15px',
        'grande': '20px',
        'pill': '25px',
      },
      boxShadow: {
        'leve': '0 2px 10px rgba(0,0,0,0.06)',
        'media': '0 4px 20px rgba(0,0,0,0.08)',
        'forte': '0 10px 40px rgba(0,0,0,0.1)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
```

**Editar: `src/index.css`**

```css
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Fredoka', sans-serif;
}
```

---

### 4️⃣ Criar Estrutura de Pastas:

```
receitas-do-bebe/
├── public/
│   └── (arquivos estáticos: imagens, ícones)
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Badge.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AgeSelector.jsx
│   │   │   └── FunctionsGrid.jsx
│   │   ├── receitas/
│   │   │   ├── RecipeCard.jsx
│   │   │   ├── PhaseFilter.jsx
│   │   │   └── RecipeModal.jsx
│   │   ├── cronograma/
│   │   │   ├── Timeline.jsx
│   │   │   └── TimelineItem.jsx
│   │   ├── premium/
│   │   │   ├── UpgradeModal.jsx
│   │   │   └── PlanCard.jsx
│   │   └── layout/
│   │       ├── Navigation.jsx
│   │       └── AdBanner.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Receitas.jsx
│   │   └── Cronograma.jsx
│   ├── data/
│   │   ├── receitas.js
│   │   ├── cronogramas.js
│   │   └── fases.js
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── usePremium.js
│   ├── services/
│   │   ├── firebase.js
│   │   └── stripe.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
├── index.html
└── README.md
```

**Criar pastas (terminal):**

```bash
# Windows (PowerShell)
mkdir -p src/components/common, src/components/home, src/components/receitas, src/components/cronograma, src/components/premium, src/components/layout, src/pages, src/data, src/utils, src/hooks, src/services

# Mac/Linux
mkdir -p src/components/{common,home,receitas,cronograma,premium,layout} src/{pages,data,utils,hooks,services}
```

---

### 5️⃣ Configurar Git e GitHub:

**A) Inicializar Git local:**

```bash
# Na pasta do projeto
git init

# Configurar seu nome e email (uma vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

**B) Criar .gitignore:**

```bash
# Windows
echo node_modules > .gitignore
echo dist >> .gitignore
echo .env >> .gitignore
echo .DS_Store >> .gitignore

# Mac/Linux
echo "node_modules
dist
.env
.DS_Store" > .gitignore
```

**C) Primeiro commit:**

```bash
git add .
git commit -m "🎉 Initial commit - Setup do projeto"
```

**D) Criar repositório no GitHub:**

```
1. Ir em: https://github.com/new
2. Repository name: receitas-do-bebe
3. Description: App de receitas para introdução alimentar infantil
4. Público ou Privado: escolher
5. NÃO marcar: Add README, .gitignore, license
   (você já tem local)
6. Clicar em: Create repository
```

**E) Conectar local com GitHub:**

```bash
# Copiar os comandos que o GitHub mostra
# Algo como (substituir SEU_USUARIO):

git remote add origin https://github.com/SEU_USUARIO/receitas-do-bebe.git
git branch -M main
git push -u origin main

# Vai pedir login do GitHub
# Depois disso, código está no GitHub!
```

---

### 6️⃣ Deploy na Vercel (2 MINUTOS):

**A) Criar conta:**

```
1. Ir em: https://vercel.com
2. Clicar em: Sign Up
3. Escolher: Continue with GitHub
4. Autorizar Vercel no GitHub
```

**B) Importar projeto:**

```
1. Dashboard Vercel → clicar em: New Project
2. Importar Git Repository
3. Selecionar: receitas-do-bebe (seu repositório)
4. Clicar em: Import
```

**C) Configurar (AUTOMÁTICO):**

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install

(Tudo detectado automaticamente!)
```

**D) Deploy:**

```
1. Clicar em: Deploy
2. Aguardar: 30-60 segundos
3. Celebrar! 🎉

Seu site está no ar:
https://receitas-do-bebe.vercel.app
```

---

### 7️⃣ Workflow Diário (Desenvolver):

```bash
# 1. Fazer mudanças no código (VS Code)
#    - Criar componentes
#    - Adicionar features
#    - Corrigir bugs

# 2. Testar localmente
npm run dev
# Abrir: http://localhost:5173

# 3. Quando estiver bom, commitar
git status              # Ver o que mudou
git add .               # Adicionar tudo
git commit -m "✨ feat: adiciona hero section"

# 4. Enviar para GitHub
git push

# 5. Vercel detecta automaticamente
#    - Faz build
#    - Deploy
#    - Em 30-60 segundos site está atualizado!

# 6. Ver site atualizado
#    https://receitas-do-bebe.vercel.app
```

---

## 🔄 ESTRATÉGIA DE BRANCHES

### Git Flow Simplificado:

```
main (produção - site no ar)
  ↓
develop (desenvolvimento - testes)
  ↓
feature/nome-da-feature (cada nova funcionalidade)
```

### Criar branch para feature:

```bash
# Criar e mudar para nova branch
git checkout -b feature/hero-section

# Desenvolver...
# Commitar...
git add .
git commit -m "✨ feat: hero section completa"

# Push da branch
git push origin feature/hero-section

# Vercel cria URL de preview automaticamente:
# https://receitas-do-bebe-git-feature-hero-section.vercel.app
```

### Merge para produção:

```
OPÇÃO A - Via GitHub (Recomendado):

1. Ir no GitHub
2. Pull Requests → New Pull Request
3. Base: main ← Compare: feature/hero-section
4. Create Pull Request
5. Review (você mesmo)
6. Merge Pull Request
7. Vercel faz deploy automático em produção

OPÇÃO B - Via terminal:

git checkout main
git merge feature/hero-section
git push

# Deploy automático!
```

### Deletar branch após merge:

```bash
# Local
git branch -d feature/hero-section

# Remoto (GitHub)
git push origin --delete feature/hero-section
```

---

## 📱 DESENVOLVIMENTO MOBILE FIRST

### Testar Responsividade:

**1. Chrome DevTools:**
```
1. F12 (abrir DevTools)
2. Clicar no ícone de celular (Toggle device toolbar)
3. Escolher dispositivo:
   - iPhone 12 Pro
   - Galaxy S20
   - iPad Air
   - Responsive (customizado)
4. Testar interações
```

**2. Responsively App (Melhor):**
```
1. Download: https://responsively.app
2. Grátis e open source
3. Mostra múltiplos devices simultaneamente
4. Hot reload automático
5. Screenshot de todos juntos
```

**3. Seu Celular Real (Mais realista):**
```
1. Conectar PC e celular na mesma WiFi
2. Descobrir IP do PC:
   - Windows: ipconfig
   - Mac: ifconfig
   - Procurar algo como: 192.168.1.100

3. No celular, abrir navegador:
   http://192.168.1.100:5173

4. Testar tudo:
   - Touch
   - Scroll
   - Velocidade
   - Teclado virtual
```

### Breakpoints Tailwind:

```jsx
// Sempre pensar: mobile primeiro!
<div className="
  text-2xl          // mobile (padrão)
  md:text-3xl       // tablet (768px+)
  lg:text-4xl       // desktop (1024px+)
  
  p-4               // mobile
  md:p-6            // tablet
  lg:p-8            // desktop
  
  grid-cols-1       // mobile (1 coluna)
  md:grid-cols-2    // tablet (2 colunas)
  lg:grid-cols-3    // desktop (3 colunas)
">
  Conteúdo responsivo
</div>
```

---

## 🔐 VARIÁVEIS DE AMBIENTE

### Criar arquivo .env:

```bash
# Na raiz do projeto
# Criar arquivo: .env

# Conteúdo (exemplo Firebase):
VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-projeto-id
VITE_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123:web:abc123

VITE_STRIPE_PUBLIC_KEY=pk_test_XXXXXXXXXXXXXXXX
VITE_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX

# IMPORTANTE: prefixo VITE_ é obrigatório!
```

### Usar no código:

```javascript
// src/services/firebase.js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // ...
};
```

### Configurar na Vercel:

```
1. Dashboard Vercel
2. Seu projeto → Settings
3. Environment Variables
4. Add New:
   
   Name: VITE_FIREBASE_API_KEY
   Value: AIzaSyXXXXXXXXXXXXXXXXXXXX
   Environment: ✓ Production ✓ Preview ✓ Development
   
5. Repetir para cada variável
6. Redeploy (automático)
```

**⚠️ IMPORTANTE:**
- NUNCA commitar .env no Git
- .env deve estar no .gitignore
- Variáveis sensíveis só na Vercel
- Prefixo VITE_ é obrigatório para expor no browser

---

## 🎯 MIGRAÇÃO FUTURA PARA APP NATIVO

### Quando migrar?

```
✅ Quando validar o modelo de negócio:
   - 1000+ usuários ativos
   - 50+ assinantes premium
   - R$ 1000+/mês de receita recorrente
   - Feedback positivo consistente
   - Pedidos de app nativo dos usuários

❌ NÃO migre se:
   - Menos de 500 usuários ativos
   - Taxa de conversão baixa (< 1%)
   - Receita inconsistente
   - Apenas curiosidade técnica
```

### Opção 1 - PWA (Intermediário - GRATUITO):

```javascript
// 1. Adicionar manifest.json
{
  "name": "Receitas do Bebê",
  "short_name": "Receitas Bebê",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFFFFF",
  "theme_color": "#FF6B6B",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

// 2. Adicionar service worker (cache offline)
// 3. Prompt de instalação aparece
// 4. Usuário "instala" via navegador
// 5. Ícone na home screen
// 6. Abre fullscreen (sem barra do navegador)
// 7. Funciona offline

// Custo: R$ 0
// Tempo: 1 dia de implementação
```

### Opção 2 - Capacitor (Wrapper Nativo - ~R$ 500/ano):

```bash
# 1. Adicionar Capacitor ao projeto React
npm install @capacitor/core @capacitor/cli
npx cap init

# 2. Adicionar plataformas
npx cap add ios
npx cap add android

# 3. Build do React
npm run build

# 4. Copiar para native
npx cap copy

# 5. Abrir IDE nativa
npx cap open ios      # Xcode (Mac)
npx cap open android  # Android Studio

# 6. Compilar e gerar .ipa / .apk
# 7. Publicar nas lojas

# Mesmo código React → App nativo real
# Performance boa (90% de app nativo)
# Acesso a recursos nativos (câmera, GPS, etc)

# Custos:
# - Apple Developer: $99/ano (~R$ 500/ano)
# - Google Play: $25 uma vez (~R$ 125)
```

### Opção 3 - React Native (Reescrita - Mais trabalho):

```bash
# 1. Criar projeto React Native
npx react-native init ReceitasDoBebe

# 2. Reescrever componentes
# <div> → <View>
# <button> → <TouchableOpacity>
# <input> → <TextInput>

# 3. Adaptar navegação
# React Router → React Navigation

# 4. Adaptar estilos
# Tailwind → StyleSheet ou styled-components

# Reaproveita: lógica, state, API calls (~60%)
# Reescreve: UI, navegação, estilos (~40%)

# Vantagens:
# - Performance nativa real
# - Melhor UX
# - Acesso total ao device

# Desvantagens:
# - Mais trabalho
# - Duas codebases (web + mobile)
# - Ou abandona web
```

### Recomendação:

```
1️⃣ Comece: Web App (você está aqui)
   Valide o negócio
   Custo: R$ 0

2️⃣ Se validar: PWA
   Adiciona "instalar no celular"
   Funciona offline
   Custo: R$ 0
   Tempo: 1 dia

3️⃣ Se escalar muito: Capacitor
   App nativo nas lojas
   Mesmo código React
   Custo: ~R$ 625 (setup) + R$ 500/ano
   Tempo: 1 semana

4️⃣ Se for unicórnio: React Native
   Performance máxima
   UX nativa
   Custo: dev time considerável
   Tempo: 1-2 meses
```

---

## 🛠️ FERRAMENTAS DE DESENVOLVIMENTO

### Essenciais (Grátis):

**1. VS Code**
```
Download: https://code.visualstudio.com

Extensões obrigatórias:
1. ES7+ React/Redux snippets
   - Atalhos para React (rfc, rafce, etc)
   
2. Tailwind CSS IntelliSense
   - Autocomplete de classes
   - Preview de cores
   
3. Prettier
   - Formatar código automaticamente
   - Salvar = formatar
   
4. ESLint
   - Detectar erros
   - Boas práticas
   
5. GitLens
   - Git integrado
   - Ver histórico
```

**2. Chrome DevTools**
```
F12 ou Ctrl+Shift+I

Abas importantes:
- Elements: inspecionar HTML/CSS
- Console: ver erros JavaScript
- Network: ver requests (API, imagens)
- Lighthouse: testar performance
- Application: ver storage, cache
```

**3. GitHub Desktop (Opcional)**
```
Download: https://desktop.github.com

Interface visual para Git:
- Ver mudanças
- Commitar visualmente
- Push/Pull com botões
- Histórico visual

Mais fácil que linha de comando!
```

### Recomendadas (Grátis):

**4. Cursor AI**
```
Download: https://cursor.sh

VS Code + IA integrada:
- Ctrl+K: escrever prompt
- IA gera código
- Entende contexto do projeto
- Perfeito para Vibe Code

Grátis: 2000 requests/mês
```

**5. Responsively**
```
Download: https://responsively.app

Testar múltiplos devices:
- iPhone, Android, iPad, Desktop
- Todos simultâneos
- Hot reload sincronizado
- Screenshot de todos
```

**6. Figma (Design)**
```
Website: https://figma.com

Criar mockups:
- Arrastar e soltar
- Prototipar telas
- Exportar para código (plugin)

Grátis: 3 projetos
```

---

## ✅ CHECKLIST COMPLETO

### Setup Inicial:
- [ ] Node.js instalado
- [ ] Git instalado
- [ ] VS Code instalado
- [ ] Conta GitHub criada
- [ ] Conta Vercel criada
- [ ] Projeto React criado (Vite)
- [ ] Tailwind configurado
- [ ] Git inicializado
- [ ] Repositório GitHub criado
- [ ] Deploy Vercel funcionando

### Desenvolvimento:
- [ ] Estrutura de pastas criada
- [ ] Componentes base (Button, Card, Badge)
- [ ] Tela Home funcionando
- [ ] Tela Receitas funcionando
- [ ] Tela Cronograma funcionando
- [ ] Modal Premium funcionando
- [ ] Navegação entre telas
- [ ] Responsivo em mobile
- [ ] Testado em Chrome, Safari, Firefox

### Conteúdo:
- [ ] 10 receitas por fase (40 total)
- [ ] Cronogramas por idade
- [ ] Textos revisados
- [ ] Imagens otimizadas
- [ ] SEO básico (meta tags)

### Monetização:
- [ ] Firebase configurado
- [ ] Autenticação funcionando
- [ ] Stripe/Mercado Pago integrado
- [ ] Sistema de assinatura testado
- [ ] Google AdSense aplicado (aguardando aprovação)

### Produção:
- [ ] .env configurado
- [ ] Build sem erros
- [ ] Lighthouse > 90 (performance)
- [ ] Testado em dispositivos reais
- [ ] Domínio configurado (opcional)

---

## 🚨 TROUBLESHOOTING COMUM

### Problema: npm install dá erro

```bash
# Solução 1: Limpar cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Solução 2: Usar versão LTS do Node
# Reinstalar Node.js da versão LTS
```

### Problema: Tailwind não funciona

```javascript
// Verificar tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ← IMPORTANTE
  ],
  // ...
}

// Verificar src/index.css
@tailwind base;      // ← Deve ter essas 3 linhas
@tailwind components;
@tailwind utilities;
```

### Problema: Git push pede senha toda hora

```bash
# Usar SSH em vez de HTTPS

# 1. Gerar chave SSH
ssh-keygen -t ed25519 -C "seu@email.com"

# 2. Adicionar no GitHub
# Settings → SSH Keys → New SSH key
# Colar conteúdo de ~/.ssh/id_ed25519.pub

# 3. Mudar remote
git remote set-url origin git@github.com:SEU_USUARIO/receitas-do-bebe.git
```

### Problema: Deploy na Vercel falha

```
# Ver logs no dashboard Vercel
# Geralmente é:

1. Erro de build:
   - Ver qual linha falhou
   - Corrigir localmente
   - Push novamente

2. Variáveis de ambiente faltando:
   - Adicionar no Vercel → Settings → Environment Variables

3. Node version incompatível:
   - package.json: adicionar
     "engines": { "node": "18.x" }
```

### Problema: localhost:5173 não abre

```bash
# Ver se porta está em uso
# Windows
netstat -ano | findstr :5173

# Mac/Linux
lsof -i :5173

# Matar processo ou mudar porta
npm run dev -- --port 3000
```

---

## 📊 PRÓXIMOS PASSOS

### Semana 1:
- [ ] Setup completo (ferramentas + projeto)
- [ ] Tela Home com HeroSection
- [ ] Primeiros componentes reutilizáveis
- [ ] Deploy na Vercel funcionando

### Semana 2:
- [ ] Tela Receitas com filtros
- [ ] 10 receitas de cada fase
- [ ] Modal de receita completa
- [ ] Navegação entre telas

### Semana 3:
- [ ] Tela Cronograma
- [ ] Modal Premium
- [ ] Indicadores de premium (cadeado, blur)
- [ ] Banner de anúncios (placeholder)

### Semana 4:
- [ ] Firebase setup
- [ ] Autenticação básica
- [ ] Testes finais
- [ ] Soft launch (amigos/família)

---

## 💰 RESUMO DE CUSTOS

### Fase MVP (0-1000 usuários):
```
Hospedagem: R$ 0 (Vercel grátis)
Backend: R$ 0 (Firebase grátis)
Domínio: R$ 40-60/ano (opcional)
Total: R$ 0-5/mês
```

### Fase Crescimento (1000-10000 usuários):
```
Hospedagem: R$ 0 (ainda grátis!)
Backend: R$ 0-100/mês (Firebase Blaze pay-as-you-go)
Stripe: 3.99% das transações
Email: R$ 0-50/mês (SendGrid grátis até 100 emails/dia)
Total: R$ 50-200/mês
```

### Fase Scale (10000+ usuários):
```
Hospedagem: R$ 0-500/mês (Vercel Pro se precisar)
Backend: R$ 200-500/mês
Stripe: 3.99% das transações
Email/SMS: R$ 100-200/mês
Total: R$ 300-1200/mês

Mas nessa fase você já tem R$ 10k-50k/mês de receita!
Margem: 85-90%
```

---

## 🎉 CONCLUSÃO

Você tem agora **TUDO** que precisa para construir um Web App profissional **SEM GASTAR NADA**.

**A infraestrutura é gratuita, moderna e escalável.**

Foque no que importa:
1. ✅ Criar conteúdo de qualidade (receitas)
2. ✅ Design atraente (já documentado)
3. ✅ Validar com usuários reais
4. ✅ Iterar baseado em feedback

**Não se preocupe com app nativo ainda.** Valide primeiro no web. Quando tiver 1000+ usuários pagantes, aí sim vale migrar.

**BOA SORTE! 🚀**
