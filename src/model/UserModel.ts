import mongoose, { Schema, Document } from "mongoose";

// 🟢 Interface định nghĩa User
export interface IUser extends Document {
    name: string;
    dob: Date;
    age: number;
    address: string;
    email: string;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
}

// 🟢 Schema định nghĩa User
const UserSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        dob: { type: Date, required: true },
        age: { type: Number, required: true },
        address: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true },
    },
    {
        timestamps: true, // Tự động tạo `createdAt` & `updatedAt`
    }
);

// 🟢 Model User
const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
