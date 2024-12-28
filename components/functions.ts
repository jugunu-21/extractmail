"use server"
import { User } from '@prisma/client';
import prismadb from "@/db";
export async function createUser(email: string): Promise<User | null> {
    console.log("email", email)
    try {
        console.log("emial", email)
        const user = await prismadb.user.create({
            data: {
                email,
            },
        })
        return user
    } catch (error) {
        console.log(error)
        return null
    }
}