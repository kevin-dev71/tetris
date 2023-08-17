import { FC } from 'react'
import { CellOptions } from '@/types'
interface CellProps {
  type: CellOptions
}

const Cell: FC<CellProps> = ({type}) => {
  return <div className={`cell ${type}`}></div>
}

export default Cell
