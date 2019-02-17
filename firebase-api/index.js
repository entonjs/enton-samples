import { createApp, Use } from 'enton';
import AuthController from './controllers/auth.controller';

@Use(AuthController)
class ApiApp {
  load() {
    console.log("Application started on port 80");
  }
}

createApp(new ApiApp());