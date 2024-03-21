import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import HandWave from "../utils/handWave";

let i = { 1: "test", 2: "test2" };

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="min-h-screen items-center justify-center px-10 sm:px-20 md:px-10 lg:px-20 xl:px-30">
      <div className="flex md:grid grid-cols-5 xl:grid-cols-7 flex-col-reverse md:gap-8 gap-10 w-full ">
        <div className="col-span-3 flex flex-col w-full gap-20 lg:w-full xl:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col justify-center w-full md:h-screen gap-2"
          >
            <h1 className="text-5xl max-w-xl font-semibold">
              Hey there! <HandWave minInterval={10000} maxInterval={25000} />
            </h1>
            <h1 className="text-3xl max-w-xl break-after-column">
              {
                "My name is Frederik Lauenborg and I'm a Visual Designer based in Copenhagen"
              }
            </h1>
          </motion.div>
        </div>
        <div className="flex py-10 col-span-2 items-center justify-center md:h-screen md:sticky md:top-0 md:justify-end">
          <motion.div
            transition={{ delay: 0.15 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.35, ease: "anticipate" },
            }}
            className="flex w-96 md:w-full flex-col gap-4 p-4 bg-white border-2 shadow-xl border-black rounded-3xl"
          >
            <Image
              src="/img/pb.webp"
              width="750"
              height="750"
              alt="Frederik Lauenborg"
              className="aspect-square rounded-xl object-top object-cover"
            />
            <motion.div className="overflow-hidden">
              <p className="font-semibold">
                Hey there! <HandWave minInterval={10000} maxInterval={25000} />
              </p>
              <p>
                {
                  "My name is Frederik Lauenborg and I'm a Visual Designer based in Copenhagen"
                }
              </p>
            </motion.div>
            <nav className="flex flex-row sticky top-20 gap-2 p-2 w-full justify-evenly border-2 rounded-xl border-black">
              <a className="transition-all flex w-full h-10 items-center justify-center rounded-md hover:bg-slate-200 cursor-pointer">
                Project
              </a>
              <div className="bg-slate-200 w-0.5"></div>
              <a className="transition-all flex w-full h-10 items-center justify-center rounded-md hover:bg-slate-200 cursor-pointer">
                About
              </a>
              <div className="bg-slate-200 w-0.5"></div>
              <a className="transition-all flex w-full h-10 items-center justify-center rounded-md hover:bg-slate-200 cursor-pointer">
                Contact
              </a>
            </nav>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
