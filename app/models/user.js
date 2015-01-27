var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, trim: true},
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    apiKey: String,
    gamesAdded: [Schema.ObjectId],
    registerDate: {type: Date, default: Date.now},
    lastAction: Date
});

module.exports = mongoose.model('User', UserSchema);