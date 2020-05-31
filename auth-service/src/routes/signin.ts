import express from "express";
const router = express.Router();

router.get("/api/users/signin", (req, res) => {
  res.send("current user");
});

export { router as signInRouter };
