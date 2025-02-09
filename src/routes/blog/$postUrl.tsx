import { blogData } from "@/blog-data";
import NotFound from "@/components/not-found";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { generateBlogDate } from "@/utils";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/theme-provider";
import rehypeRaw from "rehype-raw";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";

interface BlogPost {
  title: string;
  url: string;
  date: string;
  content: string;
}

export const Route = createFileRoute("/blog/$postUrl")({
  component: RouteComponent,
  loader(ctx) {
    const { params } = ctx;
    const blogPostIndex = blogData.findIndex(
      (post) => post.url === params.postUrl
    );
    if (blogPostIndex === -1) {
      return notFound();
    }
    return blogData[blogPostIndex];
  },
  notFoundComponent: () => <NotFound />,
});

function RouteComponent() {
  const { theme } = useTheme();
  const blogData = Route.useLoaderData() as BlogPost;

  const { data, status } = useQuery({
    queryKey: [blogData.content],
    queryFn: async () => {
      const url = new URL(blogData.content, import.meta.url);
      const res = await fetch(url.href);
      return res.text();
    },
  });

  return (
    <section className="max-w-5xl m-auto px-4 py-4 md:py-8 lg:py-16 flex flex-col gap-8">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/blog">
                  <h2 className="text-3xl">Blog</h2>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-3xl">/</BreadcrumbSeparator>
            <BreadcrumbPage className="text-3xl">{blogData.url}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            <h3>{blogData.title}</h3>
          </CardTitle>
          <CardDescription>{generateBlogDate(blogData.date)}</CardDescription>
        </CardHeader>
        <CardContent>
          {status === "pending" && (
            <div>
              <LoaderCircle className="animate-spin" />
            </div>
          )}
          {status === "error" && <>Could not load blog post</>}
          {status === "success" && (
            <Markdown
              rehypePlugins={[remarkGfm, rehypeRaw]}
              className="flex flex-col gap-4"
              components={{
                code: (props) => {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      {...(rest as any)}
                      PreTag="div"
                      children={String(children).replace(/\n$/, "")}
                      language={match[1]}
                      style={theme === "dark" ? oneDark : oneLight}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      <Badge variant="secondary">{children}</Badge>
                    </code>
                  );
                },
                h1: (props) => <h1 className="text-3xl" {...props} />,
                h2: (props) => <h2 className="text-2xl" {...props} />,
                h3: (props) => <h3 className="text-xl" {...props} />,
                h4: (props) => <h4 className="text-lg" {...props} />,
                h5: (props) => <h5 className="text-md" {...props} />,
                h6: (props) => <h6 className="text-md" {...props} />,
                table: (props) => (
                  <Table className="max-w-fit">{props.children}</Table>
                ),
                thead: (props) => <TableHeader>{props.children}</TableHeader>,
                th: (props) => <TableHead>{props.children}</TableHead>,
                tbody: (props) => <TableBody>{props.children}</TableBody>,
                tr: (props) => <TableRow>{props.children}</TableRow>,
                td: (props) => <TableCell>{props.children}</TableCell>,
                hr: (props) => <Separator {...props} />,
                a: (props) => (
                  <Link to={props.href as string} className="hover:underline">
                    {props.children}
                  </Link>
                ),
                ol: (props) => <ol className="list-decimal" {...props} />,
                ul: (props) => <ul className="list-disc" {...props} />,
                li: (props) => <li className="ml-4" {...props} />,
                blockquote: (props) => (
                  <blockquote className="pl-4 mt-2 border-l border-border">
                    {props.children}
                  </blockquote>
                ),
              }}
            >
              {data}
            </Markdown>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
