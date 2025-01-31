import { Router } from "express";
import taskRouter from "./TaskRoutes";

const router = Router();

router.use("/tasks", taskRouter);
router.route("/").get((req, res, next) => {
  res.status(200).json({
    message: "Hello World",
  });
});


export default router;