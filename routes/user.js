const router = require('express').Router()
const { showLogin, session, logout, homePage } = require('../controllers/userController')
const { isAuthed, isNotAuthed } = require('../middlewares/auth')


router.get('/', isAuthed, homePage)
router.get('/login', isNotAuthed, showLogin)
router.post('/login', isNotAuthed, session)
router.post('/logout', isAuthed, logout)

module.exports = router