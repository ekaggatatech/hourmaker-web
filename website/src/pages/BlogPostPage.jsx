import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { getBlogBySlug, blogPosts } from "../data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getBlogBySlug(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <Layout>
        <section className="py-20 text-center">
          <div className="container">
            <h1 className="font-poppins text-3xl font-bold text-primary-dark mb-4">
              Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/resources#blog"
              className="text-primary font-semibold hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // Get related posts (different category or next posts)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16">
        <div className="container max-w-4xl">
          <button
            onClick={() => navigate("/resources#blog")}
            className="flex items-center gap-2 text-primary font-semibold mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            {/* Author Card */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold text-xl">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-poppins font-semibold text-primary-dark">
                  {post.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {post.authorRole}
                </p>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(
                      /^# (.*$)/gm,
                      '<h1 class="font-poppins text-3xl font-bold text-primary-dark mt-8 mb-4">$1</h1>',
                    )
                    .replace(
                      /^## (.*$)/gm,
                      '<h2 class="font-poppins text-2xl font-bold text-primary-dark mt-8 mb-4">$1</h2>',
                    )
                    .replace(
                      /^### (.*$)/gm,
                      '<h3 class="font-poppins text-xl font-semibold text-primary-dark mt-6 mb-3">$1</h3>',
                    )
                    .replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-foreground font-semibold">$1</strong>',
                    )
                    .replace(
                      /\n\n/g,
                      '</p><p class="text-muted-foreground mb-4 leading-relaxed">',
                    )
                    .replace(
                      /^- (.*$)/gm,
                      '<li class="text-muted-foreground ml-6 mb-2">$1</li>',
                    )
                    .replace(
                      /^(\d+)\. (.*$)/gm,
                      '<li class="text-muted-foreground ml-6 mb-2">$2</li>',
                    )
                    .replace(
                      /- ✅ (.*$)/gm,
                      '<li class="text-muted-foreground ml-6 mb-2 flex items-start gap-2"><span class="text-success">✅</span> $1</li>',
                    )
                    .replace(
                      /- ❌ (.*$)/gm,
                      '<li class="text-muted-foreground ml-6 mb-2 flex items-start gap-2"><span class="text-destructive">❌</span> $1</li>',
                    )
                    .replace(
                      /\[([^\]]+)\]\(([^)]+)\)/g,
                      '<a href="$2" class="text-primary font-semibold hover:underline">$1</a>',
                    ),
                }}
              />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.keywords.slice(0, 5).map((keyword, i) => (
                  <span
                    key={i}
                    className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="glass-card rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="h-32 bg-gradient-to-br from-primary-light to-muted flex items-center justify-center">
                  <span className="text-4xl">📄</span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary bg-primary-light px-2 py-1 rounded">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-poppins font-semibold text-primary-dark mt-3 mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {relatedPost.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Workforce Management?
          </h2>
          <p className="opacity-90 mb-8">
            Join 27,500+ companies using Hourmaker. Start your free trial today.
          </p>
          <Link
            to="/pricing"
            className="inline-block px-8 py-4 bg-white text-primary font-poppins font-semibold rounded-xl hover:bg-primary-light transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPostPage;
