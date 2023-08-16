import * as z from 'zod'

export const editProfileSchema = z.object({
  profileImageUrl: z.string().url().optional().or(z.literal('')),
  name: z.string().min(1).max(50),
  bio: z.string().min(1).max(1000).optional().or(z.literal('')),
})

export type EditProfileSchema = z.infer<typeof editProfileSchema>
