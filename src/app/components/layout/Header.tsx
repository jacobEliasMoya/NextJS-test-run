type Props = {
  title: string;
  logoPath:  string;
};

export default function Header({ title, logoPath }: Props) {
  return (
    <header className="sticky top-10">
      <div className="bg-white text-black p-6 w-11/12 mx-auto rounded-full flex ">
        <img src={logoPath} className="w-auto h-22" alt="" />
      </div>
    </header>
  );
}
