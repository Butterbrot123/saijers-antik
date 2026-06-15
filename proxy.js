import { NextResponse } from "next/server";

const legacyPathSegments = new Map([
  ["Ankauf", "ankauf"],
  ["Blog", "blog"],
  ["Datenschutz", "datenschutz"],
  ["Dienstleistungen", "dienstleistungen"],
  ["FAQ", "faq"],
  ["Impressum", "impressum"],
  ["Kontakt", "kontakt"],
  ["Laden", "laden"]
]);

export function proxy(request) {
  const url = request.nextUrl.clone();

  if (url.hostname === "saijersantik.de") {
    url.hostname = "www.saijersantik.de";
    return NextResponse.redirect(url, 308);
  }

  if (url.pathname === "/begleitschreiben") {
    url.pathname = "/versand";
    return NextResponse.redirect(url, 308);
  }

  const segments = url.pathname.split("/");
  const legacySegment = segments[1];
  const replacement = legacyPathSegments.get(legacySegment);

  if (!replacement) {
    return NextResponse.next();
  }

  segments[1] = replacement;
  url.pathname = segments.join("/");

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|fonts).*)"]
};
