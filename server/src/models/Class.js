import mongoose from "mongoose";
const { Schema } = mongoose;
const classSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    schedule: [{
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            type: String,
            required: true
        }]
        [{
            type: Schema.Types.ObjectId,
            // Ask Alkis about this
            ref: 'Session',
            required: true
        }],
    notes: {
        type: String,
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }],
    schoolYear: {
        type: Schema.Types.ObjectId,
        ref: 'SchoolYear',
        required: true
    },
    liveMeetingLink: {
        type: String,
    },
    liveMeetingPassword: {
        type: String,
    },
    lessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    }],
    tests: [{
        type: String,
    }],
}, {
    timestamps: true
})

export default mongoose.model('Class', classSchema)