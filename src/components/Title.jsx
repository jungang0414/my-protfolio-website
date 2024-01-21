import TypeWriter from "./effects/Typewriter";

const Title = ({ title }) => {
  return (
    <div className="flex flex-col ml-[5.5rem]">
      <h1 className="text-4xl font-bold text-slate-100">
        <TypeWriter text={title} delay={70} infinite={false} />
      </h1>
    </div>
  );
};

export default Title;
