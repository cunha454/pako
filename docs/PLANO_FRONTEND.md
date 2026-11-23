# Pako — Planejamento diário do frontend web

> **Período:** 13/11/2026 a 11/12/2026.  
> **Entrega final:** **sexta-feira, 11/12/2026**.  

## 1. Como executar este plano

Cada dia de desenvolvimento apresenta um **objetivo**, uma **sequência de atividades** e uma **entrega concreta**. As regras detalhadas de campos, status, privacidade e componentes estão em `DECISOES_PROJETO.md`, sem repetição integral aqui. A implementação deve contemplar as **oito telas**: Login, Cadastro, Meu perfil, Nova encomenda, Simular frete, Entregas agendadas, Entregas concluídas e Dashboard.

As funcionalidades visuais e demonstrativas serão construídas progressivamente, com a integração das interações a cada nova tela. Validações de formulário, restrições de status e acessibilidade continuam como parte da implementação.

## 2. Visão geral dos marcos

| Data | Tipo | Resultado que deve estar disponível |
|---|---|---|
| **13/11 (sex)** | Abertura do projeto | Fundação técnica, tema, oito rotas e `AppShell` com Sidebar e navegação inicial |
| **24–26/11** | Desenvolvimento | Layout de autenticação, Login ,Cadastro completo, fluxos de acesso demonstrativo, perfil e estrutura compartilhada |
| **27/11 (sex)** | **Demonstração 1** | Login, Cadastro em três etapas, Perfil e fluxos auxiliares de conta |
| **30/11–03/12** | Desenvolvimento | Nova encomenda, frete fictício, tabela de Agendadas e transições demonstrativas |
| **04/12 (sex)** | **Demonstração 2** | Criação de pedidos, simulação de frete e evolução de entregas em Agendadas |
| **07–10/12** | Desenvolvimento | Concluídas, Canceladas, avaliações, Dashboard e integração completa de estados |
| **11/12 (sex)** | **Apresentação final** | Oito telas e ciclo demonstrativo completo em uma única branch |

## 3. Abertura do projeto — 13/11

### Sexta-feira, 13/11 — Fundação técnica, tema e AppShell

**Objetivo:** estabelecer a base Angular do frontend, com identidade visual e navegação inicial para as oito páginas do vendedor.

**Atividades em ordem:**

1. Examinar a estrutura real do repositório Angular, incluindo `package.json`, `angular.json`, `src/`, rotas, dependências e comandos existentes. Conferir o estado do Git antes de modificar arquivos.
2. Organizar páginas, layouts, componentes compartilhados, tipos e serviços conforme o padrão adotado pelo projeto. Utilizar uma única branch para o desenvolvimento.
3. Definir os estilos globais do tema claro: verde `#174B35`, fundo `#F5F7F5`, painéis brancos, bordas discretas, raio aproximado de `6px`, fonte Inter, espaçamentos, botões e foco visível.
4. Construir o `AppShell` das páginas internas com área principal e Sidebar verde-escura, incluindo itens de navegação, indicação da rota ativa e estrutura para expansão/recolhimento no desktop e menu sobreposto no celular.
5. Configurar as oito rotas principais — Login, Cadastro, Dashboard, Meu perfil, Nova encomenda, Simular frete, Entregas agendadas e Entregas concluídas — com páginas iniciais identificadas e sem dados operacionais inventados.
6. Preparar os elementos visuais básicos reutilizáveis, como botões, painéis e etiquetas, mantendo consistência entre páginas e tamanhos de tela.

**Entrega do dia:** fundação Angular organizada, tema inicial aplicado, `AppShell` e Sidebar básicos e oito rotas navegáveis. Esta sexta marca a abertura do desenvolvimento; as sextas posteriores são reservadas às demonstrações.

## 4. Semana de 23 a 27/11 — Conta, cadastro e perfil

### Segunda-feira, 23/11 — Layout de autenticação e Login

