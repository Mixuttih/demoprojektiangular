import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Backend');
});

//List products
app.get('/api/products', (req: Request, res: Response) => {
  res.send('List products');
});

//Get product by id
app.get('/api/product/:id', (req: Request, res: Response) => {
  res.send('Get project ' + req.params.id);
});

//Create new product
app.post('/api/product', (req: Request, res: Response) => {
  res.send('Create new project');
});

//Update product by id
app.put('/api/product/:id', (req: Request, res: Response) => {
  res.send('Update project ' + req.params.id);
});

//Delete product by id
app.delete('/api/product/:id', (req: Request, res: Response) => {
  res.send('Delete project ' + req.params.id);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});