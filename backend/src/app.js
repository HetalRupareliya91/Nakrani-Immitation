const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'nakrani-imitation-api' }));

const routesDir = path.join(__dirname, 'routes');
if (fs.existsSync(routesDir)) {
  fs.readdirSync(routesDir)
    .filter((file) => file.endsWith('.routes.js'))
    .forEach((file) => {
      const router = require(path.join(routesDir, file));
      app.use('/api' + router.basePath, router);
    });
}

app.use((req, res) => res.status(404).json({ success: false, message: 'Route not found' }));
app.use(errorHandler);

module.exports = app;
