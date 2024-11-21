import e from 'express'

const app = e()
const backupRouter = e.Router()

backupRouter.get('/', (req, res) => {
    res.send('get all backups info')
})

backupRouter.get('/:backupDirectory', (req, res) => {
    res.send('get single backup info')
})

export default backupRouter