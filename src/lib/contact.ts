export const WHATSAPP_NUMBER = "5515933004033";
export const WHATSAPP_MESSAGE =
  "Olá Fernando! Vim pelo seu site e gostaria de conversar sobre uma solução de IA / Automação / TI.";

export const whatsappLink = (msg: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const EMAIL = "carneiro.fernando@icloud.com";
export const LINKEDIN = "https://www.linkedin.com/in/fernandohcarneiro";
export const GITHUB = "https://github.com/carneiro-fernando";