**Objetivo:** construir a tela de Login e a estrutura visual de acesso ao sistema, aproveitando a navegação geral já definida.

**Atividades em ordem:**

1. Criar o `AuthLayout` separado do `AppShell`, com apresentação adequada ao desktop e ao celular.
2. Montar o formulário de Login com identificador (e-mail, CPF ou CNPJ) e senha, seguindo o tema e os componentes visuais do projeto.
3. Implementar a opção de mostrar/ocultar a senha, os campos obrigatórios e mensagens de validação de preenchimento.
4. Adicionar links para Cadastro e Recuperação de senha, definindo as rotas auxiliares correspondentes.
5. Organizar estados de foco, tabulação por teclado, espaçamento dos campos e adaptação responsiva.
6. Preparar a ação de Entrar para o acesso demonstrativo que será conectado junto ao fluxo de cadastro, identificando claramente a ausência de autenticação real.

**Entrega do dia:** Login com layout próprio, campos, validações, navegação auxiliar e apresentação responsiva.

### Terça-feira, 24/11 — Cadastro: identificação e endereço de coleta

**Objetivo:** completar as duas primeiras etapas do cadastro, com navegação e dados de formulário em memória.

**Atividades em ordem:**

1. Criar o fluxo de três etapas com progresso visível, botões Voltar/Continuar e preservação dos valores enquanto o usuário navega; reutilizar componentes de campo do Login.
2. Implementar na etapa **Identificação** a escolha PF/PJ e exibir os campos específicos: PF (nome completo, CPF, telefone, nome comercial opcional) e PJ (CNPJ, nome fantasia, telefone).
3. Aplicar máscaras de CPF/CNPJ e telefone, obrigatoriedade e mensagens de formato; impedir avanço com campos inválidos e evitar misturar dados de PF e PJ.
4. Implementar a etapa **Endereço de coleta**, com CEP, rua, número, bairro, cidade, UF e complemento opcional; restringir o cadastro a um endereço de coleta.
5. Criar uma pequena fonte local de CEPs ilustrativos para preencher campos quando houver correspondência e permitir edição manual; no CEP desconhecido, deixar o preenchimento manual disponível. Identificar a consulta como **demonstrativa**.
6. Ajustar grade de campos, avanço/retorno entre etapas e layout em celular; adicionar confirmação de descarte se houver alterações ao sair do formulário.

**Entrega do dia:** etapas 1 e 2 completas, navegáveis, com dados preservados durante o formulário e CEP demonstrativo.

### Quarta-feira, 25/11 — Cadastro: acesso, confirmação de e-mail e Login demonstrativo

**Objetivo:** finalizar o cadastro e permitir entrar na aplicação por um fluxo explicitamente fictício.

**Atividades em ordem:**

1. Implementar a etapa **Dados de acesso**: e-mail, senha e confirmação; exigência de oito caracteres, maiúscula, minúscula, número e símbolo, com opção mostrar/ocultar.
2. Conectar as três etapas num fluxo único com retorno sem perda de dados e bloqueio de conclusão quando houver campos inválidos.
3. Criar a camada local de demonstração (serviço/estado compartilhado) para representar vendedor e confirmação de e-mail, sem persistir senha nem iniciar com usuário cadastrado.
4. Ao concluir o cadastro, abrir tela de confirmação de e-mail **simulada**. Disponibilizar controle identificado para marcar confirmação demonstrativa e então encaminhar ao Login; não simular envio real.
5. Ligar o Login ao acesso demonstrativo e redirecionar para Dashboard após o fluxo ilustrativo; tratar claramente o fato de não existir autenticação real.
6. Criar interface de recuperação/redefinição de senha, com mensagens de demonstração e sem envio de mensagem verdadeira; manter opção de voltar ao Login.
7. Integrar o Login e o fluxo de cadastro ao `AppShell` e às rotas internas definidas na abertura do projeto; preparar o rótulo de Modo demonstração nos pontos apropriados.

**Entrega do dia:** cadastro PF/PJ de três etapas com acesso fictício, confirmação de e-mail e recuperação visual de senha.

