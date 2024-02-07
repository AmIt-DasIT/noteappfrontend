import ThemeBox from "@/components/ThemeBox";
import { getPostBySlug } from "@/lib/posts";
import { Box } from "@mui/joy";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getPostBySlug(params.slug);

  return (
    <ThemeBox>
      <Box
        sx={{
          width:
            "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          p: 2,
        }}
      >
        My Post: {JSON.stringify(data, null, 2)}
      </Box>
    </ThemeBox>
  );
}
