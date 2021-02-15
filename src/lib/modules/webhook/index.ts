import * as crypto from 'crypto';

export default class Webhooks {
  sign(payload: any, key: string): string {
    return crypto
      .createHmac('sha1', key)
      .update(JSON.stringify(payload))
      .digest('hex');
  }

  // tslint:disable-next-line:variable-name ban-types
  verify(body: any, webhook_token: string, webhook_signature: string): Boolean {
    const signature = this.sign(body, webhook_token);
    return signature === webhook_signature;
  }
}