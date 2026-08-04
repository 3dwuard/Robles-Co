import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_TO = "joseeduardocontreras@hotmail.com";
const NOTIFY_FROM = "onboarding@resend.dev";

type NotifyPayload = {
  need?: string;
  practiceArea?: string;
  description?: string;
  valueRange?: string;
  urgent?: boolean;
  name?: string;
  contactMethod?: string;
  contactValue?: string;
};

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  let payload: NotifyPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { need, practiceArea, description, valueRange, urgent, name, contactMethod, contactValue } =
    payload;

  const body = [
    `Practice area: ${practiceArea ?? "-"}`,
    `Need: ${need ?? "-"}`,
    `Description: ${description ?? "-"}`,
    `Value range: ${valueRange ?? "-"}`,
    `Urgent: ${urgent ?? "-"}`,
    `Name: ${name ?? "-"}`,
    `Contact method: ${contactMethod ?? "-"}`,
    `Contact value: ${contactValue ?? "-"}`,
  ].join("\n");

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      subject: `New lead: ${name ?? "Unknown"}`,
      text: body,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
