import { AdoNodeServer, Modules } from "ado-node";
import express, { Express } from "express";
import path from "path";
import cors from "cors";
import { appModule } from "./router/app/app.module";
import { LogGlobalPipe } from "./pipe/Log.pipe";

@Modules({
  Modules: [appModule],
  GlobalPipes: [LogGlobalPipe],
})
class AdoNodeServerImpl extends AdoNodeServer {}

AdoNodeServerImpl.runSSRServer((app: Express) => {
  app.use(express.static("dist/app"));
  app.use(cors());

  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "app/index.html"));
  });
});
