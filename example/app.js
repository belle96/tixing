// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

var tixing = require('com.github.sspinc.tixing');
Ti.API.info("module is => " + tixing);

tixing.initiateScan();
label.text = "initiated scan";

