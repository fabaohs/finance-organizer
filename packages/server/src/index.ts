import { createApp } from "./main/bootstrap.js";

const { app, logger } = await createApp();

app.listen({ port: 3001 }, (err) => {
  if (err) {
    logger.error(err.message, { error: err });
    process.exit(1);
  }
});
