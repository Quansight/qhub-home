import { Drash } from "https://deno.land/x/drash@v1.0.3/mod.ts";
import HomeResource from "./home_resource.ts";

/*
 * The following variables set the default host and port
 * if not set in the `.env` file.
 */

/*
 * This function renders the home page for the application
 */

/*
 * This function renders the stepper "install" to deploy an
 * instance of Sqribe.
 */

/*
 * This function renders the documentation
 * panel for Sqribe
 */

const server = new Drash.Http.Server({
  response_output: "text/html",
  resources: [HomeResource],
  directory: ".",
  static_paths: ["/public"],
});

server.run({
  hostname: "localhost",
  port: 1447,
});

console.log(`Server listening: http://${server.hostname}:${server.port}`);
