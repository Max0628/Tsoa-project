//src/libs/authentication.ts

import * as express from 'express';
import * as jwt from 'jsonwebtoken';

function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[],
) {
  if (securityName === 'jwt') {
    const token = request.headers?.authorization?.split(' ')[1];
    console.log(token);
    if (!token) throw new Error('Missing authorization header');

    let userData;
    try {
      userData = jwt.verify(token, 'JWT_SECRET');
      console.log(userData);
    } catch (error) {
      return Promise.reject({ error: 'Unsupported security scheme' });
    }

    if (userData) return Promise.resolve({ userData });
  }
  return Promise.reject({ error: ' Unauthorized ' });
}

export { expressAuthentication };
