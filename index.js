import { Sequelize } from 'sequelize'
import e from 'express'
import cookieSession from 'cookie-session'
import bodyParser from 'body-parser'

import userRouter from './routes/adm/AdmUserRoutes.js'
import backupRouter from './routes/adm/AdmBackupRoutes.js'

const app = e()
const router = e.Router()
const PORT = 3000

app.use(bodyParser.json())
app.use(cookieSession({
    name: "session",
    secret: "secret key"
}))

app.use('/adm/users', userRouter)
app.use('/adm/backups', backupRouter)

app.get('/', (req, res) => {
    req.session = null

    if (req.session) {
        res.redirect('/profile')
    } else {
        res.redirect('/login')
        console.log(req.session)
    }
})

app.get('/login', (req, res) => {
    res.send('login')
})

app.post('/login', (req, res) => {
    
})

app.get('/profile', (req, res, next) => {
    if (req.session) {
        console.log('session exists')

        const userData = req.session.userData = {
            userFirstname: 'Angel',
            userLastname: 'Nieto',
            userEmail: 'angelnietomatamoros@gmail.com',
            userCI: '30474952',
            userPhone: '04146597937'
    
        }

        const html = `
        <body>
            <h1>${userData.userFirstname} ${userData.userLastname}</h1>
            <h2>${userData.userEmail}<h2>
            <h2>${userData.userPhone}<h2>
            <h2>${userData.userCI}<h2>    
        </body>
        `

        res.send(html)
    } else {
        console.log('log in again, plaease')
        res.send('log in again, please')
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})