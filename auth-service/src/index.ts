import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";
import { signUpRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
const AUTH_SERVER_PORT = 3000;

/**MIDDLEWARES */
const app = express();
app.use(json());

/**ROUTER HANDLERS */
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
app.use(errorHandler);

app.get("*", () => {
  throw new NotFoundError("Page not found");
});

app.listen(AUTH_SERVER_PORT, () => {
  console.log(
    `-------- Auth service started on ${AUTH_SERVER_PORT} ----------`
  );
});
