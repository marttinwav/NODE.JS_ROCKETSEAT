export async function jsonBodyHeadler(req, res) {
    // Adicionar cada chunk.
    const  buffers = []

    // Coleta os chunks de dados da requisição
    for await (const chunk of req){
        buffers.push(chunk)
    }

    try {
        // Concatena os chunks e converter para string. Em seguida, converte a string para JSON.

        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        req.body = null
    }

    // Define o headler de resposta no json
    res.setHeader("Content-Type", "application/json")
}