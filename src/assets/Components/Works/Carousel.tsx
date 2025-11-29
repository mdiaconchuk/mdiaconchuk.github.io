import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../../data/carouselItems";
import { useState } from "react";
import { motion } from "motion/react";

function Carousel() {
  const [index, setIndex] = useState<number>(0);
  const onRight = () => { setIndex((prev) => prev + 1)}
  const onLeft = () => { setIndex((prev) => prev - 1) }

  return (
    <>
    {/* -------------- CONTENEDOR ------------------ */}
      <div className="flex flex-col p-4 overflow-hidden h-100 mx-auto w-8/12 justify-center items-center relative">
        {projects.map((project, i) => (
        // ------------- CARD -----------------------
          <div key={project.id} className={`absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 origin-center-right ${i === index ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={project.img}
              alt={project.title}
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* --------------- FLECHAS ------------------ */}
      <div className="flex align-center justify-center *:bg-slate-500 *:rounded-full *:mx-2">
        <ChevronLeft size={40} onClick={onLeft} />
        <ChevronRight size={40} onClick={onRight} />
      </div>

      <p className="text-center text-2xl">INDEX: {index}</p>
    </>
  );
}

export default Carousel;

//   return (
//     <div className="w-full min-h-[600px] bg-neutral-950 flex flex-col items-center justify-center p-4 overflow-hidden">
      
//       {/* Contenedor del Deck */}
//       <div className="relative w-full max-w-4xl aspect-video isolate">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial={false} // Evita animación inicial rara
//             animate={getCardStyle(index)}
//             transition={{
//               type: "spring",
//               stiffness: 200,
//               damping: 20,
//               mass: 1,
//             }}
//             // Clases base para parecer un monitor/pantalla
//             className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 origin-center-right"
//           >
//             {/* Imagen del proyecto */}
//             <img
//               src={project.img}
//               alt={project.title}
//               className="w-full h-full object-cover"
//             />

//             {/* Overlay con Info (Solo visible en la carta activa para no ensuciar) */}
//             <motion.div 
//                 animate={{ opacity: index === currentIndex ? 1 : 0 }}
//                 className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12"
//             >
//                 <div className="transform transition-transform duration-500 translate-y-0">
//                     <span className="text-blue-400 font-mono text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full mb-3 inline-block">
//                         {project.tech}
//                     </span>
//                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
//                         {project.title}
//                     </h2>
//                     <p className="text-gray-300 max-w-lg text-lg mb-6">
//                         {project.description}
//                     </p>
//                     <button className="flex items-center gap-2 text-white border border-white/30 px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-colors font-medium">
//                         Ver Detalles <ExternalLink size={16} />
//                     </button>
//                 </div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Controles (Botones) */}
//       <div className="flex gap-4 mt-8 z-50">
//         <button
//           onClick={handlePrev}
//           className="p-4 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-all active:scale-95 border border-white/5"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={handleNext}
//           className="p-4 rounded-full bg-white text-black hover:bg-gray-200 transition-all active:scale-95 shadow-lg shadow-white/10"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>

//       {/* Indicador de posición (Barritas) */}
//       <div className="flex gap-2 mt-6">
//         {projects.map((_, idx) => (
//           <div 
//             key={idx}
//             className={`h-1 rounded-full transition-all duration-300 ${
//                 idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-neutral-800'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
