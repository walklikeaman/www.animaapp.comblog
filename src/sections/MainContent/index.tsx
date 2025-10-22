import BlogGrid from "@/components/blog/BlogGrid";
import { CategoryFilters } from "@/components/blog/CategoryFilters";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-[90%] mx-auto px-[15px] md:max-w-[1140px] md:w-full">
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <div className="relative items-center box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full mb-[35px] mx-auto md:basis-full md:shrink-0 md:max-w-full">
          <article className="box-border caret-transparent mb-6">
            <div className="box-border caret-transparent before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:table-fixed before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-mulish_regular after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:table-fixed after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-mulish_regular">
              <span className="box-border caret-transparent hidden">
                <span className="box-border caret-transparent">Reading Time: </span>
                <span className="box-border caret-transparent"> &lt; 1</span>
                <span className="box-border caret-transparent">minute</span>
              </span>
              <div className="box-border caret-transparent mt-[100px]">
                <img
                  src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Header-cover-1920.jpg"
                  alt=""
                  className="box-border caret-transparent max-w-full"
                />
              </div>
              <div className="box-border caret-transparent w-full mb-[30px]">
                <CategoryFilters />
              </div>
              <BlogGrid />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
