import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.status(200).send('Hello World')
})  

router.get('/users', (req, res) => {
    res.send('Users') 
})

export default router
