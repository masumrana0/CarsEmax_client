import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";

const AntBreadcrumb: React.FC = () => (
  <Breadcrumb
    items={[
      {
        title: (
          <Link className="text-blue-700 hover:underline text-xs" href="/">
            Home
          </Link>
        ),
      },
      {
        title: (
          <Link className="text-blue-700 hover:underline text-xs" href="/">
            Search
          </Link>
        ),
      },
      {
        title: (
          <Link className="text-blue-700 hover:underline text-xs" href="/">
            Cars
          </Link>
        ),
      },
      {
        title: (
          <Link className="text-blue-700 hover:underline text-xs" href="/">
            Ford
          </Link>
        ),
      },
    ]}
  />
);

export default AntBreadcrumb;
