import { useFormatter } from "../../libs/useFormatter";
import { Product } from "../../types/Product";
import { Quantity } from "../Quantity";
import styles from "./styles.module.css";

type Props = {
  color: string;
  quantity: number;
  product: Product;
  onChange: (newCount: number, id: number) => void;
  noEdit?: boolean;
};
export const CartProductItem = ({
  color,
  quantity,
  product,
  onChange,
  noEdit,
}: Props) => {
  const formatter = useFormatter();

  return (
    <div className={styles.container}>
      <div className={styles.productImage}>
        <img src={product.image} alt="" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productCategory}>{product.categoryName}</div>
        <div className={styles.productName}>{product.name}</div>
        <div style={{ color: color }} className={styles.productPrice}>
          {formatter.formatPrice(product.price)}
        </div>
      </div>
      <div className={styles.qtdeControl}>
        {noEdit && (
          <div className={styles.qtdeArea}>
            <div className={styles.qtdeTitle} style={{ color }}>
              Qtde.
            </div>
            <div className={styles.qtdeCount} style={{ color }}>
              {quantity}
            </div>
          </div>
        )}
        {!noEdit && (
          <Quantity
            color={color}
            count={quantity}
            onUpdateCount={(newCount: number) => onChange(newCount, product.id)}
            min={0}
            small
          />
        )}
      </div>
    </div>
  );
};
