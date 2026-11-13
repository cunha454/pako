# Pako — Plano detalhado de execução do frontend web

> **Período:** 13/11/2026 a 11/12/2026  
> **Entrega final:** sexta-feira, 11/12/2026  
> **Entregas intermediárias:** 13/11, 20/11, 27/11 e 04/12/2026  
> **Tecnologia:** Angular (versão e estrutura existentes a verificar no repositório)  
> **Escopo:** interface web do vendedor; base visual isolada da branch com simulações criada na semana final  
> **Estado do documento:** plano de execução aprovado em suas diretrizes funcionais e visuais; ajustes técnicos dependem da inspeção do código existente.

---

## 1. Objetivo do documento

Orientar, **dia a dia**, a construção do frontend do Pako, uma plataforma de gestão e agendamento de entregas. Cada dia contém o objetivo, a sequência de execução, os comportamentos esperados e os testes de conclusão. As **sextas-feiras são marcos de entrega**, não apenas dias de desenvolvimento: ao final de cada uma deve existir uma parte utilizável e demonstrável do frontend.

O projeto completo, conforme o `README.md`, considera um frontend Angular para vendedores, backend Python/FastAPI, banco MySQL, um bot do Telegram para clientes e um aplicativo para entregadores. **Este documento não implementa essas outras partes**. As telas devem ser preparadas para integração futura, sem simular que dados fictícios sejam dados reais.

### 1.1 O que será entregue

- Oito páginas principais do vendedor: **Login, Cadastro, Dashboard, Meu perfil, Nova encomenda, Simular frete, Entregas agendadas e Entregas concluídas**.
- Fluxos auxiliares integrados às páginas, sem alterar a contagem das oito telas: recuperação e confirmação de e-mail, alteração de senha, modal de detalhes, modal de avaliação, modal de cancelamento e aba **Canceladas** dentro de Entregas concluídas.
- Componentes reutilizáveis para campos, validação, sidebar, modais, notificações, tabelas, paginação, estados vazios, skeleton loading e gráficos.
- Base visual utilizável sem dados operacionais; **simulações e estado demonstrativo em memória somente na branch separada da semana final**.
- Interface responsiva para desktop e celular e documentação técnica mínima para executar/demonstrar a aplicação.

### 1.2 Fora do escopo desta fase

- Backend FastAPI, banco MySQL, endpoints e persistência permanente.
- Autenticação real, emissão de tokens, envio de SMS ou e-mail e redefinição verdadeira de senha.
- Bot do Telegram funcional, integração com app do entregador e roteirização.
- Endereço real do cliente na área do vendedor; não criar campos, respostas de mock nem detalhes que revelem esse endereço.
- Pagamentos, cálculo real de preço/prazo, contratação de entregadores, notificações push e rastreamento real.
- Definição de infraestrutura de produção e publicação pública, salvo decisão posterior.

> **Regra de honestidade da interface:** resultados de frete, links, autenticação, e-mails e mudanças de status devem ser identificáveis como simulados na demonstração. Nenhum botão deve aparentar realizar uma integração externa efetiva.

---

## 2. Calendário e estratégia de trabalho

| Marco | Sexta-feira | Semana de execução | Resultado esperado |
|---|---|---|---|
| 1 | **13/11/2026** | 13/11 | Fundação técnica, tema e navegação inicial |
| 2 | **20/11/2026** | 16–20/11 | Login, Cadastro e Meu perfil |
| 3 | **27/11/2026** | 23–27/11 | Nova encomenda e Simular frete: formulários e visual, sem cálculos fictícios ativos |
| 4 | **04/12/2026** | 30/11–04/12 | Tabelas, modais e Dashboard visual, sem fluxos simulados |
| 5 | **11/12/2026** | 07–11/12 | Nova branch de demonstração, simulações completas, integração, testes e entrega final |

**Ritmo semanal:** segunda a quarta para construção; quinta para integração, alinhamento e revisão; sexta para testes de aceite, correções críticas e apresentação.

**Separação obrigatória:** até a sexta **04/12** desenvolver apenas o site visual na branch de frontend. Na **segunda 07/12**, a partir de um commit validado dessa base, criar uma **nova branch de simulação**. Não mesclar automaticamente os controles de teste na branch visual. No dia 11/12, apresentar a branch visual e a branch de demonstração separadamente.

**Prioridade em caso de atraso:** (1) fluxo navegável e regras de privacidade; (2) operações principais; (3) filtros/paginação; (4) refinamentos visuais. Não encurtar os testes da entrega final para acrescentar funcionalidades fora do escopo.

### 2.1 Definição de pronto para qualquer tarefa

Uma tarefa só deve ser marcada como concluída quando: o código compila; não há erro impeditivo no navegador; o fluxo pode ser demonstrado; o comportamento mobile correspondente foi verificado; dados fictícios não expõem informações vedadas; e o trabalho está registrado em commit ou outra trilha de versionamento adotada pela equipe.

### 2.2 Registro de avanço

No encerramento de cada dia, registrar: tarefas concluídas, arquivos/componentes alterados, testes executados, bloqueios, decisões tomadas e foco do dia seguinte. Na sexta-feira, registrar adicionalmente o resultado da demonstração, defeitos encontrados e ajustes pendentes.

---

## 3. Regras de produto já decididas

### 3.1 Cadastro, Login e perfil

- Cadastro em **três etapas**: (1) Identificação, (2) Endereço de coleta, (3) Dados de acesso.
- Pessoa Física: **nome completo e CPF obrigatórios**, nome comercial opcional; Pessoa Jurídica: **CNPJ e nome fantasia obrigatórios**; ambos exigem telefone com DDD.
- Sem verificação de telefone por SMS. E-mail deve ser confirmado antes do primeiro acesso; ambos os fluxos serão simulados.
- Um único endereço fixo de coleta, com consulta de CEP simulada e edição manual dos campos preenchidos.
- E-mail, senha e confirmação de senha na etapa final; senha com pelo menos oito caracteres, uma maiúscula, uma minúscula, um número e um símbolo; campos de senha com opção mostrar/ocultar.
- Login com e-mail **ou** CPF **ou** CNPJ e senha, sem opção “Manter conectado”. Após confirmação do e-mail: Login; após Login simulado: Dashboard.
- Recuperação de senha por e-mail simulada. Meu perfil inicia em modo leitura, com botão **Editar perfil**, **Alterar senha** e **Sair da conta**; sair exige confirmação.
- Navegar entre etapas preserva os valores em memória; atualizar/fechar a página não deve recuperar um rascunho. Não persistir senhas em armazenamento local.

### 3.2 Nova encomenda

