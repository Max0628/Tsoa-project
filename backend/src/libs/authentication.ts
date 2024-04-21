//src/libs/authentication.ts

import * as express from 'express';
import * as jwt from 'jsonwebtoken';

function expressAuthentication(
  //request參數，型別是express.Request
  request: express.Request,
  //身份驗證類型，型別是string
  securityName: string,
  //控制授權顆粒度，這邊沒設定
  scopes?: string[],
) {
  //如果驗證類型是jwt
  if (securityName === 'jwt') {
    //從request物件中的header屬性取出authorization屬性，設定給變數token
    const token = request.headers?.authorization?.split(' ')[1];
    if (!token) throw new Error('Missing authorization header');

    let userData;
    try {
      //驗證jwt是否正確
      userData = jwt.verify(token,'JWT_SECRET');
    } catch (error) {
      return Promise.reject({ error: 'Unsupported security scheme' });
    }

    if (userData) return Promise.resolve({ userData });
  }
  return Promise.reject({ error: ' Unauthorized ' });
}

export { expressAuthentication };
