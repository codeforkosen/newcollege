import { NewCollege } from "./NewCollege.d.ts";

const n: NewCollege[] = JSON.parse(await Deno.readTextFile("newcollege202208.json"));

console.log(n[0]);
