import {Schema, models, model} from "mongoose";

interface Item {
    itemID: number,
    name: string,
    price: number,
    src: string[],
    miniDescription: string,
    description: string,
    sale: boolean,
    salePercent: number,
    available: boolean,
    createdAt?: Date
}

const ItemSchema = new Schema<Item>({
    itemID: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    src: {type: [String], required: true},
    miniDescription: {type: String, required: true},
    description: {type: String, required: true},
    sale: {type: Boolean, required: true, default: false},
    salePercent: {type: Number, default: 0, min: 0, max: 100},
    available: {type:Boolean, default: true},
    createdAt: {type: Date, default: Date.now}
})

export default models.Item || model<Item>("Item", ItemSchema);