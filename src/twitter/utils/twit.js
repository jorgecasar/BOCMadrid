import Twit from 'twit';
import { apiKey, apiSecret, accessToken, accessTokenSecret } from './constants.js';

export const twit = new Twit({
  consumer_key: apiKey,
  consumer_secret: apiSecret,
	access_token: accessToken,
	access_token_secret: accessTokenSecret,
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
});