- Um pedido contém **um único pacote**, mesmo que reúna vários produtos.
- Número sequencial gerado automaticamente: **0001, 0002, 0003...**.
- Campos obrigatórios: altura, largura e comprimento em **cm**, peso em **kg** com decimal.
- Cuidados especiais opcionais e combináveis: **Frágil**, **Manter na posição vertical**, **Perecível**.
- Não solicitar valor comercial dos produtos, nome do remetente a cada pedido nem endereço do destinatário.
- Remetente é o vendedor, a partir do perfil; o cliente informa seu nome e demais dados futuramente pelo Telegram.
- Criar pedido produz um link **fictício** em modal de confirmação com **Copiar link**. Ao fechar o modal, navegar para Entregas agendadas.
- Pedido recém-criado aparece como **Aguardando cliente**, sem nome de cliente nem horários até que a simulação de agendamento os forneça.

### 3.3 Simular frete

- Endereço de origem obtido do perfil; entrada de **CEP de destino**, altura, largura, comprimento e peso.
- Resultado contém **valor estimado em R$ e prazo estimado** — ambos fictícios.
- Independente de Nova encomenda: **não cria pedido nem reaproveita os dados em um cadastro**.
- Permitir editar valores e simular novamente; oferecer **Nova simulação** para limpar entradas e resultado.

### 3.4 Entregas agendadas

- Mostrar pedidos desde a criação até antes da conclusão ou do cancelamento.
- Status ativos: **Aguardando cliente**, **Aguardando coleta**, **Em transporte**.
- Tabela desktop com **Pedido**, **Cliente**, **Status**, **Recebimento**, **Coleta prevista**.
- Ordenação padrão: previsão de coleta mais próxima; pedidos sem previsão ao final. Permitir outras opções por **seletor Ordenar por**; cabeçalhos não são clicáveis.
- Pesquisa automática por nome ou número do pedido, com botão **X**; filtro por status; botão **Limpar filtros**; controles distribuídos em duas linhas.
- Número do pedido abre modal de detalhes. **Nunca mostrar o endereço do cliente**. Enquanto Aguardando cliente, mostrar novamente link fictício e Copiar link.
- Atualizações simuladas de status reorganizam a tabela conforme a ordenação ativa, preservando pesquisa, filtros e página atual quando possível; linha atualizada recebe destaque verde suave.
- Ao concluir: retirar de Agendadas e incluir em Concluídas. Ao cancelar antes da coleta: retirar de Agendadas e incluir na aba Canceladas.

### 3.5 Entregas concluídas e canceladas

- Página **Entregas concluídas** com abas **Concluídas** e **Canceladas**, ambas com tabelas próprias.
- Colunas de Concluídas: **Pedido**, **Cliente**, **Data da entrega**, **Avaliação**, **Ação**; ordenação padrão da conclusão mais recente para a mais antiga.
- Filtro de período por **data inicial e final**, e filtro **Todas / Avaliadas / Pendentes de avaliação**.
- Avaliação geral de **1 a 5 estrelas** e comentário opcional; avalia-se **uma única vez por entrega**. Após avaliar, oferecer consulta à avaliação no lugar do botão Avaliar.
- Cancelamento permitido **somente antes da coleta**, com **motivo obrigatório** e modal de confirmação. Histórico de Canceladas consultável; não incluir cancelamentos entre as entregas efetivamente concluídas.

### 3.6 Dashboard

- Indicadores: **Entregas concluídas no mês** e **Entregas aguardando coleta**. O segundo direciona para Entregas agendadas.
- Dois atalhos discretos no topo direito: **Nova encomenda** e **Simular frete**.
- Abaixo, dois gráficos em painéis separados lado a lado no desktop: **barras de concluídas por mês**, com filtro de ano; **linha de concluídas por dia**, com filtro conjunto de mês/ano. Filtros independentes e centralizados **abaixo** de cada gráfico.
- O indicador mensal de concluídas acompanha o mês/ano escolhido no gráfico diário.
- Sem histórico recente, excesso de indicadores nem botão Atualizar. Em telas estreitas, empilhar gráficos.
- Como o estado inicial não contém encomendas, indicadores começam em zero; gráficos devem exibir zeros/estado apropriado sem quebrar.

### 3.7 Visual, tabelas e interações globais

- Tema **somente claro**, verde principal `#174B35`, fundo `#F5F7F5`, painéis `#FFFFFF`, bordas finas, sem sombras marcantes; cantos por volta de **6 px**; fonte **Inter**; espaçamento equilibrado.
- Sidebar verde-escura: expandida ou recolhida no computador; menu oculto e sobreposto no celular.
- Tabelas sem seleção múltipla; **20 registros/página**, paginação inferior e cabeçalho fixo na área rolável. No celular, apenas colunas essenciais e modal responsivo para detalhes.
- Controles de tabelas em duas linhas: **pesquisa + Limpar filtros**; depois **filtros + Ordenar por**. Pesquisa automática com pequeno debounce, sem botão Pesquisar.
- Filtrar ou pesquisar volta à primeira página; atualização automática mantém página atual se ela existir, senão vai para a última disponível; **Limpar filtros** restaura pesquisa, filtros, ordenação e primeira página.
- Estados vazios com mensagem explicativa e ação contextual quando útil. Loading por **skeletons**.
- Status por etiquetas discretas com cores suaves e texto: Aguardando cliente, Aguardando coleta, Em transporte, Concluída e Cancelada (histórico).
- Notificações temporárias no canto superior direito por **8 segundos**, com fechamento manual; sucesso, erro e atualização informativa. Atualizações de linha recebem destaque suave temporário.
- Campo obrigatório marcado com `*`; erro abaixo do campo ao perder foco ou ao tentar continuar/salvar; corrigir remove erro; formulário inválido não avança.
- Se há alteração não salva, tentar sair/cancelar deve abrir confirmação de descarte. A interceptação de fechamento/atualização do navegador será limitada ao que o navegador permitir.

---

## 4. Diretrizes de execução técnica

Estas são **sugestões de implementação**, não afirmações sobre arquivos já existentes. Devem ser adaptadas após inspeção do repositório.

### 4.1 Antes de escrever código

1. Ler o `README.md` e as configurações reais do projeto (`package.json`, `angular.json`, estrutura `src/`, rotas e testes existentes).
2. Verificar a versão do Angular e as bibliotecas **já instaladas**; não impor uma versão ou adicionar frameworks desnecessários.
3. Inspecionar o Git (`git status`, branch atual, remotes, diferenças locais) antes de criar `feature/frontend-visual` ou sincronizar branches; não descartar alterações pré-existentes.
4. Identificar a estratégia existente para componentes standalone ou módulos, formulários, estilos e roteamento; seguir esse padrão.
5. Verificar se há biblioteca de gráficos ou componentes adequada. Só introduzir dependência nova após avaliar peso, manutenção e compatibilidade.
6. Executar os comandos de instalação/build/test **definidos no próprio projeto**; `npm install`, `npm start`, `ng serve`, `ng build` e `ng test` são exemplos, não instruções universais.

