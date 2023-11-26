

const Banner = () => {
    return (
        <div>
            <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/8mcJNMR/360-F-280016453-Vk-Nx-Kbvtlj-Zx-NWa3-Y4-A41-BB6g-Ep1-DIj-Y.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-black"></div>
      <div className="hero-content text-white">
        <div className="max-w-md">
          <h1 data-aos="fade-right" className="mb-5 text-5xl font-bold">
            FIND YOUR FAVORITE CONTEST
          </h1>
          <div data-aos="fade-up" className="flex items-center">
          <input type="text" placeholder="Search here" className="input input-bordered  w-full max-w-xs outline-none text-black mr-2 rounded-md" />
          <button className="btn btn-error bg-red-500 rounded-md py-">Search</button>
          </div>
        </div>
        
      </div>
            </div>
        </div>
    );
};

export default Banner;