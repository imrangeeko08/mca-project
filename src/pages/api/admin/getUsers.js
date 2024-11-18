// pages/api/admin/getUsers.js
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("LogisticDB");

      // Fetch all users excluding the password
      const users = await db
        .collection("users")
        .find({}, { projection: { password: 0 } })
        .toArray();

      res.status(200).json({ users });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Error fetching user data" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
