// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

var tixing = require('com.github.sspinc.tixing');
Ti.API.info("module is => " + tixing);

tixing.scan({
  success:function(data) {
            label.text = data.barcode + " (" + data.symbology + ")";
          },

  cancel:function() {
           label.text = "canceled";
         },

  error:function(data) {
          label.text = JSON.stringify(data);
        }
});

