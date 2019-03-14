import { Controller, Get } from "enton";
import { Post } from "enton/lib/decorators";

@Controller("/my")
class MyController {
  @Get("/:name")
  async index(name, { query }) {
    return new Promise(resolve => {
      setTimeout(() => resolve(`Hey there ${name} ${query.age}`), 300);
    });
  }

  @Post()
  async update(body) {
    return Promise.resolve(body);
  }
}

export default MyController;
