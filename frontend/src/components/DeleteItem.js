import React from 'react'

const DeleteItem = ({ item }) => {
  
  console.log('Delete Item ==== ', item)

  return (
    <section>
        <h1>Delete</h1>
        <p>Are you sure you want to delete this item?</p>
        <button>Delete</button>
        <button>Cancel</button>
    </section>
  )
}

export default DeleteItem
