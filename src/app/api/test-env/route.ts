export async function GET() {
  return Response.json({
    RESEND_API_KEY: process.env.RESEND_API_KEY ? "✅ Loaded" : "❌ Not Loaded",
  });
}
