import { getPagesUnderRoute } from 'nextra/context';
import filterRouteLocale from 'nextra/filter-route-locale';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Page, PageMapItem } from 'nextra';

export default function BlogIndex({ more = 'Read more' }) {
  const { locale, defaultLocale } = useRouter();
  return (
    <div>
      <h1 className="text-xl tracking-tighter text-center font-extrabold md:text-2xl mt-8 pb-6">
        AKONG'S BLOG
      </h1>
      {filterRouteLocale(
        getPagesUnderRoute('/blog'),
        locale,
        defaultLocale
      ).map(
        (
          page: Page & {
            frontMatter: any;
          }
        ) => {
          return (
            <div key={page.route} className="mb-10">
              <h3>
                <Link
                  href={page.route}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  className="block font-semibold mt-8 text-xl "
                >
                  {page.meta?.title || page.frontMatter?.title || page.name}
                </Link>
              </h3>
              {page.frontMatter?.date ? (
                <div className="opacity-50 text-sm leading-7">
                  {page.frontMatter.date}
                </div>
              ) : null}

              <p className="opacity-80 mt-1 leading-7">
                {page.frontMatter?.description}{' '}
              </p>
              <div className="flex justify-end items-center mt-4 w-full">
                <div className="flex-1 border-t border-gray-200 mr-4"></div>
                <div className="inline-block float-right">
                  <Link
                    href={page.route}
                    className="text-[color:hsl(var(--nextra-primary-hue),100%,50%)] decoration-from-font"
                  >
                    {more + ' →'}
                  </Link>
                </div>
              </div>
              {/* 一条横线 */}
            </div>
          );
        }
      )}
    </div>
  );
}
