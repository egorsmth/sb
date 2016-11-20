import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
}, {
  timestamp: true,
});

export default mongoose.model('User', UserSchema);
