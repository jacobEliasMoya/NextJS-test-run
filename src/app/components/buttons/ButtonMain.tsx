type Props = {
  title: string;
  newWindow: boolean;
};

export default function ButtonMain({ title, newWindow }: Props) {
  return (
    <a
      className="w-max bg-black text-white px-8 py-4 rounded-full hover:bg-zinc-900 active:scale-105"
      href=""
      target={newWindow ? "_blank" : ""}
      rel={newWindow ? "noopener noreferrer" : ""}
    >
      {title}
    </a>
  );
}
