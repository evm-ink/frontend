import * as z from 'zod'

export const createProfileSchema = z.object({
  profileImageUrl: z.string().url().optional().or(z.literal('')),
  name: z.string().min(1).max(50),
  bio: z.string().min(1).max(1000).optional().or(z.literal('')),
  username: z.string().min(2).max(25),
  isUsernameAvailable: z.boolean(),
})

export type CreateProfileSchema = z.infer<typeof createProfileSchema>
