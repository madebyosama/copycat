import express from 'express';
import userUpload from './routes/upload.routes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use('/public', express.static('public'));
app.use('/user', userUpload);

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is listening to port 4000');
});
