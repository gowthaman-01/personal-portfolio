import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body

  if (!body.name || !body.email || !body.message) {
    return res.status(400).json('Unable to recieve data')
  }

  res.status(200).json({
    name: body.name,
    email: body.email,
    message: body.message
  })
}

export default handler;