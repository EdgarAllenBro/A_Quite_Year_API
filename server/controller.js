const cardsDB = require('./quiet.json')


module.exports = {
getAllCards : (req,res)=>{
res.status(200).send(cardsDB)
    },
getAllSuit : (req,res)=>{
    let {suit} = req.params

    res.status(200).send(cardsDB.cards[`${suit}`])
},
getCard : (req,res)=>{
    let {suit,card} = req.params
    res.status(200).send(cardsDB.cards[`${suit}`][`${card}`])
}
}