import { NextResponse } from "next/server";

export async function GET() {
  const content = `User-agent: *
Allow: /
Sitemap: https://codewithmoe.vercel.app/sitemap.xml`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
