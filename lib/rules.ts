type Rule = {
  name: string;
  render: (url: string, text: string) => string;
};

export const rules: Rule[] = [
  {
    name: "twitter",
    render: (url, text) =>
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
  },
  {
    name: "facebook",
    render: (url, text) =>
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    name: "linkedin",
    render: (url, text) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
  },
  {
    name: "reddit",
    render: (url, text) =>
      `https://www.reddit.com/submit?url=${url}&title=${text}`,
  },
  {
    name: "whatsapp",
    render: (url, text) => `https://wa.me/?text=${text} ${url}`,
  },
  {
    name: "telegram",
    render: (url, text) => `https://t.me/share/url?url=${url}&text=${text}`,
  },
  {
    name: "email",
    render: (url, text) => `mailto:?subject=${text}&body=${url}`,
  },
  {
    name: "pinterest",
    render: (url, text) =>
      `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`,
  },
  {
    name: "line",
    render: (url, text) =>
      `https://social-plugins.line.me/lineit/share?url=${url}`,
  },
  {
    name: "hn",
    render: (url, text) =>
      `https://news.ycombinator.com/submitlink?u=${url}&t=${text}`,
  },
  {
    name: "tumblr",
    render: (url, text) =>
      `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${url}&title=${text}`,
  },
  {
    name: "vk",
    render: (url, text) => `https://vk.com/share.php?url=${url}&title=${text}`,
  },
  {
    name: "mastodon",
    render: (url, text) => `https://toot.kytta.dev/?text=${text}%0A%0A${url}`,
  },
];
