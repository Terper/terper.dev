import { blogData } from "@/blog-data";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { generateBlogDate } from "@/utils";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="max-w-5xl m-auto px-4 py-4 md:py-8 lg:py-16 flex flex-col gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbPage>
            <h2 className="text-3xl">Blog</h2>
          </BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-4">
        {blogData
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl">{post.title}</CardTitle>
                <CardDescription>{generateBlogDate(post.date)}</CardDescription>
              </CardHeader>
              <CardContent>{post.short}</CardContent>
              <CardFooter>
                <Button asChild variant="default">
                  <Link to={"/blog/$postUrl"} params={{ postUrl: post.url }}>
                    Read More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  );
}
