import { toast } from "sonner";

document.addEventListener("astro:page-load", () => {
  //slider
  const wrapper = document.querySelector("[data-tech-wrapper]");
  let copy = document.querySelector(".tech-card").cloneNode(true);
  wrapper.appendChild(copy);

  //modals
  const modal = document.querySelector("[data-tech-modal]");
  const h1 = document.querySelector("[data-tech-h1]");
  const stop = document.querySelector("[data-tech-stop]");

  h1.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    modal.classList.add("flex");
  });
  wrapper.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    modal.classList.add("flex");
  });
  modal.addEventListener("click", () => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  });

  stop.addEventListener("click", (e) => e.stopPropagation());

  addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
    }
  });
});
const btn = document.getElementById("button");

const inputName = document.getElementById("from_name");
const inputMessage = document.getElementById("message");

/* form */
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.textContent = "Sending...";

  const serviceID = "service_5vuzk1o";
  const templateID = "template_rq3mfoa";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      inputName.value = "";
      inputMessage.value = "";

      btn.textContent = "Send Email";
      //alert("Sent!");

      return toast.success(
        "Thanks you to contact me, I will review your message.",
        {
          className: "toast-success",
          duration: 6000,
        }
      );
    },
    (err) => {
      btn.textContent = "Send Email";
      alert(JSON.stringify(err));

      return toast.error("It had been an error, please, try again", {
        className: 'toast-error',
        duration: 6000
      });
    }
  );
});
