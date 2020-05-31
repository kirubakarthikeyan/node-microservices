import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";
const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({
        min: 8,
        max: 20,
      })
      .withMessage("Provide a valid password"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    throw new DatabaseConnectionError();
    // res.send("sign up current user");
  }
);

export { router as signUpRouter };
