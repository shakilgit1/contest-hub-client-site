import Marquee from "react-fast-marquee";
import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa6";

const Reviews = () => {
  return (
    <div className="mb-20">

        <h1 className="text-center font-semibold text-5xl">Our <span className="text-indigo-500">Client</span> Reviews</h1>
        <p className="font-md text-center mt-4">With years of experience we successfully satisfied all of our clients. <br />
        See below their positive reviews.</p>

      <Marquee speed={80} delay={0}>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6 mx-auto mt-10 mr-6">
        <div className="bg-gray-500 w-[400px] p-2 shadow-xl rounded-tl-badge rounded-br-badge">
          <div className="space-y-1 text-center flex justify-center">
            <div className="ml-5 space-y-1 text-black flex flex-col items-center">
              <img src="https://i.ibb.co/HnyfPM1/boy2.jpg" className="h-12 w-12 rounded-full" alt="" />
              <div>
                 <span className="font-bold text-xl text-lime-400">MR. Bean</span> <br />
                 Marketing Manager <br />
                 <span className="text-lg text-white">TechSavvy Solutions</span>
              </div>
            </div>
          </div>
          <div className="mt-2 ml-5">
            <h2 className="text-md text-yellow-400">
            <FaQuoteLeft />He is a great developer. Quick response and fast delivery. Highly recommended for web project.<FaQuoteRight />
            </h2>        
          </div>
        </div>

        <div className="bg-gray-500 w-[400px] p-2 shadow-xl rounded-tl-badge rounded-br-badge">
          <div className="space-y-1 text-center flex justify-center">
            <div className="ml-5 space-y-1 text-black flex flex-col items-center">
              <img src="https://i.ibb.co/tz8FZd7/boy1.png" className="h-12 w-12 rounded-full" alt="" />
              <div>
                 <span className="font-bold text-xl text-lime-400">David Patel</span> <br />
                 Software Engineer <br />
                 <span className="text-lg text-white">Acme Software Solutions</span>
              </div>
            </div>
          </div>
          <div className="mt-2 ml-5">
            <h2 className="text-md text-yellow-400">
            <FaQuoteLeft />Spectacular work! Shakil. Highly recommended for anyone in need of professional services in these areas.<FaQuoteRight />
            </h2>        
          </div>
        </div>

        <div className="bg-gray-500 w-[400px] p-2 shadow-xl rounded-tl-badge rounded-br-badge">
          <div className="space-y-1 text-center flex justify-center">
            <div className="ml-5 space-y-1 text-black flex flex-col items-center">
              <img src="https://i.ibb.co/X55GGt4/girl1.jpg" className="h-12 w-12 rounded-full" alt="" />
              <div>
                 <span className="font-bold text-xl text-lime-400">Emily Adams</span> <br />
                 Digital Strategist <br />
                 <span className="text-lg text-white">Sparkle Marketing Group</span>
              </div>
            </div>
          </div>
          <div className="mt-2 ml-5">
            <h2 className="text-md text-yellow-400">
            <FaQuoteLeft />Love it! Shakil your work is so good. We will work together again. Thank you.<FaQuoteRight />
            </h2>        
          </div>
        </div>

        <div className="bg-gray-500 w-[400px] p-2 shadow-xl rounded-tl-badge rounded-br-badge">
          <div className="space-y-1 text-center flex justify-center">
            <div className="ml-5 space-y-1 text-black flex flex-col items-center">
              <img src="https://i.ibb.co/HnyfPM1/boy2.jpg" className="h-12 w-12 rounded-full" alt="" />
              <div>
                 <span className="font-bold text-xl text-lime-400">Mr. Tomas</span> <br />
                  Executive Manager <br />
                 <span className="text-lg text-white">TechSavvy Solutions</span>
              </div>
            </div>
          </div>
          <div className="mt-2 ml-5">
            <h2 className="text-md text-yellow-400">
            <FaQuoteLeft />He is a great developer. Quick response and fast delivery. Highly recommended for web project.<FaQuoteRight />
            </h2>        
          </div>
        </div>

        <div className="bg-gray-500 w-[400px] p-2 shadow-xl rounded-tl-badge rounded-br-badge">
          <div className="space-y-1 text-center flex justify-center">
            <div className="ml-5 space-y-1 text-black flex flex-col items-center">
              <img src="https://i.ibb.co/pxFH78X/girl2.jpg" className="h-12 w-12 rounded-full" alt="" />
              <div>
                 <span className="font-bold text-xl text-lime-400">Lisa Chen</span> <br />
                 Social Media Manager <br />
                 <span className="text-lg text-white">Bright Ideas Marketing Agency</span>
              </div>
            </div>
          </div>
          <div className="mt-2 ml-5">
            <h2 className="text-md text-yellow-400">
            <FaQuoteLeft />Impressive! Its visually stunning your web dev skills brilliantly. A definite bookmark for future collaborations.<FaQuoteRight />
            </h2>        
          </div>
        </div>
    

      </div>
      </Marquee>
    </div>
  );
};

export default Reviews;
