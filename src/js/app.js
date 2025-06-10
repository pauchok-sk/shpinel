import "../scss/style.scss";
import burger from "./files/burger.js";
import consultTitles from "./files/consultTiltes.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import scrollables from "./files/scrollables.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tabs from "./files/tabs.js";

spoller();
burger();
inputmask();
sliders();
headerScroll();
consultTitles();
scrollables();
tabs();

Fancybox.bind("[data-fancybox]", {});
// Fancybox.show([{ src: "#modal-consult", type: "inline" }]);
