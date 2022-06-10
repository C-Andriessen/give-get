export default function FeedItem(props) {
  return (
    <li className="col-span-1 flex flex-col text-center bg-white shadow divide-y divide-gray-200 w-[280px] h-[280px]">
      <div className="flex-1 flex flex-col p-8 justify-center">
        <h3 className="text-gray-900 text-lg font-roboto font-bold">Feed Item {props.number}!</h3>
      </div>
    </li>
  );
}
