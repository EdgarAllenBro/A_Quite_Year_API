const express =  require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const {getAllCards,getAllSuit, getCard} = require('./controller')




app.get('/cards', getAllCards)
app.get('/cards/:suit',getAllSuit)
app.get('/cards/:suit/:card',getCard)



app.listen(5050,()=>{console.log('server listening on port 5050')})