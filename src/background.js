chrome.action.onClicked.addListener((tab) => {
  if (tab.url.startsWith("http://") || tab.url.startsWith("https://")) {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: shareLink,
      args: [tab.url]
    });
  } else {
    console.log("It is impossible to share from this page.");
  }
});

function shareLink(url) {
  let shareData = {
    url: url
  };

  if (navigator.canShare && navigator.canShare(shareData)) {
    navigator.share(shareData)
      .then(() => console.log('The link has been sent successfully!'))
      .catch((err) => console.error('Error when sending the link:', err));
  } else {
    console.log('The Share API is not supported in this browser.');
  }
}
