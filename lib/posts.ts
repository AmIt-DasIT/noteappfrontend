export async function getPostBySlug({ slug }: { slug: string }): Promise<any> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}books/${slug}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  } else {
    return response.json();
  }
}
