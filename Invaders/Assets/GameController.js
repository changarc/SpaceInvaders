#pragma strict
var gameOver:boolean=false;

static var rows:int=2;
static var cols:int=5;

static var shotsHit:int;
static var totalShots:int;
static var total:int;
static var playerName:String;

var levelsPlayed:int=0;
 
function Start () {
 
	DontDestroyOnLoad(this);
	
	if (Application.loadedLevel == 1) {
		//StotalShots=0; //missed
		shotsHit=0; //aliens hit
		total=0; //total shots
	}

}

function Update () {

	 var numberOfAliens:int;

	//total number of aliens in the scene

	 numberOfAliens = GameObject.FindGameObjectsWithTag("enemy").Length;
	
	
	if (numberOfAliens <=0)
	 {
	 	if (Application.loadedLevel > 0 && Application.loadedLevel < 4) {
	 		Application.LoadLevel(Application.loadedLevel+1);
		 }
	if (total <= 0){
		total = 0;
		}
	}
}
function OnGUI()
 
{
	 if (gameOver)
 
	{
		 //remove player

		 Destroy(GameObject.FindGameObjectWithTag("player"));
 
		//display game over

		 GUI.Label(Rect(300,300,300,300),"Game Over");

	 }
 
}