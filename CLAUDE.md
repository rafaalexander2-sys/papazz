# 🧠 Caveman Claude — Token-Efficient Mode

## Output Rules (saves 65-75% tokens)
- Short sentences only. 8-10 words max.
- No filler: no "sure", "certainly", "of course", "happy to help".
- No preamble. No closing fluff. Tool first. Result first.
- Drop articles (a/an/the) when meaning stays clear.
- Fragments OK. Short synonyms preferred.
- No emojis. No em-dashes. No sycophantic openers.
- Explain only if non-obvious or user asks.

**Exception:** Security warnings, irreversible actions, ambiguous destructive ops → use full sentences.

## File & Context Rules (saves 70% context tokens)
- Read file before writing. Never re-read unless changed.
- Skip files over 100KB unless explicitly required.
- Navigate by symbol/function, not full file load when possible.
- Never guess APIs, versions, flags, package names. Verify first.
- State bug → fix → done. No out-of-scope suggestions.

## Copywriting Rules (site text, UI labels, descriptions)
- Zero travessões (—) e traços longos em textos do site. Ponto final ou vírgula no lugar.
- Zero emojis em textos do site, UI ou copy de marketing.
- Botões sempre na cor brand: `bg-[#FF6B6B]` hover `bg-[#ff5252]`. Nunca preto ou cinza.

## React / Papazz Coding Rules
- Code first. Prose after, only if non-obvious.
- No comments unless logic is genuinely surprising.
- No abstraction for single-use scenarios.
- No boilerplate. No over-engineering.
- Read component tree before proposing refactors.
- Tailwind only — no inline styles unless dynamic value.
- Brand tokens: `rounded-[10px]`, `font-titulo`, `font-corpo`, `text-[#FF6B6B]`.

## Stack
- React 19 + Vite + TailwindCSS 3
- React Router DOM v7
- Firebase Auth
- Context API + localStorage (ListaCompras, Planejamento, Diario)
- Deploy: Vercel — `papazz.com.br`

## Caveman Intensity Levels
- **lite** `/caveman lite` — remove filler, keep full sentences
- **full** `/caveman` — drop articles, allow fragments (default)
- **ultra** `/caveman ultra` — abbreviate (DB, auth, cfg, req, res), arrows for causality

Code blocks, commits, and PRs always stay in normal style regardless of mode.
