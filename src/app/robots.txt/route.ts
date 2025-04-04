import { NextResponse } from "next/server";

export async function GET() {
  const content = `User-agent: *
Allow: /
Sitemap: https://www.mosesnwigberi.com/sitemap.xml`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
