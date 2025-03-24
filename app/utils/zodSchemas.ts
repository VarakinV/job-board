import { z } from "zod";
export const companySchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    location: z.string().min(1, { message: "Location must be defined" }),
    about: z.string().min(10, { message: "Please, provide information about your company" }),
    logo: z.string().min(1, { message: "Please, provide a logo for your company" }),
    website: z.string().url({ message: "Please, provide a valid URL" }),
    xAccount: z.string().optional(),
});

export const jobSeekerSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    about: z.string().min(10, { message: "Please, provide information about yourself" }),
    resume: z.string().min(1, { message: "Please, upload your resume" }),
});