### Quinta-feira, 26/11 — Meu perfil e estrutura comum do aplicativo

**Objetivo:** fechar o conjunto de conta e deixar a navegação pronta para as páginas operacionais.

**Atividades em ordem:**

1. Criar **Meu perfil** no modo leitura, com identificação do vendedor, contato e endereço de coleta retirados do estado local do cadastro.
2. Implementar **Editar perfil**, com possibilidade de cancelar ou salvar alterações no estado demonstrativo; manter regras de PF/PJ e endereço único.
3. Criar o modal **Alterar senha**, com campos e regras de senha, mas aviso de que a alteração é demonstrativa e não produz credencial real persistida.
4. Criar modal de confirmação para **Sair da conta** e fazer o retorno visual ao Login; tratar também descarte de alterações não salvas.
5. Refinar a Sidebar e o `AppShell` iniciados em 13/11: concluir expandir/recolher no desktop, menu sobreposto no celular, estados ativos e navegação das oito rotas, mantendo páginas ainda não implementadas em estado vazio.
6. Consolidar `FormField`, `PasswordField`, botões, painéis, `ConfirmDialog` e notificações; aplicar tema claro, fonte Inter, cores e espaçamento definidos.
7. Deixar os controles de acesso e perfil coerentes entre telas, com mensagens explícitas sobre o caráter demonstrativo.

**Entrega do dia:** conjunto de conta, Meu perfil, navegação global e componentes reutilizáveis principais.

### Sexta-feira, 27/11 — Demonstração 1 (sem desenvolvimento previsto)

**Roteiro de apresentação:** apresentar a estrutura inicial do frontend, o tema claro, as oito rotas e o `AppShell` com Sidebar; mostrar a tela de Login, alternância de senha e links auxiliares; percorrer Cadastro PF e PJ com suas três etapas; usar consulta ilustrativa de CEP e edição manual; apresentar confirmação de e-mail e acesso demonstrativos; abrir Meu perfil, editar os dados, alterar senha de forma ilustrativa e sair. Mostrar a Sidebar em desktop e o menu mobile. Explicar que autenticação, e-mail e CEP ainda não são serviços reais.

**Marco da semana:** fundação visual e navegação global estabelecidas, com fluxo de conta completo e navegável para continuar o desenvolvimento. Registrar comentários recebidos e pendências, sem inserir implementação nova na sexta.

## 5. Semana de 30/11 a 04/12 — Encomendas, frete e acompanhamento

### Segunda-feira, 30/11 — Nova encomenda e criação demonstrativa de pedidos

**Objetivo:** possibilitar que um vendedor cadastrado gere encomendas fictícias com informações de pacote.

**Atividades em ordem:**

1. Criar a página **Nova encomenda**, ligada ao AppShell, com campos obrigatórios de altura, largura, comprimento (cm) e peso decimal (kg), aceitando formato pt-BR.
2. Adicionar opções combináveis **Frágil**, **Manter na posição vertical** e **Perecível**; não incluir valor dos produtos, remetente manual nem endereço de destinatário.
3. Criar os contratos `Pacote` e `Encomenda` e uma função local `criarEncomenda` no mesmo serviço compartilhado, com dados iniciais vazios e numeração `0001`, `0002` etc.
4. Ao salvar dados válidos, gerar status **Aguardando cliente** e link claramente fictício; abrir modal com código e ação **Copiar link**, com mensagem de retorno.
5. Ao fechar o modal, navegar para **Entregas agendadas**; preparar uma lista básica que já apresente o novo pedido, inicialmente sem cliente nem datas de agendamento.
6. Disponibilizar confirmação de descarte ao sair de um formulário parcialmente preenchido e adaptar campos/modal para celular.

**Entrega do dia:** pedidos criados na sessão, modal com link de demonstração, numeração sequencial e entrada visível em Agendadas.

### Terça-feira, 01/12 — Simular frete com resultado local fictício

