import { rules } from "@/lib/rules";

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
  return <div>{props.network}</div>;
}
