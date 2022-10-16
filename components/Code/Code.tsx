import { Fade } from "react-awesome-reveal";

const Code = () => {
  return (
    <div className="pb-6 drop-shadow-sm flex justify-center items-center">
      <Fade direction="up">
        <a
          href="https://github.com/gowthaman-01/personal-portfolio"
          rel="noreferrer"
          target={"_blank"}
        >
          <div className="code grid space-y-1.5 justify-items-center transition duration-200">
            <span className="bg-nav py-1 rounded-md opacity-0 flex justify-center w-[100px]">
              View code
            </span>
            <p>Developed by Gowthaman</p>
          </div>
        </a>
      </Fade>
    </div>
  );
};

export { Code };
