import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useWindowSize } from "usehooks-ts";
import type { Dispatch, SetStateAction } from "react";

const Header = ({
  currentSection,
  setCurrentSection,
  headerOpen,
  setHeaderOpen,
}: {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  headerOpen: boolean;
  setHeaderOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { width = 0 } = useWindowSize({ initializeWithValue: false });
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
