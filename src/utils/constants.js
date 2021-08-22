export const baseUrl = 'http://www.bocm.es';
export const dataDirPath = './data';
export const fileBasename = (date) => (date || (new Date()).toISOString()).split('T')[0];
export const notificationFileName = date => `${fileBasename(date)}-notifications.json`;
