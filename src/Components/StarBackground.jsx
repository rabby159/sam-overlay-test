import { useEffect } from "react";

const StarBackground = () => {
  useEffect(() => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      star.style.animationDuration = Math.random() * 10 + 5 + "s";
    });
  }, []);

  return (
    <div className="absolute w-full h-full overflow-hidden bg-[#0d0d25]">
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="star absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_10px_white] animate-[twinkling]"
        ></div>
      ))}
    </div>
  );
};

export default StarBackground;
