export default function FeedItem(props) {
  return (
    <li className="col-span-1 flex flex-col text-center bg-paperTexture bg-white bg-blend-soft-light shadow divide-y divide-gray-200 w-[280px] h-[280px]">
      <div className="flex flex-col justify-center flex-1 p-8">
        <h3 className="text-lg font-bold text-gray-900 font-roboto">
          Feed Item {props.number}!
        </h3>
      </div>
    </li>
  );
}
