// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Readme", href: "/readme" },
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
    ],
  },
  {
    title: "Server Side Projects",
    href: "server-side-projects",
    items: [
      {
        title: "Authentication Microservice",
        href: "/authentication-microservice",
      },
      {
        title: "AM API Security",
        href: "/authentication-microservice-api-security",
      },
      { title: "PHP MySQL API", href: "/php-mysql-api" },
      { title: "Entities Listing Server", href: "/entities-listing-server" },
      {
        title: "Quick-Store Dashboard Server",
        href: "/quick-store-dashboard-server",
      },
    ],
  },
  {
    title: "Work Experience",
    href: "work-experience",
    items: [{ title: "Overview", href: "/overview" }],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
