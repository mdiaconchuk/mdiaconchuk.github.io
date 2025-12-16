import { skillsData } from "../../../../data/SkillItems";

function SkillsIcons() {
  const data = skillsData;
  
  return (
    <div className="flex shrink-0 items-center gap-x-16 pr-16">
      
      {data.map((item) => (
        <div key={item.id} className="skillLabel flex flex-col items-center gap-2 group">
          <item.Icon 
            size={80} 
            className={`${item.colorClass} transition-transform duration-300 group-hover:scale-110`} 
          />
          <p className="text-center font-semibold opacity-80 uppercase merriweather">{item.name}</p>
        </div>
      ))}
      
    </div>
  );
}

export default SkillsIcons;
