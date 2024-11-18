// pages/api/admin/getCareerApplications.js
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("LogisticDB");

      // Fetch all applications from the 'career-applications' collection
      const applications = await db
        .collection("career-applications")
        .find({})
        .toArray();

      res.status(200).json({ applications });
    } catch (error) {
      console.error("Error fetching career applications:", error);
      res.status(500).json({ message: "Error fetching career applications." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
