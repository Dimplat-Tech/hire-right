import { blogPosts } from "@/data/blog";

export default function BlogPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

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
