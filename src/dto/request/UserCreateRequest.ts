import type { Request } from "express";

export interface UserCreateRequest extends Request {
    userId: string,
    name: string,
    age: number
}

export interface CreateUserDTO {
    name?: string;
    dob?: Date;
    age?: number;
    address?: string;
    email?: string;
    phoneNumber?: string;
}