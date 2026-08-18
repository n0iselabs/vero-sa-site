# Vero Landing

Crie uma landing page para a Vero Odontologia, uma clínica odontológica em Santo André, SP (ABC Paulista).

### CONTEXTO DO PROJETO

A Vero Odontologia é uma clínica odontológica ativa em Santo André, SP, sem nenhum site próprio hoje. Toda a presença digital atual está concentrada no card do Google Maps, onde a clínica tem uma nota real de **4,9 estrelas em 162 avaliações** — um volume de prova social forte e comprovado, superior ao de boa parte das clínicas concorrentes da região. A clínica também mantém um Instagram ativo, com identidade visual própria (logo "vero" em script + ícone de dente estilizado, paleta azul-marinho/creme).

Esta página é um protótipo de prospecção: será usada para abrir uma conversa comercial com a dona da clínica, mostrando o potencial de um canal digital próprio que traduza a reputação já validada pelos pacientes em contato direto. Não é a entrega final de um cliente fechado — é a ferramenta que convence a clínica a fechar.

### MODO OPERACIONAL

PROSPECT_MODE.

Este projeto está em PROTOTYPE_MODE. Não inventar números, prêmios, certificações, depoimentos, nomes de profissionais, anos de experiência, especialidades, convênios, preços, promoções, avaliações, notas ou resultados não confirmados. Quando faltar informação, usar linguagem segura, ampla e comercialmente plausível. Nenhum placeholder deve aparecer na interface. O site deve parecer um protótipo premium pronto para apresentação comercial, sem criar falsas afirmações sobre a empresa.

Os únicos dados específicos confirmados desta clínica são: nome, cidade/endereço, telefone fixo, WhatsApp, nota e quantidade de avaliações do Google, e a tagline real de marca observada em post do Instagram. Todo o resto (serviços, especialidades, convênios, equipe, horário) é deliberadamente tratado com linguagem ampla — não preencher essas lacunas com nada além do que já está na copy abaixo.

### OBJETIVO DA PÁGINA

Conversão principal: **contato via WhatsApp** para agendar uma consulta ou avaliação. Telefone fixo é o canal secundário. Não há formulário — o WhatsApp é o caminho de conversão único e repetido.

### PÚBLICO-ALVO

Morador de Santo André e região do ABC Paulista (São Bernardo do Campo, São Caetano do Sul) buscando um dentista de proximidade, geralmente via busca no Google ou Google Maps ("dentista Santo André", "dentista perto de mim"). Chega comparando cards de várias clínicas por nota e quantidade de avaliações, com baixa paciência e intenção prática: quer confirmar rapidamente se pode confiar e como marcar. Não está necessariamente buscando uma especialidade específica — é alguém resolvendo uma necessidade odontológica comum (dor, prevenção, rotina, estética) decidindo por proximidade e confiança percebida.

### STACK OBRIGATÓRIA

Use:

- React 18
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui quando necessário

### DIREÇÃO VISUAL

A Vero Odontologia **já tem identidade de marca real em uso** — este não é um projeto de criação de marca do zero, é de curadoria e refinamento de uma identidade observada em um post real do Instagram da clínica (fonte: print fornecido pelo usuário). Honrar essa identidade, elevando contraste e hierarquia para o formato de landing page, sem descaracterizá-la.

**Identidade observada (real, mas aproximada — ver lacunas):**

