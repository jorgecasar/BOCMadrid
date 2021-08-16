import fetch from 'node-fetch';
import cheerio from 'cheerio';

export const loadBody = url => fetch(url)
	.then(res => res.text())
	.then(body => cheerio.load(body));
