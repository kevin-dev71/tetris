import Cell from "@/components/Cell";
import type { BoardShape } from "@/types";

interface BoardProps {
  currentBoard: BoardShape
}

export const Board = ({currentBoard}: BoardProps) => {
  return <div className="board">
    {currentBoard.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => (
          <Cell key={`${rowIndex}-${cellIndex}`} type={cell} />
        ))}
      </div>
    ))}
  </div>
}
