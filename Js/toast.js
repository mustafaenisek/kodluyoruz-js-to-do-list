function createToast(className, text) {
  return `
	  <div class="mr-1" style="position: relative">
		  <div style="position: absolute; top: 0; right: 0">
			<div
			  id="liveToast"
			  class="toast ${className} hide"
			  role="alert"
			  aria-live="assertive"
			  aria-atomic="true"
			  data-delay="4000"
			>
			  <div>
				<button
				  type="button"
				  class="close"
				  data-dismiss="toast"
				  aria-label="Close"
				>
				  <span aria-hidden="true">&times;</span>
				</button>
			  </div>
			  <div class="toast-body">${text}</div>
			</div>
		  </div>
		</div>
	`;
}
let toastList = [
  {
    className: "successAdd",
    text: "Task added succesfuly.",
  },
  {
    className: "successRemove",
    text: "Task deleted succesfuly.",
  },
  {
    className: "successMultipleRemove",
    text: "Selected tasks deleted succesfuly.",
  },
  {
    className: "cancelRemove",
    text: "Removing tasks cancelled.",
  },
  {
    className: "errorAdd",
    text: "You can't add tasks with no description!",
  },
];

toastList.forEach((toast) => {
  $("body").prepend(createToast(toast.className, toast.text));
});
