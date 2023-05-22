function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[460px] w-[282px] flex-col justify-between">
      {children}
    </div>
  );
}

export default Card;
