import { rules } from "@/lib/rules";

const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="text-xs bg-gray-100 p-2 rounded whitespace-nowrap block overflow-x-scroll mt-2">
    {children}
  </code>
);

const Header = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold my-4 mt-8 block">{children}</h2>
);

export default function Home() {
  return (
    <div
      className={
        "  text-lg py-8 max-w-prose mx-4 lg:mx-auto flex flex-col min-h-screen"
      }
    >
      <h1 className="text-6xl font-black mb-2 uppercase text-center">
        Share.Bingo
      </h1>
      <p className="text-md text-center text-gray-600">
        Generate social media sharing links in a snap.
      </p>{" "}
      <br />
      <Header>What does this tool do?</Header>
      <p className="text-xl space-y-2">
        <span>Instead of writing a URL like these:</span>
        <Code>
          https://twitter.com/intent/tweet?text=Hello%20World&url=https%3A%2F%2Fshare.bingo
        </Code>
      </p>
      <p className="text-xl space-y-2">
        Just write this:
        <Code>
          https://share.bingo/twitter?text=Hello%20World&url=https%3A%2F%2Fshare.bingo
        </Code>
      </p>
      <Header>...that&apos;s it?</Header>
      <p>
        Yeah. That&apos;s it. It&apos;s a simple redirect service that takes the
        path and query parameters and redirects you to the correct URL so you
        don&apos;t have to figure out which URL parameters to use and which path
        is the &apos;real&apos; one versus the deprecated one.
      </p>
      <Header>What networks do you support?</Header>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
        {rules.map((rule) => (
          <div
            key={rule.name}
            className="bg-green-200 text-center uppercase text-sm py-2 rounded-lg font-bold text-green-700"
          >
            {rule.name}
          </div>
        ))}
      </div>
      <Header>Any weird tracking stuff going on?</Header>
      <p>
        Nope, but no need to take my word for it. Check out the{" "}
        <a
          href="https://github.com/buttondown-email/share.bingo"
          className="text-blue-500"
        >
          source code
        </a>
        .
      </p>
      <div className="flex-1"></div>
      <p className="text-sm text-center mt-8">
        Brought to you by the same folks who build{" "}
        <a href="https://buttondown.email" className="text-blue-500 underline">
          Buttondown
        </a>
        .
      </p>
    </div>
  );
}
