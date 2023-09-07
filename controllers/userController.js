const credentials = {
    email: 'salman@gmail.com',
    password: '123456',
}

exports.showLogin = (req, res) => {
    res.render('login')
}

exports.session = (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.render('login', { error: 'All fields are required.' })
    if (email !== credentials.email) return res.render('login', { error: 'User not found.' })
    if (email !== credentials.email || password !== credentials.password) return res.render('login', { error: 'Email or password not match.' })
    req.session.user = email;
    res.redirect('/')
}

exports.homePage = (req, res) => {
    res.render('index', { user: req.session.user })
}

exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/login')
}