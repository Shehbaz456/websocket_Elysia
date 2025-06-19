import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello Elysia");

app.ws("/chat",{
  open: (ws) => {
    console.log("WebSocket connection opened");
    ws.send("Welcome to the chat!");
  },
  message: (ws, message) => {
    ws.send(`Echo: ${message}`);
  },
  close: (ws, code, reason) => {
    console.log(`WebSocket connection closed: ${code} - ${reason}`);
  }
})

app.listen(3000, () => {
  console.log(`Server is running at http://${app.server?.hostname}:${app.server?.port}`);
});
export default app;