import { Sequelize } from 'sequelize'
import e from 'express'

import userRouter from './routes/adm/AdmUserRoutes.js'
import backupRouter from './routes/adm/AdmBackupRoutes.js'

const app = e()
const router = e.Router()
const PORT = 3000

app.use('/adm/users', userRouter)
app.use('/adm/backups', backupRouter)

app.get('/', (req, res) => {
    res.send('home')
    console.log('home');
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})