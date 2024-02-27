import { Elysia } from "elysia";
import UserController from "../controllers/UserController";

const userSwagger = { detail: { tags: ["Users"] } };

const users = new Elysia().group("users", (app) => {
    return app
        .get("", () => UserController.findAll)
        .get("/id/:id", ({ params: { id } }) => UserController.findById(id))
        .post("/sign-in", () => UserController.signIn)
        .post("/sign-up", () => UserController.signUp)
        .get("/profile", () => UserController.getProfile);
});
export default users;
