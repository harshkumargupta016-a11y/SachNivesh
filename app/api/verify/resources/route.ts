import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    resources: [
      { name: "SEBI Check", url: "https://www.sebi.gov.in/" },
      { name: "SEBI Investor", url: "https://www.sebi.gov.in/sebiweb/" },
      { name: "Cyber Crime", url: "https://cybercrime.gov.in/" },
      { name: "Emergency helpline", url: "tel:1930" },
    ],
  });
}
