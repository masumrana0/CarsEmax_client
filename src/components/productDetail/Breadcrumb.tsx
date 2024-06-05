import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";

const AntBreadcrumb: React.FC<{
  home?: boolean;
  search?: boolean;
  cars?: boolean;
  ford?: boolean;
}> = ({ home = true, search = true, cars = true, ford = true }) => {
  const breadcrumbItems = [];

  if (home) {
    breadcrumbItems.push({
      title: (
        <Link className="text-blue-700 hover:underline text-xs" href="/">
          Home
        </Link>
      ),
    });
  }

  if (search) {
    breadcrumbItems.push({
      title: (
        <Link className="text-blue-700 hover:underline text-xs" href="/search">
          Search
        </Link>
      ),
    });
  }

  if (cars) {
    breadcrumbItems.push({
      title: (
        <Link className="text-blue-700 hover:underline text-xs" href="/cars">
          Cars
        </Link>
      ),
    });
  }

  if (ford) {
    breadcrumbItems.push({
      title: (
        <Link className="text-blue-700 hover:underline text-xs" href="/ford">
          Ford
        </Link>
      ),
    });
  }

  return <Breadcrumb items={breadcrumbItems} />;
};

export default AntBreadcrumb;
