// Emails com acesso ao painel admin
// Adicione os emails da sua equipe aqui
const ADMIN_EMAILS = [
  "rafaalexander2@gmail.com",
  "santosaline2802@gmail.com",
];

export function isAdminUser(email) {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}
