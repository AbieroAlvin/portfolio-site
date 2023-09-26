import ProjectItem from "./ProjectItem";
import todoImg from "../assets/todo-app2.png";
import spaceImg from "../assets/space-app.png";
import movieImg from "../assets/movie-app.png";
import foodImg from "../assets/food-app.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center  text-[#001b5e]">
        Projects
      </h1>

      <div className="grid sm:grid-cols-2 gap-12 mt-8">
        <ProjectItem
          img={spaceImg}
          title="Space App"
          code="https://github.com/AbieroAlvin/travel-router-app.git"
          site="https://react-router-6974.netlify.app/"
        />
        <ProjectItem
          img={movieImg}
          title="Movie App"
          code="https://github.com/AbieroAlvin/movie-proj.git"
          site="https://movie-proj-five.vercel.app/"
        />
        <ProjectItem
          img={todoImg}
          title="Todo App"
          code="https://github.com/AbieroAlvin/todo-list-app.git"
          site="https://todo-list-app-5u8f.vercel.app/"
        />
        <ProjectItem
          img={foodImg}
          title="Food App"
          code="https://github.com/AbieroAlvin/food-app-react.git"
          site="https://food-app-react58.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
