//src/libs/authentication.ts
import * as express from 'express';
import * as jwt from 'jsonwebtoken';

function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[],
) {
  if (securityName === 'jwt') {
    const token = request.headers?.authorization?.replace('Beare', '');
    if (!token) return Promise.reject({});

    let userData;
    try {
      userData = jwt.verify(token, 'secret');
    } catch (error) {
      return Promise.reject({});
    }

    if (userData) return Promise.resolve({ userData });
  }
  return Promise.reject({});
}

export { expressAuthentication };
