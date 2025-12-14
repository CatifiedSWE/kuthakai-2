export const metadata = {
  title: 'Blog | Kuthakai',
  description: 'Latest news and articles',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#181211] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#181211] dark:text-white mb-4">Blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Latest news, tips, and stories from the Kuthakai community.</p>
      </div>
    </div>
  );
}
