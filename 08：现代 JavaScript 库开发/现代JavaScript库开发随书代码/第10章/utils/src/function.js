export function debounce(func, wait = 0) {
  wait = Math.round(wait, 10);

  let timerId;
  return function debounced(...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

export function throttle(func, time) {
  let args;
  let timer = null;
  let lastTriggerTime = 0; // 首次触发执行
  function self(...a) {
    args = a;
    const ct = Date.now();
    const diff = ct - lastTriggerTime;
    if (timer) clearTimeout(timer);

    if (diff > time) {
      func.apply(this, args);
      lastTriggerTime = ct;
      return;
    }
    timer = setTimeout(() => {
      lastTriggerTime = Date.now();
      func.apply(this, args);
      timer = null;
    }, time - diff);
  }
  self.clear = () => {
    if (timer) clearTimeout(timer);
  };
  return self;
}
