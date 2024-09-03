import React from "react";

const sitemap = () => {
  return [
    {
      url: "https://novakmark.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://novakmark.com/developer-tools",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://novakmark.com/ootd",
      lastModified: "1-09-2024",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://novakmark.com/nowa",
      lastModified: "1-09-2024",
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
};

export default sitemap;
