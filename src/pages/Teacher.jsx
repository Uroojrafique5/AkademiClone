import { Link } from "react-router-dom";

const Teacher = () => {
  const data = [
    {
      id: 1,
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      id: 2,
      name: "Tom Housenburg",
      subject: "Science",
    },
    {
      id: 3,
      name: "Dana Benevista",
      subject: "Art",
    },
    {
      id: 4,
      name: "Salvadore Morbeau",
      subject: "Biology",
    },
    {
      id: 5,
      name: "Maria Historia",
      subject: "History",
    },
    {
      id: 6,
      name: "Jack Sally",
      subject: "Science",
    },
    {
      id: 7,
      name: "Lula Beatrice",
      subject: "Algorthim",
    },
    {
      id: 8,
      name: "Nella Vita",
      subject: "English",
    },
    {
      id: 9,
      name: "Nadia Laravela",
      subject: "Programming",
    },
    {
      id: 10,
      name: "Dakota Farral",
      subject: "Science",
    },
    {
      id: 11,
      name: "Miranda Adila",
      subject: "Art",
    },
    {
      id: 12,
      name: "Indiana Barker",
      subject: "Biology",
    },
  ];
  return (
    <div className="w-full max-w-[1200px] mx-auto font-[Poppins]">
      <div className="w-full flex justify-end mb-4 gap-3">
        <button className="w-[200px] h-14 border-2 border-[#4D44B5] rounded-[40px] flex justify-center items-center">
          <div className="flex justify-evenly gap-3">
            <h1 className="text-[#4D44B5] text-[18px] mt-[2px]">Newest</h1>
            <img src="src/assets/drop.png" alt="downward" className="w-7 h-7" />
          </div>
        </button>
        <Link to={"/TeacherForm"}>
          <button className="w-[200px] h-14 border-2 bg-[#4D44B5] rounded-[40px] flex justify-center items-center">
            <div className="flex justify-evenly gap-3">
              <img
                src="src/assets/plus.png"
                alt="downward"
                className="w-4 h-4 mt-[6px]"
              />
              <h1 className="text-white text-[18px]">New Teacher</h1>
            </div>
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map(({ id, name, subject }) => (
          <Link to={`/teacher/${id}/${name}/${subject}`} key={id}>
            <div
              key={id}
              className="relative w-full h-[350px] bg-white rounded-[20px] flex flex-col items-center p-6 shadow"
            >
              <img
                src="src/assets/Vector.png"
                alt="dot"
                className="absolute top-4 right-4 w-[22px] h-[6px]"
              />
              <div className="w-[120px] h-[120px] rounded-full bg-[#C1BBEB]" />
              <h1 className="text-[#303972] font-bold text-[24px] mt-6 text-center">
                {name}
              </h1>
              <p className="text-[#A098AE] text-[18px]">{subject}</p>
              <div className="w-24 h-10 mt-4 flex justify-between">
                <img src="src/assets/Phone.png" alt="Phone" />
                <img src="src/assets/Mail.png" alt="Mail" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full h-14 flex justify-between  mt-5 ">
        <h1 className="text-gray-400 text-[18px] font-normal">
          Showing <span className="text-[#303972]">1-5</span> from{" "}
          <span className="text-[#303972]">100</span> data
        </h1>
        <div className="w-[280px] h-full  flex justify-evenly items-center">
          <img src="src/assets/dropdown.png" alt="" className="w-8 h-8" />
          <div
            className="w-12 h-12 rounded-full bg-[#4D44B5] flex justify-center items-center text-white 
            text-[18px]"
          >
            1
          </div>
          <div
            className="w-12 h-12 rounded-full border-[#A098AE] border-2 flex justify-center items-center text-[#A098AE] 
            text-[18px]"
          >
            2
          </div>
          <div
            className="w-12 h-12 rounded-full border-[#A098AE] border-2 flex justify-center items-center text-[#A098AE] 
            text-[18px]"
          >
            3
          </div>
          <img src="src/assets/dropdown (1).png" alt="" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Teacher;
