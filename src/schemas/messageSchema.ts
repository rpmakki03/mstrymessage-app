import {z} from "zod"

export const MessageSchema = z.object({
    content:z
    .string()
    .min(10, {message:'Content must be at least of 10 characters'})
    .max(10, {message:'Content must no longer than 300 characters'})
    

})