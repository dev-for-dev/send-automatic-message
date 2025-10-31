# SendAutomaticMessageWhatsApp

Um script para fins de estudo, demonstrando a automação de envio de mensagens no WhatsApp Web.

**Autor do repositório:** dev-for-dev

**Arquivo:** `KurapikaSendMessage.js`

## Descrição

O script `KurapikaSendMessage.js` foi criado para fins acadêmicos, com o objetivo de analisar como funcionam scripts de automação e por que eles falham. O código tenta enviar o texto da música "Hunting For Your Dream" linha por linha em uma conversa aberta do WhatsApp Web.

## Utilização (Demonstração Teórica)

O método de uso analisado envolve os seguintes passos:

1.  Abrir o arquivo `KurapikaSendMessage.js` (ex: [Clique aqui para ver o código do script](KurapikaSendMessage.js)).
2.  Copiar o conteúdo do script.
3.  No WhatsApp Web, abrir o console do desenvolvedor no navegador.
4.  Colar o código no console e apertar Enter.

---

## ⚠️ Avisos Importantes: Termos de Serviço e Violações

Esta seção explica por que essa prática não deve ser realizada e quais termos ela viola. Utilizar scripts para automatizar ações no WhatsApp é uma violação direta dos Termos de Serviço da plataforma.

### 1. Violação dos Termos de Serviço (ToS)

O WhatsApp proíbe explicitamente o uso de ferramentas automatizadas para interagir com seus serviços. Ao usar um script como este, você está violando cláusulas que proíbem:

* **Mensagens em Massa e Spam:** O envio automatizado de mensagens, mesmo para testes, é classificado como "mensagens em massa" ou "spam", o que é estritamente proibido.
* **Engenharia Reversa e Modificação:** Os termos proíbem "modificar, criar trabalhos derivados, descompilar ou tentar extrair código fonte" dos serviços. Scripts que interagem com o código front-end (DOM) da página se enquadram nessa categoria.
* **Uso Não Autorizado:** Qualquer uso que não seja através da interface oficial e para comunicação pessoal (ou via API oficial do Business) é considerado não autorizado.

**Consequência:** A violação desses termos pode e frequentemente leva ao **banimento permanente** da conta e do número de telefone associado, sem aviso prévio.

### 2. Riscos de Segurança (Self-XSS)

O próprio método de utilização expõe um grave risco de segurança:

* **O que é "Self-XSS":** Os navegadores (como o Chrome) exibem um aviso (`allow pasting` ou similar) por um motivo. Eles tentam impedir um ataque chamado **Self-XSS**, onde um golpista engana a vítima para que ela cole um código malicioso no console do *próprio* navegador.
* **O Risco:** Ao se acostumar a colar scripts no console, um usuário pode ser facilmente enganado a colar um script que rouba suas informações de login (cookies de sessão), lê suas conversas ou envia mensagens em seu nome sem que ele perceba.

### 3. Contramedidas da Plataforma

Como observado em testes (ex: `Cannot read properties of null (reading 'click')`), esse tipo de script é inerentemente instável. Plataformas como o WhatsApp mudam constantemente o código de sua interface (nomes de classes, seletores `data-testid`, etc.) **com o propósito específico de quebrar bots e scripts de automação**.
