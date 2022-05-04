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
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }
        ]
    },
    // fix virtuals
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;