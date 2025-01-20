import { StudyData } from "@/constant";
import { StudyPoprs } from "@/types";

const Education = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6 text-gray-300">Education</h2>
      <div className="space-y-10">
        {StudyData?.map((study: StudyPoprs) => {
          return (
            <div className="group" key={study.id}>
              <div className="flex flex-col gap-1 text-gray-300">
                <h3 className="font-medium flex items-center gap-2">
                  {study?.course}
                </h3>
                <p className="text-gray-500">{study?.name}</p>
                <p className="text-gray-500">{study?.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
