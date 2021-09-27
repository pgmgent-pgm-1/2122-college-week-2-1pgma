const v = 190;
const i = 2.85;
const t = 0.02;
const r = v / i;
const p = v * i;
const f = 1 / t;

const output = `
    ======================
    r = ${r}
    p = ${p}
    f = ${f}
`;

if (v < 200) {
  console.error("V should be higher than 200");
} else {
  console.log(output);
}
