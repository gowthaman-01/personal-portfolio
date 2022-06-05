import { useWindowSize } from "usehooks-ts";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Hero = ({
  setCurrentSection,
}: {
  setCurrentSection: (section: string) => void;
}) => {
  const { width } = useWindowSize();
  return (
    <div>
      {width < 1028 ? (
        <Mobile setCurrentSection={setCurrentSection} />
      ) : (
        <Desktop setCurrentSection={setCurrentSection} />
      )}
    </div>
  );
};

export { Hero };