**Objetivo:** concluir a segunda operação principal do vendedor sem criar encomendas.

**Atividades em ordem:**

1. Criar **Simular frete** com origem obtida do endereço do perfil, CEP de destino, medidas em cm e peso em kg.
2. Reutilizar campos numéricos e regras de entrada da Nova encomenda; permitir alterar os valores sem modificar o perfil.
3. Conectar um cálculo **determinístico local** que gere valor estimado em reais e prazo ilustrativo, sem consulta externa; identificar o resultado como não real.
4. Criar painel de resultado com valor, prazo e aviso de demonstração. Fazer **Simular novamente** usar os dados atuais e **Nova simulação** limpar campos/resultado, preservando a origem do perfil.
5. Manter o simulador separado da criação de pedidos, sem alterar contador, tabela de Agendadas ou dados da encomenda.
6. Organizar o layout responsivo e os estados vazios, indisponíveis ou de carregamento visual quando fizer sentido.

**Entrega do dia:** frete demonstrativo completo e independente de Nova encomenda.

### Quarta-feira, 02/12 — Entregas agendadas: tabela, pesquisa, filtros e detalhes

**Objetivo:** transformar a lista inicial em uma área completa de acompanhamento.

**Atividades em ordem:**

1. Construir tabela com **Pedido, Cliente, Status, Recebimento e Coleta prevista**, consumindo a coleção local de encomendas.
2. Implementar pesquisa automática por nome/código com botão X, filtro de status, seletor **Ordenar por** e **Limpar filtros**, em duas linhas.
3. Aplicar a ordenação padrão por coleta mais próxima, deixando encomendas sem previsão no final; incluir paginação de **20 registros** e cabeçalho fixo na área de rolagem.
4. Criar modal ao clicar no número: informações do pacote, status, datas disponíveis e link fictício enquanto **Aguardando cliente**. Não exibir endereço do destinatário.
5. Criar etiquetas discretas de status, estado vazio com ação **Nova encomenda**, versão mobile com colunas essenciais e modal responsivo.
6. Preparar toast de sucesso/erro/informação por **8 segundos**, fechamento manual e destaque suave para linha alterada.
7. Acoplar atualização reativa da tabela ao serviço local, preservando pesquisa, filtros e página atual quando possível.

**Entrega do dia:** página Agendadas operacional para consultar, pesquisar, filtrar, ordenar e abrir pedidos.

### Quinta-feira, 03/12 — Modo demonstração: agendamento, coleta e transporte

**Objetivo:** permitir apresentar a evolução do pedido depois de sua criação.

**Atividades em ordem:**

1. No modal de detalhes de Agendadas, criar área identificada **Modo demonstração**, separada dos controles normais do vendedor.
2. Para pedidos em **Aguardando cliente**, permitir preencher **nome fictício** e horário de recebimento; nunca solicitar nem guardar endereço do cliente.
3. Gerar uma coleta prevista fictícia (a ideia de 30 minutos antes é somente hipótese demonstrativa) e mudar para **Aguardando coleta**.
4. Para pedidos em **Aguardando coleta**, incluir **Simular coleta** e atualizar para **Em transporte**; impedir transições fora da sequência.
5. Implementar na camada de estado as bases das ações de **conclusão** e **cancelamento antes da coleta**, com motivo obrigatório; a apresentação completa dessas ações ficará vinculada às telas históricas na semana seguinte.
6. Atualizar tabela, ordenação, filtros, modal, toast e destaque da linha após mudanças de status, mantendo o funcionamento em desktop e celular.
7. Deixar visível o significado de cada ação fictícia, sem sugerir integração com Telegram ou aplicativo de entregador.

**Entrega do dia:** pedidos podem ser agendados ficticiamente e avançar da coleta para o transporte, com a infraestrutura de conclusão e cancelamento preparada.

### Sexta-feira, 04/12 — Demonstração 2 (sem desenvolvimento previsto)

