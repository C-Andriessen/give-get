export default function ButtonPrimary(props) {
  return (
    <a
      className="py-2 mt-[25px] w-2/4 max-w-[375px] text-white bg-baby-barf-red rounded-sm font-roboto font-medium text-lg"
      href={props.link}
    >
      {props.text}
    </a>
  );
}
