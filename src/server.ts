import app from './app';
import config from './config/config';

if (config.nodeEnv !== 'production') {
  const PORT = config.port;
  app.listen(PORT, () => {
    console.log(`Server listenning on port ${PORT}`);
  });
}
export default app;
