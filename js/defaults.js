// Default limit set to permissions (per hour) - so that if any app accesses more than this limit, our app sends a notification

var defaultPermCount = {
	
	// commom for both regular apps and certified apps
	"camera":60,
	
	
	//for regular apps	
	"alarms":10,
	"audio-capture":10,
	"audio-channel-alarm":10,
	"audio-channel-content":10,
	"audio-channel-normal":10,
	"audio-channel-notification":50,
	"browser":25,
	"contacts":10,
	"desktop-notification":30,
	"device-storage:music":60,
    "device-storage:pictures":50,
	"device-storage:sdcard":60,
	"device-storage:videos":60,
	"fmradio":30,
	"geolocation":60,
	"input":60,
	"mobileid":5,
	"mobilenetwork":30,
	"moz-firefox-accounts":10,
	"nfc":25,
	"nfc-share":25,
	"nfc-read":25,
	"nfc-write":25,
	"push":60,
	"speech-recognition":20,
	"systemXHR":35,
	"tcp-socket":25,
	"video-capture":60,
    
	
	// for certified apps
	"attention":30,
	"audio-channel-ringer":30,
	"audio-channel-telephony":25,
	"audio-channel-publicnotification":25,
	"background-sensors":25,
	"bluetooth":10,
	"browser:embedded-system-app":25,
	"cellbroadcast":60,
	"datastores-access":30,
	"datastores-owned":30,
	"device-storage:apps":25,
	"embed-apps":25,
	"mobileconnection":60,
	"network-events":60,
	"networkstats-manage":60,
	"open-remote-window":20,
	"permissions":10,
	"phonenumberservice":60,
	"power":10,
	"presentation-device-manage":20,
	"settings":25,
	"sms":60,
	"telephony":60,
	"time":60,
	"voicemail":25,
	"webapps-manage":25,
	"wifi-manage":60,
	"wappush":30
	
};