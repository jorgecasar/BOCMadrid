import dotenv from 'dotenv';

dotenv.config();

export const apiKey = process.env.TWITTER_API_KEY;
export const apiSecret = process.env.TWITTER_API_SECRET;
export const accessToken = process.env.TWITTER_ACCESS_TOKEN;
export const accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