- **Logo:** "vero" em tipografia script/cursiva, com um ícone de dente estilizado integrado ao próprio logotipo. Não existe ainda o arquivo vetorial original — recrie o texto "vero" com uma fonte script/cursiva de qualidade equivalente à observada. Não invente um ícone de dente novo; se não for possível recriar o ícone com fidelidade, use apenas o texto "vero" em script como logo provisório. Não use um ícone de dente genérico de biblioteca solto em nenhum outro lugar da página fora do logo.
- **Paleta (aproximação, sem hex confirmado):**
  - Fundo escuro / cor "de casa" da marca: azul-marinho / índigo escuro profundo (não usar azul turquesa/ciano genérico de "site de dentista" — a marca real é mais sóbria e editorial que isso).
  - Painel claro / contraponto: creme / off-white (não branco puro).
  - Texto sobre fundo escuro: branco / off-white.
  - Texto sobre painel claro: o mesmo azul-marinho, aplicado como cor de texto.
  - Accent de prova social: dourado / champanhe — usado só nas estrelas do selo de avaliação e pequenos destaques pontuais (numeração de passos, divisores). Esta cor não foi observada no post original; é uma escolha de refinamento para dar peso visual ao número da prova social.
  - Verde WhatsApp: reservado exclusivamente ao botão/ícone de WhatsApp — cor funcional, não decorativa, nunca espalhada pela página como cor de marca.
  - Nenhuma quinta cor forte deve ser introduzida além dessas.
  - Como os valores hexadecimais exatos não estão confirmados (leitura aproximada de um único print, não medida por color picker), use uma aproximação razoável e profissional dessa paleta descrita por nome — nunca substitua por uma paleta genérica de clínica odontológica (azul clínico claro, verde-água, branco frio).
- **Tipografia:** o logo mantém sua própria fonte script — não repita esse estilo cursivo nos títulos do corpo da página (duas fontes script na mesma tela cansam). Títulos (H1/H2): tipografia com presença e sobriedade, serifada editorial ou sans-serif de peso forte. Corpo/UI/botões: sans-serif neutra, altamente legível, sem arredondamento infantilizado. O número da prova social (4,9 / 162 avaliações) merece tratamento tipográfico próprio, em escala grande — o maior número da página.
- **Tom visual geral:** acolhedor, direto, confiante. Azul-marinho profundo transmite seriedade sem frieza clínica; creme suaviza sem parecer hospitalar.

**Evitar deliberadamente (clichê do nicho, mesmo com marca real):**

- azul turquesa/ciano genérico de "app de saúde";
- ícone de dente solto como elemento decorativo em qualquer lugar fora do logo;
- fotos de stock de sorriso perfeito/modelo genérico — nenhuma foto real de espaço, equipe ou paciente está confirmada; não usar fotos de pessoas como se fossem da clínica real;
- gradientes "app de saúde" e tom infantilizado;
- excesso de glow, sombras pesadas, cards genéricos sem intenção.

**Alternância de fundo:** as seções alternam entre fundo escuro (azul-marinho) e claro (creme) de forma intencional, criando ritmo de marca — nunca dois blocos escuros ou dois blocos claros consecutivos sem propósito.

### ESTRUTURA DA PÁGINA

Criar as seções abaixo, nesta ordem (mobile-first — esta é a ordem real de rolagem no mobile, sem reordenar por breakpoint):

#### 1. Header

Função:
Fixar o logo da marca sempre visível, sinalizando desde o primeiro instante que é uma clínica com identidade própria estabelecida, não um negócio recém-criado.

Copy:
Logo "vero" (texto em script/cursiva + ícone de dente estilizado, se possível recriar com fidelidade).

Comportamento:
Header compacto, sempre visível ao rolar (sticky ou fixo). Sem menu de navegação complexo — este é um protótipo de página única focado em conversão, não um site institucional com múltiplas páginas.

---

#### 2. Hero

Função:
Responder em segundos "quem é, onde fica, por que confiar, como eu chamo" — inclusive comunicar, só pela presença do logo e da paleta real, que é uma clínica com marca própria estabelecida.

Tagline de marca (linha de apoio junto ao logo, no header ou logo abaixo dele no Hero):
> Cuidamos dos sorrisos de todas as idades.

Headline (H1):
> Nota 4,9 em 162 avaliações reais. A confiança já existe — agora ela tem para onde ir.

Subheadline:
> A Vero Odontologia atende na R. Martim Afonso de Souza, 375, em Santo André. Chame no WhatsApp e agende sua avaliação.

CTA principal (WhatsApp):
> **Falar no WhatsApp**

CTA secundário (telefone):
> **Ligar para a clínica**

Selo de apoio junto ao CTA (versão condensada da prova social):
> **4,9 ★ · 162 avaliações no Google**

