import clientPromise from "@/lib/mongodb";
import crypto from "crypto";

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("LogisticDB");
      const { fullName, email, password } = req.body;

      // Check if the email already exists
      const existingUser = await db.collection("users").findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "Email already exists" });
      }

      // Hash the password before storing
      const hashedPassword = hashPassword(password);

      // Normalize the email and set the default role
      const normalizedEmail = email.toLowerCase();
      const defaultRole = "user";

      // Insert the new user with the hashed password and default role
      await db.collection("users").insertOne({
        fullName,
        email: normalizedEmail,
        password: hashedPassword,
        role: defaultRole, // Default role is "user"
      });

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Error creating user" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
