export default function FeedItem(props) {
  return (
    <li className="col-span-1 flex flex-col text-center shadow w-72 h-72">
      <div className="flex flex-col justify-center flex-1 p-8 bg-white/80 bg-paperTexture bg-blend-overlay">
        <h3 className="text-lg font-bold text-gray-900 font-roboto">
          Feed Item {props.number}!
        </h3>
      </div>
    </li>
  );
}
