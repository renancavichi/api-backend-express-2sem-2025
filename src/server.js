import express from 'express'

const app = express()
const port = 3333

app.use(express.json()) //

app.post('/profile', (req, res) => {
  const dados = req.body
  res.json({
    message: 'Usuário criado com sucesso!',
    profile: dados
  })
})

app.get('/profile', (req, res) => {
  res.json({message: 'Usuário consultado com sucesso!'})
})

app.put('/profile', (req, res) => {
  const dados = req.body
  res.json({
    message: 'Usuário editado com sucesso!',
    profile: dados
  })
})

app.delete('/profile', (req, res) => {
  res.json({message: 'Usuário excluído com sucesso!'})
})

app.listen(port, () => {
  console.log(`API Rodando em http://localhost:${port}`)  
})
