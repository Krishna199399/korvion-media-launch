import { getBlogs } from '@/actions/blog';
import { BlogsPageClient } from './BlogsPageClient';

type SearchParams = Promise<{
  search?: string;
  status?: string;
  category?: string;
  page?: string;
}>;

interface BlogsPageProps {
  searchParams: SearchParams;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const params = await searchParams;

  const search = params.search || '';
  const status = params.status || '';
  const category = params.category || '';
  const page = parseInt(params.page || '1', 10);

  const result = await getBlogs({
    search,
    status: status as any,
    category,
    page,
    pageSize: 10,
  });

  return (
    <BlogsPageClient
      blogs={result.blogs}
      total={result.total}
      currentPage={result.page}
      totalPages={result.totalPages}
      initialSearch={search}
      initialStatus={status}
      initialCategory={category}
    />
  );
}
