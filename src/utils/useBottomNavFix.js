import { useEffect, useState } from "react";

export default function useBottomNavFix() {
  const [bottom, setBottom] = useState(0);

  useEffect(() => {
    const viewport = window.visualViewport;

    if (!viewport) return;

    const handler = () => {
      // 키보드가 올라와서 viewport 높이가 줄어든 경우
      if (viewport.height < window.innerHeight) {
        // offsetTop: 키보드 등으로 잘려서 위로 밀린 영역
        setBottom(window.innerHeight - viewport.height - viewport.offsetTop);
      } else {
        setBottom(0); // 원래대로
      }
    };

    viewport.addEventListener("resize", handler);
    viewport.addEventListener("scroll", handler);

    handler(); // 초기 실행

    return () => {
      viewport.removeEventListener("resize", handler);
      viewport.removeEventListener("scroll", handler);
    };
  }, []);

  return bottom;
}
