import type { NextApiRequest, NextApiResponse } from 'next';

import cors from 'src/utils/cors';

import { _employees } from 'src/_mock/_employee';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { employeeId } = req.query;

    const employee = _employees.find((_employee) => _employee.id === employeeId);

    if (!employee) {
      res.status(404).json({
        message: 'Employee not found!',
      });
      return;
    }

    res.status(200).json({
      employee,
    });
  } catch (error) {
    console.error('[Employee API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
