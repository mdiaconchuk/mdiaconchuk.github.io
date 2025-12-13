export default function useScrollInto(): (id: string) => void {
  const scrollInto = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      console.warn("No element with that ID to scroll.");
    }
  };
  return scrollInto;
}
