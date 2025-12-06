import MeshBackground from "./Backgrounds/MeshBackground"

function AboutPage() {
  return (
    <div>
      <MeshBackground />
      <div className="flex w-full justify-center gap-x-20 pt-40 border">
        <div className="relative size-90 aspect-auto">
          <div className="w-6/12 h-14 rounded-full bg-blue-500 absolute bottom-60 -left-2/12" />
          <img src="src\assets\Images\aboutImage.png" alt="Image of me!" className="border border-(--light-outline) size-full rounded-xl shadow-2xl" />
          <div className="w-6/12 h-14 rounded-full bg-blue-500 absolute bottom-20 -right-3/12" />
        </div>
        <div className="max-w-xl">
          <p className="text-(--light-text) text-3xl">Hello! I'm Matias Diaconchuk</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae reiciendis, vel unde, eum qui quo quia dolorem autem, voluptatem dolorum consequuntur nihil iste rem temporibus harum eos dolor. Reiciendis.</p>
        </div>
      </div>
      <p>FUERA DE MARCO</p>
    </div>
  )
}

export default AboutPage