# BOCMadrid

Este proyecto es personal, no oficial, cuya finalidad es dar mayor difusión al Boletín Oficial de la Comunidad de Madrid (BOCM). No tiene ninguna relación con el Gobierno de la Comunidad de Madrid ni con el Boletín Oficial.

Si quieres ver el resultado, las notificaciones que genera este proyecto se publicarán en la cuenta de Twitter [@BOCMadrid](https://twitter.com/BOCMadrid) y en el canal de Telegram [t.me/BOCMadrid](t.me/BOCMadrid).

## Scrapper

Para usar el scrapper no es necesario ninguna API key. Puede probar la recolección de datos ejecutando el siguiente comando:

```bash
npm run write
```

Este script conectará con bocm.es y escribirá un json con la fecha del boletín en la carpeta `data`.

## Notificaciones

Para enviar las notificaciones a Twitter y Telegram hay que ejecutar el siguiente comando:

```bash
npm run new
```

### Requisitos

#### Telegram

Para conectar con Telegram es necesario definir las siguientes variables de entorno:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`.

#### Twitter

Para conectar con Twitter es necesario definir las siguientes variables de entorno:

- `TWITTER_API_KEY`
- `TWITTER_API_SECRET`
- `TWITTER_ACCESS_TOKEN`
- `TWITTER_ACCESS_TOKEN_SECRET`
