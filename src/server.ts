
import 'dotenv/config';
import app from './app';
import '@database';

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
