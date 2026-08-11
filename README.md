# Origem — Landing page institucional

Restaurante autoral fictício ("Origem", Resende/RJ, cozinha da Mata Atlântica) usado como conteúdo real para o projeto. Troque nome, textos e paleta em `data/` e `tailwind.config.ts` para outro restaurante.

## Deploy no GitHub Pages

O projeto já vem pronto pra isso — exportação estática configurada em `next.config.js` e workflow em `.github/workflows/deploy.yml`.

1. Crie o repositório no GitHub e suba o código:
   ```bash
   git init
   git add .
   git commit -m "primeira versão"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
   git push -u origin main
   ```
2. No repositório, vá em **Settings → Pages** e em "Source" escolha **GitHub Actions**.
3. Pronto. Todo push na branch `main` builda e publica sozinho. O link fica em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

Não precisa editar nada manualmente — o `next.config.js` detecta o nome do repositório (`GITHUB_REPOSITORY`, injetado automaticamente pelo Actions) e ajusta o `basePath` sozinho. É por isso que dava tela branca no seu outro projeto: sem esse ajuste, o navegador procura os arquivos JS/CSS na raiz do domínio (`seu_usuario.github.io/`) em vez de dentro da pasta do repo (`seu_usuario.github.io/nome-do-repo/`).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

Build de produção:

```bash
npm run build
npm start
```

> O build precisa de acesso à internet na primeira vez (baixa as fontes Fraunces / Inter / Space Mono via `next/font/google`). Testado com build limpo (sem erros de tipo/compilação) neste ambiente com fontes temporariamente desativadas — funciona normalmente com rede disponível.

## O que falta para produção

- **Fotos reais**: todos os `RevealImage` estão em modo placeholder (gradiente + label). Basta passar a prop `src="/caminho-da-foto.jpg"` (coloque os arquivos em `public/`) — o reveal, o zoom e o lazy loading do `next/image` já funcionam.
- **Mapa**: `Location.tsx` usa um mapa estilizado em SVG. Pode trocar por Google Maps embed ou Mapbox mantendo o mesmo container.
- **Formulário/reserva**: o CTA "Reservar" está como link `tel:`. Se quiser um formulário ou integração (ex: Typeform, WhatsApp, sistema de reservas), me avise.
- **Conteúdo**: textos, preços e pratos em `data/menu.ts`, `data/gallery.ts`, `data/testimonials.ts`.

## Identidade visual (tokens)

| Token | Valor | Uso |
|---|---|---|
| `bg` | `#14120F` | fundo — madeira carbonizada |
| `ink` | `#ECE3D2` | texto — pergaminho |
| `moss` | `#445A43` | verde Mata Atlântica |
| `ember` | `#9C5330` | brasa/argila queimada |
| `gold` | `#B08D57` | latão — preços, destaques, CTA |
| `stone` | `#6B665C` | neutro terciário |

Tipografia: **Fraunces** (display/serifada, itálico para destaques emocionais) + **Inter** (corpo) + **Space Mono** (preços, eyebrows, dados).

Elemento-assinatura: a videira/raiz em SVG no `ScrollProgress.tsx` — cresce conforme o scroll, amarrando a métrica de progresso ao conceito "da floresta à mesa" em vez de uma barra genérica.
