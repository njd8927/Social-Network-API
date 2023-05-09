const { Schema, model, Types } = require('mongoose');


const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: [
        {
        type: String,
        required: true
        }
    ],
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

ThoughtSchema.virtual('reactionCount').get(() =>
    this.reactions.length);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
