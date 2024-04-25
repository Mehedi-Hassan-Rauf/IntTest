let notifications = document.querySelector(".notifications");
let error = document.getElementById("error");
// let success = document.getElementById("success");

// for toaster
function createToast(type, icon, title, text) {
  let newToast = document.createElement("div");
  newToast.innerHTML = `
            <div class="toast ${type} flex opacity-70 hover:opacity-100 shadow-2xl cursor-pointer px-3 py-2 justify-around w-[200px] bg-red-500">
                <i class="${icon} pt-2 text-3xl"></i>
                <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark pt-1" onclick="(this.parentElement).remove()"></i>
            </div>`;
  notifications.appendChild(newToast);
  newToast.timeOut = setTimeout(() => newToast.remove(), 5000);
}
success.onclick = function () {
  let type = "success";
  let icon = "fa-solid fa-circle-check";
  let title = "Success";
  let text = "This is a success toast.";
  createToast(type, icon, title, text);
};
error.addEventListener("click", function () {
  let type = "error";
  let icon = "fa-solid fa-circle-exclamation";
  let title = "Top right";
  let text = "This is a error.";
  createToast(type, icon, title, text);
});
// for toaster
