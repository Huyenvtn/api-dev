import type { NextApiRequest, NextApiResponse } from 'next';

import cors from 'src/utils/cors';

import { _requests } from 'src/_mock/_request';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    res.status(200).json({
      requests: _requests,
    });
  } catch (error) {
    console.error('[Product API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
