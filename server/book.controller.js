const model = require('./book.model')

exports.getAll = async ( req , res) => {
    const book = await model.find()
    res.status(200).json(book)
}
exports.addBook = async ( req , res) => {
    const {title , author , price} = req.body
    const book = await model.create({title , author ,price})
    res.status(201).json({message : 'book added successfully' , book})
}
exports.deleteBook = async ( req , res) => {
    const book = await model.findByIdAndDelete(req.params.id)
    res.status(200).json({message : 'book deleted successfully' , book})

}