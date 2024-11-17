# Sistema de Notificações por Mensageria (Envio a Cada 24 Horas) - Arquitetura de Microserviços

Este projeto implementa um **sistema de notificações** baseado em **microserviços** que envia mensagens para os dispositivos móveis dos usuários a cada **24 horas**. O sistema utiliza uma arquitetura **Pub/Sub** 

## Funcionalidades

- **Publicação de conteúdo**: Os usuários podem criar e editar postagens no sistema.
- **Notificações periódicas**: O sistema envia notificações de atualizações em conteúdos a cada 24 horas para os usuários que assinaram os tópicos de interesse.
- **Arquitetura de Microserviços**: Cada componente do sistema é um microserviço independente, com responsabilidades isoladas para garantir escalabilidade e flexibilidade.
- **Sistema de Pub/Sub**: Utiliza o padrão de **Publicação/Assinatura (Pub/Sub)** para garantir que as notificações sejam enviadas aos usuários em intervalos regulares de 24 horas.

## Tecnologias Utilizadas

- **Backend**: Node.js / Python (dependendo da implementação)
- **Mensageria**: RabbitMQ / Kafka (para comunicação entre serviços)
- **Notificações**: Firebase Cloud Messaging (FCM) / OneSignal
- **Banco de Dados**: MongoDB / MySQL (para armazenar informações de usuários e postagens)
- **API RESTful**: Para interagir com o sistema de backend
- **Agendamento de Tarefas**: **Cron jobs** ou **Celery** (para envio de notificações periodicamente)

## Arquitetura de Microserviços

Este sistema adota a arquitetura de **microserviços**, onde cada serviço possui uma responsabilidade específica e é implementado de forma independente. A comunicação entre os serviços ocorre através de mensagens utilizando o padrão **Pub/Sub**, garantindo desacoplamento e escalabilidade.

### Componentes principais:


 **Sistema de Mensageria (Pub/Sub)**:
   - Utiliza um broker de mensagens como **RabbitMQ**  para enviar e receber mensagens entre os microserviços.
   - Quando uma postagem é criada ou editada, o microserviço de edição envia uma mensagem para o microserviço de notificação, que irá processá-la e enviar notificações aos usuários inscritos.

   
 **Recebimento da Notificação**:
   - Os dispositivos móveis que estão inscritos para receber as notificações recebem uma mensagem push informando sobre as postagens mais recentes ou atualizações.

## Como Rodar o Projeto

### 1. Clonando o Repositório

Clone este repositório para a sua máquina local:

```bash
git clone https://github.com/seuusuario/sistema-de-notificacoes.git
cd sistema-de-notificacoes
