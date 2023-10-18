import { rules } from "@/lib/rules";
import { useEffect } from "react";

export async function getStaticPaths() {
  return {
    paths: rules.map((rule) => {
      return {
        params: {
          network: rule.name,
        },
      };
    }),
    fallback: false,
  };
}

export function getStaticProps({ params }: { params: { network: string } }) {
  return {
    props: {
      network: params.network,
    },
  };
}

export default function MarkdownIntegration(props: { network: string }) {
  useEffect(() => {
    const { searchParams } = new URL(window.document.location.href);
    const url = searchParams.get("url") || "";
    const text = searchParams.get("text") || "";
    window.document.location.href = rules
      .find((r) => r.name === props.network)
      ?.render(url, text) as string;
  });
  return (
    <div
      className={
        "  text-lg py-8 max-w-prose mx-4 lg:mx-auto flex flex-col min-h-screen text-center"
      }
    >
      Feel free to close this tab.
    </div>
  );
}
