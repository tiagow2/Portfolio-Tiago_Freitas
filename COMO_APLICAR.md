# Como aplicar no seu repositório

## Opção 1 — Substituir pelo projeto completo

1. Extraia este projeto.
2. Abra a pasta no VS Code.
3. Rode:

```bash
npm install
npm run dev
```

4. Depois, envie para o seu repositório:

```bash
git add .
git commit -m "feat: atualiza portfolio final"
git push
```

## Opção 2 — Copiar apenas a interface

Se o seu repositório atual já estiver com Vite + React + TypeScript, copie estes arquivos para ele:

```txt
src/App.tsx
src/styles.css
src/main.tsx
index.html
```

Depois rode:

```bash
npm install
npm run dev
```

## Onde editar seus dados

As principais informações ficam em `src/App.tsx`:

- `profile`: nome, e-mail, GitHub, LinkedIn e resumo.
- `skills`: tecnologias exibidas na stack.
- `projects`: cards de projetos.
- `activities`: seção “Agora”.
- `journey`: formação e trajetória.
