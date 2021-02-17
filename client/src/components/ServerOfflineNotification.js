import React from 'react'

/*
Alerts user that server is currently inaccessible
*/
const ServerOfflineNotification = () => {
  return (
    <div
      className="alert alert-warning mt-4"
      role="alert"
    >

      <h4 className="alert-heading">
        Could not communicate with server!
      </h4>

      <p>
        Please try refreshing the app later to try again.
      </p>

      <hr />

      <p className="mb-0">
        NOTE: Your pinned items are not being saved and will disappear when you
        refresh the browser.
      </p>

    </div>
  )
}

export default ServerOfflineNotification
