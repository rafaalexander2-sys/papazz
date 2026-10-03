# Decisões Técnicas — Papazz

Registro de decisões arquiteturais tomadas. Data: 2026-05-17.
Atualizado: 2026-10-02 (reset da chave de upload no Play Console).

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
| `manifest.json` (obrigatório TWA) | Feito: `public/manifest.json` |
| Projeto Android TWA (`twa/android/`) | Feito: Gradle puro, sem Bubblewrap |
| GitHub Action build AAB | Feito: `.github/workflows/build-twa.yml` |
| Conta Play Store | Feito: ID 5486423839757915054, app ID 4972148359044508698, login contato@casacriative.com.br |
| App criado no Play Console (`br.com.papazz`) | Feito |
| Secret `KEYSTORE_BASE64` no GitHub | Feito: chave SHA1 `E6:E3:B1:FF...` |
| Reset da chave de upload no Play Console | Aprovado. Chave nova vale a partir de 2026-10-05 02:17 UTC (04/out 23:17 BRT) |
| Upload AAB versionCode 2 (teste interno) | Pendente: depois que o reset valer |
| `assetlinks.json` com SHA-256 da chave do Google | Feito: `42:D8...` (vale após merge na main) |
| Configuração do app no Play Console (ficha, privacidade, login, anúncios, classificação, público 18+, segurança dos dados, saúde, categoria) | Feito em 2026-10-03 |
| Testadores do teste interno (lista "equipe papazz") | Feito |
| Teste fechado: 12 testadores por 14 dias | Pendente: obrigatório antes da produção |

### Chaves de assinatura (Play App Signing)
O Google assina o app final com a chave dele (chave de assinatura do app). Nós só assinamos o upload (chave de upload).

| Chave | SHA1 | Onde fica |
|---|---|---|
| Upload original (PERDIDA) | `E9:24:54:1B:71:08:2B:D8:E6:42:BE:6A:EE:09:E8:04:B0:5E:4C:E7` | Gerada num build de 25/mai, antes do secret existir. Artifact expirou. Irrecuperável. |
| Upload nova | `E6:E3:B1:FF:23:FB:D0:A1:10:0A:69:F8:FD:DB:DD:9F:14:53:B0:33` | Secret `KEYSTORE_BASE64` (alias `papazz`, senha `papazz123`) |
| Assinatura do app (Google) | SHA-256 `42:D8:EF:AC:D6:D6:A6:BE:B0:B8:27:1E:05:8E:F4:99:3F:78:20:AC:1F:10:66:60:10:49:EA:24:AB:5E:9D:8B` | Gerenciada pelo Google. Já no `assetlinks.json` |

SHA-256 da chave de upload nova: `4B:0A:23:7A:20:96:E2:4E:4D:7F:6C:91:5D:74:13:5C:24:DC:D6:E2:63:54:41:92:69:A3:19:62:44:08:BA:B0`

### O que deu errado (não repetir)
Cada build do CI gerava um keystore novo. O primeiro AAB enviado registrou uma chave que só existia num artifact de 7 dias. O secret foi salvo com o keystore de outro run. Hoje o workflow falha se o secret não existir, em vez de gerar chave nova.

### Reset da chave de upload
1. Play Console > Protegido com o Google Play > Proteção da Google Play Store > Gerencie a Assinatura de apps do Google Play
2. Seção "Certificado da chave de upload" > Solicitar redefinição da chave de upload
3. Motivo: perdi a chave de upload. Anexar `upload_certificate.pem` (artifact `upload-certificate` do Actions)
4. Google aprova (horas a 2 dias úteis) e manda e-mail com a data em que a chave nova passa a valer (cerca de 48h depois)

### SHA-256 do Google para o `assetlinks.json`
Play Console > Protegido com o Google Play > Distribuição na Google Play Store > Acessar a Assinatura de Apps do Google Play > seção "Chave de assinatura do app". Copiar o SHA-256 e adicionar em `public/.well-known/assetlinks.json` (manter o da chave de upload também). Sem isso o app abre com barra de endereço do navegador.

### Como buildar o AAB
Roda sozinho em todo push para `twa/android/**` ou `.github/workflows/build-twa.yml`. Manual: GitHub > Actions > "Build TWA (Android AAB)" > Run workflow.

O workflow:
- Restaura o keystore do secret `KEYSTORE_BASE64` (falha se não existir)
- Confere se o SHA1 bate com a chave de upload registrada (falha se não bater)
- Gera `app-release.aab` no artifact `papazz-release`
- Gera `upload_certificate.pem` no artifact `upload-certificate`

A cada novo envio para a Play Store, subir `versionCode` em `twa/android/app/build.gradle`.

### Estrutura do projeto Android
```
twa/
  android/                    projeto Gradle (TWA)
    app/build.gradle          package br.com.papazz, compileSdk/targetSdk 35, minSdk 21
    app/src/main/
      AndroidManifest.xml     LauncherActivity + Digital Asset Links intent-filter
      res/values/colors.xml   colorPrimary: #FF6B6B
  twa-manifest.json           config legado Bubblewrap (não usado)
public/
  manifest.json               Web App Manifest (obrigatório TWA)
  .well-known/
    assetlinks.json           Digital Asset Links
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
