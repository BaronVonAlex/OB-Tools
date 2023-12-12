import * as z from "zod"

export const SignupValidationSchema = z.object({
    name: z.string().min(2, {message:'Too short'}).max(64, {message:'Too long'}), 
    username: z.string().min(2, {message:'Too short'}).max(64, {message:'Too long'}),
    email: z.string().email(),
    password: z.string().min(8, {message:'Password must be at least 8 characters.'})
})