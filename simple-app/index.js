import { createApp, Use } from "enton";
import MyController from "./my.controller";

@Use(MyController)
class App {
  load() {
    console.log("Application started on port 80");
  }
}

createApp(new App());
