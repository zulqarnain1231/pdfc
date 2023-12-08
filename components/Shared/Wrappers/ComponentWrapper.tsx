import React from "react";

type Props = {
  id?: string;
  style?: string;
  children: React.ReactNode;
};

const ComponentWrapper: React.FC<Props> = ({ id, style, children }: Props) => {
  return (
    <section id={id} className={style}>
      <div className="w-full h-full max-w-[1450px] mx-auto md:px-10 px-5">
        {children}
      </div>
    </section>
  );
};

export default ComponentWrapper;
