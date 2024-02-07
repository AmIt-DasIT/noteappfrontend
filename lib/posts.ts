
// export function getAllPosts() {
//   const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}books`);

//   if (!data.ok) {
//     throw new Error("Failed to fetch data");
//   } else {
//     return data.json();
//   }
// }

export async function getPostBySlug(slug: string) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}books/${slug}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  } else {
    return data.json();
  }
}

export async function createNote(data: any) {
  if (!data) {
    throw "Please enter some data";
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}books`, {
    method: "POST",
    body: data,
  });

  if (!response.ok) {
    throw "Error occured";
  }
}
