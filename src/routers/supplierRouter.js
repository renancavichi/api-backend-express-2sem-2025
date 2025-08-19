import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  res.json({
    message: 'Fornecedor criado com sucesso!',
    supplier: dados
  })
})

router.get('/', (req, res) => {
  res.json({message: 'Fornecedores consultados com sucesso!'})
})

// Consulta um Profile específico
router.get('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Fornecedor com ID ${id} consultado com sucesso!` })
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: 'Fornecedor editado com sucesso!',
    supplier: dados
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Fornecedor com ID ${id} deletado com sucesso!`})
})

export default router