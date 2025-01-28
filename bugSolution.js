```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // ... rest of your API route logic
  } catch (error) {
    console.error('Error getting session:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
```