### 4.2 Organização sugerida

```text
src/app/
  core/                 # navegação, contratos, tipos e utilitários; demo só na branch derivada
  shared/               # campos, validações, modais, tabela, toast, skeleton, etc.
  layouts/              # shell do vendedor, sidebar, menu mobile e acesso
  pages/
    login/
    cadastro/
    dashboard/
    perfil/
    nova-encomenda/
    simular-frete/
    entregas-agendadas/
    entregas-concluidas/
```

A organização final deve respeitar o padrão encontrado no projeto. Os fluxos auxiliares de e-mail e senha podem ser componentes ou rotas secundárias; **não precisam criar novas entradas na sidebar**.

### 4.3 Separação entre a versão visual e a versão simulada

**Objetivo:** ter duas versões identificáveis do mesmo frontend, sem acrescentar controles de demonstração à versão visual normal.

| Versão | Branch sugerida | Conteúdo e limite |
|---|---|---|
| Site visual (base) | `feature/frontend-visual` | Oito páginas, rotas, validações e componentes; interfaces preparadas para integração, sem estado operacional fictício, transições automáticas nem botões de demonstração. |
| Site simulado (derivada) | `feature/frontend-simulacoes` | Tudo da base + `DemoDataService` em memória, ações fictícias de cliente/entregador, confirmações simuladas de login/e-mail, cálculo fictício de frete, links, indicadores e gráficos alimentados pelas ações. |

**Procedimento Git obrigatório (07/12):**

1. Inspecionar o repositório real com `git status`, `git branch --show-current`, `git branch --list` e `git log -1 --oneline`; confirmar a branch base. **Não executar checkout com alterações não commitadas sem preservá-las**.
2. Resolver alterações locais de maneira explícita (commit na branch de origem ou stash com identificação e recuperação posterior). Não descartar arquivos ou reescrever commits existentes.
3. Garantir que a versão visual compile e esteja registrada em commit. Se a branch `feature/frontend-visual` já existir, reutilizá-la; não sobrescrever branches homônimas.
4. A partir do commit confirmado da versão visual, criar `feature/frontend-simulacoes`, somente se ainda não existir e após verificar que é o ponto correto de partida. Exemplo **condicional**: `git switch feature/frontend-visual` e `git switch -c feature/frontend-simulacoes`.
5. Registrar o SHA do commit da base no diário de execução. Implementar as simulações **somente** na nova branch.
6. Após a criação, verificar a branch ativa com `git branch --show-current` antes de qualquer alteração. Fazer commits pequenos por grupo de simulações e rodar build/testes.
7. Na entrega final, manter as duas branches separadas: **não fazer merge nem cherry-pick de simulações para `feature/frontend-visual`** sem autorização posterior. Comparar `git diff feature/frontend-visual...feature/frontend-simulacoes` e demonstrar o isolamento.

> **Observação:** nomes são sugestões. É necessário conhecer a configuração real do repositório para executar esses comandos. Este plano **não cria a branch no repositório**; apenas determina quando e como criá-la durante a execução.

### 4.3.1 Contrato das interfaces antes da simulação

- Na base visual, criar contratos/tipos de `Vendedor`, `Pacote`, `Encomenda`, `Avaliacao`, `Cancelamento` e `ResultadoFrete`, **sem popular dados** e sem enviar informações para servidores.
- Botões que dependerão de integrações futuras não devem fingir sucesso na base: podem estar visivelmente indisponíveis, ter uma descrição de funcionalidade futura ou abrir prévias estritamente visuais. Evitar fluxo fictício ativo antes da branch de demonstração.
- Separar componentes da camada de operações: as páginas não devem conter `Math.random`, atualização improvisada de status ou CEPs inventados. Na branch de demonstração, injetar/adaptar provedores locais para as ações.
- Para testar a base antes de 07/12, usar testes de componentes, estados vazios, stories/previews isoladas ou fixtures de testes **fora do fluxo operacional do site**. Não iniciar a experiência com pedidos carregados.

### 4.3.2 Modelos de dados usados somente na branch de demonstração

| Modelo | Campos necessários | Observações |
|---|---|---|
| `Vendedor` | tipo PF/PJ, nome de exibição, CPF/CNPJ de teste, telefone, e-mail, endereço de coleta | Apenas informações fictícias, sem senhas armazenadas |
| `Pacote` | alturaCm, larguraCm, comprimentoCm, pesoKg, frágil, vertical, perecível | Valores numéricos, formatação pt-BR na interface |
| `Encomenda` | id, código, pacote, status, link fictício, criação, nomeCliente?, recebimento?, coletaPrevista?, conclusao?, cancelamento?, avaliacao? | **Não conter endereço do cliente no modelo exposto ao vendedor** |
| `Avaliacao` | estrelas (1–5), comentário opcional, data | No máximo uma por entrega concluída |
| `Cancelamento` | motivo obrigatório, data | Antes da coleta apenas |
| `ResultadoFrete` | valorEstimado, prazoEstimado, indicador demonstrativo | Sem cotação real e sem criação de encomenda |

**Estado inicial do demo:** sem vendedor pré-logado e sem encomendas. Ao criar pedidos, gerar sequência `0001`, `0002` etc. em memória. Reset ao recarregar é permitido. Não usar `localStorage` para senhas, dados sensíveis ou endereço de cliente. Consulta de CEP, frete, confirmação de e-mail, recuperação de senha e login têm respostas **explicitamente demonstrativas**. Agendamento, coleta e conclusão devem ser acionados por controles identificados como **Modo demonstração**, e nunca por bot real.

### 4.4 Componentes compartilhados prioritários

- `AppShell`/`Sidebar`: navegação desktop/mobile, estados expandido/recolhido.
- `FormField`: label, asterisco obrigatório, ajuda, entrada e erro abaixo do campo.
- `PasswordField`: alternância visível/oculto e validação.
- `ConfirmDialog` e `DetailsDialog`: modais acessíveis, fechar, cancelar, confirmar.
- `ToastService`/`ToastContainer`: sucesso/erro/informação, duração de 8 s, fechar manualmente.
- `DataTable`: paginação 20, sticky header, estados vazios e skeleton; campos de pesquisa/filtros ficam em área externa configurável.
- `StatusBadge`: texto e cor suave consistentes.
- `EmptyState` e `Skeleton`: para listas e Dashboard.
- Contratos e interfaces de serviços na branch visual; `OrderStore`/`DemoDataService` com estado compartilhado e transições fictícias **apenas na branch de simulação**.

