## Usando a aplicação
* Essa aplicação tem como objetivo processar um dump de logs de uma api gateway e gerar reports
## Rodando com docker

* Antes de tudo, tenha certeza que em sua máquina esteja instalado o docker e o docker-compose
* Executar o comando na raiz do repositório

```
docker-compose up -d
```

**Nota importantes**
* O servidor node irá rodar em  **PORT 3000** ;
* O mongodb irá rodar em  **PORT 27017** ;
* Tenha certeza que essas portas estejam disponíveis antes de executar a aplicação.

* Faça o upload do seu log usando insomnia
* Uma collection do insomnia foi inserida na raiz do projeto para facilitar os testes

![insomnia](https://i.imgur.com/sXirDkg.jpg)

* depois que o log for processado
* executar o comando abaixo irá fazer uma copia da pasta reports geradas para sua máquina

```
docker cp desafio-melhor-envio-node:/app/reports <your_path_to_save>

example:

docker cp desafio-melhor-envio-node:/app/reports c:/users/mvabf/Documents
```

## Rodando sem docker
antes de rodar, definir suas credenciais do mongodb em database/db.ts

```
yarn
yarn build
yarn start
```