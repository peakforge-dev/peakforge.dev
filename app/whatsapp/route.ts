import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const redirectUrl = getWhatsAppUrl(process.env.PEAKFORGE_WHATSAPP_URL);

  if (!redirectUrl) {
    return NextResponse.redirect(new URL("/#contact", request.url));
  }

  return NextResponse.redirect(redirectUrl);
}

function getWhatsAppUrl(value: string | undefined) {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);
    const isAllowedHost =
      url.hostname === "wa.me" || url.hostname === "api.whatsapp.com";

    if (url.protocol === "https:" && isAllowedHost) {
      return url;
    }
  } catch {
    return null;
  }

  return null;
}