Texto de apoio abaixo do botão principal:
> Atendimento em Santo André

Comportamento:
Fundo em azul-marinho/índigo escuro, com respiro generoso — sem imagem de fundo genérica de stock. Headline em tipografia de título forte, branco/off-white sobre o fundo escuro. CTA principal de WhatsApp visível sem rolar — botão sólido em verde WhatsApp, com ícone oficial de WhatsApp, área de toque confortável (mínimo 48px de altura no mobile). CTA secundário de telefone visualmente subordinado (outline/contorno), nunca do mesmo peso do botão de WhatsApp. Selo compacto da nota (4,9★ / 162 avaliações) com estrelas em dourado, posicionado próximo ao CTA.

---

#### 3. Bloco de confiança

Função:
Transformar o dado que hoje está "escondido" dentro do card do Google Maps no argumento visual central da página — o ativo real mais forte da Vero Odontologia.

Headline:
> Isso não é uma promessa de site. É o que 162 pessoas já confirmaram.

Corpo:
> A nota da Vero Odontologia não foi escrita para esta página — ela existe há tempo no Google Maps, construída avaliação por avaliação, por quem já foi atendido. 4,9 de 5, com 162 avaliações reais. É esse histórico que está por trás de cada consulta marcada aqui.

Selo/destaque visual:
> **4,9 ★ · 162 avaliações no Google**

Comportamento:
Módulo dedicado em fundo azul-marinho (mesma família do Hero, ou tom levemente distinto para criar pausa visual). Número "4,9" em escala tipográfica grande — o maior número da página —, estrelas em dourado ao lado. "162 avaliações" como legenda de apoio, nunca menor que o corpo de texto padrão. Texto de apoio sempre honesto sobre a fonte ("no Google" / "avaliações reais"). Não recrie o logotipo oficial do Google como selo — use tratamento tipográfico próprio referenciando "avaliações no Google" em texto, nunca ícone de marca de terceiro.

---

#### 4. Cuidado odontológico (linguagem ampla)

Função:
Dar contexto mínimo de "o que a clínica faz" sem inventar especialidade — seção deliberadamente mais sóbria porque o conteúdo é genérico por necessidade.

Headline:
> Cuidado com o seu sorriso, do jeito que a sua rotina precisar

Corpo:
> Cada pessoa chega a uma consulta odontológica por um motivo diferente — uma dor, uma prevenção de rotina, uma avaliação antes de decidir um tratamento, ou simplesmente para colocar em dia o cuidado com os dentes. Cuidamos dos sorrisos de todas as idades: a Vero Odontologia atende em Santo André para conversar sobre o que você precisa e indicar o melhor caminho a partir daí.
>
> Se você já sabe o que procura ou ainda está com dúvida sobre o tipo de atendimento, o primeiro passo é o mesmo: chamar a clínica no WhatsApp.

Comportamento:
Fundo em creme/off-white, texto em azul-marinho — cria alternância de ritmo com as seções escuras vizinhas. Bloco de texto simples, sem cards de "serviços" (evita sugerir uma lista de especialidades não confirmada). Espaço em branco generoso, sem ícones de procedimentos específicos. Se houver elemento gráfico de apoio, deve ser abstrato/decorativo em dourado sutil — nunca outro ícone de dente solto.

---

#### 5. Como funciona o contato

Função:
Reduzir a fricção de "não sei o que esperar ao entrar em contato" — mostrar o caminho em 3 passos simples, nomeando WhatsApp explicitamente como canal preferencial.

Headline:
> Marcar uma consulta é simples

Passos:
1. **Chame a Vero Odontologia no WhatsApp** — (11) 99396-7923.
2. **Conte o que você precisa** — uma dúvida rápida, uma avaliação ou já uma consulta específica.
3. **Combine o melhor horário** — direto com a clínica, sem burocracia.

Reforço abaixo dos passos:
> Não é preciso saber exatamente o tratamento antes de chamar. Se você ainda tem dúvida sobre convênio, tipo de atendimento ou disponibilidade, essas são exatamente as perguntas certas para começar a conversa.

