import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Mais Conteúdo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {
          posts.map((post) => (
            <>
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={process.env.STRAPI_URL + post.coverImage[0].url}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            </>
          ))}
      </div>
    </section>
  )
}
