angular.module('templates-app', ['3dview/3dview.tpl.html', '3dview/stlviewer.tpl.html', 'about/about.tpl.html', 'connection/connection.tpl.html', 'extruder/extruder.tpl.html', 'home/home.tpl.html', 'jog/jog.tpl.html', 'restart/restart.tpl.html', 'settings/settings.tpl.html', 'status/status.tpl.html', 'wet/wet.tpl.html', 'wizard/wizard.page1.tpl.html', 'wizard/wizard.tpl.html']);

angular.module("3dview/3dview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("3dview/3dview.tpl.html",
    "");
}]);

angular.module("3dview/stlviewer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("3dview/stlviewer.tpl.html",
    "<div class=\"row\">\n" +
    "<canvas id=\"cv\" width=\"800\" height=\"600\" class=\"col-sm-12\">\n" +
    "\n" +
    "\n" +
    "</canvas>\n" +
    "</div>");
}]);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "  <p>\n" +
    "    Select a 3D model in STL format, then follow the wizard.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Supported 3D Models</h2>\n" +
    "\n" +
    "  <p>\n" +
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Dry or wet extrusion</h2>\n" +
    "\n" +
    "  <p>\n" +
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "  </p>\n" +
    "\n" +
    "\n" +
    "  <h2>Dry extrusion</h2>\n" +
    "\n" +
    "\n" +
    "  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n" +
    "\n" +
    "\n" +
    "  <h2>Wet extrusion</h2>\n" +
    "\n" +
    "  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("connection/connection.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("connection/connection.tpl.html",
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-sm-6\">\n" +
    "          \n" +
    "        <div class=\"panel panel-default\">\n" +
    "           <div class=\"panel-heading\">Connection status</div>\n" +
    "           <div class=\"panel-body\">      \n" +
    "                <p style=\"margin-top:20px\" class=\"text-center\">\n" +
    "                    <span  class=\"label-xlarge\">{{status}}</span>\n" +
    "                  <button class=\"btn btn-default\" ng-click=\"refreshAction()\"><i class=\"fa fa-refresh\"></i></button>   \n" +
    "                    </p>\n" +
    "\n" +
    "           </div>\n" +
    "      </div>\n" +
    "      <div class=\"text-right\">\n" +
    "                <button ng-hide=\"isConnected\" class=\"btn btn-success btn-xlarge\" ng-click=\"connectAction()\">Connect</button>        \n" +
    "                <button ng-show=\"isConnected\" class=\"btn btn-danger btn-xlarge\" ng-click=\"disconnectAction()\">Disconnect</button>         \n" +
    "                     \n" +
    "      </div>\n" +
    "    \n" +
    "    <br/>\n" +
    "\n" +
    "\n" +
    "        <div ng-hide=\"hasSettings\" class=\"alert alert-info\">\n" +
    "        Loading settings...\n" +
    "        </div>\n" +
    "    \n" +
    "    \n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-sm-6\">    \n" +
    "    \n" +
    "    \n" +
    "<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">Settings</div>\n" +
    "    <div class=\"panel-body\">\n" +
    "\n" +
    "    <form class=\"form form-compact\">\n" +
    "        <div class=\"form-group\">\n" +
    "        <label>Serial port</label>\n" +
    "        <select class=\"form-control\" ng-model=\"selected_port\"  ng-disabled=\"isConnected\">\n" +
    "            <option ng-repeat=\"port in serial_ports\" value=\"{{port}}\">{{port}}</option>\n" +
    "        </select>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "        <label>Baud rate</label>\n" +
    "        <select class=\"form-control\" ng-model=\"selected_baud\"  ng-disabled=\"isConnected\">\n" +
    "            <option ng-repeat=\"baud in baud_rates\" value=\"{{baud}}\">{{baud}}</option>\n" +
    "        </select>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "        <label>Printer profile</label>\n" +
    "        <select class=\"form-control\" ng-model=\"selected_profile\" ng-disabled=\"isConnected\">\n" +
    "            <option ng-repeat=\"profile in profiles\" value=\"{{profile.id}}\">{{profile.name}}</option>\n" +
    "        </select>        \n" +
    "        </div>\n" +
    "    </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("extruder/extruder.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("extruder/extruder.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6 col-xs-12\">\n" +
    "        <h3>Current extruder</h3>\n" +
    "        <div class=\"well well-default\">\n" +
    "            <div class=\"attribute\">\n" +
    "                <label>Type: {{ currentExtruder.kind }}</label>\n" +
    "            </div>\n" +
    "            <hr>\n" +
    "            <button style=\"width:100%\" class=\"btn btn-lg btn-success  btn-block\" ng-click=\"startWizard()\" ng-show=\"wizard.step == null\">Select new extruder</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 col-xs-12\">\n" +
    "        <section id=\"select_new_header\" ng-show=\"wizard.step\">\n" +
    "            <h4>Select new extruder</h4>\n" +
    "        </section>\n" +
    "        <section id=\"select_home_head\" ng-show=\"wizard.step == 'select_home_head'\">\n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-body\">\n" +
    "                    Homing head...\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "        <section id=\"select_extruder_type\" ng-show=\"wizard.step == 'select_extruder_type'\">\n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    Extruder type\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <button class=\"btn btn-primary btn-lg btn-block\" ng-click=\"selectType('wet')\">WET</button>\n" +
    "                    <button class=\"btn btn-success btn-lg btn-block\" ng-click=\"selectType('fuse')\">FUSE</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "        <section id=\"select_wet_estruder\" ng-show=\"wizard.step == 'select_wet'\">\n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    Wet Estruder\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                     <div class=\"panel-body\">\n" +
    "                    Install the wet syringe and click continue<br/><br/>\n" +
    "                    <button class=\"btn btn-warning btn-lg  btn-block\" ng-click=\"wetExtruderInstalled()\">Continue</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "        <section id=\"select_fuse_estruder\" ng-show=\"wizard.step == 'select_fuse'\">\n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    Fuse Estruder\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    Install the fuse extruder and click continue<br/><br/>\n" +
    "                    <button class=\"btn btn-warning btn-lg  btn-block\" ng-click=\"fuseExtruderInstalled()\">Continue</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "        <section id=\"select_set_zero\" ng-show=\"wizard.step == 'select_set_zero'\">\n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    Zero Extruder\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <p>Move the syringe to the desired zero and click continue</p>\n" +
    "                    <p class=\"text-center\">\n" +
    "                        <div class=\"btn-group\" data-toggle=\"buttons-radio\" id=\"jog_distance\">\n" +
    "                                <button type=\"button\" class=\"btn btn-primary btn-lg\" ng-class=\"{'active' : (jogScale == 0.1)}\" ng-click=\"setJogScale(0.1)\">0.1</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-primary btn-lg\" ng-class=\"{'active' : (jogScale == 1)}\" ng-click=\"setJogScale(1)\">1</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-primary btn-lg\" ng-class=\"{'active' :(jogScale == 10)}\" ng-click=\"setJogScale(10)\">10</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-primary btn-lg\" ng-class=\"{'active' :(jogScale == 100)}\" ng-click=\"setJogScale(100)\">100</button>\n" +
    "                            </div>\n" +
    "                    </p>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                        <button class=\"btn btn-default btn-lg btn-block\" ng-click=\"jog({z: 1})\">Z UP</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                        <button class=\"btn btn-default btn-lg btn-block\" ng-click=\"jog({z: -1})\">Z DOWN</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <br/>\n" +
    "                    <button class=\"btn btn-warning btn-lg btn-block\" ng-click=\"wetExtruderSetZero()\">Continue</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "        <section id=\"select_success\" ng-show=\"wizard.step == 'select_success'\">\n" +
    "            <div class=\"alert alert-success\" role=\"alert\">\n" +
    "                <p>Settings saved successfully! You can start printing</p>\n" +
    "            </div>\n" +
    "            <button class=\"btn btn-success pull-right\" ng-click=\"wizard.step = null\">Dismiss</button>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "<h1 class=\"page-header\">Welcome to REOSS GUI</h1>\n" +
    "\n" +
    "</div>");
}]);

