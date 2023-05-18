function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-md bg-white shadow-lg">{children}</div>;
}

export default Card;
