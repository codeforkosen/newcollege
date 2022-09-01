import { validate } from "https://code4fukui.github.io/jsonschema-es/lib/index.js";

const schemafn = "newcollege.schema.json";
const schema = JSON.parse(await Deno.readTextFile(schemafn));

const datafn = "newcollege202208.json";
const data = JSON.parse(await Deno.readTextFile(datafn));
for (const d of data) {
  const p = validate(d, schema);
  if (p.errors.length > 0) {
    throw new Error(p);
  }
}
console.log("valid!");
