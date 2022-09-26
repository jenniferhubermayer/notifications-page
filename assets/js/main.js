let data = [
  {
    user: "Mark Webber",
    userSrc: "#",
    userAvatarSrc: "../assets/images/avatar-mark-webber.webp",
    notification: "reacted to your recent post",
    reference: "My first tournament today!",
    referenceSrc: "#",
    referencePictureSrc: "",
    message: "",
    timing: "1m ago",
    timestamp: "",
  },

  {
    user: "Angela Gray",
    userSrc: "#",
    userAvatarSrc: "../assets/images/avatar-angela-gray.webp",
    notification: "followed you",
    reference: "",
    referenceSrc: "",
    referencePictureSrc: "",
    message: "",
    timing: "5m ago",
    timestamp: "",
  },

  {
    user: "Jacob Thompson",
    userSrc: "#",
    userAvatarSrc: "../assets/images/avatar-jacob-thompson.webp",
    notification: " has joined your group",
    reference: "Chess Club",
    referenceSrc: "Chess Club",
    referencePictureSrc: "",
    message: "",
    timing: "1 day ago",
    timestamp: "",
  },

  {
    user: "Rizky Hasanuddin",
    userSrc: "",
    userAvatarSrc: "../assets/images/avatar-rizky-hasanuddin.webp",
    notification: "sent you a private message",
    reference: "",
    referenceSrc: "",
    referencePictureSrc: "",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    timing: "5 days ago",
    timestamp: "",
  },

  {
    user: "Kimberly Smith",
    userSrc: "",
    userAvatarSrc: "../assets/images/avatar-kimberly-smith.webp",
    notification: "commented on your picture",
    reference: "",
    referenceSrc: "",
    referencePictureSrc: "../assets/images/image-chess.webp",
    message: "",
    timing: "1 week ago",
    timestamp: "",
  },

  {
    user: "Nathan Peterson",
    userSrc: "",
    userAvatarSrc: "../assets/images/avatar-nathan-peterson.webp",
    notification: "reacted to your recent post",
    reference: "5 end-game strategies to increase your win rate",
    referenceSrc: "",
    referencePictureSrc: "",
    message: "",
    timing: "2 weeks ago",
    timestamp: "",
  },

  {
    user: "Anna Kim",
    userSrc: "",
    userAvatarSrc: "../assets/images/avatar-anna-kim.webp",
    notification: "left the group",
    reference: "Chess Club",
    referenceSrc: "",
    referencePictureSrc: "",
    message: "",
    timing: "2 weeks ago",
    timestamp: "",
  },
];

// CREATE WRAPPER
let notificationsWrapper = document.createElement("div");
notificationsWrapper.className = "notifications-wrapper";
document.querySelector("main").appendChild(notificationsWrapper);

for (let i = 0; i < data.length; i++) {
  let user = data[i].user;
  let userSrc = data[i].userSrc;
  let notification = data[i].notification;
  let reference = data[i].reference;
  let referenceSrc = data[i].referenceSrc;
  let referencePictureSrc = data[i].referencePictureSrc;
  let messageText = data[i].message;
  let userAvatarSrc = data[i].userAvatarSrc;
  let timing = data[i].timing;

  let notificationsButton = document.createElement("button");
  notificationsWrapper.appendChild(notificationsButton);

  let leftSection = document.createElement("div");
  leftSection.className = "left-section";
  notificationsButton.appendChild(leftSection);

  let userAvatar = document.createElement("img");
  userAvatar.src = userAvatarSrc;
  leftSection.appendChild(userAvatar);

  let contentWrapper = document.createElement("div");
  contentWrapper.className = "content-wrapper";
  leftSection.appendChild(contentWrapper);

  let noticficationHeadline = document.createElement("div");
  noticficationHeadline.className = "notification-headline";
  contentWrapper.appendChild(noticficationHeadline);

  let userName = document.createElement("a");
  userName.className = "user-name";
  userName.innerText = user;
  userName.href = userSrc;
  noticficationHeadline.appendChild(userName);

  let notificationText = document.createElement("p");
  notificationText.className = "reaction-text";
  notificationText.innerText = notification;
  noticficationHeadline.appendChild(notificationText);

  if (reference.length !== 0) {
    let referenceText = document.createElement("a");
    referenceText.className = "reference-text";
    referenceText.innerText = reference;
    referenceText.href = referenceSrc;
    noticficationHeadline.appendChild(referenceText);
  }

  let notificationTiming = document.createElement("div");
  notificationTiming.className = "noticfication-timing";
  contentWrapper.appendChild(notificationTiming);

  let timingText = document.createElement("p");
  timingText.className = "timing-text";
  timingText.innerText = timing;
  notificationTiming.appendChild(timingText);

  if (referencePictureSrc.length !== 0) {
    let referencePicture = document.createElement("img");
    referencePicture.className = "reference-picture";
    referencePicture.src = referencePictureSrc;
    notificationsButton.appendChild(referencePicture);
  }

  if (messageText.length !== 0) {
    let message = document.createElement("p");
    message.className = "private-message";
    message.innerText = messageText;
    contentWrapper.appendChild(message);
  }
}

// FUNCTION TO SET UNREAD MESSAGE COUNTER

let allButtons = document.querySelectorAll("button");
let allReadButtons = document.querySelectorAll("button .toggle-status-read");
let unreadMessagesCount;
let unreadMessagesCountElement = document.querySelector(
  ".count-unread-messages"
);
let markAllAsReadLink = document.querySelector(".mark-all-as-read-link");

unreadMessagesCount = allButtons.length - allReadButtons.length;
document.querySelector(".count-unread-messages").innerText =
  unreadMessagesCount;

allButtons.forEach((btn) => {
  unreadMessagesCount = allButtons.length - allReadButtons.length;
  btn.addEventListener("click", () => {
    btn.classList.toggle("toggle-status-read");
    if (btn.className !== "toggle-status-read") {
      unreadMessagesCount = unreadMessagesCount + 1;
      unreadMessagesCountElement.innerText = unreadMessagesCount;
      markAllAsReadLink.style.pointerEvents = "";
      markAllAsReadLink.style.color = "";
    } else {
      unreadMessagesCount = unreadMessagesCount - 1;
      unreadMessagesCountElement.innerText = unreadMessagesCount;
    }
  });
});

let markAllAsRead = () => {
  allButtons.forEach((btn) => {
    if (btn.className !== "toggle-status-read") {
      btn.classList.toggle("toggle-status-read");
      unreadMessagesCount = 0;
      unreadMessagesCountElement.innerText = 0;
      markAllAsReadLink.style.pointerEvents = "none";
      markAllAsReadLink.style.color = "#dde7ee";
    }
  });
};
