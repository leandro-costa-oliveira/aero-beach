import "reflect-metadata";

import path from "path";
import { createExpressServer, useContainer, Action } from "routing-controllers";
import Container from "typedi";
import { AuthService } from "./services/AuthService";

useContainer(Container);

const app = createExpressServer({
  cors: true,
  controllers: [path.join(__dirname, "/controllers/*.{j,t}s")],
  middlewares: [path.join(__dirname, "/middlewares/*.{j,t}s")],
  interceptors: [path.join(__dirname, "/interceptors/*.{j,t}s")],
  authorizationChecker: async (action: Action) => {
    const token = action.request.headers['authorization'];
    const user = await new AuthService().getCredentials(token);
    if (user) {
      action.request.credentials = user;
      return true;
    }
    return false
  },
});

export default app;