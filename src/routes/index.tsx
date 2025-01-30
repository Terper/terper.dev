import { createFileRoute, Link } from "@tanstack/react-router";
import { ctaButtons, skills, experience } from "../indexData.tsx";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const generateSkillArray = (skillArray: string[]) => {
  const output: { text: string; icon: string }[] = [];
  skillArray.forEach((skill) => {
    skills.forEach((category) => {
      category.items.forEach((item) => {
        if (item.text === skill) {
          output.push(item);
        }
      });
    });
  });
  return output;
};

/*
const formatUpdateDate = (input: string) => {
  const currentTime = new Date(Date.now()).getTime();
  const difference = currentTime - new Date(input).getTime();

  const weekDifference = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));

  let output = "";

  if (weekDifference > 0) {
    output += weekDifference;
    if (weekDifference > 1) {
      output += " weeks ago";
    } else {
      output += " week ago";
    }
    return output;
  }

  const dayDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (dayDifference > 0) {
    output += dayDifference;
    if (dayDifference > 1) {
      output += " days ago";
    } else {
      output += " day ago";
    }
    return output;
  }

  const hourDifference = Math.floor(difference / (1000 * 60 * 60));

  if (hourDifference > 0) {
    output += hourDifference;
    if (hourDifference > 1) {
      output += " hours ago";
    } else {
      output += " hour ago";
    }
    return output;
  }

  const minuteDifference = Math.floor(difference / (1000 * 60));

  output += minuteDifference;

  if (minuteDifference > 1) {
    output += " minutes ago";
  } else {
    output += " minute ago";
  }

  return output;
};
*/

function RouteComponent() {
  /*
  const query = useQuery({
    queryKey: ["github repos"],
    queryFn: async (): Promise<GhRepos[]> => {
      const response = await fetch("https://api.github.com/users/Terper/repos");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return await data
        .sort(
          (a: GhRepos, b: GhRepos) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        .slice(0, 5);
    },
  });
  */

  return (
    <div className="flex flex-col gap-32 pb-32 px-4">
      <div className="flex flex-col md:flex-row md:px-32 pt-32 gap-16">
        <div className="flex flex-col gap-8 m-auto  md:m-0">
          <span className="text-4xl">Hello👋</span>
          <div className="flex flex-col gap-4 max-w-100">
            <span>I'm Jann, also known as Terper online.</span>
            <span className="max-w-md">
              Programming enthusiast and an aspiring IT engineer currently
              studying at{" "}
              <a
                href="https://www.arcada.fi/en"
                target="_blank"
                className="underline cursor-pointer"
              >
                Arcada UAS
              </a>
              .
            </span>
          </div>
          <div className="flex gap-4 items-start flex-wrap ">
            {ctaButtons.map((cta, index) => (
              <Link
                to={cta.to}
                key={index}
                className="cursor-pointer rounded-full px-4 py-2 bg-slate-800 text-white text-xl last:bg-slate-600 hover:opacity-90"
              >
                {cta.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex md:px-32 flex-col gap-8">
        <h2 className="m-auto md:m-0 text-3xl">Skills</h2>
        <div className="flex justify-between flex-wrap gap-4">
          {skills.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col flex-1 ${index == 0 ? "" : ""} basis-1/3 lg:basis-0 gap-4 items-center md:items-start`}
            >
              <h3 className="text-2xl">{category.category}</h3>
              <div className="flex flex-col gap-2">
                {category.items.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <img
                      className="w-8"
                      alt={`The logo for ${item.text}`}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}/${item.icon}-original.svg`}
                    />
                    <div className="text-lg">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*
      <div className="flex md:px-32 flex-col gap-8">
        <h2 className="m-auto md:m-0 text-3xl">Noteworthy projects</h2>
      </div>
      */}
      <div className="flex md:px-32 flex-col gap-8">
        <h2 className="m-auto md:m-0 text-3xl">Experience</h2>
        <div className="flex flex-col gap-8">
          {experience.map((item, index) => (
            <div className="flex flex-col gap-4 m-auto md:m-0" key={index}>
              <div className="flex justify-between">
                <a href={item.link}>{item.logo}</a>
                <div className="flex flex-col justify-between items-end">
                  <span className="text-2xl">{item.role}</span>
                  <span>
                    {item.from} - {item.to}
                  </span>
                </div>
              </div>
              <div>
                <p>{item.description}</p>
              </div>
              <div className="flex gap-2 justify-end">
                {generateSkillArray(item.skills).map((itemSkills, index) => (
                  <img
                    key={index}
                    className="w-8"
                    alt={`The logo for ${itemSkills.text}`}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${itemSkills.icon}/${itemSkills.icon}-original.svg`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*}
      <div className="p-4 flex gap-6 flex-col m-auto md:m-0 w-fit max-w-prose">
        <h2 className="text-xl">
          Check out my most recently updated repositories
        </h2>
        <div className="flex flex-col gap-4">
          {query.isSuccess &&
            query.data.map((item, index) => (
              <a href={item.html_url} key={index} className="">
                <div className="flex gap-4 justify-between">
                  <span className="text-lg">{item.full_name}</span>
                  <span>{formatUpdateDate(item.updated_at)}</span>
                </div>
                <p className="text-sm">{item.description}</p>
              </a>
            ))}
        </div>
      </div>
      {*/}
    </div>
  );
}
