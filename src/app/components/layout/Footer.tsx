type Props = {
  children: React.ReactNode;
};

export default function Footer({ children }: Props) {
  return (
    <footer className=" bg-white text-white p-6">
      <div className="w-11/12 mx-auto flex items-center justify-center">
        {children}
      </div>
    </footer>
  );
}
