import { useRouter } from "next/router";
import { useAuthContext } from "../../contexts/auth";
import { Tenant } from "../../types/Tenant";
import { Button } from "../Button";
import { SidebarMenuItem } from "../SidebarMenuItem";
import styles from "./styles.module.css";

type Props = {
  tenant: Tenant;
  open: boolean;
  onClose: () => void;
};

export const Sidebar = ({ tenant, open, onClose }: Props) => {
  const { user, setToken } = useAuthContext();

  const router = useRouter();

  return (
    <div
      className={styles.container}
      style={{
        width: open ? "100vw" : "0",
      }}
    >
      <div className={styles.area}>
        <div className={styles.header}>
          <div
            className={styles.loginArea}
            style={{ borderBottomColor: tenant.mainColor }}
          >
            {user && (
              <div className={styles.userInfo}>
                <strong>{user.name}</strong>
                Último pedido há X semanas
              </div>
            )}
            {!user && (
              <Button
                color={tenant.mainColor}
                label="Fazer Login"
                onClick={() => router.push(`/${tenant.slug}/login`)}
                fill
              />
            )}
          </div>
          <div
            className={styles.closeBtn}
            style={{ color: tenant.mainColor }}
            onClick={onClose}
          >
            x
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.menu}>
          <SidebarMenuItem
            color={"#6A7D8B"}
            label="Cardápio"
            icon="menu"
            onClick={onClose}
          />
          <SidebarMenuItem
            color={"#6A7D8B"}
            label="Sacola"
            icon="cart"
            onClick={() => router.push(`/${tenant.slug}/cart`)}
          />
          <SidebarMenuItem
            color={"#6A7D8B"}
            label="Favoritos"
            icon="fav"
            onClick={() => {}}
            disabled
          />
          <SidebarMenuItem
            color={"#6A7D8B"}
            label="Meus Pedidos"
            icon="order"
            onClick={() => router.push(`/${tenant.slug}/orders`)}
          />
          <SidebarMenuItem
            color={"#6A7D8B"}
            label="Configurações"
            icon="config"
            onClick={() => {}}
            disabled
          />
        </div>
        <div className={styles.menuBottom}>
          {user && (
            <SidebarMenuItem
              color={"#6A7D8B"}
              label="Sair"
              icon="logout"
              onClick={() => {
                setToken("");
                onClose();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
