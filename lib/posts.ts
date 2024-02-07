export async function getAllPosts() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}books`, {
    cache: "force-cache",
  });

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export async function getPostBySlug(slug: string) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}books/${slug}`, {
    cache: "force-cache",
  });

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
