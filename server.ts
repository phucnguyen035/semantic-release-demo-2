import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/hello", async () => {
  return { hello: "world 2" };
});

fastify.get("/bye", async () => {
  return { bye: "world 2" };
});

fastify.get("/error", async () => {
  throw new Error("something went wrong");
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
