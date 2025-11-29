import Carousel from "./Carousel";

function Section() {
  return (
    <div>
      <p className="text-4xl font-semibold text-center mt-15 mb-3">My works</p>
      <p className="text-xl text-(--light-text-secondary) dark:text-(--dark-text-secondary) text-center mb-20">
        Selected projects combining clean interfaces, performance, and
        thoughtful user experience.
      </p>
      <Carousel />
    </div>
  );
}

export default Section;
