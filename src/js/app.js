import "../scss/style.scss";
import burger from "./files/burger.js";
import consultTitles from "./files/consultTiltes.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";

spoller();
burger();
inputmask();
sliders();
headerScroll();
consultTitles();

Fancybox.bind("[data-fancybox]", {});
// Fancybox.show([{ src: "#modal-consult", type: "inline" }]);
