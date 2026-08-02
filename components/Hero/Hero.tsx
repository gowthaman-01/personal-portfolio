import { useWindowSize } from "usehooks-ts";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Hero = ({
  setCurrentSection,
}: {
  setCurrentSection: (section: string) => void;
}) => {
  const { width = 0 } = useWindowSize({ initializeWithValue: false });
  return (
    <div>
      {width < 1028 ? (
        <Mobile />
      ) : (
        <Desktop setCurrentSection={setCurrentSection} />
      )}
    </div>
  );
};

export { Hero };
