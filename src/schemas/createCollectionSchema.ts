import * as z from 'zod'

export const createCollectionSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(1000),
  slug: z.string().min(1).max(50),
  externalUrl: z.string().min(0).max(255).optional().or(z.literal('')),
  discordUsername: z.string().min(0).max(255).optional().or(z.literal('')),
  instagramUsername: z.string().min(0).max(255).optional().or(z.literal('')),
  twitterUsername: z.string().min(0).max(255).optional().or(z.literal('')),
  nostrUsername: z.string().min(0).max(255).optional().or(z.literal('')),
  newCollectionUUID: z
    .string({ required_error: 'File cannot be empty' })
    .uuid(),
  price: z.coerce.number().positive().gte(0).or(z.literal('')),
  maxMintsPerAddress: z.coerce
    .number()
    .int()
    .positive()
    .gte(0)
    .or(z.literal('')),
})

export type CreateCollectionSchema = z.infer<typeof createCollectionSchema>
