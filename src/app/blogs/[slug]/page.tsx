import { blogPosts } from "@/data/blog";

// Next.js may provide `params` as a Promise in some versions/build modes.
// Make the page async and await `params` to support both Promise and plain object.
export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = (await params) as { slug: string };
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return <div className="p-10 text-center">Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary-blue mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.readTime} read</p>

      <div
        className="prose max-w-none text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
      />
    </div>
  );
}
