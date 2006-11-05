var EggOn = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
  },

  onMenuItemCommand: function() {
    window.open("chrome://eggon/content/eggon.xul", "", "chrome");
  }
};

window.addEventListener("load", function(e) { EggOn.onLoad(e); }, false); 

