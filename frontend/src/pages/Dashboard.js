import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const announcements = useSelector(state => state.announcements)
  const clients = useSelector(state => state.clients)
  return (
    <main>
      <div>
        <h2>Dashboard</h2>
      </div>
      <div>
        <div>
          <h4>Announcements</h4>
          <div>
            {announcements.length} announcements this month.
          </div>
          <div>
            {clients.length}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard