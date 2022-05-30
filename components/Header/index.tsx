import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useWindowSize } from "usehooks-ts";

const Header = ({
  currentSection,
  setCurrentSection,
}: {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}) => {
  const { width } = useWindowSize();
  return width > 1028 ? (
    <Desktop
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />
  ) : (
    <Mobile />
  );
};

export { Header };
