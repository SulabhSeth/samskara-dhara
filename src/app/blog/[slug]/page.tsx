import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import { Container, TextLink } from "@/components/ui";
import { posts } from "@/data/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <Container className="max-w-3xl py-14">
      <TextLink href="/blog">Back to all posts</TextLink>
      <h1 className="mt-6 text-4xl leading-tight">{post.title}</h1>
      <p className="mt-2 text-sm text-earth-soft">{post.date}</p>
      <Photo name={post.image} sizes="(min-width: 768px) 768px, 100vw" className="mt-8 h-72 w-full rounded-md" />
      <div className="mt-8 space-y-5 leading-relaxed text-earth-soft">
        <p>{post.excerpt}</p>
        <p>
          (COMING SOON)
        </p>
      </div>
    </Container>
  );
}
