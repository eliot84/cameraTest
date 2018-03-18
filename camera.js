console.log("camera.js is online");


function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
	console.log("good to go");
	$(".test").css("background-color", "green");
} else {
 	$(".test").css("background-color", "red");;
}

hasGetUserMedia();

