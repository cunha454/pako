# Pako — Decisões do projeto: frontend web do vendedor

> **Finalidade:** registrar o que foi decidido sobre o frontend, sem calendário ou tarefas diárias.  

## 1. Contexto e limite da entrega

O Pako é uma plataforma de gestão e agendamento de entregas locais que conecta vendedores, clientes e entregadores. O produto completo prevê frontend web Angular para vendedores, backend Python/FastAPI, banco MySQL, bot do Telegram para clientes e aplicativo mobile para entregadores. **A entrega aqui planejada é o frontend web do vendedor**, com interações demonstrativas locais.

**Oito páginas principais:** Login, Cadastro, Dashboard, Meu perfil, Nova encomenda, Simular frete, Entregas agendadas e Entregas concluídas. Fluxos auxiliares não contam como páginas principais: confirmação/recuperação de e-mail, recuperação/alteração de senha, detalhes, avaliação, cancelamento e aba Canceladas.

**Incluído:** identidade visual, navegação, formulários e validações, tabelas, filtros, paginação, modais, responsividade, notificações, gráficos e fluxos demonstrativos de ponta a ponta com estado local em memória.

**Não incluído nesta etapa:** backend, banco de dados e persistência real, autenticação/tokens, SMS ou envio real de e-mail, bot do Telegram, app do entregador, roteirização, pagamento real, cálculo real de preço ou prazo, rastreamento e notificações push, infraestrutura de produção. Os pagamentos previstos no MVP geral continuam sendo uma intenção do produto, não uma funcionalidade implementada neste frontend.

## 2. Decisões de organização e desenvolvimento

- Manter **estado inicial sem conta pré-logada e sem encomendas**. Os dados só surgem por interação demonstrativa. Os dados operacionais podem ser perdidos ao atualizar a página; comunicar essa limitação.
- Usar dados fictícios, nunca dados reais de clientes. Não guardar senhas em `localStorage` ou outro armazenamento local. Ações do cliente e do entregador serão controles de **Modo demonstração** claramente distintos das ações normais do vendedor.
- Preservar validações de formulário e regras de negócio. **Retirar as etapas, seções e matrizes dedicadas a testes** do planejamento; não retirar comportamentos de validação que fazem parte do produto.
- **Sextas-feiras são exclusivamente para demonstração do avanço**, não para alocar implementação nova.
- Manter o escopo funcional do planejamento original e detalhar a implementação no arquivo `PLANO_FRONTEND.md`.

## 3. Cadastro, Login e Meu perfil

- Cadastro em **três etapas**: (1) Identificação, (2) Endereço de coleta e (3) Dados de acesso.
- **Pessoa Física:** nome completo e CPF obrigatórios; nome comercial opcional. **Pessoa Jurídica:** CNPJ e nome fantasia obrigatórios. Ambas exigem telefone com DDD.
- Não usar verificação por SMS. O e-mail deve ser confirmado antes do primeiro acesso; confirmação e envio de mensagens são demonstrativos.
- Cada vendedor possui **um único endereço fixo de coleta**; CEP consultado por simulação local, com edição manual permitida.
- Acesso por e-mail, senha e confirmação de senha. A senha exige **mínimo de 8 caracteres, maiúscula, minúscula, número e símbolo**; os campos permitem mostrar/ocultar.
- Login aceita **e-mail, CPF ou CNPJ** mais senha; não há opção “Manter conectado”. Após a confirmação demonstrativa do e-mail, ir para Login; após acesso demonstrativo, ir para Dashboard.
- Recuperação e redefinição de senha por e-mail são ilustrativas e explicitamente identificadas.
- Meu perfil abre em modo leitura e oferece **Editar perfil**, **Alterar senha** e **Sair da conta**. Sair exige confirmação.
- Navegar entre as etapas preserva os dados do formulário em memória; fechar ou recarregar a página não recupera rascunho. Não persistir senhas.

## 4. Nova encomenda

- **Um pedido = um pacote**, mesmo que contenha vários produtos.
- Número gerado sequencialmente, como `0001`, `0002`, `0003`, durante a sessão demonstrativa.
- Altura, largura e comprimento obrigatórios em **cm**; peso obrigatório em **kg**, aceitando decimal.
- Cuidados especiais opcionais e combináveis: **Frágil**, **Manter na posição vertical** e **Perecível**.
- Não pedir valor comercial, nome do remetente novamente nem endereço do destinatário.
- O remetente é o vendedor cadastrado; o cliente informará seus dados na experiência futura do Telegram. Na demonstração, apenas nome fictício e período de recebimento podem ser informados pelo controle demonstrativo.
- Ao criar, exibir modal com número e **link fictício**, além de **Copiar link**. Ao fechar o modal, ir para Entregas agendadas.
- Pedido recém-criado entra como **Aguardando cliente**, sem nome de cliente, recebimento ou coleta previstos até simulação de agendamento.

