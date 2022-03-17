import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { showMenu } from "../components/_show_menu"
// import { homeSwiper } from "../components/_home_swiper"
import { homeAutoYScroll } from "../components/_home_auto_yscroll"
import { dashboardLightbox } from "../components/_dashboard_lightbox"
import { previewImageOnFileSelect } from "../components/_upload_photo_preview"
// import { indexLightbox } from "../components/_index_lightbox"
import { slideInImages } from "../components/_slide_in_images"
import { dashboardSelection } from "../components/_dashboard_selection"
import { homeScroll } from '../components/_home_scroll'
import { lightbox } from '../components/_lightbox';
import { initSelect2 } from '../components/_select2'
import { maiConfirmation } from '../components/_mail_confirmation'
import { backImageScroll } from '../components/_back_image'
import { homeTextAnim } from '../components/_home_text_anim'
import { insta } from '../components/_insta'
import { mapBox } from '../controllers/mapbox_controller'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// External imports
import "bootstrap";

document.addEventListener('turbolinks:load', () => {
  showMenu();
  // homeSwiper();
  // homeAutoYScroll();
  dashboardLightbox();
  previewImageOnFileSelect();
  // indexLightbox();
  slideInImages();
  dashboardSelection();
  homeScroll();
  lightbox();
  initSelect2();
  maiConfirmation();
  backImageScroll();
  homeTextAnim();
  mapBox();
  // insta()
});
