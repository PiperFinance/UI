export function generateRandomEmail(): string {
  const randomString = Math.random().toString(36).substring(2, 10);
  const randomNumber = Math.floor(Math.random() * 1000000);
  return `${randomString}${randomNumber}@example.com`;
}

export function generateRandomPassword(length: number = 8): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}
