// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { showMenu } from "../components/_show_menu"
import { homeSwiper } from "../components/_home_swiper"
import { homeAutoYScroll } from "../components/_home_auto_yscroll"
import { dashboardLightbox } from "../components/_dashboard_lightbox"
import { previewImageOnFileSelect } from "../components/_upload_photo_preview"
import { indexLightbox } from "../components/_index_lightbox"
import { slideInImages } from "../components/_slide_in_images"
import { dashboardSelection } from "../components/_dashboard_selection"
import { homeScroll } from '../components/_home_scroll'

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  showMenu();
  homeSwiper();
  // homeAutoYScroll();
  dashboardLightbox();
  previewImageOnFileSelect();
  indexLightbox();
  slideInImages();
  dashboardSelection();
  homeScroll();
});
