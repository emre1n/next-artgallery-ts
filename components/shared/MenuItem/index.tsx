'use client';

type TMenuItemProps = {
  onClick: () => void;
  label: string;
};

const MenuItem = ({ onClick, label }: TMenuItemProps) => {
  return (
    <div
      className="transition-500 cursor-pointer px-4 py-3 hover:text-primary"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