**Acessibilidade mínima:** rótulos associados aos campos, navegação por teclado, foco visível, ícones com descrição quando forem botões, modal com gerenciamento de foco, mensagens de erro legíveis, contraste adequado e status compreensíveis sem depender exclusivamente de cores.

---

# 5. Execução diária e entregas

## Semana 1 — 13/11/2026 — Fundação técnica

### Sexta-feira, 13/11 — Inspeção, organização, tema e navegação inicial

**Objetivo:** criar uma base sólida e executável sem assumir que o repositório está vazio.

**Passo a passo:**

1. Abrir o repositório, ler o `README.md`, identificar scripts e dependências, checar `git status` e confirmar a estratégia de branch sem sobrescrever trabalho existente.
2. Executar a aplicação como ela existe; registrar erros de instalação/execução já presentes. Corrigir somente os problemas que bloqueiem a fundação.
3. Mapear as oito rotas principais e criar páginas provisórias com títulos claros. Rotas auxiliares de recuperação de senha e confirmação de e-mail podem ser adicionadas na Semana 2.
4. Configurar os tokens visuais: verde `#174B35`, fundo `#F5F7F5`, branco, borda discreta, raio `6px`, tipografia Inter e espaçamento padrão. Garantir fallback de fonte adequado.
5. Construir um `AppShell` simples com sidebar desktop em verde, menu de navegação, estado ativo e área principal. Preparar botão de recolher; no mobile, iniciar a estrutura do menu sobreposto.
6. Implementar um primeiro conjunto de estilos base: botões, painéis, foco, etiquetas e largura de conteúdo. Deixar componentes compartilhados completos para as próximas semanas.
7. Testar manualmente: carregar a aplicação, abrir todas as rotas, confirmar item ativo, verificar alinhamento com sidebar expandida/recolhida e inspecionar no tamanho de celular.

**Entregável de sexta (Marco 1):** frontend executável, oito rotas provisórias e identidade visual consistente, com navegação básica demonstrável.

**Aceite:** [ ] build funciona; [ ] páginas são acessíveis; [ ] tema aplicado; [ ] sidebar visível; [ ] navegação sem erro impeditivo; [ ] padrões da base documentados.

---

## Semana 2 — 16 a 20/11 — Acesso, cadastro e perfil (somente versão visual)

### Segunda-feira, 16/11 — Layout de autenticação e Login

**Executar:** (1) criar `AuthLayout` dividido desktop e faixa verde mobile; (2) renderizar campos de identificador e senha; (3) criar botão olho, asteriscos e erros por `blur`/envio; (4) adicionar links visuais para Cadastro e Recuperação de senha; (5) configurar rotas e foco/teclado. **Não criar autenticação falsa nem liberar login a partir de credenciais arbitrárias na base.** A ação Entrar deve indicar que aguarda integração ou ficar inativa com explicação. O fluxo demonstrativo será conectado em 07/12.

**Verificar:** ambos os layouts, regras de erro, teclado, leitura de senha, links e ausência de navegação que alegue sessão autenticada.

### Terça-feira, 17/11 — Cadastro, etapa 1

**Executar:** (1) criar formulário em etapas com barra de progresso visual; (2) permitir seleção PF/PJ; (3) campos PF: nome, CPF, telefone, nome comercial opcional; PJ: CNPJ, nome fantasia, telefone; (4) máscaras e validação de formato; (5) preservar dados enquanto navega pelas etapas; (6) bloquear etapa seguinte com erros. **Sem criar perfil fictício persistente.**

**Verificar:** asteriscos, mensagens após foco/continuar, PF/PJ, alternância sem mistura dos dados, mobile.

### Quarta-feira, 18/11 — Cadastro, etapas 2 e 3

**Executar:** (1) CEP, rua, número, bairro, cidade, UF e complemento; (2) criar campos e estados visuais para o futuro preenchimento pelo CEP, mas **não retornar CEPs fictícios ainda**; (3) permitir correção manual; (4) e-mail, senha e confirmação com os cinco critérios; (5) progressão Voltar/Continuar com dados preservados; (6) tela visual de confirmação de e-mail com mensagem inequívoca de integração futura, **sem simular envio ou ativação**; (7) modal de descarte de alterações.

**Verificar:** layout em três etapas, regras de senha, CEP válido/inválido visualmente, retorno entre etapas, ausência de rascunho após refresh.

### Quinta-feira, 19/11 — Meu perfil e fluxos auxiliares visuais

**Executar:** (1) seções de dados, endereço de coleta e segurança; (2) modo leitura e edição com formulários/validações; (3) modais de alterar senha, sair da conta e descartar alterações; (4) telas de recuperação/redefinição de senha; (5) definir pontos de extensão para efeitos de salvar/enviar/entrar, mas **sem confirmação de ações inexistentes**; (6) revisar responsividade e acessibilidade.

**Verificar:** abertura/fechamento de modais, campos, navegação, erros, teclado e zero integrações fictícias ativas.

### Sexta-feira, 20/11 — Entrega 2: telas de acesso e perfil

**Demonstrar:** (1) tela de Login e suas validações; (2) Cadastro nas três etapas e retorno sem perda; (3) campos de PF/PJ; (4) Perfil em consulta e modo edição; (5) modais e recuperação visual. **Não prometer login, e-mail ou alteração de senha realizados.** Executar build/testes, revisar mobile e registrar commit.

**Aceite:** [ ] telas navegáveis; [ ] formulários validados; [ ] modais visuais; [ ] base sem serviço de simulação; [ ] nenhum aviso falso de e-mail enviado; [ ] commit da versão visual. **20/11 é feriado; antecipar revisão/apresentação para 19/11 quando necessário.**

---

## Semana 3 — 23 a 27/11 — Formulários de encomenda e frete (somente versão visual)

### Segunda-feira, 23/11 — Nova encomenda: campos e validação

**Executar:** (1) formulário com altura/largura/comprimento em cm e peso decimal em kg; (2) entrada numérica pt-BR e conversão consistente; (3) checkboxes opcionais combináveis para Frágil, Vertical e Perecível; (4) erros abaixo do campo por `blur`/envio; (5) confirmação de descarte; (6) responsividade e foco. Não pedir endereço do cliente, valor comercial ou remetente manual.

**Verificar:** campos positivos, peso `0,250`, zero/negativos inválidos, combinações de cuidados e layout mobile.

