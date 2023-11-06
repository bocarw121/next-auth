import {
  PropSidebarItemHtml,
  SidebarsConfig,
} from "@docusaurus/plugin-content-docs"

const clerk = {
  type: "html",
  value: `
  <a href="https://clerk.com?utm_source=sponsorship&utm_medium=docs&utm_campaign=authjs&utm_content=callout">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="/img/clerk-sidebar-light.png">
      <source media="(prefers-color-scheme: light)" srcset="/img/clerk-sidebar-dark.png">
      <img alt="Clerk – Authentication & User Management" src="/img/clerk-sidebar-dark.png">
    </picture>
  </a>`,
  defaultStyle: true,
} satisfies PropSidebarItemHtml

export default {
  gettingStartedSidebar: [
    { type: "autogenerated", dirName: "getting-started" },
    clerk,
  ],
  guidesSidebar: [{ type: "autogenerated", dirName: "guides" }, clerk],
  referenceSidebar: [
    "reference/index",
    {
      type: "category",
      label: "@auth/core",
      link: { type: "doc", id: "reference/core/module.index" },
      items: require("./docs/reference/core/typedoc-sidebar.cjs"),
    },
    {
      type: "category",
      label: "@auth/sveltekit",
      link: { type: "doc", id: "reference/sveltekit/module.index" },
      items: require("./docs/reference/sveltekit/typedoc-sidebar.cjs"),
    },
    {
      type: "category",
      label: "@auth/solid-start",
      link: { type: "doc", id: "reference/solidstart/index" },
      items: [{ type: "autogenerated", dirName: "reference/solidstart" }],
    },
    {
      type: "category",
      label: "next-auth",
      link: { type: "doc", id: "reference/nextjs/module.index" },
      items: require("./docs/reference/nextjs/typedoc-sidebar.cjs"),
    },
    ...(process.env.TYPEDOC_SKIP_ADAPTERS
      ? []
      : [
          {
            type: "category",
            label: "Database Adapters",
            collapsed: false,
            items: [
              { type: "doc", id: "reference/adapter/azure-tables/index" },
              { type: "doc", id: "reference/adapter/d1/index" },
              { type: "doc", id: "reference/adapter/edgedb/index" },
              { type: "doc", id: "reference/adapter/dgraph/index" },
              { type: "doc", id: "reference/adapter/drizzle/index" },
              { type: "doc", id: "reference/adapter/dynamodb/index" },
              { type: "doc", id: "reference/adapter/fauna/index" },
              { type: "doc", id: "reference/adapter/firebase/index" },
              { type: "doc", id: "reference/adapter/hasura/index" },
              { type: "doc", id: "reference/adapter/kysely/index" },
              { type: "doc", id: "reference/adapter/mikro-orm/index" },
              { type: "doc", id: "reference/adapter/mongodb/index" },
              { type: "doc", id: "reference/adapter/neo4j/index" },
              { type: "doc", id: "reference/adapter/pg/index" },
              { type: "doc", id: "reference/adapter/pouchdb/index" },
              { type: "doc", id: "reference/adapter/prisma/index" },
              { type: "doc", id: "reference/adapter/sequelize/index" },
              { type: "doc", id: "reference/adapter/supabase/index" },
              { type: "doc", id: "reference/adapter/surrealdb/index" },
              { type: "doc", id: "reference/adapter/typeorm/index" },
              { type: "doc", id: "reference/adapter/upstash-redis/index" },
              { type: "doc", id: "reference/adapter/xata/index" },
            ],
          },
        ]),
    "reference/warnings",
    clerk,
  ],
  conceptsSidebar: [{ type: "autogenerated", dirName: "concepts" }, clerk],
} as SidebarsConfig