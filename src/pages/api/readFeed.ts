// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { FEED_URL_TYPE, MAP_URL } from '@/helpers/feedConstant';

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const result = await axios.get(MAP_URL[req.query.url as FEED_URL_TYPE], {
      headers: {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*',
      },
    });

    res.status(200).json({ data: result.data });
  } catch (error) {
    console.error(`Error reading feed - ${req.query.url} :`, error);
    res.status(500).json({ data: error });
  }
}
