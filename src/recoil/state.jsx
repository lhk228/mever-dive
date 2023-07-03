import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage = typeof window !== "undefined" ? window.sessionStorage : undefined;
const { persistAtom } = recoilPersist({ key: "dive-session", storage: sessionStorage });

// 유저 State
const userState = atom({
  key: "userState",
  default: { user_id: null, user_nm: null, auth: null, user_grade:null, login: false },
  effects_UNSTABLE: [persistAtom],
});

// 페이지 State
const pageState = atom({
  key: "pageState",
  default: { title:"메인", subtitle:"오늘의 공간", info:{} },
});

// 메뉴 State
const menuState = atom({
  key: "menuState",
  default: false,
});


// toastAlert state
const alertState = atom({
  key: "alertState",
  default: { show: false, type: "ok", msg: "", delay: 2000, openClass: "" },
});

export { userState, pageState, alertState, menuState }