# cotacao-moeda
## Stack
### Frontend:
- Javascript
- Vuejs
- Vuex
- vuetify
- socket.io
- Spa
- VueRouter

### Backend:
- Nodejs
- Javascript
- Express
- Socket.io
- Node-fetch
- Integração via rest com BC
- Mongodb
- Mongoose
- Joi

## Organização de pastas e arquivos
```shell
/
  server/
    entrypoint/
      server.js
    src/
      db/
      integrations/
      sockets/
      utils/
      app.js
  client/
    public/
      favicon
      index.html
    src/
      assets/
      components/
      methods/
      plugins/
      router/
      store/
      views/
      App.vue
      main.js
```
## quotation history

```shell
{
    "_id":"",
    "currencyName" : "",
    "high" : [],
    "low" : [],
    "date" : []
    }
```
## Comandos de inicialização:
- Backend: npm run start:dev
- Frontend: npm run start:dev
