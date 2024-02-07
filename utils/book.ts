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
  if (!url || !String(url).includes("http")) {
    return String(url);
  }
  return url.replace(/(https:\/\/)(.*)(\.dcinside)/, "$1images$3");
}

export function timeAgo(dateString: any) {
  const now = new Date();
  const past = new Date(dateString);
  const diffMs = now.getTime() - past.getTime();

  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffSecs < 60) {
    return `${diffSecs}초 전`;
  } else if (diffMins < 60) {
    return `${diffMins}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else if (diffDays < 30) {
    return `${diffDays}일 전`;
  } else if (diffMonths < 12) {
    return `${diffMonths}개월 전`;
  } else {
    return `${diffYears}년 전`;
  }
}
