const notifications = [
  "New message from John Doe",
  "Last week's report",
  "Abrakadabra",
  "Hello, World",
  "Jane Doe wants to connect",
  "john"
];


localStorage.setItem('notifications', JSON.stringify(notifications));

const defaultNotifications = JSON.parse(localStorage.getItem('notifications'));

const notificationList = document.getElementById('notifications');

defaultNotifications.forEach(notification => {
  const listItem = document.createElement('li');
  listItem.textContent = notification;
  notificationList.appendChild(listItem);
});

const notificationsCount = defaultNotifications.length;
const notificationsCountElement = document.querySelector('.notifications');
notificationsCountElement.textContent = notificationsCount;










