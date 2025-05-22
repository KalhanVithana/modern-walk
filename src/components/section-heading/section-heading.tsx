interface SectionHeadingProps {
  id: string;
}

export default function SectionHeading({ id }: SectionHeadingProps) {
  return (
    <h1 className="text-dark-black font-bold text-[25px] my-10">
      {id}
    </h1>
  );
}
