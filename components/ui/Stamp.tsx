"use client";

type StampProps = {
  className?: string;
};

export default function Stamp({
  className = "",
}: StampProps) {
  return (
    <div
      className={`flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-[#7E69D7] text-center text-[9px] font-semibold uppercase leading-3 text-[#7E69D7] ${className}`}
    >
      Every
      <br />
      Story
      <br />
      Leaves
      <br />
      A Mark
    </div>
  );
}