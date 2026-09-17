import "reflect-metadata";

import path from "path";
import { createExpressServer, useContainer, Action } from "routing-controllers";
import Container from "typedi";
import { AuthService } from "./services/AuthService";
import { ErrorHandler } from "./middlewares/ErrorHandler";

useContainer(Container);

Container.set(ErrorHandler, new ErrorHandler());

const app = createExpressServer({
  cors: true,
  classTransformer: true,
  validation: true,
  defaultErrorHandler: false,
  controllers: [path.join(__dirname, "/controllers/*.{j,t}s")],
  middlewares: [ErrorHandler],
  interceptors: [path.join(__dirname, "/interceptors/*.{j,t}s")],

  authorizationChecker: async (action: Action) => {
    const token = action.request.headers["authorization"];

    if (!token) {
      return false;
    }

    const user = await Container.get(AuthService).getCredentials(token);

    if (user) {
      action.request.credentials = user;
      return true;
    }

    return false;
  },
});

export default app;