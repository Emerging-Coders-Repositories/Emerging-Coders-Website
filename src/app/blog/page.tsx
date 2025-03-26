import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/constants/blog-posts-page";

export const metadata = {
  title: "Blog | Emerging Coders",
  description: "Compiled notes and guides from the Emerging Coders team",
};

export default function Blog() {
  return (
    <div className="min-h-screen text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <header className="mb-16">
          <h1 className="text-7xl font-bold mb-6">Emerging Coders Blog</h1>
          <p className="text-lg text-zinc-500 font-mono">
            Guides and resources from the Emerging Coders team and community.
          </p>
        </header>
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="h-full relative rounded-xl border border-zinc-800 bg-neutral-950 hover:bg-gradient-to-br hover:from-purple-900/40 hover:via-purple-600/30 hover:to-fuchsia-500/40 transition-colors duration-300 cursor-pointer">
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-purple-900/30 text-purple-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                      <p className="text-white/80 font-mono">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                          {post.authors.map((author, index) => (
                            <div
                              key={index}
                              className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-neutral-950"
                            >
                              <Image
                                src={author.image}
                                alt={`${author.name} avatar`}
                                fill
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              />
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className="font-mono font-medium text-white">
                            By{" "}
                            {post.authors.map((author, index) => (
                              <span key={author.name}>
                                {index > 0 &&
                                  index === post.authors.length - 1 &&
                                  " and "}
                                {index > 0 &&
                                  index < post.authors.length - 1 &&
                                  ", "}
                                {author.name}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm font-mono text-gray-500">
                            {post.readTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-zinc-800 bg-neutral-950 p-6">
              <h3 className="text-xl font-bold mb-4">Contribute to the Blog</h3>
              <p className="text-white/80 mb-4 font-mono">
                Share your experiences and knowledge with the community by
                contributing to our blog.
              </p>
              <Link
                href="/contribute"
                className="text-purple-400 hover:text-purple-300 font-mono text-sm"
              >
                Start Writing →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
