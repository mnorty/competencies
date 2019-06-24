const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req,res) => {
    const {username,password} = req.body
    const db = req.app.get('db')
    const {session} = req
    const userFound = await db.check_username({username})//passing that in as an object lets us use its name in the sql command
    if (userFound[0]) return res.status(409).send('Email already exists')
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password,salt)
    const createdUser = await db.register_user({
      username,
      password: hash  //if we dont add the : hash it would pull the plain unencrypted password
    })
    session.user = {id: createdUser[0].id, username: createdUser[0].username}
    res.status(201).send(session.user)
    console.log('registration succsesful')
  },
  login: async (req,res) => {
    const {username, password} = req.body
    console.log(req.body)
    const db = req.app.get('db')
    const {session} = req
    const userFound = await db.check_username({username})
    if (!userFound[0]) return res.status(401).send('User does not exist')
    const authenticated = bcrypt.compareSync(password,userFound[0].password)
    if(authenticated){
      session.user = {id: userFound[0].id,username: userFound[0].username}
      res.status(200).send(session.user)
    } else {
      return res.status(401).send('Incorrect username or password')
    }
  },
}