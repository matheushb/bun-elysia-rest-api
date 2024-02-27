import app from "./app";

app.listen(8000, () => {
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`;
});
