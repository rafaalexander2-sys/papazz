export function isAppVersion() {
  return window.location.hostname.startsWith("app.");
}

export function isWebVersion() {
  return !isAppVersion();
}
