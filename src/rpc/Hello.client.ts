import { RpcClientController,Call, Body } from "ado-node"

@RpcClientController("/hello", {
  interFace: "Hello",
  url: "http://127.0.0.1:10012",
})
class helloController {
  @Call("/hello", "hello")
  async hello(
    @Body() body: any
  ): Promise<{ name: string; age: string; value: string }> {
    const { name,value,age } = body;
    return {
      name,
      age,
      value,
    };
  }
}

export {
    helloController
}