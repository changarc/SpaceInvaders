#pragma strict
var laser:Rigidbody;
var health:int;
//default value for score is 0
static var score:int=0;
static var totalShots:int;

var colours:Material[];
var laserSound:AudioClip;
var alienExplosion:AudioClip;


function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "alienlaser")
	{
		//the aliens hit the player
		renderer.sharedMaterial = colours[1];
		health --;
		
		if (health < 0)
			health = 0;
		
		if (health == 0) {
			// game over
			Application.LoadLevel(5);
		}
	}

}

function PlayAlienExplosion()
{
	//print("Running alien explosion script");
	//set the source sound of the default audio source
		this.GetComponent(AudioSource).clip = alienExplosion;
		//when I press the space bar, I play the sound
		this.GetComponent(AudioSource).Play();
}

function OnTriggerExit()
{
	//reset to green when shot exits
	renderer.sharedMaterial = colours[0];
}

function OnGUI()
{
	GUI.color = Color.white;
	GUI.Label(Rect(0,0,100,50),"Name: "+GameController.playerName);
	//display health
	GUI.Label(Rect(0,20,100,50),"Health: "+health);
	//display the score in the HUD
	GUI.Label(Rect(0,40,100,50),"Score: "+score);
	 //displays totalShots
 	GUI.Label(Rect(0,60,100,50),"Total Shots: "+GameController.total);
 	//missed
 	GUI.Label(Rect(0,80,100,50),"Missed: "+(GameController.total - GameController.shotsHit));
 	//hit
 	GUI.Label(Rect(0,100,100,50),"Aliens Hit: "+GameController.shotsHit);
 	



	
}

function Start () {
	renderer.sharedMaterial = colours[0];
	health=100;
	score=0;
	totalShots=0;
}

function Update () {
	//default material	
	if (Input.GetKeyDown(KeyCode.Space))
	{
		//set the source sound of the default audio source
		audio.clip = laserSound;
		//when I press the space bar, I play the sound
		audio.Play();
		
		Instantiate(laser,transform.position,transform.rotation);
		GameController.total++;
	}
	
	//borders
	var border:float=1.0;
	
	if (transform.position.x < BordersCalculator.leftmost + border)
	{
		transform.position.x = BordersCalculator.leftmost + border;
	}
	
	if (transform.position.x > BordersCalculator.rightmost - border)
	{
		transform.position.x = BordersCalculator.rightmost - border;
	}
	
	//horizontal movement code
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
}