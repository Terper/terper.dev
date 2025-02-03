import { education } from "@/index-data";
import { useTheme } from "./theme-provider";
import {
  Card,
  CardContent,
  CardDescription,
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
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-between items-center ">
                    <Link className="text-xl hover:underline" to={item.website}>
                      {item.school}
                    </Link>
                    <span>
                      {item.from} - {item.to}
                    </span>
                  </div>
                </CardTitle>
                <CardDescription className="text-lg">
                  <Link
                    className="text-lg hover:underline"
                    to={item.programmeWebsite}
                  >
                    {item.degree} - {item.field}
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {theme === "dark" ? (item.logoDark ?? item.logo) : item.logo}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
