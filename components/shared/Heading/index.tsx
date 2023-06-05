'use client';

type HeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

const Heading = ({ title, subtitle, center }: HeadingProps) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="mt-2 font-light text-lightgray">{subtitle}</div>
    </div>
  );
};

export default Heading;
