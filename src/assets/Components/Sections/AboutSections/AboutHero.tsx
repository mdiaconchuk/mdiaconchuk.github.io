import MeshBackground from "../../Backgrounds/MeshBackground";
import aboutImage from '/src/assets/Assets/aboutImage.png'

function AboutHero() {
  const CVen = "public/Matias Diaconchuk - CV (Eng).pdf"
  const CVes = "public/Matias Diaconchuk - CV.pdf"
  return (
    <div className="relative w-full flex justify-center xl:pt-40 pt-15 pb-20">
      <MeshBackground />

      {/* CONTENEDOR GENERAL */}
      <div
        className="flex flex-col lg:flex-row items-center lg:items-start gap-20 xl:gap-30 max-w-5xl w-full px-6 text-(--light-on-primary)
       dark:text-(--dark-on-primary) appearY"
      >
        {/* FOTO + DECORACIÓN */}
        <div className="relative 2xl:w-80 2xl:h-105 w-60 h-80 my-5 xl:my-0 xl:h-80 merriweather">
          {/* REDONDEADOS */}
          <div className="roundedPill top-12/12 -left-2/12 xl:top-8/12 xl:-left-1/4">
            <p>
              3<span className="align-super text-xs">rd</span> August 2006
            </p>
          </div>
          <div className="roundedPill bottom-1/12 -right-2/12 xl:bottom-5/12 xl:-right-1/4">
            <p>Argentinian</p>
          </div>

          {/* TEXTO MOBILE */}
          <p className="text-4xl font-bold xl:hidden sm:block my-5">
            <span className="text-(--dark-accent)">Hello!</span> It's me.
          </p>

          {/* FOTO */}
          <img
            src={aboutImage}
            alt="Image of me!"
            className="size-full object-cover border border-(--light-outline) dark:border-(--dark-outline)
                       rounded-xl shadow-2xl"
          />
        </div>

        {/* TEXTO */}
        <div className="max-w-xl flex flex-col gap-3 text-center xl:text-left">
          <p className="text-4xl font-bold hidden xl:block">
            <span className="text-(--dark-accent)">Hello!</span> It's me.
          </p>

          <p className="text-xl opacity-80 text-(--dark-on-primary)">
            I'm a front-end developer and an IT Analyst student. I enjoy
            building clean, smooth, good-looking interfaces. I like solving
            problems, trying new ideas and creating things that feel simple and
            nice to use.
          </p>

          {/* CV BOTÓN */}
          <a
            className="group relative mt-5 2xl:w-6/12 w-8/12 mx-auto xl:mx-0 rounded-full border py-3 text-center merriweather
  border-(--light-tertiary) dark:border-(--dark-secondary) overflow-hidden transition"
            href={CVen}
            download
            id="resumeButton"
          >
            <span className="relative z-10 text-(--dark-text)">Get Resume</span>
            <span
              className="absolute left-0 top-0 h-full w-0 bg-(--light-tertiary)/30 dark:bg-(--dark-secondary)/20
    transition-all duration-300 ease-out group-hover:w-full"
            />
          </a>
          {/* CV BOTÓN ESPAÑOL */}
          <a
            className="opacity-90 underline merriweather text-sm"
            href={CVes}
            download
          >
            Spanish resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
