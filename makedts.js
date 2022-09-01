import { schema2dts } from "https://code4fukui.github.io/JSONSchema/schema2dts.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const schemafn = "newcollege.schema.json";
const schema = JSON.parse(await Deno.readTextFile(schemafn));

const dts = schema2dts(schema);
console.log(dts);
await Deno.writeTextFile(schema.title + ".d.ts", dts);
