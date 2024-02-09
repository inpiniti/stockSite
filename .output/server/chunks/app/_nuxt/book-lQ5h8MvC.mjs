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
function replaceDomain(url) {
  if (!url || !String(url).includes("http")) {
    return String(url);
  }
  return url.replace(/(https:\/\/)(.*)(\.dcinside)/, "$1images$3");
}
function timeAgo(dateString) {
  const now = /* @__PURE__ */ new Date();
  const past = new Date(dateString);
  const diffMs = now.getTime() - past.getTime();
  const diffSecs = Math.floor(diffMs / 1e3);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);
  if (diffSecs < 60) {
    return `${diffSecs}\uCD08 \uC804`;
  } else if (diffMins < 60) {
    return `${diffMins}\uBD84 \uC804`;
  } else if (diffHours < 24) {
    return `${diffHours}\uC2DC\uAC04 \uC804`;
  } else if (diffDays < 30) {
    return `${diffDays}\uC77C \uC804`;
  } else if (diffMonths < 12) {
    return `${diffMonths}\uAC1C\uC6D4 \uC804`;
  } else {
    return `${diffYears}\uB144 \uC804`;
  }
}

export { getDatesUntilTarget as a, getSaturday as g, replaceDomain as r, timeAgo as t };
//# sourceMappingURL=book-lQ5h8MvC.mjs.map