angular.module("jog/jog.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("jog/jog.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-8\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <label>Jog</label>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-7\">\n" +
    "                            <table class=\"text-center jogtable\">\n" +
    "                                <tr>\n" +
    "                                    <td colspan=\"3\"><strong>X - Y</strong></td>\n" +
    "                                    <td><strong>Z</strong></td>\n" +
    "                                </tr>\n" +
    "                                <tr>\n" +
    "                                    <td></td>\n" +
    "                                    <td><a class=\"btn btn-default\" ng-click=\"jog({y:1})\"><i class=\"fa fa-arrow-up fa-2x\"></i></a></td>\n" +
    "                                    <td></td>\n" +
    "                                    <td><a class=\"btn btn-default\" ng-click=\"jog({z:1})\"><i class=\"fa fa-arrow-up fa-2x\"></i></a></td>\n" +
    "                                </tr>\n" +
    "                                <tr>\n" +
    "                                    <td><a class=\"btn btn-default\" ng-click=\"jog({x:-1})\"><i class=\"fa fa-arrow-left fa-2x\"></i></a></td>\n" +
    "                                    <td><a class=\"btn btn-default\" ng-click=\"home()\"><i class=\"fa fa-home fa-2x\"></i></a></td>\n" +
    "                                    <td><a class=\"btn btn-default\" ng-click=\"jog({x:1})\"><i class=\"fa fa-arrow-right fa-2x\"></i></a></td>\n" +
    "                                    <td><a class=\"btn btn-default\" ng-click=\"home_z()\"><i class=\"fa fa-home fa-2x\"></i></a></td>\n" +
    "                                </tr>\n" +
    "                                <tr>\n" +
    "                                    <td></td>\n" +
    "                                    <td><a class=\"btn btn-default btn-sm\" ng-click=\"jog({y:-1})\"><i class=\"fa fa-arrow-down fa-2x\"></i></a></td>\n" +
    "                                    <td></td>\n" +
    "                                    <td><a class=\"btn btn-default btn-sm\" ng-click=\"jog({z:-1})\"><i class=\"fa fa-arrow-down fa-2x\"></i></a></td>\n" +
    "                                </tr>\n" +
    "                            </table>\n" +
    "				<br>\n" +
    "				<button type=\"button\" class=\"btn btn-danger\" ng-click=\"kill()\">Stop Now</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-5\">\n" +
    "                            <label>Distance</label><br/>\n" +
    "                                <div class=\"btn-group\" data-toggle=\"buttons-radio\" id=\"jog_distance\">\n" +
    "                                <button type=\"button\" class=\"btn btn-primary\" ng-class=\"{'active' : (jogScale == 0.1)}\" ng-click=\"setJogScale(0.1)\">0.1</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-primary\" ng-class=\"{'active' : (jogScale == 1)}\" ng-click=\"setJogScale(1)\">1</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-primary\" ng-class=\"{'active' :(jogScale == 10)}\" ng-click=\"setJogScale(10)\">10</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-primary\" ng-class=\"{'active' :(jogScale == 100)}\" ng-click=\"setJogScale(100)\">100</button>\n" +
    "                            </div>\n" +
    "                            <hr/>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <rzslider rz-slider-model=\"feed_rate\" rz-slider-floor=\"0\" rz-slider-ceil=\"200\"></rzslider>\n" +
    "                            </div>\n" +
    "                            <label>Feed: <span class=\"label label-default\">{{ feed_rate }}%</span> </label>\n" +
    "                            </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-3\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <label>Extruder</label>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "<!--                 <a class=\"btn btn-default btn-block btn-lg\" ui-sref=\"extruder\"> Change tool</a>\n" +
    " -->                       <a class=\"btn btn-default btn-block  btn-lg\" ng-click=\"extrude()\"> Extr.</a>\n" +
    "                <a class=\"btn btn-default btn-block  btn-lg\" ngclick=\"retract\"> Retr.</a> \n" +
    "                <br/>\n" +
    "                <label>Flow: <span class=\"label label-default\">{{ extrude_flow }}</span> %</label>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <a class=\"btn btn-default btn-block btn-lg\" ng-click=\"setTemperature(190)\">190</a>\n" +
    "                    <a class=\"btn btn-default btn-block btn-lg\" ng-click=\"setTemperature(50)\">50</a>  \n" +
    "                    <a class=\"btn btn-default btn-block btn-lg\" ng-click=\"setTemperature(0)\">Off</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "                <rzslider rz-slider-model=\"extrude_flow\" rz-slider-floor=\"0\" \n" +
    "     rz-slider-ceil=\"200\" \n" +
    "     ng-model=\"extrude_flow\">\n" +
    "     </rzslider>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--  <div class=\"col-sm-3\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">    \n" +
    "              <label>General</label>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"panel-body\">        \n" +
    "    \n" +
    "           <a class=\"btn btn-default btn-block btn-lg\"> Motors off</a>\n" +
    "           <a class=\"btn btn-default btn-block btn-lg\"> Fan on</a>\n" +
    "           <a class=\"btn btn-default btn-block btn-lg\"> Fan off</a>\n" +
    " \n" +
    "        </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("restart/restart.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("restart/restart.tpl.html",
    "<div ng-show=\"showConfirm\" class=\"alert alert-warning\">\n" +
    "    <p class=\"lead\">Confirm</p>\n" +
    "        <p>Are you sure you want to {{ action }}?</p>\n" +
    "        <p></p>\n" +
    "        <div class=\"text-right\">\n" +
    "        <button class=\"btn btn-default btn-xlarge\" ng-click=\"cancel()\">Cancel</button>\n" +
    "        <button class=\"btn btn-danger btn-xlarge\" ng-click=\"confirm()\">Confirm</button>\n" +
    "        </div>\n" +
    "</div>\n" +
    "<div ng-hide=\"showConfirm\" class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        Power\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <button class=\"btn btn-block btn-lg btn-primary\" ng-click=\"actionRestart()\">Restart</button>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <button class=\"btn btn-block btn-lg btn-danger\" ng-click=\"actionShutdown()\">Shutdown</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("settings/settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("settings/settings.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-12\">\n" +
    "        <tabset>\n" +
    "            <tab heading=\"Fuse\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                        <h4>Settings</h4>\n" +
    "                        <div class=\"well\">\n" +
    "                            <form class=\"form form-inline\" accept-charset=\"utf-8\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Extruder size</label>\n" +
    "                                    <input type=\"number\" class=\"form-control\" name=\"extruder\" ng-model=\"settings.extruder_size\" required />\n" +
    "                                </div>\n" +
    "                                <br/>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Filament size</label>\n" +
    "                                    <input type=\"number\" class=\"form-control\" name=\"extruder\" ng-model=\"settings.filament_size\" required />\n" +
    "                                </div>\n" +
    "                                <br/>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Extruder temp</label>\n" +
    "                                    <input type=\"number\" class=\"form-control\" name=\"extruder\" ng-model=\"settings.extruder_temp\" required />\n" +
    "                                </div>\n" +
    "                                <br/>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Bed temp</label>\n" +
    "                                    <input type=\"number\" class=\"form-control\" name=\"extruder\" ng-model=\"settings.bed_temp\" required />\n" +
    "                                </div>\n" +
    "                                <br/>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Fill %</label>\n" +
    "                                    <input type=\"number\" class=\"form-control\" name=\"extruder\" ng-model=\"settings.bed_temp\" required />\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                        <h4>Profiles</h4>\n" +
    "                        <ul class=\"list-group\">\n" +
    "                            <li class=\"list-group-item\">Default Profile <i class=\"fa fa-check\"></i></li>\n" +
    "                            <li class=\"list-group-item\">Random Profile</li>\n" +
    "                            <li class=\"list-group-item\">Sample Profile</li>\n" +
    "                            <li class=\"list-group-item\">High speed Profile</li>\n" +
    "                            <li class=\"list-group-item\">High quality Profile</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </tab>\n" +
    "            <tab heading=\"Wet\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <h3>Presets:</h3>\n" +
    "                    <br/>\n" +
    "                    <table class=\"table table-striped\" style=\"width:100%\">\n" +
    "                        <tr ng-repeat=\"preset in settings.presets\">\n" +
    "                            <td>\n" +
    "                                <a href=\"#\">{{ preset.name }}</a>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                Example description</td>\n" +
    "                            <td align=\"right\">\n" +
    "                                <a href=\"#\">\n" +
    "                                    <i class=\"fa fa-edit\"></i>\n" +
    "                                </a>\n" +
    "                                <a href=\"#\">\n" +
    "                                    <i class=\"fa fa-times\"></i>\n" +
    "                                </a>\n" +
    "                                </label>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                    <a class=\"btn btn-default btn-sm pull-right\">New preset</a>\n" +
    "                </div>\n" +
    "            </tab>\n" +
    "        </tabset>\n" +
    "        <!--\n" +
    "            <div class=\"panel panel-default\" style=\"margin-top: 30px\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <label>Edit preset</label>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <form class=\"form form-horizontal\" accept-charset=\"utf-8\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Name:\n" +
    "                                <input type=\"text\" class=\"form-control\" name=\"preset_name\" ng-model=\"settings.new_preset_name\" value=\"\">\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Length:\n" +
    "                                <input type=\"number\" class=\"form-control\" name=\"preset_length\" ng-model=\"settings.new_preset_length\" value=\"\">\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <button class=\"btn btn-lg pull-right btn-success\">Save</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>-->\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("status/status.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("status/status.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">Machine status</div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <p class=\"lead\">\n" +
    "                    <label>\n" +
    "                        Machine State:\n" +
    "                    </label>\n" +
    "                    <span>{{status}}</span>\n" +
    "                </p>\n" +
    "                <p class=\"lead\">\n" +
    "                    <label>\n" +
    "                        File: \n" +
    "                    </label>\n" +
    "                    <span>{{ job.file.name }}</span>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\" ng-class=\"{ 'panel-danger': isPrinting }\" ng-show=\"isPrinting || isPaused\">\n" +
    "            <div class=\"panel-heading\">Print progress</div>\n" +
    "            <div class=\"panel-body\">\n" +
    "            <progressbar class=\"progress progress-striped\" type=\"danger\" value=\"progress_slider\">{{progress.percent}}%</progressbar>\n" +
    "           \n" +
    "            <div class=\"btn-toolbar\">\n" +
    "            <button class=\"btn btn-primary btn-lg\" ng-click=\"pausePrint()\" ng-hide=\"isPaused\">Pause</button>\n" +
    "            <button class=\"btn btn-success btn-lg\" ng-click=\"pausePrint()\" ng-show=\"isPaused\">Resume</button>\n" +
    "            <button class=\"btn btn-warning  btn-lg\" ng-click=\"restartPrint()\"  ng-show=\"isPaused\">Restart</button>\n" +
    "            <button class=\"btn btn-danger  btn-lg\" ng-click=\"cancelPrint()\">Stop</button>\n" +
    "            </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <small>Octoprint api v.{{api_version}} server v.{{ server_version}}</small>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">Print time</div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <p>\n" +
    "                    <label>\n" +
    "                        Approx. Print time:\n" +
    "                    </label>\n" +
    "                    <span>{{ formatSeconds(job.estimatedPrintTime) }}</span>\n" +
    "                </p>\n" +
    "                <p>\n" +
    "                    <label>\n" +
    "                        Print time:\n" +
    "                    </label>\n" +
    "                    <span>{{ formatSeconds(progress.printTime)}}</span>\n" +
    "                </p>\n" +
    "                <p>\n" +
    "                    <label>\n" +
    "                        Print time left:\n" +
    "                    </label>\n" +
    "                    <span ng-show=\"progress.printTimeLeft\">{{ formatSeconds(progress.printTimeLeft)}}</span>\n" +
    "                    <span ng-hide=\"progress.printTimeLeft\">print completed</span>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "           <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">Temperature</div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <p>\n" +
    "                    <label>\n" +
    "                        Actual vs Target\n" +
    "                    </label>\n" +
    "                    <span>{{tempData.actual}} / {{tempData.target}}</span>\n" +
    "                    <progressbar max=\"300\" min=0 type=\"warning\" value=\"tempData.actual\"></progressbar>\n" +
    "                    <progressbar max=\"300\" min=0 type=\"danger\" value=\"tempData.target\"></progressbar>\n" +
    "\n" +
    "               </p>\n" +
    "            </div>\n" +
    "        </div> \n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("wet/wet.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wet/wet.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">Syringe Control</div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-12\">\n" +
    "                        <label>Model</label>\n" +
    "                        <form class=\"form form-inline\">\n" +
    "                            <select ng-model=\"size\" convert-to-number class=\"form-control input-lg\" ng-change=\"updateFlow()\" required>\n" +
    "                                <option value=\"20\">SOCOREX 20 mL</option>\n" +
    "                                <option value=\"10\">SOCOREX 10 mL</option>\n" +
    "                                <option value=\"5\">HAMILTON #1005 5mL</option>\n" +
    "                                <option value=\"12\">TERUMO 12 mL</option>\n" +
    "                                <option value=\"6\">TERUMO 6 mL</option>\n" +
    "                                <!-- <option ng-repeat=\"v in values\" value=\"{{ v.diam }}\">{{v.label}}</option> -->\n" +
    "                            </select>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                        <label>Flow rate ml/h</label>\n" +
    "                        <form class=\"form form-inline\">\n" +
    "                            <!-- <input class=\"form-control\" type=\"number\" disabled=\"true\" min=\"0\" max=\"200\" ng-model=\"capacity\" step=\"0.01\" ng-change=\"updateFlow()\"> -->\n" +
    "                            <select class=\"form-control input-lg\" convert-to-number ng-model=\"capacity\" ng-change=\"updateFlow()\">\n" +
    "                                <option value=\"0.1\">0.1</option>\n" +
    "                                <option value=\"0.2\">0.2</option>\n" +
    "                                <option value=\"0.3\">0.3</option>\n" +
    "                                <option value=\"0.4\">0.4</option>\n" +
    "                                <option value=\"0.5\">0.5</option>\n" +
    "                                <option value=\"0.6\">0.6</option>\n" +
    "                                <option value=\"0.7\">0.7</option>\n" +
    "                                <option value=\"0.8\">0.8</option>\n" +
    "                                <option value=\"0.9\">0.9</option>\n" +
    "                                <option value=\"1\">1</option>\n" +
    "                                <option value=\"1.1\">1.1</option>\n" +
    "                                <option value=\"1.2\">1.2</option>\n" +
    "                                <option value=\"1.3\">1.3</option>\n" +
    "                                <option value=\"1.4\">1.4</option>\n" +
    "                                <option value=\"1.5\">1.5</option>\n" +
    "                                <option value=\"1.6\">1.6</option>\n" +
    "                                <option value=\"1.7\">1.7</option>\n" +
    "                                <option value=\"1.8\">1.8</option>\n" +
    "                                <option value=\"1.9\">1.9</option>\n" +
    "                                <option value=\"2\">2</option>\n" +
    "                                <option value=\"3\">3</option>\n" +
    "                            </select>\n" +
    "                            <!-- <button class=\"btn btn-default btn-lg\" ng-click=\"setCapacity(0.1)\">+</button> -->\n" +
    "                            <!-- <button class=\"btn btn-default btn-lg\" ng-click=\"setCapacity(-0.1)\">-</button> -->\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                        <label>Override (%)</label> <br/>\n" +
    "\n" +
    "                                <div class=\"btn-group\" data-toggle=\"buttons-radio\" id=\"overrideScale\">\n" +
    "                                <button type=\"button\" class=\"btn btn-primary\" ng-class=\"{'active' : (overrideScale == 1)}\" ng-click=\"setOverrideScale(1)\">1</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-primary\" ng-class=\"{'active' :(overrideScale == 10)}\" ng-click=\"setOverrideScale(10)\">10</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-primary\" ng-class=\"{'active' :(overrideScale == 100)}\" ng-click=\"setOverrideScale(100)\">100</button>\n" +
    "                            </div>\n" +
    "                            <br/>\n" +
    "\n" +
    "                        <form class=\"form form-inline\">\n" +
    "                            <input class=\"form-control\" disabled type=\"number\" min=\"0\" max=\"2000\" ng-model=\"flow\" step=\"1\" ng-change=\"updateFlow()\"><br/>\n" +
    "                            <button class=\"btn btn-default btn-lg\" ng-click=\"setFlow(1)\">+</button>\n" +
    "                            <button class=\"btn btn-default btn-lg\" ng-click=\"setFlow(-1)\">-</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <br/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"well\">\n" +
    "            <label>Current speed:</label>\n" +
    "            {{ microsteps }} step/s\n" +
    "            <br>\n" +
    "            <label>Status:</label>\n" +
    "            <strong>{{ status }}</strong>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">Control</div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <!-- <button ng-click=\"updateFlow()\" class=\"btn btn-success btn-lg btn-block\">Update flow</button> -->\n" +
    "                <button ng-click=\"startExtruding(0)\" class=\"btn btn-primary btn-lg btn-block\">Dispense</button>\n" +
    "                <button ng-click=\"startExtruding(1)\" class=\"btn btn-success btn-lg btn-block\">Aspirate</button>\n" +
    "                <button ng-click=\"stopExtruding()\" class=\"btn btn-danger btn-lg btn-block\">Stop</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "");
}]);

angular.module("wizard/wizard.page1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wizard/wizard.page1.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-12\">\n" +
    "        <h1 class=\"page-header\">Slice model</h1>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-9\">\n" +
    "     <stl-viewer>\n" +
    "     </stl-viewer>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-3\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                Slice options\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <form class=\"form form-compact\">\n" +
    "                    <label>Layer height\n" +
    "                        <input type=\"number\" class=\"form-control\" name=\"layer_height\" value=\"0.5\" max=\"1\" min=\"0.1\" step=\"0.1 \" />\n" +
    "                    </label>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"text-right \">\n" +
    "            <button class=\"btn btn-success \">Start</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("wizard/wizard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wizard/wizard.tpl.html",
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-sm-2\">\n" +
    "    <a title=\"Go to the home folder\" class=\"btn btn-default\" ng-click=\"browse()\">\n" +
    "            <i class=\"fa fa-home\"></i>\n" +
    "            </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-sm-6 text-right\">\n" +
    "        <div class=\"dropdown\">\n" +
    "        <button class=\"btn btn-default\" ng-click=\"refresh()\"><i class=\"fa fa-refresh \"></i> Refresh</button>\n" +
    "        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n" +
    "              <i class=\"fa fa-gear\"></i> <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "\n" +
    "         <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "            <li><a ng-click=\"sort('name')\">Sort by name</a></li>\n" +
    "            <li><a ng-click=\"sort('-date')\">Sort by date</a></li>\n" +
    "            <li role=\"separator\" class=\"divider\"></li>\n" +
    "            <li><a ng-click=\"filterFiles('gcode')\">Show only gcode</a></li>\n" +
    "            <li><a ng-click=\"filterFiles()\">Show all files</a></li>\n" +
    "         </ul>\n" +
    "\n" +
    "\n" +
    "          <div class=\"btn-group\" id=\"filter\">\n" +
    "                                <button type=\"button\" class=\"btn btn-default\" ng-class=\"{'active' : (filter=='')}\" ng-click=\"filterFiles('')\">All</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-default\" ng-class=\"{'active' : (filter=='wet')}\" ng-click=\"filterFiles('wet')\">WET</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-default\" ng-class=\"{'active' : (filter=='fuse')}\" ng-click=\"filterFiles('fuse')\">FUSE</button>\n" +
    "                            </div>\n" +
    "\n" +
    "        </div> \n" +
    "         \n" +
    "</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-sm-8\">\n" +
    "    <p>\n" +
    "    <ul class=\"list-group\" style=\"height: 280px; overflow-y:scroll\">\n" +
    "    \n" +
    "        <li class=\"list-group-item\" ng-repeat=\"f in files | orderBy:order\"><a ng-click=\"selectFile(f)\" style=\"font-size:18px\">\n" +
    "            <i class=\"fa fa-file-code-o\"></i> {{f.name}}</a>\n" +
    "            <br/><small style=\"margin-left:20px;\">Size {{f.size}} bytes</small>\n" +
    "        </li>\n" +
    "<!--        <li class=\"list-group-item\">\n" +
    "          <a href=\"#\" style=\"font-size:18px\"><i class=\"fa fa-file-photo-o\"></i> file.stl</a>\n" +
    "        </li>\n" +
    "        <li class=\"list-group-item\">\n" +
    "          <a href=\"#\" style=\"font-size:18px\"><i class=\"fa fa-file-photo-o\"></i> file.stl</a>\n" +
    "        </li>\n" +
    "        <li class=\"list-group-item\">\n" +
    "          <a href=\"#\" style=\"font-size:18px\"><i class=\"fa fa-file-code-o\"></i> file.gcode</a>\n" +
    "        </li>\n" +
    "                <li class=\"list-group-item\">\n" +
    "          <a href=\"#\" style=\"font-size:18px\"><i class=\"fa fa-file-photo-o\"></i> file.stl</a>\n" +
    "        </li>\n" +
    "        <li class=\"list-group-item\">\n" +
    "          <a href=\"#\" style=\"font-size:18px\"><i class=\"fa fa-file-photo-o\"></i> file.stl</a>\n" +
    "        </li>\n" +
    "        <li class=\"list-group-item\">\n" +
    "          <a href=\"#\" style=\"font-size:18px\"><i class=\"fa fa-file-code-o\"></i> file.gcode</a>\n" +
    "        </li>-->\n" +
    "        </ul>\n" +
    "    </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "        <label>File information</label>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "        \n" +
    "            <div ng-hide=\"selectedFile\">\n" +
    "                No file selected.\n" +
    "            </div>       \n" +
    "            <div ng-show=\"selectedFile\">\n" +
    "                \n" +
    "            <i class=\"fa fa-file-code-o\"></i> {{selectedFile.name}}</a>\n" +
    "            <br/><small style=\"margin-left:20px;\">Size {{selectedFile.size}} bytes</small>\n" +
    "            \n" +
    "            <hr>\n" +
    "            <div class=\"text-right\">\n" +
    "            \n" +
    "                Print time: {{ roundTime(selectedFile.gcodeAnalysis.estimatedPrintTime) }}   <br/>\n" +
    "                Filament: {{ roundFilament(selectedFile.gcodeAnalysis.filament.tool0.length)}}        \n" +
    "            </div>\n" +
    "            \n" +
    "            <hr>\n" +
    "            \n" +
    "            <button class=\"btn btn-success\" ng-click=\"startPrinting()\">Start printing</button>\n" +
    "            \n" +
    "            </div>\n" +
    "        \n" +
    "        </div>\n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