**Roteiro de apresentação:** entrar como vendedor de demonstração; criar duas encomendas e mostrar numeração, cuidados especiais, link ilustrativo e **Aguardando cliente**; abrir Agendadas, pesquisar e filtrar; simular o agendamento fictício de uma delas, demonstrar previsão de coleta, coleta e transporte; apresentar o simulador de frete com recálculo e limpeza; explicar que os resultados não utilizam serviços reais.

**Marco da semana:** operações de encomenda e frete demonstráveis, com acompanhamento até **Em transporte**. Conclusão, cancelamento, avaliação e indicadores serão exibidos integralmente na apresentação final.

## 6. Semana de 07 a 11/12 — Histórico, Dashboard e fluxo completo

### Segunda-feira, 07/12 — Entregas concluídas, canceladas e mudanças finais de status

**Objetivo:** completar os caminhos de conclusão e cancelamento de encomendas.

**Atividades em ordem:**

1. Criar a página **Entregas concluídas**, com abas **Concluídas** e **Canceladas**, cada qual com sua tabela e estado vazio.
2. Na aba Concluídas, mostrar **Pedido, Cliente, Data da entrega, Avaliação, Ação**; incluir busca, período inicial/final, filtro **Todas/Avaliadas/Pendentes de avaliação**, ordenação por conclusão recente e paginação.
3. Conectar o controle **Simular conclusão**, permitido somente de **Em transporte**, para registrar data/hora e retirar automaticamente a encomenda de Agendadas, incluindo-a em Concluídas.
4. Criar ação/modal **Cancelar encomenda** exclusivamente antes da coleta, com motivo obrigatório e confirmação; ao aplicar, mover para Canceladas e registrar justificativa e data.
5. Na aba Canceladas, apresentar código, cliente quando disponível, data e motivo consultável; impedir retorno automático à lista de Agendadas.
6. Reutilizar `DataTable`, `StatusBadge`, modais, controles de busca e paginação com responsividade; preservar filtros quando houver atualização dos dados.
7. Manter as duas abas coerentes com a mesma fonte de dados local, sem criar cópias independentes dos pedidos.

**Entrega do dia:** trajetória até Concluída ou Cancelada refletida no histórico correto.

### Terça-feira, 08/12 — Avaliações e detalhes do histórico

**Objetivo:** fechar a consulta e a interação pós-entrega.

**Atividades em ordem:**

1. Criar modal de **Avaliar entrega**, disponível somente nas encomendas concluídas e ainda sem avaliação; selecionar **1 a 5 estrelas**, com comentário opcional.
2. Salvar avaliação no estado compartilhado, vinculada a uma única encomenda; impedir uma segunda avaliação para o mesmo pedido.
3. Substituir a ação **Avaliar** por **Visualizar avaliação** quando ela existir; criar modal de consulta com nota, comentário e informações da encomenda.
4. Atualizar o filtro **Avaliadas/Pendentes de avaliação** para refletir a ação recém-realizada sem perder a pesquisa e o período selecionados.
5. Revisar o modal de detalhes de Agendadas e os detalhes de Concluídas e Canceladas para apresentar apenas campos pertinentes a cada status.
6. Consolidar mensagens de confirmação e erro, fechamento de modal, acessibilidade por teclado e organização das colunas no celular.

**Entrega do dia:** histórico completo com avaliações únicas e consulta posterior.

### Quarta-feira, 09/12 — Dashboard e gráficos ligados às encomendas

**Objetivo:** apresentar visualmente os resultados da operação demonstrativa.

**Atividades em ordem:**

