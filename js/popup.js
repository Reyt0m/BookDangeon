$("#btn").on("click", () => {
    chrome.runtime.sendMessage({ greeting: "hello" }, function(response) {
      console.log(response);
    });
  });