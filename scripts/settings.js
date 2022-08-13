/*

This file contains no actual script, just constants for scripts.

Use as:
import * as myConfig from "/scripts/settings.js";

*/

// Settings for /scripts/startup.js
export const runOnce = [
	"/scripts/hacknet-control.js",
	"/scripts/farmCompanyReputation.js",
	"/scripts/crime-start.js"
];

export var runLoop = [
	//	"/scripts/gang-startup.js"
];

export const supportProgramList = [
	"BruteSSH.exe",
	"FTPcrack.exe",
	"relaySMTP.exe",
	"HTTPWorm.exe",
	"SQLInject.exe"
];

export const remotePayloadScript = "/scripts/remotePayloadScript.js";
export const growScript = "/scripts/grow/remoteBlindGrow.js";
export const weakenScript = "/scripts/grow/remoteBlindWeaken.js";
export const maxHackValue = 80;			// Maximum percentage of money to hack with remote hack scripts
export const acceptInvites = true;		// Automatically accept faction invites?

export const maxHomeServerRam = 131072;
export const maxHomeServerCores = 4;

// Settings for /scripts/hacknet/controlhacknet.js
export const maxStudyMult = 0;
export const maxTrainingMult = 0;
export const scriptDivisor = 0;			// Set this to the divisor of the number of active servers to run scripts on, so: numNodes/scripDivisor = numberOfScriptServers
export const newNodeCostMult = 50;		// If we have this times the purchase price of a new node, buy anyway, even if we hit the "max spend"
export const maxTimer = 20 * 1000;		// Maximum delay time between script runs (Start with 20 seconds).
//export const maxNodes = 9;
export const maxNodes = 20;
export const desiredHashUpgrades = [
	"Sell for Money",
	"Generate Coding Contract",
	"Improve Studying",
	"Improve Gym Training",
	"Sell for Corporation Funds",
	"Exchange for Corporation Research",
	"Reduce Minimum Security",
	"Exchange for Bladeburner Rank",
	//"Exchange for Bladeburner SP",
];

// Variables for automatic max spend upgrading
// Constants - These are able to be set by the user
export const upgradeSpendMax = 500000000;
export const upgradeSpendStep = 50000000;
//export const upgradeMaxLevels = 50;
//export const upgradeMaxRAM = 256;
//export const upgradeMaxCores = 16;
//export const fundsDivisor = 4;
export const upgradeMaxLevels = 200;
export const upgradeMaxRAM = 2048;
export const upgradeMaxCores = 32;
export const fundsDivisor = 4;

// Corporate stuff
export const corpName = "Fae Futures";

// Crime-related Variables
// Complete list of potential crimes we can do... adjust when new crimes are added!
export const crimeList = [
	"shoplift",
	"rob store",
	"mug",
	"larceny",
	"deal drugs",
	"bond forgery",
	"traffick arms",
	"homicide",
	"grand theft auto",
	"kidnap",
	"assassinate",
	"heist"
];

// Player-related crime constants
export const minPlayerStats = 100;					// What is the minimum stat level we want from being gay?
export const minPlayerCharisma = 100;				// Minimum charisma to get from being gay?
export const gangMinKarma = -54000;					// What is the target karma level for starting a gang?
export const karmaRequired = -300;					// What is the karma level we want to hit with our being gay?

// Gang-related constants
export const gangScript = "/scripts/gang-control.js"; // Cang control script.
export const gangFaction = "NiteSec"				// CASE SENSITIVE!!!! Name of the faction we want to create a gang with.
export const useGang = false;						// Allow the use of a gang.
//export const minMembers = 50;						// Try to get to this many gang members.
export const baseName = "Mook";						// The goons will be named "<baseName> <mooknumber>"
export const maxWantedEffect = "-1.00"; 			// What is the highest impact due to wanted status we accept?
export const gangAscendDelay = 5;					// Time between gang member ascensions (in minutes).
export const gangMinStatsHacking = 120;
export const gangMinStatsCombat = 70;
export const gangMinStatsCharisma = 10;
export const gangEthicalNumber = 11;				// Every <x> gang members should be doing the thing that reduces

export const gangAscendFile = "/gangAscend.txt";	// Where to write the file to track who has been ascended most recently.

// List of augments to purchase for the mooks
export var augmentPurchaseList = [
	// Hacking
	"BitWire",
	"DataJack",
	"Neuralstimulator",

	// All Combat Stats
	"Bionic Spine",

	// Agility
	"Bionic Legs",

	//"Bionic Arms",
	//"BrachiBlades",
	//"Nanofiber Weave",
	//"Synthetic Heart",
	//"Synfibril Muscle",
	//"Graphene Bone Lacings"
];

// List of rootkits to purchase for our mooks
export var rootkitPurchaseList = [
	"NUKE Rootkit",
	"Soulstealer Rootkit",
	"Demon Rootkit",
	"Hmap Node",
	"Jack the Ripper"
];

export var crimePurchaseListVehicle = [
	"Ford Flex V20",
	"ATX1070 Superbike",
	"Mercedes-Benz S9001",
	"White Ferrari"
];
