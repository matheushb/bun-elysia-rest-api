import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import users from "./routes/UserRouter";

class App {
    public elysia: Elysia;

    constructor() {
        this.elysia = new Elysia();
        this.routes();
        this.pluggins();
    }

    private routes() {
        this.elysia.use(users);
    }

    private pluggins() {
        this.elysia.use(
            swagger({
                autoDarkMode: true,
                version: "1.0",
                path: "/api",
                documentation: {
                    tags: [{ name: "Users", description: "User CRUD" }],
                },
            })
        );
    }
}

export default new App().elysia;
