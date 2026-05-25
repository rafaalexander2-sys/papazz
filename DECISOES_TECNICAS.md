# Decisões Técnicas — Papazz

Registro de decisões arquiteturais tomadas. Data: 2026-05-17.
Atualizado: 2026-05-25 (sessao Play Store + TWA build).

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

### Status de implementação

| Item | Status |
|---|---|
| `isAppVersion()` + `PlatformContext` | Feito |
| Banner "Baixe o app" no `www` | Feito |
| `app.papazz.com.br` no Vercel | Feito |
| DNS CNAME `app` | Feito |
| `manifest.json` (obrigatório TWA) | Feito — `public/manifest.json` |
| `/.well-known/assetlinks.json` | Feito — falta SHA-256 real |
| Projeto Android TWA (`twa/android/`) | Feito — Gradle puro, sem Bubblewrap |
| GitHub Action build AAB | Feito — `.github/workflows/build-twa.yml` |
| Conta Play Store | Feito — ID 5486423839757915054 |
| Build AAB via GitHub Actions | Rodando / aguardando resultado |
| SHA-256 do keystore | Pendente — sai nos logs do Actions |
| Atualizar `assetlinks.json` com SHA real | Pendente |
| Upload AAB na Play Store | Pendente |
| Salvar keystore como secret no GitHub | Pendente |

### Como buildar o AAB
O build roda automaticamente via GitHub Actions em todo push para `twa/android/**` ou `.github/workflows/build-twa.yml`. Para acionar manual:
1. GitHub > Actions > "Build TWA (Android AAB)" > Run workflow

O workflow:
- Gera o keystore na primeira vez (senha: `papazz123`)
- Imprime o SHA-256 nos logs (buscar por `SHA-256 para o assetlinks.json`)
- Gera o arquivo `app-release.aab` como artifact "papazz-release"
- Gera o `keystore-base64.txt` como artifact "papazz-keystore"

### Depois do primeiro build bem-sucedido
1. Baixar artifact `papazz-keystore` e salvar como secret `KEYSTORE_BASE64` no GitHub (Settings > Secrets)
2. Copiar SHA-256 dos logs e atualizar `public/.well-known/assetlinks.json`
3. Baixar `app-release.aab` e fazer upload no Play Console (Teste interno ou Producao)
4. Play Console > Versoes > Configuracoes > Assinatura de app mostrara o SHA-256 do Google — adicionar esse tambem no `assetlinks.json`

### Estrutura do projeto Android
```
twa/
  android/                    — projeto Gradle (TWA)
    app/build.gradle          — package br.com.papazz, compileSdk 34
    app/src/main/
      AndroidManifest.xml     — LauncherActivity + Digital Asset Links intent-filter
      res/values/colors.xml   — colorPrimary: #FF6B6B
  twa-manifest.json           — config legado Bubblewrap (nao usado mais)
  papazz-release-key.keystore — gerado no CI (nao commitado)
public/
  manifest.json               — Web App Manifest (obrigatorio TWA)
  .well-known/
    assetlinks.json           — Digital Asset Links (SHA-256 pendente)
```

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
