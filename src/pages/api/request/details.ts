import type { NextApiRequest, NextApiResponse } from 'next';

import cors from 'src/utils/cors';

import { _requests } from 'src/_mock/_request';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { requestId } = req.query;

    const request = _requests.find((_request) => _request.id === requestId);

    if (!request) {
      res.status(404).json({
        message: 'request not found!',
      });
      return;
    }

    res.status(200).json({
      request,
    });
  } catch (error) {
    console.error('[request API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
