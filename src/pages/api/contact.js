import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      customer,
      firstName,
      lastName,
      companyName,
      jobTitle,
      emailAddress,
      phone,
      location,
      city,
      originCargo,
      destinationCargo,
      inquiries,
      source,
      service
    } = req.body;

    // Validations
    if (!firstName || !emailAddress || !source ||!service) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
      const client = await clientPromise;
      const db = client.db('LogisticDB'); // Replace with your DB name

      const result = await db.collection('contacts').insertOne({
        customer,
        firstName,
        lastName,
        companyName,
        jobTitle,
        emailAddress,
        phone,
        location,
        city,
        originCargo,
        destinationCargo,
        inquiries,
        source,
        service,
        createdAt: new Date(),
      });

      return res.status(201).json({ message: 'Data saved successfully', result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
