// pages/api/contact.ts
import type {} from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("api contact handler");

  const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

  console.log("check client", WEB3FORMS_ACCESS_KEY);
  if (!WEB3FORMS_ACCESS_KEY) {
    return NextResponse.json(
      {
        error: "Missing Web3Forms access key",
      },
      {
        status: 500,
      }
    );
  }

  const body = await req.json();
  console.log("api contact handler body:", body);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...body,
        access_key: WEB3FORMS_ACCESS_KEY,
      }),
    });

    const result = await response.json();
    console.log("api contact handler result:", result);

    if (result.success) {
      return NextResponse.json(result, { status: 201 });
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
