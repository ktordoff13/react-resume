interface Project {
  content: string;
  name: string;
  img: string;
}
const Project = ({ content, name, img }: Project) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
      {name}
    </h4>
    <img
      src={img}
      alt="double_quotes"
      className="w-[300px] h-[300px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>
  </div>
);

export default Project;