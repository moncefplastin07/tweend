import { PageProps } from "https://deno.land/x/fresh@1.1.1/server.ts";
import { Head } from "$fresh/src/runtime/head.ts";
import { timeAgo } from "time-ago";
import TopicCard from "../components/TopicCard.tsx";
import ToggleDisplayThemeButton from "../islands/ToggleDisplayThemeButton.tsx"
export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://twtrends-api.herokuapp.com/algeria`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const eends = await resp.json();
    return ctx.render(eends);
  },
};

export default function Home({ data }: PageProps) {
  
  return (
    <div class="transition duration-500 ease-in-out p-4 dark:bg-[#1e293b] dark:text-gray-100">
      <Head>
        <title>{data.area} Tietter trend</title>
      </Head>
      <ToggleDisplayThemeButton/>
      <div className={`mx-auto max-w-screen-lg`}>
        <p className={`p-5`}><b className={`bg-cyan-300 p-5 rounded-lg text-xl`}>Tweend</b> twitter trends tracker</p>
        <p className={`p-10 text-xl text-center`}>The most popular topics on Twitter in {data.area}</p>
        {data.trends.map((updates) => {
          return (
            <div> 

              <p className={`my-16 text-lg`}>
                <code
                  className={`p-3  text-lg bg-gray-100 rounded-md dark:text-black`}
                >
                  {timeAgo(new Date(updates.last_update?.split("UTC")[0]))}
                </code>
              </p>
              <div className={`grid grid-cols-3 gap-6`}>
                {updates.topics.map((topic) => {
                  return (
                    <div>
                      <TopicCard {...topic} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
