type NavButtonProps = {
  page: string;
  setPage: (page: string) => void;
  pathName: string;
  name: string;
};

export default function NavButton({
  setPage,
  page,
  pathName,
  name,
}: NavButtonProps) {
  return (
    <a className="top-nav-links">
      <p
        onClick={() => setPage(pathName)}
        className={page === pathName ? "mirror-active" : "mirror"}
      >
        {name}
      </p>
    </a>
  );
}