CTA de reforço (repetido ao final dos 3 passos):
> **Falar no WhatsApp**

Comportamento:
Fundo creme (continuidade com a seção anterior) ou transição para azul-marinho antes da localização. Layout de 3 passos numerados, empilhados verticalmente no mobile. Numeração destacada em dourado. CTA de WhatsApp repetido ao final, mesma hierarquia visual do CTA do Hero.

---

#### 6. Localização

Função:
Resolver diretamente a objeção de proximidade — "será que fica perto o suficiente de mim?".

Headline:
> Fácil de encontrar, em Santo André

Corpo:
> **R. Martim Afonso de Souza, 375 — Santo André, SP**
>
> Confira a localização exata no mapa abaixo antes de vir até a clínica.

CTA secundário:
> **Ver no mapa**

Comportamento:
Endereço em destaque tipográfico sobre fundo claro. Incorporar embed real do Google Maps com o endereço confirmado (R. Martim Afonso de Souza, 375, Santo André, SP). Não inventar referência de bairro, ponto comercial próximo ou tempo de deslocamento — nenhum desses dados está confirmado. CTA "Ver no mapa" em outline, subordinado ao CTA de WhatsApp. Embed com altura reduzida e responsiva no mobile.

---

#### 7. FAQ

Função:
Reduzir objeções prováveis do nicho sem afirmar nenhum dado não confirmado (convênio, horário). Onde a resposta não existe, a copy convida ao contato direto — nunca inventa.

Perguntas e respostas:

**A Vero Odontologia atende convênio?**
> Isso pode variar. O jeito mais rápido de confirmar é chamar a clínica no WhatsApp antes da sua consulta.

**Como eu agendo uma consulta ou avaliação?**
> Basta chamar a Vero Odontologia no WhatsApp — (11) 99396-7923 — e informar o que você precisa. A própria clínica confirma o melhor horário com você.

**Não sei exatamente qual tratamento eu preciso — posso chamar mesmo assim?**
> Sim. Muitas pessoas entram em contato só para tirar uma dúvida ou marcar uma avaliação inicial, sem saber ainda o próximo passo. É justamente para isso que serve o primeiro contato.

**A nota 4,9 é real?**
> Sim — é a nota pública da Vero Odontologia no Google, com 162 avaliações de pacientes reais. Você pode conferir diretamente no Google Maps.

**Qual o horário de atendimento?**
> O horário pode variar. Chame a clínica no WhatsApp para confirmar a disponibilidade mais próxima da sua data preferida.

Comportamento:
Fundo creme, formato acordeão no mobile (perguntas colapsadas por padrão, mínimo 48px de área de toque). Ícone de expansão neutro (+ / seta). Pergunta em peso tipográfico mais forte que a resposta.

---

#### 8. CTA final

Função:
Última chance de conversão — reforça nota/avaliações como fechamento de confiança, "moldura" de marca que fecha a página no mesmo tom que a abre.

Headline:
> 162 pacientes já confiaram na Vero Odontologia. Chame no WhatsApp e marque a sua consulta.

CTA principal (WhatsApp):
> **Falar no WhatsApp**

CTA secundário (telefone):
> **Ligar para a clínica**

Reforço final (linha de apoio abaixo do botão):
> Atendimento em Santo André — R. Martim Afonso de Souza, 375

Comportamento:
Bloco de destaque final em azul-marinho, mesma família visual do Bloco de confiança. Selo de avaliação condensado (4,9★ / 162 avaliações), dourado. CTA principal de WhatsApp repetido em tamanho igual ou maior que o do Hero — é o último elemento antes do footer. CTA de telefone disponível como alternativa secundária, discreta.

---

#### 9. Footer

Função:
Informação de contato mínima e confirmada, sem elementos legais/sociais inventados.

Copy:
> **Vero Odontologia**
> Cuidamos dos sorrisos de todas as idades.
>
> R. Martim Afonso de Souza, 375 — Santo André, SP
> WhatsApp: (11) 99396-7923
> Telefone: (11) 4453-8633
>
> **Falar no WhatsApp**
>
> © 2026 Vero Odontologia — Todos os direitos reservados

