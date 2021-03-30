import { useEffect, useState } from 'react';

export default function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    console.log('subscribe to friend status');
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      console.log('unsubscribe');
      // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }

  return isOnline ? 'Online' : 'Offline';
}