1. Criar página **Dashboard** e seus atalhos **Nova encomenda** e **Simular frete** no canto superior direito.
2. Exibir indicadores **Entregas concluídas no mês** e **Entregas aguardando coleta**, calculados a partir do estado local; fazer o indicador de coleta levar para Agendadas.
3. Criar gráfico de barras de **concluídas por mês**, com seleção de ano abaixo do gráfico.
4. Criar gráfico de linha de **concluídas por dia**, com seleção conjunta de mês/ano também abaixo; manter os dois filtros independentes.
5. Fazer o indicador de concluídas acompanhar o mês/ano do gráfico diário; calcular apenas status efetivamente concluídos, sem somar cancelamentos.
6. Tratar ausência de pedidos com contadores zero, gráfico vazio/zero e mensagem apropriada; alinhar cartões e gráficos lado a lado no desktop e empilhados no celular.
7. Reutilizar identidade visual e, conforme dependências existentes, escolher a solução de gráficos compatível com o Angular do repositório.

**Entrega do dia:** Dashboard funcional e sincronizado com pedidos concluídos na sessão demonstrativa.

### Quinta-feira, 10/12 — Integração final, refinamento e preparação da apresentação

**Objetivo:** consolidar as oito telas em um fluxo único e deixar a apresentação final pronta. **Não criar funcionalidades fora do escopo.**

**Atividades em ordem:**

1. Unificar navegação: Login → Cadastro/Confirmação → Perfil/Dashboard → Nova encomenda → Agendadas → Concluídas/Canceladas, sem telas ou ações desconectadas.
2. Consolidar estado local para que criação, agendamento, coleta, transporte, conclusão, cancelamento e avaliação alterem as mesmas encomendas e os mesmos indicadores; manter início vazio e numeração sequencial.
3. Garantir que cancelamento só exista antes da coleta e avaliação somente depois da conclusão; manter nome e recebimento em branco enquanto cliente ainda não tiver sido agendado.
4. Harmonizar campos, mensagens de erro, avisos de simulação, diálogos de descarte, toast por 8 s, skeletons, estados vazios e realces nas páginas.
5. Finalizar versões desktop e mobile de Sidebar, formulários, tabelas, modais e gráficos, preservando o tema e as colunas essenciais em telas estreitas.
6. Revisar textos e indicadores de modo demonstrativo para que nenhum fluxo pareça usar e-mail, Telegram, preço, autenticação ou pagamento real. Remover qualquer exposição de endereço do destinatário.
7. Preparar roteiro de apresentação com dois pedidos criados durante a sessão (um para concluir e avaliar; outro para cancelar), além de exemplo de frete. Incluir explicação do reset dos dados ao recarregar.
8. Atualizar instruções mínimas de execução no repositório, conforme comandos e dependências efetivos, e registrar o estado final na **branch única**.

**Entrega do dia:** frontend do vendedor integrado, oito telas navegáveis e roteiro final organizado.

### Sexta-feira, 11/12 — Apresentação final

**Roteiro de demonstração:**

1. Explicar o alcance: frontend Angular do vendedor com simulações locais; sem backend, Telegram, autenticação, pagamento ou frete reais.
2. Iniciar com a aplicação sem pedidos; mostrar Dashboard zerado e listas vazias.
3. Percorrer Cadastro PF/PJ, confirmação ilustrativa de e-mail, Login e Meu perfil.
4. Criar encomendas **0001** e **0002**, exibindo campos, cuidados especiais, links fictícios e entrada em Agendadas.
5. No pedido **0001**, simular nome fictício e recebimento do cliente, coleta, transporte e conclusão; exibir sua transferência para a aba Concluídas.
6. Avaliar o pedido **0001** uma vez e mostrar a consulta posterior da avaliação.
7. No pedido **0002**, cancelar antes da coleta com motivo e mostrar a aba Canceladas.
8. Demonstrar Simular frete, alterações de parâmetros, novo cálculo e limpeza, sem criar pedidos adicionais.
9. Mostrar Dashboard atualizado, gráficos, filtros, pesquisa, paginação e apresentação em dispositivo móvel.
10. Encerrar explicando limites das simulações, ausência do endereço do cliente e funcionamento da versão entregue em **uma branch**.

**Entrega final:** as oito páginas e seus fluxos demonstrativos, decisões documentadas em `DECISOES_PROJETO.md` e execução consolidada em `PLANO_FRONTEND.md`.
