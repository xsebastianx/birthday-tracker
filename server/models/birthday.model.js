const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BirthdaySchema = new schema({
    username: String, required: true,
    chohort_number: String, required: true,
    month: String, required: true,
    date: String, required: true
})