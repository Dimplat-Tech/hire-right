import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { organization, role, mobile, email } = req.body;

    console.log("📩 New Lead:", { organization, role, mobile, email });

    return res.status(200).json({ message: "Form submitted!" });
  } catch (error) {
    console.error("❌ Error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
