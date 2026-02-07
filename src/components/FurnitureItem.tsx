import type { FurnitureItem as FurnitureItemType } from '../types';

interface Props {
  item: FurnitureItemType;
  isSelected: boolean;
  onSelect: (item: FurnitureItemType) => void;
}

export default function FurnitureItem({ item, isSelected, onSelect }: Props) {
  return (
    <button
      className={`furniture-item ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(item)}
      title={`Place ${item.name}`}
    >
      <div
        className="furniture-swatch"
        style={{ backgroundColor: item.color }}
      />
      <span className="furniture-name">{item.name}</span>
    </button>
  );
}
