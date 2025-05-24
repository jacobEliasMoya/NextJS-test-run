import ButtonMain from "../buttons/ButtonMain";

type Props = {
  logoPath: string;
};

export default function Header({ logoPath }: Props) {
  return (
    <header className="fixed w-full top-0">
      <div className="bg-white text-black p-6 w-full flex ">
        <div className="w-1/3">
          <img src={logoPath} className="w-auto h-12" alt="" />
        </div>

        <div className="w-1/3 flex items-center justify-center flex-row">
          <ul className="w-full flex items-center justify-center flex-row gap-6 text-xl">
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
          </ul>
        </div>

        <div className="w-1/3 flex items-center justify-center md:justify-end flex-row">
          <ButtonMain title={"Click Me"} newWindow={false} />
        </div>
      </div>
    </header>
  );
}
