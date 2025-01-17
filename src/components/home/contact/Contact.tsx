import { ContactData } from "@/constant";

const Contact = () => {
  return (
    <section className="w-full flex flex-col items-start gap-4 justify-start ">
      <p className="text-3xl">Reach me out </p>
      <div className="flex flex-col items-start gap-2 ">
        {ContactData?.map((data, i) => {
          const Icon = data?.Icon;
          return (
            <a
              key={i}
              href={data?.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Icon size={20} className="text-white" />
              <p className="text-gray-400">{data?.title}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
