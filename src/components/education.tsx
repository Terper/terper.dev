import { education } from "@/index-data";
import { useTheme } from "./theme-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "@tanstack/react-router";

const Education = () => {
  const { theme } = useTheme();
  return (
    <section>
      <div className="max-w-5xl m-auto px-4 py-4 md:py-8 lg:py-16 flex flex-col gap-8">
        <h2 className="text-3xl">Education</h2>
        <div className="flex flex-col gap-4">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader className="flex md:flex-row justify-between gap-4 items-start space-y-0">
                <div className="">
                  <CardTitle>
                    <div className="flex justify-between items-center ">
                      <Link
                        className="text-xl hover:underline"
                        to={item.website}
                        target="_blank"
                      >
                        {item.school}
                      </Link>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-lg flex flex-col">
                    {item.programmeWebsite ? (
                      <Link
                        className=" hover:underline"
                        to={item.programmeWebsite ?? ""}
                        target="_blank"
                      >
                        {item.degree} - {item.field}
                      </Link>
                    ) : (
                      <>
                        <span>
                          {item.degree} - {item.field}
                        </span>
                      </>
                    )}

                    <span>
                      {item.from} - {item.to}
                    </span>
                  </CardDescription>
                </div>

                {theme === "dark" ? (item.logoDark ?? item.logo) : item.logo}
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