## 5. Simular frete

- Origem obtida do endereço de coleta do perfil; dados de entrada: **CEP de destino, altura, largura, comprimento e peso**.
- Exibir **valor estimado em R$ e prazo estimado**, explicitamente **fictícios**.
- Usar cálculo local determinístico: entradas iguais produzem resultados iguais; isso não é cotação de frete.
- A simulação de frete é **independente de Nova encomenda**: não cria pedido nem transfere dados para cadastro de pedido.
- Permitir editar dados e simular novamente; **Nova simulação** limpa entradas e resultado, sem modificar o endereço de origem do perfil.

## 6. Entregas agendadas

- Exibir encomendas da criação até antes da conclusão ou do cancelamento.
- Status ativos: **Aguardando cliente**, **Aguardando coleta** e **Em transporte**.
- Tabela desktop: **Pedido, Cliente, Status, Recebimento, Coleta prevista**.
- Ordenação padrão por previsão de coleta mais próxima; pedidos sem previsão ficam no fim. Alternativas pelo seletor **Ordenar por**, sem ordenar ao clicar nos cabeçalhos.
- Pesquisa automática por nome ou número, botão **X**, filtro de status e **Limpar filtros**. Controles dispostos em duas linhas.
- Clicar no número abre detalhes. Nunca incluir endereço do cliente. Enquanto estiver Aguardando cliente, mostrar link fictício e ação para copiar.
- Mudanças de status atualizam a tabela, preservando pesquisa, filtros e página quando possível, e destacam temporariamente a linha.
- Quando concluído, o pedido sai de Agendadas para Concluídas; quando cancelado antes da coleta, sai de Agendadas para Canceladas.

## 7. Entregas concluídas, canceladas e avaliações

- Página **Entregas concluídas** com abas **Concluídas** e **Canceladas**, com tabelas independentes.
- Concluídas: **Pedido, Cliente, Data da entrega, Avaliação, Ação**; padrão de ordenação da entrega mais recente para a mais antiga.
- Filtro de período por data inicial/final e estado da avaliação: **Todas, Avaliadas, Pendentes de avaliação**.
- Uma avaliação por entrega, com nota geral de **1 a 5 estrelas** e comentário opcional. Depois de avaliar, substituir **Avaliar** por **Visualizar avaliação**.
- Cancelamento **somente antes da coleta**, com motivo obrigatório e confirmação. Registrar motivo e data na aba Canceladas; não somar cancelamentos como entregas concluídas.

## 8. Dashboard

- Indicadores: **Entregas concluídas no mês** e **Entregas aguardando coleta**; este último leva a Entregas agendadas.
- Atalhos discretos no canto superior direito: **Nova encomenda** e **Simular frete**.
- Dois gráficos em painéis separados, lado a lado no desktop: **barras das entregas concluídas por mês**, com filtro de ano, e **linha das entregas concluídas por dia**, com filtro conjunto de mês/ano.
- Filtros independentes e centralizados **abaixo** dos respectivos gráficos. O indicador mensal acompanha a seleção de mês/ano do gráfico diário.
- Sem histórico recente, botão Atualizar ou indicadores extras. No mobile, empilhar os gráficos.
- Estado inicial sem pedidos: indicadores em zero e gráficos com zero/estado vazio apropriado. No modo demonstrativo, refletir as encomendas concluídas na sessão.

## 9. Identidade visual, componentes e comportamento global

