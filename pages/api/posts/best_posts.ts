import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: {
    phrase: string;
  }[]
}

export default function best_posts(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = { data: [{phrase: 'Phrase_1'}, {phrase: 'Phrase_2'}, {phrase: 'Phrase_3'}] };
  res.status(200).json(data);
}