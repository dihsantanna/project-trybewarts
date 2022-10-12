# Boas vindas ao repositório do projeto Trybewarts Wizarding School! :mage:

Um pequeno projeto onde foram desenvolvidos formulários utilizando `HTML`, `CSS` e `JavaScript`.

Além do objetivo de exercitar a utilização do `flexbox` do CSS, os formulários são controlados a partir do DOM utilizando javascript. Foi simulado um formulário de avaliação de satisfação da escola TrybeWarts :smile:.


![Gif de demonstração](demonstracao.gif)

---

# Habilidades desenvolvidas

  * Criação de formulários em HTML;

  * Utilização do CSS Flexbox para criar layouts flexíveis;

  * Criação de regras CSS específicas para serem aplicadas a dispositivos móveis;

  * Construção de páginas que alteram o seu layout de acordo com a orientação da tela;

---

## Instruções para rodar a aplicação:

1. Caso deseje apenas testar o funcionamento da aplicação sem baixar os arquivos sugiro acessar [https://project-trybewarts.netlify.app](https://project-trybewarts.netlify.app), caso não seja esse o caso passe para a próxima etapa.

  * **ATENÇÃO**: os dados corretos para o funcionamento do formulário de login são `login: tryber@teste.com, password: 123456`. Não é necessário o login para utilizar a aplicação.

2. Escolha uma pasta de sua preferência e clone o repositório
    ```bash
      git clone git@github.com:dihsantanna/project-trybewarts.git
    ```
  * Entre na pasta do repositório que você acabou de clonar:
    ```bash
      cd project-trybewarts
    ```

3. Abra o arquivo `index.html`:

  * no terminal do ubuntu:
    ```bash
      xdg-open index.html
    ```
  * no terminal do mac:
    ```bash
      open index.html
    ```
  * no terminal windows:
    ```bash
      start index.html
    ```

  * caso não consiga utilizar alguma destas formas, você pode ainda abrir o arquivo manualmente utilizando o navegador de sua preferência.


## Rodando os testes:

1. Primeiro instale as dependências:
    ```bash
      npm install
    ```
2. Os testes são executados pelo Cypress e existem duas formas de roda-lo:
  * Para executar os testes apenas no terminal:
    ```bash
      npm run test
    ```
  * Para executar os testes e vê-los rodando em uma janela de navegador:
    ```bash
      npm run cypress:open
    ```
