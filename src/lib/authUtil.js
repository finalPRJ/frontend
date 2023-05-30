import { check } from '../modules/user';
import { ACCESS_TOKEN } from './api/OAuth';

export function loadUser(store) {
  try {
    const user = localStorage.getItem(ACCESS_TOKEN);
    if (!user) return; // 사용자가 로그인하지 않았을 경우 아무 작업도 수행하지 않습니다.

    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}
