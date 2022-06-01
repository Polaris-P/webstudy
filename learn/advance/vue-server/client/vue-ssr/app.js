const Vue = require('vue');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer();
server.get('*', (req, res) => {
  const app = new Vue({
    data:{
      url:req.url,
    },
    template:`<div>访问的url是：{{url}}</div>`
  })
  renderer.renderToString(map, (err, html) => {
    if (err) throw err;
    res.send(html);
  })
})

server.listen(8888,()=>console.log(`Example app listening on port 8888!`))