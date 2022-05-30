import { useWindowSize } from "usehooks-ts";
import Desktop from "./desktop";

export const Links = () => {
  const { width } = useWindowSize();
  return <>{width > 1280 && <Desktop />}</>;
};
