import express, { Application } from 'express';

const PORT: number = 3001;
const app: Application = express();

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});
