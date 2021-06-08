import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"
import { profileInfos } from "./endpoints/profileInfos"

app.get('/user/profile',profileInfos)
app.post('/user/signup', createUser)
app.post('/login',login)
app.put('/user/edit/:id', editUser)