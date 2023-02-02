import Link from 'next/link';
import Layout from '../../components/layout';

export default function SamplePage() {
  return (
    <Layout>
      <h1>Sample Page</h1>
      <Link href="/">Home</Link>
    </Layout>
  );
}
