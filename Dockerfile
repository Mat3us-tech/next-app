# Usa uma imagem leve do Node
FROM node:18-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Cria um arquivo simples de servidor direto no container
RUN echo "const http = require('http'); \
http.createServer((req, res) => { \
  res.end('App rodando 🚀'); \
}).listen(3000);" > server.js

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]