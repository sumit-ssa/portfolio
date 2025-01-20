import { WorkData } from "@/constant";
import { WorkProps } from "@/types";

const Work = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3 text-gray-300">
        Work Experience
      </h2>
      <div className="space-y-10">
        {WorkData?.map((experience: WorkProps) => {
          return (
            <div className="group" key={experience.id}>
              <div className="flex gap-6 text-gray-300">
                <div className="text-gray-400 w-32 flex-shrink-0">
                  {experience?.startDate} — {experience?.endDate}
                </div>
                <div>
                  <h3 className="font-medium flex items-center gap-2">
                    {experience?.designation}
                  </h3>
                  <p className="text-gray-500">{experience?.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
