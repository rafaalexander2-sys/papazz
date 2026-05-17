# Decisões Técnicas — Papazz

Registro de decisões arquiteturais tomadas. Data: 2026-05-17.

---

## 1. Subdomínio: app vs www

### Decisão
Separar o site web do app Play Store em subdomínios distintos.

- `www.papazz.com.br` — versão web com AdSense, SEO, blog, landing page
- `app.papazz.com.br` — versão limpa sem AdSense, é o que a Play Store aponta

### Motivo
AdSense dentro de WebView/TWA viola as políticas do Google e pode banir a conta AdSense. Subdomínios separados eliminam esse risco sem duplicar código.

### Como funciona
- Mesmo codebase, mesmo deploy no Vercel
- Código detecta o hostname para saber se está no contexto app ou www
- Firebase Auth e Firestore unificados: login e dados sincronizados entre web e app
- AdSense visível só no `www`, slots de AdMob futuros só no `app`

### O que precisa ser feito
- **Código:** utilitário `isAppVersion()` + context global + slots de AdSense condicionais + banner "Baixe o app" no www
- **Vercel dashboard:** adicionar `app.papazz.com.br` como custom domain no mesmo deployment
- **DNS:** CNAME `app` apontando para o mesmo destino do `www`

---

## 2. Pagamentos — Estratégia

### Decisão
Lançar o app na Play Store sem pagamento funcionando (botão "Em breve"). Implementar pagamento primeiro no `www` via Stripe ou HotMart.

### Motivo
O Google exige Google Play Billing para cobranças de bens digitais dentro de apps Android. Usar processadores externos (Stripe, PagSeguro) dentro do app viola a política da Play Store e pode remover o app.

| Contexto | Sistema obrigatório | Taxa |
|---|---|---|
| `www.papazz.com.br` | Stripe, HotMart, PagSeguro (livre escolha) | ~2-5% |
| App Play Store | Google Play Billing | 15-30% |

### Estratégia adotada
1. Lançar app sem assinatura ativa — validar audiência primeiro
2. Subir pagamento no `www` com Stripe ou HotMart
3. Quem assina pelo site fica premium no app via Firebase (campo `premium: true` no Firestore)
4. Google Play Billing fica para fase posterior, quando o volume justificar a taxa de 30%

### Próximo passo
Escolher processador para o `www` (Stripe recomendado pela API) e implementar o fluxo de assinatura web.

---

## 3. Receitas e Conteúdo Admin

### Como funciona
Receitas ficam no Firestore. Adicionar receita pelo painel admin não requer atualização na Play Store — o app carrega os dados em tempo real.

### Quando requer atualização na Play Store
- Mudança de código (nova tela, novo recurso, bug fix)
- Mudança visual (layout, componentes)

### Quando não requer
- Adicionar/editar/remover receitas pelo admin
- Publicar posts no blog
- Qualquer dado gerenciado pelo Firestore