### Terça-feira, 24/11 — Nova encomenda: modal e contrato de criação

**Executar:** (1) contrato `Encomenda` e interface de operação `criarEncomenda`, sem implementação operacional; (2) desenhar modal de sucesso com número/link **apenas como estrutura visual**, sem gerar pedido ou link com aparência real; (3) inserir placeholders para botão Copiar link e fechamento com navegação; (4) desabilitar/identificar ações não conectadas; (5) preparar tela Agendadas para estado inicial vazio; (6) testar estados de componentes isolados (fixtures fora do uso normal).

**Verificar:** modal responsivo, campos e layout preparados para o serviço de demonstração da Semana 5; **não existe pedido cadastrado em memória na base visual**.

### Quarta-feira, 25/11 — Simular frete: formulário e resultado visual

**Executar:** (1) origem baseada no campo de endereço do perfil quando disponível; (2) CEP de destino, altura, largura, comprimento e peso; (3) painel de resultado com espaços reservados para valor em R$ e prazo; (4) validação de CEP e números; (5) indicação de que cálculo real e demonstrativo ainda não estão conectados; (6) responsividade. **Não executar cálculo fictício nesta branch**.

**Verificar:** valor inválido, CEP insuficiente, painéis, formatos, nenhum dado criado em Nova encomenda.

### Quinta-feira, 26/11 — Recalcular, limpar e revisão visual

**Executar:** (1) criar a interface do botão Nova simulação, com limpeza local dos campos (sem simular frete); (2) preparar ação de simular novamente para conectar depois; (3) ajustar formulários compartilhados, modal, skeleton e mensagens; (4) conferir separação entre as páginas de frete e encomenda; (5) revisar desktop/mobile e preparar apresentação.

**Verificar:** formulário limpo sem tocar outras telas, placeholders coerentes e nenhum resultado fictício produzido antes da Semana 5.

### Sexta-feira, 27/11 — Entrega 3: formulários de encomenda e frete

**Demonstrar:** (1) preenchimento e validação de Nova encomenda; (2) design do modal de confirmação em prévia isolada; (3) formulário de frete e painel de resultado ainda sem valores; (4) limpeza do formulário; (5) responsividade e estados vazios. Executar build/testes e registrar commit.

**Aceite:** [ ] duas páginas completas visualmente; [ ] validações corretas; [ ] componentes preparados para integração; [ ] sem pedidos ou links fictícios em execução; [ ] branch visual preservada.

---

## Semana 4 — 30/11 a 04/12 — Tabelas, modais e Dashboard visual (sem simulações)

### Segunda-feira, 30/11 — Entregas agendadas: tabela e controles

**Executar:** (1) criar tabela com Pedido, Cliente, Status, Recebimento e Coleta prevista; (2) definir cabeçalho fixo e layout reduzido para celular; (3) criar pesquisa única por nome/número, botão X, filtro por status, seletor de ordenação e Limpar filtros em duas linhas; (4) paginar 20 registros; (5) estado vazio com botão Nova encomenda; (6) aceitar coleção vazia de um provedor futuro. **Não popular pedidos iniciais nem simular mudanças**.

**Verificar:** estado vazio real; controles sem erros; com fixtures de testes isoladas, validar busca/paginação/ordenador sem adicionar pedidos ao site normal.

### Terça-feira, 01/12 — Detalhes e estados visuais dos pedidos

**Executar:** (1) modal de detalhes com campos previstos, link de agendamento como região reservada para Aguardando cliente e controle Copiar link desabilitado até integração; (2) etiquetas suaves para Aguardando cliente, Aguardando coleta e Em transporte; (3) criar templates de confirmação, toast e realce temporário; (4) preparar componentes para atualizar por mudança observável de estado, **sem gatilho de simulação no produto**; (5) garantir ausência do endereço do destinatário.

**Verificar:** modal em desktop/mobile, foco e privacidade; estados por fixtures nos testes isolados.

### Quarta-feira, 02/12 — Entregas concluídas e avaliações: interface

**Executar:** (1) aba Concluídas, tabela com Pedido, Cliente, Data da entrega, Avaliação e Ação; (2) filtros por período e situação da avaliação, busca, ordenação e paginação; (3) modal de avaliação com estrelas 1–5 e comentário opcional; (4) modal de visualização da avaliação; (5) preparar componentes para impedir segundo envio **quando o serviço de simulação for conectado**; (6) estado vazio e mobile.

**Verificar:** validação da seleção de estrelas, campos, filtros por fixtures isoladas e nenhuma avaliação salva no site visual.

### Quinta-feira, 03/12 — Canceladas, modais e Dashboard visual

**Executar:** (1) aba Canceladas com tabela, consulta ao motivo e data; (2) modal de cancelamento com motivo obrigatório e confirmação, sem efetivar cancelamento; (3) criar Dashboard com dois indicadores vazios e atalhos Nova encomenda/Simular frete; (4) desenhar painéis de barras anual e linha diária com controles de mês/ano abaixo; (5) reutilizar estados vazios, bordas e responsividade; (6) fazer revisão geral da base visual.

**Verificar:** oito telas e abas visuais, zero inicial no Dashboard, modais e filtros, nenhum fluxo de cliente/entregador ativado.

### Sexta-feira, 04/12 — Entrega 4: site visual completo e congelamento da base

**Demonstrar:** (1) as oito telas, rotas e sidebar; (2) formulário de criação e modal em prévia visual; (3) frete sem cotação fictícia; (4) tabelas vazias, pesquisa, filtros e componentes isoladamente; (5) modais de detalhes, avaliação e cancelamento em prévias de componentes; (6) Dashboard com estrutura e estados vazios; (7) celular e desktop.

**Fechamento obrigatório:** compilar e executar testes, corrigir bloqueadores, registrar pendências e **fazer commit limpo da branch visual**. Registrar o SHA para a derivação em 07/12. Não fazer demonstração de uma entrega ficticiamente concluída neste marco.

**Aceite:** [ ] oito páginas estruturadas; [ ] validações e componentes visuais; [ ] dados operacionais vazios; [ ] sem `DemoDataService` ativo; [ ] build/testes; [ ] base pronta para criar a branch de simulação.

---

## Semana 5 — 07 a 11/12 — Branch separada e todas as simulações

> **Regra central da semana:** a versão visual já estará congelada/commitada. A partir de 07/12, trabalhar exclusivamente em uma **nova branch** para simular as integrações e o fluxo ponta a ponta. Os resultados apresentados ao usuário deverão mostrar claramente que são demonstrativos. A entrega final terá dois artefatos lógicos: site visual normal e site de demonstração.

