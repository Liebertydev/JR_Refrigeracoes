# JR Refrigerações | Aula 1

## Visão geral

A JR Refrigerações representa o atendimento do técnico autônomo Júnior, sediado em Recife/PE. Este projeto acadêmico da UNINASSAU, desenvolvido para a disciplina de Maturidade em Desenvolvimento de Software do curso de Ciência da Computação, apresenta a primeira etapa do software: uma página pública responsiva para divulgar serviços de climatização, exibir trabalhos, estimar deslocamento e receber solicitações de orçamento sem exigir conta ou login.

Nesta aula, os dados são demonstrativos e ficam no front-end. O formulário cria uma solicitação simulada com status inicial `PENDENTE`; ainda não há backend, envio real ou persistência após sair da página.

## Integrantes da equipe

- Lieberty Wendell Queiroz de Holanda (Matrícula: 01811624)
- Geovane Valerio Ribeiro da Silva (Matrícula: 01817390)
- Heitor Julio de Souza Batista (Matrícula: 01807641)

## Instalação e execução

Requisito: Node.js e npm instalados.

```bash
npm install
npm run dev
```

O Vite informa no terminal o endereço local, normalmente `http://localhost:5173`. Para gerar e servir a versão de produção:

```bash
npm run build
npm run preview
```

O script `npm start` não está configurado neste projeto. Para desenvolvimento, use `npm run dev`.

## Mapeamento de pastas

```text
src/
├── components/       # Header, Hero, ServiceCard, Galeria, Simulador e Footer
├── pages/            # Home, SolicitarOrcamento e PaginaNaoEncontrada
├── routes/           # Configuração centralizada das rotas em AppRoutes.jsx
├── hooks/            # Hooks React reutilizáveis, como useDeslocamento.js
├── data/             # Serviços, regiões e funções de dados demonstrativos
└── utils/            # Formatação de moeda e telefone
```

- **`src/components/`** contém partes reutilizáveis da interface. `ServiceCard` recebe título, descrição, ícone e manipulador via props; `Galeria` recebe sua lista de trabalhos via props.
- **`src/pages/`** reúne as páginas completas associadas às rotas: landing page, solicitação de orçamento e página não encontrada.
- **`src/hooks/`** contém lógica reutilizável com estado React. `useDeslocamento` guarda a cidade escolhida e deriva a região e a taxa estimada correspondente.
- **`src/data/`** centraliza estruturas demonstrativas sem chamadas HTTP. `storage.js` contém o catálogo, a galeria, as faixas de deslocamento e a função que monta uma solicitação simulada.
- **`src/routes/`** define os endereços em um lugar central e documenta sua classificação acadêmica.
- **`src/utils/`** contém formatadores independentes de moeda brasileira e número de WhatsApp.
- **`src/index.css`** importa Tailwind CSS v4 e define estilos globais, tipografia e identidade visual azul profundo, ciano e cinza.

## Arquitetura de rotas

As rotas públicas estão disponíveis sem autenticação. Rotas protegidas de usuário estão conceitualmente previstas para uma etapa posterior, mas nenhuma é ativada na Aula 1. A rota administrativa fica documentada e aponta para uma página informativa até a implementação completa na Aula 3. Não há telas de login nem bloqueios simulados.

| Classificação | Rota | Comportamento na Aula 1 |
| --- | --- | --- |
| Pública | `/` | Landing page, catálogo, galeria e simulador |
| Pública | `/orcamento` | Formulário público de solicitação sem conta |
| Protegida de usuário | Nenhuma | Sem autenticação ou rota protegida ativa |
| Administrativa | `/admin` | Reservada; painel completo previsto para a Aula 3 |
| Fallback | Qualquer outra rota | Página não encontrada |

## Simulador de deslocamento

A sede operacional é Recife. O hook `useDeslocamento` associa a cidade selecionada à faixa definida em `src/data/storage.js`. Nesta massa demonstrativa, Recife aparece como base (taxa a combinar/isenta), Olinda e Jaboatão dos Guararapes como Nível 1, Camaragibe e São Lourenço da Mata como Nível 2, e Carpina como Nível 3. Os valores são estimativas fictícias para fins acadêmicos e não constituem cotação comercial.

## Armazenamento mocado

`src/data/storage.js` funciona como uma pequena fonte local de dados, com arrays de objetos JavaScript que representam respostas JSON, por exemplo o catálogo de serviços e as cidades atendidas. Isso ajuda a exercitar a leitura de listas e o fluxo da interface sem depender de servidor.

Ao submeter o formulário, `createMockQuoteRequest` reúne os campos, cria um identificador e uma data, e define `status: 'PENDENTE'`. A página guarda o objeto e exibe a confirmação usando estado React. O registro permanece apenas na memória da página durante a sessão; não é um banco relacional real e não sobrevive a uma atualização ou ao fechamento da página. Não são usados `fetch` nem `axios`. Comentários `FUTURO` indicam os pontos nos quais a integração REST com Node.js/Express poderá ser implementada na Aula 2.

## Catálogo de serviços

- Instalação de ar-condicionado split: montagem, tubulação, vácuo e carga.
- Higienização profissional e manutenção preventiva: limpeza profunda e sanitização.
- Manutenção corretiva e carga de gás: diagnóstico de vazamento e recarga quando necessária.
- Refrigeração comercial e balcões: geladeiras comerciais, expositores e câmaras frias.

## Tecnologias

React, Vite, React Router, Tailwind CSS v4 e Lucide React.
