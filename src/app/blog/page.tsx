"use client";

export default function Blog() {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Software Engineer Technical Interview Guide",
      description:
        "a general handbook and guide to preparing and tackling software engineer technical interviews.",
      author: "Ethan Pineda",
      readTime: "2 minutes read",
      authorImage: "/api/placeholder/40/40",
    },
    {
      id: 2,
      title: "Series B and Automating Code",
      description:
        "We've raised $105M to further our mission of automating code.",
      author: "Anysphere Team",
      readTime: "1 minutes read",
      authorImage: "/api/placeholder/40/40",
    },
  ];

  return (
    <div className="min-h-screen  text-white">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        {/* Blog Header */}
        <header className="mb-16">
          <h1 className="text-7xl font-bold mb-2">Blog</h1>
          <p className="text-lg text-zinc-500">Compiled notes from the team</p>
        </header>

        {/* All posts section */}
        <section>
          <h2 className="text-4xl font-bold mb-10">All posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="relative rounded-xl border border-zinc-800 bg-neutral-950 hover:bg-gradient-to-br hover:from-purple-900/40 hover:via-purple-600/30 hover:to-fuchsia-500/40 transition-colors duration-300 cursor-pointer"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                  <p className="text-white/80 mb-6 font-mono">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={post.authorImage}
                        alt={`${post.author} avatar`}
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                          const imgElement = e.target as HTMLImageElement;
                          imgElement.src = "https://via.placeholder.com/56";
                          imgElement.srcset = "";
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-mono font-medium text-white">
                        By {post.author}
                      </p>
                      <p className="text-sm font-mono text-gray-500">
                        {post.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
