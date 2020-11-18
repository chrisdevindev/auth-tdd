const app = require('./app')

/* 
 - Essa lógica faz com que seja procurado uma váriável de ambiente PORT e se
não for encontrada, e se ela não existit será utilizada a porta 3000 
 - Isso é muito utilizado em deploy 
 */
app.listen(process.env.PORT || 3000)