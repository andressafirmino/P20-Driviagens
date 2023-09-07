import express from "express";
import cors from "cors";
import router from "./routes/index.route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));
