"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const page = () => {
  const [pos, setPos] = useState([0, 0]);
  const boundRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      console.log("hello");
      console.log("Mouse Position:", e.clientX, e.clientY);

      if (boundRef.current) {
        const rect = boundRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetX = (x - centerX) / centerX;
        const offsetY = (y - centerY) / centerY;
        console.log("Offset Position:", offsetX, offsetY);
        setPos([offsetX, offsetY]);
      }
    }
    if (window) window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="size-full flex items-center justify-center overflow-hidden relative">
      <div className="absolute size-full flex flex-col items-center justify-center z-0 text-[10vw] leading-[10vw] tracking-tighter font-bold  opacity-25 text-justify" >
        
       College student Janardhan is a simpleton who desperately seeks inspiration for the musician inside him. Although heartbreak helps him reach his goal, it also leads him to self-destruction.
      </div>
      <motion.div
        animate={{
          rotateX: pos[1] * 10,
          rotateY: -pos[0] * 10,
          perspective: "500px",
        }}
        ref={boundRef}
        className=" size-[700px]  relative overflow-hidden rounded-full object-cover border-8 border-zinc-950 flex items-center justify-center shadow-2xl  shadow-black/30"
      >
        {/* <img src="https://www.shutterstock.com/shutterstock/videos/3688897373/thumb/1.jpg?ip=x480" className="absolute z-[80] object-cover h-full mix-blend-" alt="" /> */}
        <div className="bg-foreground/60 brightness-100 size-full z-[100] absolute mix-blend-multiply"></div>
        <div className="size-[100px]  rounded-full bg-background absolute z-[100] border-[25px] outline-8 outline-zinc-950 border-zinc-900"></div>
        <motion.div
          // Rotate the gradient according to the mouse position, wrapping naturally
          style={{
            rotate: `${Math.atan2(pos[1], pos[0]) * (180 / Math.PI)}deg`,
          }}
          className="absolute size-full z-50 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        ></motion.div>

        <motion.div
          // Rotate the gradient according to the mouse position, wrapping naturally
          style={{
            rotate: `${Math.atan2(pos[1], pos[0]) * (180 / Math.PI)}deg`,
          }}
          className="absolute size-full bg-gradient-to-l z-50 from-black/40 via-black/30  to-transparent"
        ></motion.div>

        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="h-full object-cover absolute saturate-0 "
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/201110/ranbir-kapoor-and-nargis-fakhri-in-rockstar_102011023141.jpg?VersionId=WEPmw94EuSUt9.KvU1FmQ13hfJOb3UaX&size=686:*"
        />
      </motion.div>
    </div>
  );
};

export default page;
