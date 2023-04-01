import Express from "express";
import con from "./database.js";
import groupBy from "./models/group.model.js";
const PORT = 3001
const app = Express()
app.use(Express.json())
con()

app.post('/groups', async (req, res) => {
    try {
        const create = await groupBy.create(req.body)
        res.send({
            status: true,
            msg: 'insert success',
            data: create
        })
    } catch (error) {
        res.status(400).send({
            status: false,
            msg: 'somthing went wrong',
            data: error
        })
    }
})
app.delete('/delete/:id', async (req, res) => {
    const findByDelete = await groupBy.findOneAndDelete({ id: req.params.id })
    if (findByDelete) {
        res.send({
            status: true,
            msg: 'delete successfully',
            data: findByDelete
        })
    } else {
        res.send({
            status: false,
            msg: 'data not found',
            data: {}
        })
    }
})
app.listen(PORT, () => { console.log(`server run PORT:${PORT}`); })