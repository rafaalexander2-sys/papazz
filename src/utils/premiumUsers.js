// Lista de emails com acesso premium automático
const PREMIUM_EMAILS = [
  "santosaline2802@gmail.com",
  "teste@papazz.com", // você pode adicionar mais emails aqui
];

export function isPremiumUser(email) {
  if (!email) return false;
  return PREMIUM_EMAILS.includes(email.toLowerCase());
}
