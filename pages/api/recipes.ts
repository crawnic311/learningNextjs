// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

export default function getAllRecipes(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'Sorry, we only accept GET requests' })
  }
  res.status(200).json({ name: 'John Doe', method: req.method })
}
