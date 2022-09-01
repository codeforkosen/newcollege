import { CSV } from "https://js.sabae.cc/CSV.js";

const data = CSV.toJSON(await CSV.fetch("newcollege202208.csv"));
const notes = CSV.toJSON(await CSV.fetch("newcollege202208-notes.csv"));
data.forEach(d => {
  d.附帯事項 = notes.filter(n => n.開設予定大学等 == d.開設予定大学等).map(n => {
    return { 附帯事項: n.附帯事項, 附帯事項区分: n.附帯事項区分 };
  });
});
console.log(data);
await Deno.writeTextFile("newcollege202208.json", JSON.stringify(data, null, 2));

