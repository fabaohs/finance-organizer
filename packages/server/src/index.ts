import { makeApp } from "./main/app/make-app.js";

const { app, logger } = await makeApp();

app.listen({ port: 3001 }, (err) => {
  if (err) {
    logger.error(err.message, { error: err });
    process.exit(1);
  }
});
