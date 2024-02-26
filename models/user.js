const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    maidenName: String,
    age: Number,
    gender: String,
    email: String,
    phone: String,
    username: String,
    password: String,
    birthDate: Date,
    image: String,
    bloodGroup: String,
    height: Number,
    weight: Number,
    eyeColor: String,
    hair: {
        color: String,
        type: String
    },
    domain: String,
    ip: String,
    address: {
        address: String,
        city: String,
        coordinates: {
            lat: Number,
            lng: Number
        },
        postalCode: String,
        state: String
    },
    macAddress: String,
    university: String,
    bank: {
        cardExpire: String,
        cardNumber: String,
        cardType: String,
        currency: String,
        iban: String
    },
    company: {
        address: {
            address: String,
            city: String,
            coordinates: {
                lat: Number,
                lng: Number
            },
            postalCode: String,
            state: String
        },
        department: String,
        name: String,
        title: String
    },
    ein: String,
    ssn: String,
    userAgent: String,
    crypto: {
        coin: String,
        wallet: String,
        network: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
