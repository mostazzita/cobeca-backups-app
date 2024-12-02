import { Sequelize } from 'sequelize'
import User from './models/User.js'
import e from 'express'
import cookieSession from 'cookie-session'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRouter from './routes/adm/AdmUserRoutes.js'
import backupRouter from './routes/adm/AdmBackupRoutes.js'

const app = e()
const router = e.Router()
const PORT = 3000

app.use(cors())
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

app.post('/login', async (req, res) => {

    if (Object.keys(req.body).length > 0) {

        const loginData = {
            userEmail: req.body.userEmail,
            userPassword: req.body.userPassword
        }

        const user = await User.findOne({ where: { user_email: loginData.userEmail, user_password: loginData.userPassword }})

        if (user != null) {

            req.session.dataFromLogin = {
                msg: "hola"
            }

            res.redirect('/profile')
        } else {
            console.log(`the credentials match with a registered user (${user.user_email})`)
            res.send('the credentials match with a registered user')
        }

        res.send(`you received something`)
    } else {
        console.log(`you did'nt received anything`)
        res.send(`you did'nt received anything`)
    }

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

        const greetings = {
            msg: req.session.dataFromLogin.msg
        }

        const html = `
        <body>
            <h1>${userData.userFirstname} ${userData.userLastname}</h1>
            <h2>${userData.userEmail}<h2>
            <h2>${userData.userPhone}<h2>
            <h2>${userData.userCI}<h2>
            <h3>${greetings.msg}</h3>    
        </body>
        `

        res.send(html)
    } else {
        console.log('log in again, plaease')
        res.send('log in again, please')
    }
})

app.get('/test', (req, res) => {
    const testData = {
        firstName: 'Angel',
        lastName: 'Nieto',
        age: 21,
        email: 'angel@gmail.com'
    }

    res.send(testData)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})