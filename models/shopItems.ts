import {Schema, models, model} from "mongoose";

export interface ICar {
    carID: number,
    name: string,
    price: number,
    prodYear: number,
    src: string[],
    miniDescription: string,
    sale: boolean,
    salePercent: number,
    available: boolean,
    createdAt?: Date
}

export interface ICarInfo{
    CarInfoID: number,
    brand: string,
    model: string,
    mileage: number,
    fuel: string,
    gearbox: string,
    type: string,
    engine: number,
    hp: number,
    driveType: string,
    color: string,
    doorNum: number,
    sitsNum: number,
    usage: string,
    description: string
}

const CarSchema = new Schema<ICar>({
    carID: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    prodYear: {type: Number, required: true},
    src: {type: [String], required: true},
    miniDescription: {type: String, required: true},
    sale: {type: Boolean, required: true, default: false},
    salePercent: {type: Number, default: 0, min: 0, max: 100},
    available: {type:Boolean, default: true},
})

const CarInfoSchema = new Schema<ICarInfo>({
    CarInfoID: {type: Number, required: true, unique: true},
    brand: {type: String, required: true},
    model: {type: String,  required: true},
    mileage: {type: Number,  required: true},
    fuel: {type: String, required: true},
    gearbox: {type: String, required: true},
    type: {type: String, required: true},
    engine: {type: Number, required: true},
    hp: {type: Number, required: true},
    driveType: {type: String, required: true},
    color: {type: String, required: true},
    doorNum: {type: Number, required: true},
    sitsNum: {type: Number, required: true},
    usage: {type: String, required: true},
    description: {type: String, required: true},
  },
  {
    _id: false,
  }
);

export const CarModel = models.Car || model<ICar>("Car", CarSchema);
export const CarInfoModel = models.CarInfo || model<ICarInfo>("CarInfo", CarInfoSchema);