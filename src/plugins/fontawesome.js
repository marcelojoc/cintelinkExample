import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUnlockAlt,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faUnlockAlt, faCircleExclamation);

Vue.component("font-awesome-icon", FontAwesomeIcon);
