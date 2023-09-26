import WorkItem from "./WorkItem";

const data = [
  {
    duration: "2 months",
    title: "Node JS",
    profeciency: "40%"
  },
  {
    duration: "1 year",
    title: "Tailwind CSS",
    profeciency: "90%"
  },
  {
    duration: "1.5 Years",
    title: "Vanilla JavaScript",
    profeciency: "80%"
  },
  {
    duration: "4 months",
    title: "React JavaScript",
    profeciency: "60% "
  }
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skills</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.duration}
          title={item.title}
          duration={item.profeciency}
        />
      ))}
    </div>
  );
};

export default Work;
