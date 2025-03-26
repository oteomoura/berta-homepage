# Berta - Plataforma de Bem-estar

Este projeto é uma plataforma de bem-estar para pessoas com endometriose e outras doenças crônicas, com acompanhamento personalizado e baseado em ciência.

## Migração de Tailwind para Material UI

Este projeto foi completamente migrado de Tailwind CSS para Material UI. As principais alterações incluem:

1. **Dependências**:
   - Removidas todas as dependências do Tailwind CSS
   - Adicionadas as dependências do Material UI (@mui/material, @emotion/react, @emotion/styled, @mui/icons-material)

2. **Componentes**:
   - Substituídos os componentes de UI baseados em Tailwind por componentes Material UI
   - Criados wrappers para os componentes mais usados (Button, Card, Badge, etc.)

3. **Estilização**:
   - Substituídas as classes do Tailwind por estilos Material UI usando o sistema de temas
   - Criados componentes estilizados com o styled API do Material UI

4. **Layout**:
   - Modificado o layout para usar os componentes de layout do Material UI (Container, Grid, Box, etc.)
   - Mantida a estrutura básica da página

## Remoção do Tailwind

Para evitar erros e conflitos, o Tailwind foi completamente removido do projeto:

1. **Removidas as dependências**: tailwindcss, autoprefixer, postcss-plugins
2. **Removidos os arquivos de configuração**: tailwind.config.ts foi substituído por um arquivo vazio
3. **Simplificado o PostCSS**: postcss.config.mjs não inclui mais o plugin do Tailwind
4. **Limpo o CSS global**: Removidas todas as diretivas e classes do Tailwind de globals.css

## Arquivos de Imagem

Para que o projeto funcione corretamente, adicione os seguintes arquivos de imagem em `public/images/`:

- `avatar1.jpg` - Foto de perfil 1
- `avatar2.jpg` - Foto de perfil 2
- `avatar3.jpg` - Foto de perfil 3 
- `hero-woman.jpg` - Imagem principal da landing page

## Executando o Projeto

```bash
# Instalar dependências
npm install
# ou
pnpm install

# Iniciar servidor de desenvolvimento
npm run dev
# ou
pnpm dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura de Arquivos

```
├── app/
│   ├── globals.css      # CSS global simplificado (sem Tailwind)
│   ├── layout.tsx       # Layout principal com o ThemeProvider
│   └── page.tsx         # Página principal (Landing Page) com "use client"
├── components/
│   ├── theme-provider.tsx  # Provedor de tema Material UI
│   └── ui/            # Componentes de UI
│       ├── button.tsx # Wrapper para Button do Material UI
│       ├── card.tsx   # Wrapper para Card do Material UI
│       └── badge.tsx  # Wrapper para Chip do Material UI
├── public/
│   └── images/        # Imagens utilizadas no projeto
└── README.md          # Este arquivo
``` 