const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipod|android/.test(ua);

export { isMobile };
