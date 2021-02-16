import * as crypto from 'crypto';
import BASE from '../../shared/Base';

export default class Webhooks  {

  validateSignature(signature: string, body: string, token: string): boolean {
    const hmacSignature = crypto.createHmac('sha1', token).update(body).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(hmacSignature));
  }
}