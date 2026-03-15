# app-next

Aplicacao Next.js com tela de login simples e suporte para Docker.

## Executar com Docker

```bash
docker build -t app-next .
docker run --name app-next -p 3000:3000 -d app-next
```

Depois acesse:

- http://localhost:3000

Para parar e remover o container:

```bash
docker rm -f app-next
```