function getSaturday(weeksAgo = 0) {
  const today = /* @__PURE__ */ new Date();
  const saturday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7 * weeksAgo + (1 - today.getDay() + 7) % 7
  );
  const month = String(saturday.getMonth() + 1).padStart(2, "0");
  const date = String(saturday.getDate()).padStart(2, "0");
  return `${saturday.getFullYear()}-${month}-${date}`;
}
function getDatesUntilTarget() {
  let dates = [];
  let i = 0;
  while (true) {
    let date = getSaturday(i);
    if (new Date(date) < /* @__PURE__ */ new Date("2023-12-04")) {
      break;
    }
    dates.push({ value: date, label: date });
    i++;
  }
  return dates;
}

export { getDatesUntilTarget as a, getSaturday as g };
//# sourceMappingURL=book-WuItVcFF.mjs.map
