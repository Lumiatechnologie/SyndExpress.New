import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Comment bien gérer une copropriété ?",
      excerpt: "Découvrez les meilleures pratiques pour une gestion efficace de votre copropriété...",
      date: "2025-03-15",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg",
      author: "Sophie Martin"
    },
    {
      id: 2,
      title: "Les nouvelles technologies au service des syndics",
      excerpt: "L'évolution numérique transforme la gestion immobilière...",
      date: "2025-03-10",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      author: "Thomas Dubois"
    },
    {
      id: 3,
      title: "5 conseils pour la rénovation énergétique",
      excerpt: "Optimisez la performance énergétique de votre copropriété...",
      date: "2025-03-05",
      image: "https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg",
      author: "Julie Bernard"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos derniers articles sur la gestion de copropriété et les actualités du secteur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`/blog/${post.id}`} 
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Lire la suite →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;