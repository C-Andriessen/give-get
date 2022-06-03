import FeedItem from "./FeedItem";

export default function Feed() {
  let items = [];
  for (let i = 0; i < 8; i++) {
    items.push(<FeedItem key={i} number={i} />);
  }
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items}
    </ul>
  );
}
