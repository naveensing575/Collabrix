"use client";

import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";
import { useEffect, use } from "react";

interface BoardIdPageProps {
  params: Promise<{ boardId: string }>;
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  const unwrappedParams = use(params);

  useEffect(() => {
    document.title = `Board - Collabrix`;
  }, []);

  return (
    <Room roomId={unwrappedParams.boardId} fallback={<Loading />}>
      <Canvas boardId={unwrappedParams.boardId} />
    </Room>
  );
};

export default BoardIdPage;
