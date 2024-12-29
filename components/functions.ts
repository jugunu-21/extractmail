"use server"
import { User } from '@prisma/client';
import prismadb from "@/db";
import { error } from 'console';


export async function createUser(email: string): Promise<User | null | Error> {
    console.log("email", email);
    try {
        const user = await prismadb.user.create({
            data: {
                email,
            },
        });

        return user;
    } catch (error) {
        throw error;
    }
}