- **Apenas tema claro.** Verde principal `#174B35`, fundo `#F5F7F5`, painéis `#FFFFFF`, bordas finas, sem sombras marcantes, cantos próximos de **6 px**, fonte **Inter** e espaçamento equilibrado.
- Sidebar verde-escura, expansível/recolhível no desktop; no mobile, menu oculto que abre sobre o conteúdo.
- Tabelas sem seleção múltipla; **20 registros por página**, paginação inferior e cabeçalho fixo na região rolável. No celular, mostrar colunas essenciais e detalhes em modal responsivo.
- Controles de tabela em duas linhas: **pesquisa + Limpar filtros** e **filtros + Ordenar por**. Pesquisa com pequeno debounce, sem botão Pesquisar.
- Filtrar/pesquisar leva à primeira página; atualização automática mantém a página se possível, senão volta para a última existente. **Limpar filtros** restaura pesquisa, filtros, ordenação e primeira página.
- Estados vazios explicativos com ação contextual quando útil; carregamentos com **skeletons**.
- Etiquetas de status discretas, com texto e cores suaves: Aguardando cliente, Aguardando coleta, Em transporte, Concluída e Cancelada.
- Notificações temporárias no canto superior direito por **8 segundos**, com fechamento manual; tipos sucesso, erro e informação. Linha alterada recebe destaque suave temporário.
- Obrigatórios marcados com `*`. Erros abaixo dos campos ao perder foco ou tentar avançar/salvar, desaparecendo após correção; formulários inválidos não avançam.
- Ao sair de formulário com alterações não salvas, solicitar confirmação de descarte; no fechamento/refresh, respeitar limitações do navegador.
- Acessibilidade: rótulos, navegação por teclado, foco visível, descrição de botões icônicos, foco gerenciado em modais, mensagens legíveis, contraste e status não comunicados apenas por cor.

## 10. Modelo demonstrativo e mudanças de estado

**Modelos necessários:** `Vendedor` (PF/PJ, identificação, contato, endereço de coleta), `Pacote` (dimensões, peso, cuidados), `Encomenda` (identificador, pacote, status, link fictício, datas, nome fictício do cliente quando informado, avaliação e cancelamento), `Avaliacao`, `Cancelamento` e `ResultadoFrete`. **Não incluir endereço do cliente** no modelo exibido ao vendedor.

**Estado inicial:** sem login e sem pedidos. O cadastro demonstrativo cria vendedor temporário sem salvar senha; confirmação de e-mail e recuperação são simulações explícitas. Consulta de CEP utiliza valores ilustrativos e permite edição manual. A aplicação pode reiniciar o estado ao recarregar.

**Fluxo ilustrativo do pedido:**

1. Criar encomenda → **Aguardando cliente** e link fictício.
2. Controle **Modo demonstração: agendamento do cliente** → informar nome fictício e horário de recebimento; preencher coleta prevista fictícia e passar para **Aguardando coleta**. A hipótese de coleta 30 minutos antes do recebimento é somente ilustrativa, **não regra de negócio definitiva**.
3. Controle **Modo demonstração: coleta** → **Em transporte**.
4. Controle **Modo demonstração: conclusão** → **Concluída**, com data/hora, disponível na aba Concluídas e no Dashboard.
5. Caminho alternativo: antes da coleta, **cancelar** com motivo → **Cancelada**, disponível apenas na aba Canceladas.
6. Após conclusão, registrar **uma** avaliação e permitir visualização posterior.

As mudanças devem aparecer em listas, indicadores e gráficos com a mesma fonte local de dados. Não criar automaticamente encomendas fictícias na inicialização. Os controles de demonstração não devem se passar por recursos reais do vendedor.

## 11. Diretrizes técnicas e decisões ainda abertas

- Angular para o frontend; verificar **versão, bibliotecas, rotas, scripts e estrutura efetivos** antes de escolher implementação. A estrutura sugerida (`core/`, `shared/`, `layouts/`, `pages/`) é adaptável ao repositório existente.
- Componentes compartilhados prioritários: `AppShell/Sidebar`, `FormField`, `PasswordField`, `ConfirmDialog`, `DetailsDialog`, `Toast`, `DataTable`, `StatusBadge`, `EmptyState`, `Skeleton` e componentes de gráficos.
- Isolar uma camada de estado/serviços de demonstração (`DemoDataService` ou nome compatível) da camada de apresentação. Todos os dados operacionais são locais e explicitamente simulados.
- Evitar bibliotecas adicionais sem necessidade. A escolha de biblioteca para gráficos depende do que já estiver instalado e compatível.
- Preservar alterações já existentes no Git; não sobrescrever trabalho local, não criar branch adicional por obrigação e registrar evolução em commits na **branch única** escolhida pela equipe.
- **Em aberto sem mudar regras funcionais:** nome de arquivos e componentes, biblioteca de gráficos, duração exata do realce de linha, opções secundárias de ordenação, colunas secundárias da aba Canceladas, formato do prazo fictício e posição exata dos controles de demonstração.
- Mudanças nas regras de cancelamento, dados pessoais, simulação de frete ou escopo exigem nova decisão explícita; não tratá-las como ajustes cosméticos.

