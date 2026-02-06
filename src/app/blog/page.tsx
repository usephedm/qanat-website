import { redirect } from 'next/navigation';

// Redirect /blog to /intelligence
export default function BlogPage() {
  redirect('/intelligence');
}
