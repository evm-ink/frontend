import * as z from 'zod'

export const editCollectionSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(1000),
  discordUsername: z.string().min(0).max(255).optional().or(z.literal('')),
  externalUrl: z.string().min(0).max(255).optional().or(z.literal('')),
  instagramUsername: z.string().min(0).max(255).optional().or(z.literal('')),
  mediumUsername: z.string().min(0).max(255).optional().or(z.literal('')),
  telegramUsername: z.string().min(0).max(255).optional().or(z.literal('')),
  twitterUsername: z.string().min(0).max(255).optional().or(z.literal('')),
})

export type EditCollectionSchema = z.infer<typeof editCollectionSchema>
