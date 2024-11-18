// pages/api/admin/updateStatus.js
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { contactId, newStatus } = req.body;

    if (!contactId || !newStatus) {
      return res.status(400).json({ message: "Invalid data" });
    }

    try {
      const client = await clientPromise;
      const db = client.db("LogisticDB");

      // Update the status of the contact in the database
      const result = await db
        .collection("contacts")
        .updateOne(
          { _id: new ObjectId(contactId) },
          { $set: { status: newStatus } }
        );

      if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Status updated successfully" });
      } else {
        res.status(404).json({ message: "Contact not found" });
      }
    } catch (error) {
      console.error("Error updating status:", error);
      res.status(500).json({ message: "Error updating status" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
