import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useWindowSize } from "usehooks-ts";

const Header = ({
  currentSection,
  setCurrentSection,
  headerOpen,
  setHeaderOpen,
}: {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  headerOpen: boolean;
  setHeaderOpen: (param: any) => void;
}) => {
  const { width } = useWindowSize();
  return width > 1028 ? (
    <Desktop
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />
  ) : (
    <Mobile headerOpen={headerOpen} setHeaderOpen={setHeaderOpen} />
  );
};

export { Header };
