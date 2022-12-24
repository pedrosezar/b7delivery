import styles from "./styles.module.css";
import CartIcon from "./cart.svg";
import ConfigIcon from "./config.svg";
import FavIcon from "./fav.svg";
import LogoutIcon from "./logout.svg";
import MenuIcon from "./menu.svg";
import OrderIcon from "./order.svg";

type Props = {
  color: string;
  label: string;
  icon: "menu" | "cart" | "fav" | "order" | "config" | "logout";
  onClick: () => void;
  disabled?: boolean;
};
export const SidebarMenuItem = ({
  color,
  label,
  icon,
  onClick,
  disabled,
}: Props) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {icon === "menu" && <MenuIcon color={color} />}
      {icon === "cart" && <CartIcon color={color} />}
      {icon === "fav" && <FavIcon color={color} />}
      {icon === "order" && <OrderIcon color={color} />}
      {icon === "config" && <ConfigIcon color={color} />}
      {icon === "logout" && <LogoutIcon color={color} />}
      <span className={disabled ? styles.disabled : ""}>{label}</span>
    </div>
  );
};
