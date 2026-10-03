// Put her real links here (leave "" until you have them).
const LINKS = {
  tiktok: "https://www.tiktok.com/@judithkaccy?_r=1&_t=ZS-9AFgLAdXOLt",         
  facebook: "https://www.facebook.com/share/19UmyxcWcC",
  whatsapp: "https://wa.me/2347033541116",
  hairBusiness: "https://kaccy-beauty-hair-salon.vercel.app/", 
  dighaMux: "https://dighamux.vercel.app",
  dighaBiomedical: "https://dighamux.vercel.app/biomedical"
};

document.querySelectorAll("[data-link]").forEach(function (a) {
  var key = a.dataset.link, url = LINKS[key];
  if (key === "whatsapp" && url) url = "https://wa.me/" + url.replace(/\D/g, "");
  if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
  else { a.classList.add("soon"); a.setAttribute("aria-disabled", "true"); a.tabIndex = -1; a.title = "Link coming soon"; }
});

var form = document.getElementById("msg");
if (form) form.addEventListener("submit", function (e) {
  e.preventDefault();
  var d = new FormData(form), num = LINKS.whatsapp.replace(/\D/g, "");
  if (!num) { document.getElementById("note").textContent = "WhatsApp isn't set up yet. Please message her on TikTok."; return; }
  var text = "Hi Judith, this is " + d.get("name") + ".\n" + d.get("message");
  window.open("https://wa.me/" + num + "?text=" + encodeURIComponent(text), "_blank", "noopener");
});
