import { createIntl, createIntlCache, IntlShape } from "react-intl";

// 언어별 메시지 정의
interface Messages {
  [key: string]: {
    calendar: {
      monthNames: string;
      dayNames: string;
    };
    // 다른 언어 메시지 정의도 추가할 수 있습니다.
  };
}

const messages: Messages = {
  en: {
    calendar: {
      monthNames: `January, February, March, April, May, June, July, August, September, October, November, December`,
      dayNames: `Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday`,
    },
    // 영어 메시지들을 정의합니다.
  },
  ko: {
    calendar: {
      monthNames:
        "1월, 2월, 3월, 4월, 5월, 6월, 7월, 8월, 9월, 10월, 11월, 12월",
      dayNames: "일, 월, 화, 수, 목, 금, 토",
    },
    // 한국어 메시지들을 정의합니다.
  },
  // 다른 언어의 메시지들도 정의합니다.
};

// 언어 설정과 캐시 생성
const cache = createIntlCache();
const defaultLocale = "ko";
const defaultMessages = messages[defaultLocale];
const defaultIntl: IntlShape = createIntl(
  {
    locale: defaultLocale,
    messages: {
      ...defaultMessages.calendar,
    },
  },
  cache,
);

export { defaultIntl, messages };
