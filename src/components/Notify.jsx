import React from 'react';
import { Notification } from '@mantine/core';
 
function Notify({ notification, onClose }) {
  if (!notification) return null;
 
  return (
    <Notification
      color={notification.color}
      onClose={onClose}
      style={{ position: 'fixed', top: '2%', left: '50%', transform: 'translateX(-50%)' }}
      loading={notification.isInProgress}
      autoClose={4000}
      withCloseButton={false}
     
    >
      {notification.message}
    </Notification>
  );
}
 
export default Notify;