import styles from "./styles.module.scss";

type ListProps = {
  items: string[];
  onRemoveItem(item: string): void;
};

export const List = ({ items, onRemoveItem }: ListProps): JSX.Element => {
  return (
    <ul className={styles.container}>
      {items.map((item) => (
        <li key={item}>
          <span>{item}</span>

          <button
            onClick={() => onRemoveItem(item)}
            aria-label={`remove item ${item}`}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
