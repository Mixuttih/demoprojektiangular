"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Hello Backend');
});
//List products
app.get('/api/products', (req, res) => {
    res.send('List products');
});
//Get product by id
app.get('/api/product/:id', (req, res) => {
    res.send('Get project ' + req.params.id);
});
//Create new product
app.post('/api/product', (req, res) => {
    res.send('Create new project');
});
//Update product by id
app.put('/api/product/:id', (req, res) => {
    res.send('Update project ' + req.params.id);
});
//Delete product by id
app.delete('/api/product/:id', (req, res) => {
    res.send('Delete project ' + req.params.id);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
