import Joi from 'joi';
import type {NextApiRequest, NextApiResponse} from 'next';
import {getSession} from 'next-auth/client';

import prisma from '@/lib/prisma';

const validationSchemaPOST = Joi.object({
  prop: Joi.string().trim().max(100).required(),
});

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    return handlePOST(req, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// POST /api/something
async function handlePOST(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {error} = validationSchemaPOST.validate(req.body, {
    abortEarly: true,
    allowUnknown: true,
  });

  // Throw 422 if error
  if (error) {
    return res.status(422).json({
      validationError: true,
      message: error.details[0].message,
      prop: error.details[0].context.key,
    });
  }

  // Get session
  const session = await getSession({req});
  const userEmail = session?.user?.email;

  // Throw if invalid
  if (!userEmail) {
    res.status(401);
    return;
  }

  res.status(200);
}
