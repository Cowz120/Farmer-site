import Link from 'next/link';
import { headers } from 'next/headers';

// Define the shape of the site data
interface SiteData {
  name: string;
}

// Mock implementation of getSiteData (replace with actual logic)
async function getSiteData(domain: string | null): Promise<SiteData | null> {
  try {
    // Example: Replace this with actual data fetching logic (e.g., API call, database query)
    if (!domain) {
      return { name: 'Default Site' }; // Fallback for null domain
    }
    // Simulate fetching data based on domain
    return { name: `Site for ${domain}` };
  } catch (error) {
    console.error('Error fetching site data:', error);
    return null; // Return null on error
  }
}

export default async function NotFound() {
  const headersList = headers(); // headers() is synchronous, no need for await
  const domain = headersList.get('host');
  const data = await getSiteData(domain);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2>Not Found: {data?.name ?? 'Unknown Site'}</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='text-white border rounded bg-red-500 h-8 w-fit'>
      <p  >
        
         Return to Home
        
      </p>
      </Link>
    </div>
  );
}