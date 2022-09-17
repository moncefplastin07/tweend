export default function TopicCard(
  props: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <div
      className={`p-5 border border-gray-100 rounded-lg hover:bg-gray-100 hover:border-gray-200 dark:bg-gray-600 dark:border-0 dark:text-gray-200`}
    >
      <h2 className={`text-xl`}>
        <span className={`mr-5 border-gray-100 rounded-full`}>
          {props.index}
        </span>
        <a className={`relative`} href={props.url}>
          {props.text} {props.tweets_count
            ? (
              <span
                className={`text-gray-500 text-sm absolute -top-1.5 dark:text-gray-300`}
              >
                ({props.tweets_count})
              </span>
            )
            : ""}
        </a>
      </h2>
    </div>
  );
}
