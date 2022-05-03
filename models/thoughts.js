const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true,
        }
    }
);

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;