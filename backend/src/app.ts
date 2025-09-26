import "reflect-metadata";

import path from "path";
import { createExpressServer, useContainer } from "routing-controllers";
import Container from "typedi";

useContainer(Container);

const app = createExpressServer({
  cors: true,
  controllers: [path.join(__dirname, "/controllers/*.{j,t}s")],
  middlewares: [path.join(__dirname, "/middlewares/*.{j,t}s")],
  interceptors: [path.join(__dirname, "/interceptors/*.{j,t}s")],
});

export default app;
