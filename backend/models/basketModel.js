import mongoose from 'mongoose';

const basketSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    count: {type: String, required: true}
})

const basketModel = mongoose.model('Basket', basketSchema);
export default basketModel;