import { useRef } from 'react';

interface Props {
  onImageLoad: (img: HTMLImageElement) => void;
  onClear: () => void;
  hasImage: boolean;
}

export default function FloorPlanUpload({ onImageLoad, onClear, hasImage }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => onImageLoad(img);
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="floor-plan-upload">
      <label className="upload-label">Floor Plan Reference</label>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <button
        className="upload-btn"
        onClick={() => inputRef.current?.click()}
      >
        {hasImage ? 'Change Image' : 'Upload Image'}
      </button>
      {hasImage && (
        <button className="clear-btn" onClick={onClear}>
          Remove
        </button>
      )}
    </div>
  );
}