Comportamento:
Fundo azul-marinho escuro (continuidade de marca). Logo em versão compacta, se possível. Sem CNPJ, horário de funcionamento ou texto legal (não confirmados). Sem ícone de Instagram (o canal existe e está confirmado, mas o @/link direto ainda não — não incluir ícone "morto" sem link real). Não inventar ano de fundação nem razão social.

---

### WHATSAPP

- **Número confirmado:** (11) 99396-7923
- **Link:** `https://wa.me/5511993967923`
- **Telefone fixo (canal secundário):** (11) 4453-8633 — link `tel:+551144538633`

Usar o link de WhatsApp em todos os CTAs principais da página (Hero, "Como funciona o contato", CTA final). No mobile, manter o CTA de WhatsApp como barra fixa (sticky) no rodapé da viewport durante a rolagem, a partir do momento em que o Hero sai da tela.

Não foi confirmada uma mensagem pré-preenchida específica para o link do WhatsApp — se o Lovable suportar `?text=`, deixar sem mensagem pré-preenchida ou usar apenas uma saudação genérica neutra (ex.: "Olá! Vim pelo site da Vero Odontologia."), nunca uma mensagem que assuma um serviço, convênio ou tratamento específico não confirmado.

### REGRAS DE CONTEÚDO

- Não usar placeholders.
- Não usar lorem ipsum.
- Não inventar dados.
- Não inventar depoimentos.
- Não inventar números além de 4,9★ e 162 avaliações (ambos confirmados).
- Não inventar anos de experiência.
- Não inventar certificações.
- Não inventar equipe, nomes de dentistas ou formação.
- Não inventar preços, promoções ou convênios.
- Não inventar especialidades (ortodontia, implantes, estética, odontopediatria etc.) — usar apenas a linguagem ampla de "cuidado odontológico" já definida na seção 4.
- Não inventar horário de funcionamento.
- Não usar superlativos não comprovados ("a melhor", "referência do bairro", "mais bem avaliada da região") — mesmo a nota sendo real, não há comparação direta e verificada com outras clínicas.
- Evitar copy genérica — toda seção desta página já está ancorada em pelo menos um dado real (nota/avaliações/endereço/tagline real) ou em convite direto ao contato, nunca em frases genéricas de nicho tipo "atendimento de qualidade" ou "equipe especializada".
- Preservar a copy aprovada exatamente como está escrita acima — não reescrever headlines, CTAs ou FAQ.

### REGRAS VISUAIS

- Mobile-first.
- CTA de WhatsApp evidente e sticky no mobile.
- Visual premium e confiável, honrando a identidade de marca real (logo script + paleta azul-marinho/creme), não uma paleta genérica de clínica odontológica.
- Espaçamento generoso.
- Hierarquia clara — o número "4,9" é o maior elemento numérico da página.
- Poucos efeitos, bem controlados.
- Evitar aparência de template genérico de dentista.
- Evitar azul turquesa/ciano clínico.
- Evitar ícone de dente solto fora do logo.
- Evitar glow e gradientes excessivos.
- Evitar fotos de stock de sorriso genérico ou de pessoas como se fossem pacientes/equipe reais.
- Evitar animações que atrapalhem a conversão.

### REQUISITOS TÉCNICOS

- Responsivo em mobile, tablet e desktop.
- Botões com área de toque confortável (mínimo 48px de altura).
- CTA de WhatsApp sticky no mobile, a partir do momento em que o Hero sai da tela.
- HTML semântico dentro da estrutura React.
- Componentes organizados.
- Acessibilidade básica: texto alternativo "Nota 4,9 de 5 estrelas, baseada em 162 avaliações reais no Google" no selo de avaliação; texto alternativo "Abrir conversa no WhatsApp com a Vero Odontologia" no ícone de WhatsApp.
- SEO básico: title e meta description mencionando "Vero Odontologia", "Santo André" e "dentista".
- Performance leve.
- Código limpo para posterior refinamento no Claude Code.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vero-sa-site.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/07ac0537-7ffd-4f90-a5b8-b94a87d149e6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
