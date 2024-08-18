const express = require('express');
const app = express();
const port = 3000; // Choose your desired port

// Mock data
const mockData = {
  "code": "10012_552225",
  "reference": "192.168.243.58_12312312331",
  "dateRequest": "2023-07-18T17:51:32.689Z",
  "error": "Operador no encontrado en la DB",
  "operator": "192.168.243.58",
  "proofs": [
    {
      "href": "/v1/pasos/foto1.png/pruebas/foto1.jpg",
      "image": "/9j/4QDeRXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAA==",
      "rel": "foto1.png"
    },
    {
      "href": "/v1/pasos/foto1.png/pruebas/foto2.jpg",
      "image": "/9j/4QDeRXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAX",
      "rel": "foto2.png"
    }
  ],
  "status": "VALIDADO"
};

// Service endpoint
app.get('/api/data', (req, res) => {
  // Simulate a potential error (you can customize this based on your needs)
  if (Math.random() < 0.2) { // 20% chance of error
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    res.json(mockData);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!'   
 });
});

app.listen(port, () => {
  console.log(`Server   
 listening on port ${port}`);
});
