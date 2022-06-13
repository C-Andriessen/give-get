import { Link } from "react-router-dom";

export default function DesktopMenu(props) {
  return (
    <div className={props.classes}>
      {props.navigation.map((item, i) => {
        return (
          <Link to={item.href} key={i}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
