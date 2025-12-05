import { socialNetworks } from "../../../data/socialNetworks";

function Contact() {
  return (
    <div className="w-full py-20 bg-(--light-primary) dark:bg-(--dark-primary) text-(--light-on-primary) dark:text-(--dark-on-primary) relative">
      <div className="max-w-4xl mx-auto">
        <p className="text-4xl text-center font-bold merriweather">Get in touch.</p>
        <p className="text-2xl text-center mt-4 opacity-80">
          Ready to make amazing websites together?
        </p>

        {/* CONTENEDOR FLEX CENTRADO */}
        <div className="flex 2xl:flex-row justify-center 2xl:items-start mt-10 2xl:gap-x-40 gap-x-10">
          
          {/* SOCIAL */}
          <div className="flex flex-col items-center">
            <p className="font-light uppercase tracking-wider text-xl mb-1">Social</p>
            {socialNetworks.map((item, i) => (
              <a key={i} className="text-lg hover:underline underline-offset-3 opacity-60 xl:mt-0 mt-1" href={item.path} target="_blank">
                {item.label}
              </a>
            ))}
          </div>

          {/* MAIL */}
          <div className="flex flex-col items-center">
            <p className="font-light uppercase tracking-wider text-xl mb-1">Contact</p>
            <a className="text-lg hover:underline underline-offset-3 opacity-60" href="mailto:mdiaconchuk@gmail.com">
                mdiaconchuk@gmail.com
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm text-center opacity-50 dark:opacity-70 absolute left-1/2 -translate-x-1/2 bottom-2">© 2025 Matías Diaconchuk</p>
    </div>
  );
}

export default Contact;

