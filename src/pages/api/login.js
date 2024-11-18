import clientPromise from "@/lib/mongodb"; // Adjust this path if needed
import crypto from "crypto";

function hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
}

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        try {
            // Normalize email to lowercase to avoid case sensitivity issues
            const normalizedEmail = email.toLowerCase();

            // Connect to MongoDB
            const client = await clientPromise;
            const db = client.db("LogisticDB");

            // Find the user by email
            const user = await db.collection("users").findOne({ email: normalizedEmail });
            if (!user) {
                console.log("User not found");
                return res.status(401).json({ message: "Invalid email or password" });
            }

            // Hash the input password and compare with stored hash
            const hashedPassword = hashPassword(password);
            if (hashedPassword !== user.password) {
                console.log("Password mismatch");
                return res.status(401).json({ message: "Invalid email or password" });
            }

            // Extract user's role
            const { role } = user;

            // Send success response with user details
            console.log("Login successful");
            return res.status(200).json({
                message: "Login successful",
                user: {
                    email: normalizedEmail,
                    role,
                },
            });
        } catch (error) {
            console.error("Error during login:", error);
            return res.status(500).json({ message: "An error occurred. Please try again later." });
        }
    } else {
        // Method not allowed
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
