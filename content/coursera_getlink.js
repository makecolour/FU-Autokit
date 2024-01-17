function clear()
{chrome.storage.sync.remove("finalUrl", function () {
  console.log("Dữ liệu đã được xóa thành công");
});}
const get = async () => {
  const enabled = await getFromStorage('CRS_2', '');
  if(enabled==true)
  {
    clear();
    const internalId = setInterval(() => {
      try {
        const currentUrl = window.location.href;
        var finalUrl = currentUrl.slice(0, -6);
    
        var textareaElement = document.querySelector(
          'textarea[placeholder="Share your thoughts..."]'
        );
        var fullId = textareaElement ? textareaElement.id : null;
        var cutId = fullId ? fullId.substring(0, fullId.indexOf("~")) : null;
    
        if (cutId) {
          finalUrl = finalUrl + "review/" + cutId;
    
          // Lưu finalUrl vào clipboard
          setToStorage("finalUrl", finalUrl);
          navigator.clipboard.writeText(finalUrl);
          console.log("Lấy URL thành công!!" + finalUrl);
          alert("Đã sao chép URL vào clipboard!!\n" + finalUrl)
          window.open("extension://lmelgfgffnjbhnojidbpgdjaiindhppp/windows/index.html", "_blank");
          clearInterval(internalId);
        } else {
          console.log("Không tìm thấy textarea hoặc id.");
        }
      } catch (error) {
        console.error("Error during execution:", error);
      }
    }, 1000);
  }
}
get();


// Function to copy text to the clipboard