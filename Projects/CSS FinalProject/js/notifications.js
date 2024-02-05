const notifications = [
  "New message from John Doe",
  "Last week's report",
  "Abrakadabra",
  "Hello, World",
  "Jane Doe wants to connect",
];

localStorage.setItem('notifications', JSON.stringify(notifications));


const defaultNotifications = JSON.parse(localStorage.getItem('notifications'));

const notificationList = document.getElementById('notifications');

notifications.forEach(notifications => {
  const listItem = document.createElement('li');
  listItem.textContent = notifications;
  notificationList.appendChild(listItem);
});

const notificationsCount = notifications.length;
const notificationsCountElement = document.querySelector('.notifications');
notificationsCountElement.textContent = notificationsCount;






