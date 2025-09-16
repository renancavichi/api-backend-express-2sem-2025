export const logger = (req, res, next) => {
    // mostrar data com timezone de sao paulo
    console.log(`${req.method} ${req.originalUrl} ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`)
    next()
}