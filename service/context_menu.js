// const enabled = {}
// //const url = window.location.href;
// chrome.storage.sync.get(["CRS_2"]).then((enable)=>{
// 	Object.assign(enabled, enable);
// 	//console.log(enabled.FAP_1);
// })
// function get(){
//   removeSync()
//   if(enabled.CRS_2 == true){
//     const internalId = setInterval(() => {
//       try {
//         const currentUrl = window.location.href;
//         var finalUrl = currentUrl.slice(0, -6);
    
//         var textareaElement = document.querySelector(
//           'textarea[placeholder="Share your thoughts..."]'
//         );
//         var fullId = textareaElement ? textareaElement.id : null;
//         var cutId = fullId ? fullId.substring(0, fullId.indexOf("~")) : null;
    
//         if (cutId) {
//           finalUrl = finalUrl + "review/" + cutId;
//           navigator.clipboard.writeText(finalUrl);
//           // Lưu finalUrl vào clipboard
//           setToStorage("finalUrl", finalUrl);
//           alert(finalUrl)
//           console.log("Lấy URL thành công!!" + finalUrl);
//           clearInterval(internalId);
//         } else {
//           console.log("Không tìm thấy textarea hoặc id.");
//         }
//       } catch (error) {
//         console.error("Error during execution:", error);
//       }
//     }, 1000);
    
//   }
// }
//     chrome.contextMenus.onClicked.addListener(get);
//     chrome.runtime.onInstalled.addListener(function (){
//       chrome.contextMenus.create({
//         title: "Get link Coursera",
//         contexts: ["all"],
//         id:"getlink"
//       })
//     })
   
//     function removeSync(){
//         chrome.storage.sync.remove("finalUrl", function () {
//         console.log("Dữ liệu đã được xóa thành công");
//       });
//     }
    
      