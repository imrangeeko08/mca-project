import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("LogisticDB");
      const { name, email, phone, coverLetter } = req.body;

      // Validation: Ensure all fields are provided
      if (!name || !email || !phone || !coverLetter) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Insert the application into the database
      const application = {
        name,
        email: email.toLowerCase(),
        phone,
        coverLetter,
        createdAt: new Date(),
      };

      await db.collection("career-applications").insertOne(application);

      res.status(201).json({ message: "Application submitted successfully." });
    } catch (error) {
      console.error("Error submitting application:", error);
      res.status(500).json({ message: "Error submitting application." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
