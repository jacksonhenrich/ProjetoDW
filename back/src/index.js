import express from 'express';
import { listWifis } from "./lib/wifi.js";
import router from './routes.js';

const server = express();

server.get('/wifis', async (req, res) => {
    const wifis = await listWifis();

    res.json(wifis);
});

server.use(routes);

server.listen(3000, () => {
    console.log('Serve running on port 3000')
});