### Segunda-feira, 07/12 — Criar branch e simular acesso, cadastro e dados do perfil

**Objetivo:** isolar e iniciar o ambiente de demonstração sem alterar o site normal.

**Passo a passo:**

1. Verificar `git status`, branch ativa, commits locais e existência da branch nova. Se houver alterações não salvas, preservá-las por commit ou stash identificado; jamais descartá-las.
2. Confirmar build e commit da base `feature/frontend-visual`. **Criar `feature/frontend-simulacoes` a partir dela**, se não existir; conferir com `git branch --show-current` e anotar SHA de origem. Não mesclar de volta sem aprovação.
3. Criar pasta de implementações demonstrativas (`core/demo/` ou equivalente) e `DemoDataService` com estado **em memória inicialmente vazio**. Separar métodos de criação, atualização, conclusão, cancelamento e avaliação, com validações de transições.
4. Adicionar vendedor demonstrativo **somente quando o usuário finalizar o cadastro visual**; não pré-carregar uma conta nem gravar senha. Implementar confirmação fictícia de e-mail por botão claramente marcado, direcionando para Login depois da confirmação.
5. Conectar Login a um **modo de acesso demonstrativo**, sem autenticação real nem alegação de credenciais verificadas; conectar recuperação/redefinição de senha e alteração de senha a confirmações fictícias claramente indicadas, sem enviar e-mails ou persistir senhas.
6. Implementar mapa local pequeno de CEPs ilustrativos para preenchimento simulado do endereço de coleta, com fallback para edição manual, mensagem de dado demonstrativo e tratamento de CEP desconhecido.
7. Conectar modo de consulta/edição de Meu perfil ao estado temporário; saída retorna ao Login por fluxo visual, sem sessão de servidor.
8. Testar: PF/PJ, nome opcional, CEP fictício/desconhecido, regras de senha, confirmação de e-mail, Login de demonstração, perfil, sair e reset após recarregar. Criar commit da etapa.

**Aceite:** [ ] branch derivada do commit correto; [ ] versão visual intacta; [ ] acesso e CEP claramente simulados; [ ] nenhuma senha salva; [ ] dados temporários; [ ] testes/build passam.

### Terça-feira, 08/12 — Simular Nova encomenda e Simular frete

**Objetivo:** fazer os dois formulários funcionarem com dados fictícios, mantendo-os independentes.

**Passo a passo:**

1. Conectar `criarEncomenda` ao serviço temporário. Iniciar lista vazia e contador zero; ao salvar um pacote validado gerar `0001`, depois `0002`, sem duplicidade durante a sessão.
2. Associar pacote e cuidados especiais ao pedido com status **Aguardando cliente** e data de criação. Sem nome, endereço ou horário do cliente até agendamento posterior.
3. Criar link demonstrativo **claramente fictício**, sem redirecionar para Telegram verdadeiro. Exibir modal com pedido, link e Copiar link; tratar falhas de clipboard e toast de sucesso com 8 s.
4. Ao fechar modal, navegar para Agendadas; o pedido deve surgir automaticamente da fonte compartilhada. Permitir copiar o mesmo link novamente no detalhe enquanto Aguardando cliente.
5. Conectar Simular frete à origem do perfil e à entrada de CEP, dimensões e peso. Usar uma função determinística local **de valores e prazos inventados**; entradas idênticas geram resultados idênticos. Mostrar aviso “Simulação demonstrativa — não é cotação real”.
6. Fazer Recalcular reutilizar entradas atuais; Nova simulação limpa campos e resultado, sem alterar origem do perfil. **Nunca criar um pedido ao simular frete**.
7. Testar dois pedidos sequenciais, inputs inválidos, peso decimal, controles especiais, cópia do link, reset de formulário, cálculo repetível, sem vínculo entre frete e pedidos. Criar commit.

**Aceite:** [ ] pedidos criados por interação sem lista pré-carregada; [ ] numeração; [ ] link fictício; [ ] Agendadas refletindo criação; [ ] frete demonstrativo determinístico e independente.

### Quarta-feira, 09/12 — Simular Telegram, coleta, transporte, conclusão, cancelamento e avaliação

**Objetivo:** tornar demonstrável o ciclo inteiro da encomenda, sem implementar bot ou aplicativo do entregador.

**Passo a passo:**

1. Criar uma seção discreta **Modo demonstração** dentro do modal de detalhes (ou controle de testes claramente identificado), disponível **somente na branch simulada**. Ela não representa uma ação permitida ao vendedor no sistema final.
2. **Simular agendamento do cliente:** quando Aguardando cliente, oferecer entrada de **nome fictício** e horário de recebimento. Não solicitar nem armazenar endereço de cliente na área do vendedor. Atribuir previsão fictícia de coleta; usar “30 min antes” somente como hipótese de demonstração, **não regra definitiva**.
3. Mudar o pedido para **Aguardando coleta** e atualizar automaticamente a linha, filtros, pesquisa, ordenação por coleta mais próxima e página atual quando possível. Exibir toast 8 s e realce suave temporário.
4. **Simular coleta:** somente de Aguardando coleta para **Em transporte**. **Simular conclusão:** somente de Em transporte para **Concluída** com data/hora. Remover de Agendadas e incluir na aba Concluídas, sem duplicar.
5. **Simular cancelamento:** disponível apenas para Aguardando cliente e Aguardando coleta. Exigir motivo não vazio, confirmar e mover à aba Canceladas com data e justificativa. Impedir cancelamento após coleta e reativação na demo.
6. **Simular avaliação:** em Concluídas, registrar 1–5 estrelas e comentário opcional; após gravar em memória, substituir botão Avaliar por Visualizar avaliação; impedir segunda avaliação por interface e estado.
7. Testar a sequência inteira e seus caminhos alternativos. Usar somente clientes fictícios. Conferir endereço do cliente ausente de objetos, modais, logs e tabelas; não revelar informações indevidas.
8. Testar com buscas, filtros e paginação ativos; verificar cabeçalho fixo, layout mobile, destaque e notificação; fazer commit.

**Aceite:** [ ] controles isolados na branch de demo; [ ] transições coerentes; [ ] cancelamento obrigatório; [ ] avaliação única; [ ] tabelas sincronizadas; [ ] privacidade do destinatário.

### Quinta-feira, 10/12 — Simular indicadores e gráficos, testar integração e corrigir

**Objetivo:** fechar o vínculo entre os registros demonstrativos e o Dashboard e executar ensaio da entrega.

**Passo a passo:**

