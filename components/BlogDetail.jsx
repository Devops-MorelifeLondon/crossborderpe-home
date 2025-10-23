// pages/resources/blog/[id]
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Heart,
  Share2,
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
  ChevronRight,
  Tag,
  TrendingUp,
  Star,
} from 'lucide-react';

import { blogPosts, BlogPost } from '../data/blogData'; // adjust path if needed

/* -------------------------------------------------------
   BlogDetail – client-side component (pages directory)
------------------------------------------------------- */
export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  /* ---------- local state ---------- */
  const [post, setPost] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [shareUrl, setShareUrl] = useState('');

  /* ---------- load post once id is available ---------- */
  useEffect(() => {
    if (!id) return; // wait for router to resolve dynamic param

    const found = blogPosts.find((p) => p.id === id);
    if (found) {
      setPost(found);
    } else {
      router.push('/resources'); // fallback
    }
  }, [id, router]);

  /* ---------- SSR-safe window logic ---------- */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // reading progress bar
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    // share url
    setShareUrl(window.location.href);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ---------- early loading state ---------- */
  if (!id || router.isFallback) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading article…</p>
      </section>
    );
  }
  if (!post)
    return (
      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link
          href="/resources"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
        >
          Back to Resources
        </Link>
      </section>
    );

  /* ---------- helpers ---------- */
  const formatDate = (d) =>
    new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const formatViews = (v) => (v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v.toString());

  const shareTitle = post.title;
  const shareLinks = useMemo(
    () => ({
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareTitle
      )}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    }),
    [shareTitle, shareUrl]
  );

  const relatedPosts = useMemo(
    () =>
      blogPosts
        .filter(
          (p) =>
            p.id !== post.id &&
            (p.category === post.category ||
              p.tags.some((tag) => post.tags.includes(tag)))
        )
        .slice(0, 3),
    [post]
  );

  /* ---------------------------------------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
            <Link href="/resources" className="hover:text-blue-600">
              Resources
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/resources" className="hover:text-blue-600">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium">{post.category}</span>
          </nav>

          {/* Back button */}
          <Link
            href="/resources"
            className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-900 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Resources</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                {post.category}
              </span>
              {post.featured && (
                <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>Featured</span>
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">{post.excerpt}</p>

            {/* Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{post.author.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{post.author.name}</div>
                  <div className="text-sm text-slate-600">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{formatViews(post.views)} views</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between border-t border-b border-slate-200 py-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isLiked
                      ? 'bg-red-50 text-red-600 border border-red-200'
                      : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{post.likes + (isLiked ? 1 : 0)}</span>
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isBookmarked
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                  <span>Save</span>
                </button>
              </div>

              {/* Share dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-50 text-slate-600 border border-slate-200 rounded-lg font-medium hover:bg-slate-100"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>

                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-slate-200 p-2 z-10 min-w-[200px]">
                    <a
                      href={shareLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-50 rounded-lg"
                    >
                      <Twitter className="w-5 h-5 text-blue-500" />
                      <span>Share on Twitter</span>
                    </a>
                    <a
                      href={shareLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-50 rounded-lg"
                    >
                      <Linkedin className="w-5 h-5 text-blue-700" />
                      <span>Share on LinkedIn</span>
                    </a>
                    <a
                      href={shareLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-50 rounded-lg"
                    >
                      <Facebook className="w-5 h-5 text-blue-600" />
                      <span>Share on Facebook</span>
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(shareUrl);
                        setShowShareMenu(false);
                      }}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-50 rounded-lg w-full text-left"
                    >
                      <LinkIcon className="w-5 h-5 text-slate-600" />
                      <span>Copy Link</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Hero image */}
          <div className="mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <article className="prose prose-lg prose-slate max-w-none mb-12">
            <div
              className="text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Tags */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Tag className="w-5 h-5 text-slate-600" />
              <span className="font-medium text-slate-700">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-slate-200 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Author bio */}
          <section className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 mb-12">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">{post.author.avatar}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{post.author.name}</h3>
                <p className="text-slate-600 mb-4">{post.author.role}</p>
                <p className="text-slate-700">
                  An expert in cross-border payments and international finance with over 15&nbsp;years
                  of experience helping businesses navigate global payment challenges and regulatory
                  compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Related */}
          {relatedPosts.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-8">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">Related Articles</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((r) => (
                  <Link key={r.id} href={`/resources/blog/${r.id}`} className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-6">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          {r.category}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-900 mt-3 mb-2 group-hover:text-blue-600 line-clamp-2">
                          {r.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2 mb-4">{r.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>{r.readTime}</span>
                          <span>{formatViews(r.views)} views</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Newsletter CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Insights</h3>
            <p className="text-blue-100 mb-6">
              Get expert analysis and industry trends delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* click outside share menu */} 
      {showShareMenu && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setShowShareMenu(false)}
        />
      )}
    </div>
  );
}
