var eggon = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
  },

  onMenuItemCommand: function() {
   window.openDialog("chrome://eggon/content/eggon.xul", "", "chrome, centerscreen, modal");
   //window.openDialog("chrome://eggon/content/success.xul", "", "chrome, centerscreen, modal");
  }
};

window.addEventListener("load", function(e) { eggon.onLoad(e); }, false); 

