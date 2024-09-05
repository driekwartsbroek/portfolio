import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 pl-1 pt-4">
      {" "}
      {/* Added pl-5 for 20px left padding */}
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link
            href="/"
            className="hover:text-gray-700 dark:hover:text-gray-200"
          >
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <li key={segment} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-700 dark:text-gray-200">
                  {segment}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-gray-700 dark:hover:text-gray-200"
                >
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
