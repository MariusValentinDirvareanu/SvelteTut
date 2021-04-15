import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

app.use('/build', express.static('public/build'))

export default app;
