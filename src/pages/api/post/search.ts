import type { NextApiRequest, NextApiResponse } from 'next';

import cors from 'src/utils/cors';

import { _posts } from 'src/_mock/_blog';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { query } = req.query;

    const cleanQuery = `${query}`.toLowerCase().trim();

    const results: typeof _posts = [];

    _posts.forEach((post) => {
      if (!query) {
        return results.push(post);
      }

      if (post.title.toLowerCase().includes(cleanQuery)) {
        return results.push(post);
      }

      return results;
    });

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error('[Blog API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