1. Conectar o indicador **Entregas aguardando coleta** ao total de pedidos com esse status, com clique para Agendadas. Conectar **Entregas concluídas no mês** às datas reais de conclusão **dentro do estado fictício**.
2. Alimentar o gráfico de barras por quantidade de conclusões por mês no ano escolhido e o gráfico de linha por dia do mês/ano selecionado. Filtros independentes; indicador mensal acompanha o gráfico diário; meses/dias vazios são zero.
3. Iniciar a demo do zero, sem registros pré-carregados; testar conta, pedidos, agendamento, coleta, entrega, avaliação e cancelamento até gerar dados para ambos os gráficos.
4. Para testar 20/21+ registros, criar pedidos via ações de teste **na branch simulada**, sem mudar o estado inicial vazio; verificar debounce, busca, X, filtros, Limpar filtros, ordenação, cabeçalho fixo e paginação.
5. Validar toast de 8 s, realce, skeletons em carregamentos demonstrativos e modais em desktop/mobile. Verificar privacidade do cliente em todos os estados e ausência de promessas de frete real.
6. Executar build, testes e lint conforme scripts existentes; corrigir erros críticos. Comparar branches para assegurar que a base não recebeu controles/serviços fictícios (`git diff feature/frontend-visual...feature/frontend-simulacoes`).
7. Registrar instruções para alternar branches, iniciar o site normal e rodar a demo; explicar que a demo reinicia após refresh e não envia e-mails, usa Telegram nem calcula fretes reais. Ensaiar apresentação. Criar commit.

**Aceite:** [ ] Dashboard calculado a partir de pedidos da demonstração; [ ] filtros independentes; [ ] 20+ registros validados; [ ] flows consistentes e responsivos; [ ] branches isoladas; [ ] testes/build.

### Sexta-feira, 11/12 — Entrega 5: duas versões e apresentação final

**Objetivo:** entregar a interface base intacta e uma demonstração funcional separada.

**Roteiro de entrega:**

1. Verificar que a **branch visual** executa/compila, tem as oito telas e **não contém os controles de Modo demonstração**. Registrar o commit da base.
2. Trocar para a **branch de simulação** com árvore de trabalho limpa, verificar nome ativo e rodar build/testes.
3. Abrir a demo **vazia**, com Dashboard zerado e tabelas vazias. Cadastrar vendedor fictício, simular confirmação de e-mail e Login.
4. Criar Pedido `0001` e Pedido `0002`, mostrando validação, numeração, links fictícios, Copiar link e status inicial Aguardando cliente.
5. No Pedido `0001`, simular nome e horário do cliente, previsão de coleta, coleta, transporte e conclusão. Demonstrar atualização da tabela, realce e toast.
6. Avaliar o Pedido `0001` uma única vez e mostrar seu efeito na aba Concluídas e nos indicadores/gráficos.
7. Cancelar o Pedido `0002` antes da coleta com motivo obrigatório e mostrar a aba Canceladas, sem somar como concluída.
8. Simular frete, alterar parâmetros, recalcular, limpar e confirmar que o contador de encomendas não muda.
9. Testar pesquisa, filtros, paginação, modal mobile e sidebar. Exibir que endereço do cliente nunca aparece.
10. Documentar SHA de ambas as branches, scripts, testes, limites e pendências. **Não mesclar a branch de simulação na visual sem decisão explícita.**

**Entregáveis:** (a) frontend visual normal na branch base; (b) frontend de demonstração com simulações na branch separada; (c) roteiro e documentação de execução/comparação.

**Checklist final:**

- [ ] `feature/frontend-visual` compilável e sem lógica operacional simulada.
- [ ] `feature/frontend-simulacoes` criada a partir da visual e compilável.
- [ ] Não houve merge automático entre branches.
- [ ] Cadastro, e-mail e Login funcionam somente em modo demonstrativo, sem autenticação real.
- [ ] Pedido começa em `0001`, estado inicialmente vazio, link fictício e Telegram ausente.
- [ ] Agendamento, coleta, conclusão, avaliação e cancelamento só por controles rotulados Modo demonstração.
- [ ] Frete fictício determinístico, independente da criação de pedidos.
- [ ] Dashboard, tabelas, busca, filtros, paginação, notificações e mobile demonstrados.
- [ ] Endereço do destinatário ausente da interface e dos mocks do vendedor.
- [ ] Commits, build, testes, limites e instruções registrados.

---

## 6. Matriz de testes por funcionalidade

**Momento de execução:** testes de estrutura e validação de componentes até 04/12; testes que dependem de pedidos, frete ou transições fictícias **somente de 07 a 11/12, na branch de demonstração**.

| Área | Caso obrigatório | Resultado esperado |
|---|---|---|
| Login | Identificador vazio ou senha vazia | Erro abaixo do campo, sem navegar |
| Login | Mostrar/ocultar senha | Alternância imediata e acessível |
| Cadastro | Alternar CPF/CNPJ | Campos correspondentes sem vazamento entre tipos |
| Cadastro | Voltar/Continuar | Dados preservados na sessão de formulário |
| Cadastro | Atualizar página | Sem recuperação de rascunho |
| Cadastro | Senha sem símbolo ou maiúscula | Regra inválida indicada |
| Cadastro | CEP inexistente na simulação | Mensagem clara e edição manual disponível |
| Perfil | Cancelar alterações | Nada aplicado sem confirmação, se houver mudanças |
| Nova encomenda | Peso `0,250` kg | Valor decimal aceito |
| Nova encomenda | Altura zero/negativa | Validação impede criação |
| Nova encomenda | Primeiro e segundo pedidos | `0001` e `0002` durante a sessão |
| Nova encomenda | Clicar Copiar link | Clipboard/feedback, sem Telegram real |
| Agendadas | Pedido recém-criado | Aguardando cliente; cliente e horários sem dados inventados |
| Agendadas | Simular agendamento | Cliente nomeado ficticiamente, recebimento e coleta previstos |
| Agendadas | Atualizar status filtrado | Ordenação atual preservada; página atual mantida se possível |
| Agendadas | Pedido sem previsão | Posicionado depois dos pedidos com previsão na ordenação padrão |
| Agendadas | Pesquisa por cliente ou número | Mesmo campo encontra ambos |
| Agendadas | Mais de 20 registros | Paginação correta e cabeçalho fixo |
| Concluídas | Simular conclusão | Sai de Agendadas e entra em Concluídas |
| Concluídas | Avaliar 1 vez | Nota/comentário visíveis; segunda avaliação impedida |
| Concluídas | Período + avaliação | Filtros combinados coerentes |
| Canceladas | Cancelar antes da coleta | Exige motivo e move ao histórico |
| Canceladas | Cancelar em transporte | Ação indisponível |
| Privacidade | Abrir todos os modais/tabelas | Endereço do cliente não aparece |
| Frete | Simular e alterar peso | Resultado fictício recalculado |
| Frete | Nova simulação | Limpa formulário e resultado, sem apagar origem do perfil |
| Frete | Simular | Não cria encomenda |
| Dashboard | Estado vazio | Indicadores zero; gráficos sem erro |
| Dashboard | Concluir encomenda | Indicadores e gráficos coerentes com data de conclusão |
| Dashboard | Cancelar encomenda | Não soma concluídas |
| Responsividade | Celular | Menu sobreposto; tabelas essenciais; modais utilizáveis |
| Notificações | Sucesso/erro/atualização | Toast some após 8 s ou ao clicar X |

