// 토요일의 데이터를 yyyy-mm-dd 형식으로 반환
export function getSaturday(weeksAgo: number = 0) {
  const today = new Date();

  // 토요일의 날짜를 구합니다.
  const saturday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7 * weeksAgo + ((1 - today.getDay() + 7) % 7)
  );

  // 월과 일이 항상 두 자리 수가 되도록 합니다.
  const month = String(saturday.getMonth() + 1).padStart(2, "0");
  const date = String(saturday.getDate()).padStart(2, "0");

  // yyyy-mm-dd 형식으로 반환합니다.
  return `${saturday.getFullYear()}-${month}-${date}`;
}

export function getDatesUntilTarget() {
  let dates = [];
  let i = 0;
  while (true) {
    let date = getSaturday(i);
    if (new Date(date) < new Date("2023-12-04")) {
      break;
    }
    dates.push({ value: date, label: date });
    i++;
  }
  return dates;
}

// 도메인명 수정
export function replaceDomain(url: string): string {
  return url.replace(/(https:\/\/)(.*)(\.dcinside)/, "$1images$3");
}
