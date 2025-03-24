import { HomePageData } from "@/data";

export default function AboutMain() {
  return (
    <div className="">
      <div className="py-4 mt-4 md:py-1 w-full text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          <span className="text-[#5a8ddc]">Why</span> Choose us
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-14 my-8 mb-4 md:my-8 md:p-0 md:max-w-5xl md:mx-auto ">
        {HomePageData.whyChooseUs.map((item) => (
          <div
            className="flex gap-6 items-center justify-center md:py-16 py-8 px-4 md:px-8 rounded-md bg-[#f3f3f3] shadow-xl"
            key={item.id}
          >
            <item.icon className="h-12 w-12" />
            <div className="w-2/3">
              <p className="font-semibold md:text-xl text-[#5a8ddc]">{item.title}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