---

## 7. Riscos, dependências e decisões de implementação

| Risco/dependência | Impacto | Mitigação |
|---|---|---|
| Estrutura atual do Angular não conhecida | Alterar arquitetura existente desnecessariamente | Inspecionar repositório no dia 13/11 e adaptar plano |
| A primeira semana tem só um dia útil | Fundação incompleta | Entregar base simples; refinamentos de componentes seguem na Semana 2 |
| Feriado em 20/11 | Disponibilidade reduzida para entrega | Revisar e apresentar em 19/11 se não houver expediente |
| Semana final concentra todas as simulações | Risco de atrasar fluxos demonstrativos | Preparar contratos e componentes até 04/12; priorizar fluxo ponta a ponta na branch de demo |
| Estado em memória reinicia ao atualizar | Demonstração pode perder pedidos | Avisar explicitamente; preparar roteiro de teste que começa vazio |
| Branch de demo contaminando site visual | Controles fictícios aparecem na base normal | Criar branch separada em 07/12 e não mesclar; comparar commits e diffs antes da entrega |
| Ausência de Telegram/entregador | Impossível obter agendamento real | Usar ações de simulação claramente rotuladas, sem criar bot real |
| Simulação de preço/prazo pode parecer real | Expectativas incorretas | Identificar valores como demonstrativos e usar cálculo fictício determinístico |
| Privacidade do cliente | Exposição indevida do destino | Modelos e componentes do vendedor sem endereço do destinatário |
| Dados de agenda e datas | Inconsistência em gráficos/filtros | Centralizar datas e formatação; testar fronteiras de mês/ano |
| Dependências novas incompatíveis | Build quebrado | Inspecionar versões e preferir bibliotecas já adotadas |

### 7.1 Pontos não definidos em detalhe que não devem bloquear o trabalho

As escolhas abaixo podem ser resolvidas como **decisões técnicas locais**, sem ampliar o escopo e mantendo a interface simples:

- Nome exato dos arquivos e componentes, conforme arquitetura Angular encontrada.
- Biblioteca para gráficos, se alguma já estiver presente; caso contrário, escolher solução adequada à versão existente.
- Duração visual do destaque temporário de linha (diferente dos **8 s**, já definidos apenas para as notificações).
- Lista exata de opções alternativas de Ordenar por, preservando obrigatoriamente as ordenações padrão decididas.
- Colunas secundárias e filtros da aba Canceladas, preservando a consulta de pedido, motivo e data.
- Formato exato dos prazos fictícios do simulador; não confundi-los com promessas de entrega.
- Localização dos botões de teste de status/agendamento, que devem ficar claramente identificados como controles de demonstração.

Qualquer mudança de regra de negócio — por exemplo, permitir cancelamento depois da coleta, incluir endereço do cliente para o vendedor ou transformar a simulação de frete em criação de pedido — **não** é ajuste técnico local: exige nova decisão explícita.

---

## 8. Checklist de entrega por sexta-feira

### Marco 1 — 13/11
- [ ] Repositório inspecionado, branch visual verificada/criada com segurança.
- [ ] Tema e rotas provisórias executáveis.
- [ ] Sidebar básica e estrutura inicial responsiva.

### Marco 2 — 20/11
- [ ] Login, Cadastro em três etapas e Meu perfil montados visualmente.
- [ ] CPF/CNPJ, endereço, senha, validações e modais prontos.
- [ ] Sem e-mails, login ou CEP fictícios em execução na versão normal.
- [ ] Feriado de 20/11 considerado na apresentação.

### Marco 3 — 27/11
- [ ] Nova encomenda e Simular frete com formulários/validações e layout final.
- [ ] Modais e painel de resultado preparados, sem operações de demonstração.
- [ ] Estado inicial vazio, sem criação fictícia de pedidos nem preço fictício ativo.

### Marco 4 — 04/12
- [ ] Tabelas Agendadas, Concluídas e Canceladas com estrutura, estados vazios e controles.
- [ ] Modais, avaliação, cancelamento e Dashboard preparados visualmente.
- [ ] Oito telas com navegação, responsividade, build e testes.
- [ ] **Commit da branch visual registrado e pronto para derivação.**

### Marco 5 — 11/12
- [ ] **Nova branch `feature/frontend-simulacoes` criada e conferida em 07/12**.
- [ ] Fluxos de conta/e-mail/CEP fictícios e criação de pedidos implementados **somente na branch simulada**.
- [ ] Agendamento do cliente, coleta, entrega, avaliação e cancelamento testados por controles de demonstração.
- [ ] Valor/prazo fictícios e Dashboard integrados com o estado temporário.
- [ ] Todos os resultados apresentados como demonstrativos, sem endereço do cliente.
- [ ] Site visual mantido intacto, sem merge automático; SHAs e instruções registrados.
- [ ] Build, testes, responsividade e apresentação final concluídos.

---

## 9. Roteiro mínimo para apresentação final

**Parte A — site visual normal (`feature/frontend-visual`):** mostrar as oito telas, navegação, identidade, formulários, tabelas vazias, filtros, modais e estados visuais. Evidenciar a ausência de controles de cliente/entregador e ausência de pedidos/cotações inventados.

**Parte B — site simulado (`feature/frontend-simulacoes`):** (1) verificar branch ativa; (2) começar vazio; (3) cadastrar vendedor fictício, confirmar e-mail e fazer login demonstrativo; (4) criar pedidos 0001 e 0002; (5) simular agendamento, coleta, conclusão e avaliação do primeiro; (6) cancelar o segundo com motivo; (7) simular frete com cálculo e recálculo determinísticos; (8) mostrar Dashboard atualizado, filtros, paginação e versão celular; (9) explicar reset após refresh, sem integração real e sem endereço de cliente.

**Comparação final:** registrar commits e, se conveniente, mostrar diferenças entre as branches. Nunca apresentar a versão de demonstração como um sistema real em produção.

---

