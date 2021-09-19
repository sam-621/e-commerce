import { FC } from 'react'

const DeleteButton: FC<Props> = ({ onClick }) => {
  return (
    <button className='DeleteButton' onClick={onClick}>
      <img src='/images/trash.svg' alt='trash' />
      Remove
    </button>
  )
}

type Props = {
  onClick: () => void
}

export default DeleteButton
