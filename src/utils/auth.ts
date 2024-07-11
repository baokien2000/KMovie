import { verifyCaptcha } from "@/services/auth";
export async function isCaptchaValid(token?: string | null): Promise<boolean> {
    if(!token) return false;
  const verify = await verifyCaptcha(token);
  if (verify?.status === 200) {
      return true
  }
  return false;
 }