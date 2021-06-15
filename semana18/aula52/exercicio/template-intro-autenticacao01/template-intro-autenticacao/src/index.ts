import app from "./app"
import editUser from './endpoints/editUser'
import  login  from "./endpoints/login"
import  profile  from "./endpoints/profile"
import signUp from "./endpoints/login"

app.get('/user/profile',profile)
app.post('/user/signup', signUp)
app.post('/login',login)
app.put('/user/edit/:id', editUser)