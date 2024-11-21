import e from 'express'

const app = e()
const userRouter = e.Router()

userRouter.get('/', (req, res) => {
    res.send('get all users')
})

userRouter.get('/:userId', (req, res) => {
    res.send('get single user')
})

userRouter.get('/add/newUser', (req, res) => {
    res.send('register one user view')
})

userRouter.post('/add/newUser', (req, res) => {
    res.send('register one user')
})

export default userRouter