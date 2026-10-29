# Pako — Plataforma de Gestão e Agendamento de Entregas

## Sumário

1. [Sobre o projeto](#1-sobre-o-projeto)
2. [Problema e justificativa](#2-problema-e-justificativa)
3. [Objetivos e público-alvo](#3-objetivos-e-público-alvo)
4. [Funcionamento da plataforma](#4-funcionamento-da-plataforma)
5. [Escopo do MVP](#5-escopo-do-mvp)
6. [Requisitos e regras de negócio](#6-requisitos-e-regras-de-negócio)
7. [Tecnologias e arquitetura](#7-tecnologias-e-arquitetura)
8. [Funcionalidades futuras e riscos](#8-funcionalidades-futuras-e-riscos)

---

## 1. Sobre o projeto

O **Pako** é uma plataforma digital para organizar e agendar entregas locais, conectando pequenos e médios vendedores, clientes e entregadores.

O nome vem do esperanto, idioma planejado internacionalmente no qual *pako* significa “pacote”. A escolha representa o propósito do projeto: facilitar a organização de encomendas por meio de planejamento, pontualidade e confiança.

## 2. Problema e justificativa

A organização de entregas por mensagens e controles manuais pode gerar atrasos, retrabalho, dificuldades na contratação de entregadores e falta de previsibilidade para os clientes.

O Pako propõe centralizar esse processo, permitindo estimar o frete, considerar as características da encomenda, agendar o recebimento e acompanhar as etapas da entrega. Dessa forma, busca tornar as entregas locais mais organizadas e eficientes.

## 3. Objetivos e público-alvo

O objetivo é desenvolver uma plataforma que facilite a gestão e o agendamento de entregas, considerando as necessidades dos vendedores, a disponibilidade dos clientes e a compatibilidade dos veículos.

O público-alvo inclui pequenos e médios comerciantes, seus clientes e entregadores locais. O sistema contará com uma interface web para os vendedores, um bot do Telegram para a interação com os clientes e um aplicativo mobile para os entregadores.

## 4. Funcionamento da plataforma

O vendedor cadastra a encomenda e suas características. A plataforma estima o frete e recomenda um veículo compatível. Em seguida, o cliente recebe um convite pelo Telegram, informa o endereço e escolhe um período para receber o pedido.

Após a confirmação, a entrega fica disponível para entregadores compatíveis. O profissional que aceitar recebe os dados necessários para realizar o serviço e atualiza o andamento da entrega. O cliente recebe notificações pelo Telegram, enquanto avaliações e indicadores de desempenho contribuem para a reputação dos entregadores.

## 5. Escopo do MVP

A primeira versão do Pako contemplará:

- Cadastro e gerenciamento de encomendas.
- Estimativa de frete e compatibilidade de veículos.
- Agendamento de entregas pelo Telegram.
- Aplicativo para entregadores consultarem e aceitarem serviços.
- Atualização de status e notificações ao cliente.
- Pagamento da entrega pela plataforma.
- Avaliações e sistema básico de reputação.

## 6. Requisitos e regras de negócio

O sistema deverá validar os dados das encomendas, considerar peso, dimensões e distância na estimativa de frete e disponibilizar cada serviço somente a entregadores com veículos compatíveis.

A reputação poderá considerar pontualidade, entregas concluídas, cancelamentos e avaliações. Ela ajudará a ordenar oportunidades, sem substituir os critérios de compatibilidade e disponibilidade. Os dados pessoais do cliente serão apresentados somente quando necessários para a execução da entrega.

Os requisitos funcionais, não funcionais e as regras detalhadas serão definidos conforme o desenvolvimento do projeto.

## 7. Tecnologias e arquitetura

A arquitetura inicial prevê:

- **Backend:** Python com FastAPI.
- **Frontend web:** Angular.
- **Banco de dados:** MySQL.
- **Aplicativo mobile:** tecnologia a definir.
- **Integração com clientes:** bot do Telegram.

A solução será organizada em módulos para facilitar a manutenção e permitir futuras integrações.

## 8. Funcionalidades futuras e riscos

Entre as possíveis evoluções estão a integração com lojas virtuais, a ampliação das regiões atendidas e o aprimoramento dos cálculos de frete e da reputação.

Os principais desafios envolvem a integração com o Telegram, o desenvolvimento mobile, a implementação dos pagamentos, a proteção de dados pessoais e a definição de critérios transparentes para avaliações e cancelamentos.


