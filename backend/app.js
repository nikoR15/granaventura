const express = require('express')
const { PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const app = express()

app.use(express.json())

// endPoint
// app.post('/post', async(req, res) =>{
//     const {tittle,content} = req.body

//     const result = await prisma.post.create({
//         data:{
//             tittle,content
//         }
//     })
//     res.json(result)
// })

// Registro
app.get('/record', async(req, res) =>{
    const posts = await prisma.registro.findMany()
    res.json(posts)
})

app.post('/record', async(req, res) =>{
    const {nombreCompleto, correo, contrasena, telefono} = req.body

    const result = await prisma.registro.create({
        data:{
            nombreCompleto, correo, contrasena, telefono
        }
    })
    res.json(result)
})

app.put('/record/:id', async(req, res) =>{
    const {id} = req.params
    const {nombreCompleto, correo, contrasena, telefono} = req.body
    const post = await prisma.registro.update({
        where: {id: Number(id)},
        data: {nombreCompleto, correo, contrasena, telefono}
    })
    res.json(post)
})

app.delete('/record/:id', async(req, res) =>{
    const {id} = req.params
    const post = await prisma.registro.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminado')
})

// Loguearse
app.get('/login', async(req, res) =>{
    const login = await prisma.registro.findMany()
    res.json(login)
})

app.post('/login', async(req, res) =>{
    const {tittle,content} = req.body

    const result = await prisma.post.create({
        data:{
            tittle,content
        }
    })
    res.json(result)
})

app.put('/login/:id', async(req, res) =>{
    const {id} = req.params
    const {tittle, content} = req.body
    const post = await prisma.post.update({
        where: {id: Number(id)},
        data: {tittle, content}
    })
    res.json(post)
})

app.delete('/login/:id', async(req, res) =>{
    const {id} = req.params
    const post = await prisma.post.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminado')
})

// lugares
app.get('/lugares', async(req, res) =>{
    const posts = await prisma.post.findMany()
    res.json(posts)
})

app.post('/lugares', async(req, res) =>{
    const {tittle,content} = req.body

    const result = await prisma.post.create({
        data:{
            tittle,content
        }
    })
    res.json(result)
})

app.put('/lugares/:id', async(req, res) =>{
    const {id} = req.params
    const {tittle, content} = req.body
    const post = await prisma.post.update({
        where: {id: Number(id)},
        data: {tittle, content}
    })
    res.json(post)
})

app.delete('/lugares/:id', async(req, res) =>{
    const {id} = req.params
    const post = await prisma.post.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminado')
})

// personal
app.get('/personal', async(req, res) =>{
    const posts = await prisma.post.findMany()
    res.json(posts)
})

app.post('/personal', async(req, res) =>{
    const {tittle,content} = req.body

    const result = await prisma.post.create({
        data:{
            tittle,content
        }
    })
    res.json(result)
})

app.put('/personal/:id', async(req, res) =>{
    const {id} = req.params
    const {tittle, content} = req.body
    const post = await prisma.post.update({
        where: {id: Number(id)},
        data: {tittle, content}
    })
    res.json(post)
})

app.delete('/personal/:id', async(req, res) =>{
    const {id} = req.params
    const post = await prisma.post.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminado')
})

// kit
app.get('/kits', async(req, res) =>{
    const posts = await prisma.post.findMany()
    res.json(posts)
})

app.post('/kits', async(req, res) =>{
    const {tittle,content} = req.body

    const result = await prisma.post.create({
        data:{
            tittle,content
        }
    })
    res.json(result)
})

app.put('/kits/:id', async(req, res) =>{
    const {id} = req.params
    const {tittle, content} = req.body
    const post = await prisma.post.update({
        where: {id: Number(id)},
        data: {tittle, content}
    })
    res.json(post)
})

app.delete('/kits/:id', async(req, res) =>{
    const {id} = req.params
    const post = await prisma.post.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminado')
})

// talonario
app.get('/talonario', async(req, res) =>{
    const posts = await prisma.post.findMany()
    res.json(posts)
})

app.post('/talonario', async(req, res) =>{
    const {tittle,content} = req.body

    const result = await prisma.post.create({
        data:{
            tittle,content
        }
    })
    res.json(result)
})

app.put('/talonario/:id', async(req, res) =>{
    const {id} = req.params
    const {tittle, content} = req.body
    const post = await prisma.post.update({
        where: {id: Number(id)},
        data: {tittle, content}
    })
    res.json(post)
})

app.delete('/talonario/:id', async(req, res) =>{
    const {id} = req.params
    const post = await prisma.post.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminado')
})

// 

// mostrar registros
app.get('/posts', async(req, res) =>{
    const posts = await prisma.post.findMany()
    res.json(posts)
})

app.put('/post/:id', async(req, res) =>{
    const {id} = req.params
    const {tittle, content} = req.body
    const post = await prisma.post.update({
        where: {id: Number(id)},
        data: {tittle, content}
    })
    res.json(post)
})


app.delete('/post/:id', async(req, res) =>{
    const {id} = req.params
    const post = await prisma.post.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminado')
})

app.listen(5000, () =>
    console.log(`Server on port : http://localhost:5000`)
)