FINAL PROJECT IDEA:

I am going to utlize the sound library to have an animation of falling things (raindrops, hearts, sprinkles etc.) that increase and decrease with the aplitude of the music playing. 

Also I want to have three different songs that you can choose from that "rain" down a distinct thing for each, that mirrors possibly what the song is about. 

I then also want to have a umbrella that follows you mouse's horizontal position and whereever that is the "rain" won't fall under. Somewhat like the picture I included below. 


CODE PLAN: 

VARIAVBLES
1. Firstly I created the variables and empty arrays needed for the rest of the code. 

PRELOAD
1. loaded three song mp3s into a sound array 
2. loaded the "Click Anywhere" png image to initiate interaction 

SETUP
1. Created the canvas to fit in the user's specific window size and put that into a variable (cnv)
2. Determined NoStroke for any of the shapes drawn later
3. Also put in the amplitude function from the sound library (new p5.Amplitude();) and made that equal to a variable (amplitude)
4. Next created a for loop for the rain array object, pushing up to 100 new drops & with drop being it's own function with a random x & y position as well as a random speed variable (sp) ranging from 1-3. The random positioning makes the ellipses appear more organic in origin and the random speed made is so ellipses feel at differing rates, giving it more dimension. 
5. I then have a mouseClicked fucntion on the canvas variable, which uses if/else statements to check if/what song is playing & change it in regards to that to cycle through the song array. I utilized the .isPlaying, .play & .stop functions of the sound library. I also utilized this if/else statement to tell it to display the "Click Anywhere" png only when no sound is playing with a boolean value. 
6. The mouseReleased function was used to increase the value of a counter that instructs the color of the drops later on in my code. 

DRAW
1. First I created a rectangle the width & height of the window with a black fill that utilized an alpha value for lessened opacity. I did this so that it would be redrawn after each new ellipse was drawn and fade them out to create the falling effect that leaves behind a trail. 
2. Next is a for loop that will actually display the drops within the rain array we created in the setup. This is down with a this.displ() function within our drop object, that is later in the code. 
3. Also within the draw function we utilized the .getLevel function of the sound library to get a level variable that we then mapped from its original 0-1 value to a 0-100 value saved to a variable named "spread" that we can later use for our ellipse size. 
4. Next I added the extra text at the bottom of the screen that gives simple directions of how to interact with the animation as well as an if statement for when the (clickMe) boolean value is true the "Click Anywhere" image is displayed. 

DROP
1. this drop function has three attributes (x-value (position), y-value (position) & random speed value).
2. I created local variables with x1=x, y1=y & sp (speed).
3. Then within the drop there is the this.displ() function that is going to be executed on the rain array in the draw loop.
4. Within this I created a mx variable that helped with quantifying the users mouse movement. mx is equal to the mouseX of the user divided by 100. This value is now how we are able to change the falling speed depending on mouseX positioning in the window. I also established that if the mouseX was 0, out of the window, the mx still had a tiny value, and would still allow falling. 
5. Next was establishing the equation that would make the ellipse move down or "fall". The original y1 position = to same y1 position + the random speed of the drop we determined before multiplied by the mx created from the mouse position. This is where the differing falling speeds happens as the amount added to the y differs for each ellipse. 
6. Then right before creating the ellipses, I created an if/else statement based off the counter value (amount of times mouseReleased) to change the fill color for the ellipses that will be drawn. This makes it so the fill color differs according to the song playing. 
7. Finally its time to draw an ellipse for each "drop" at a position of x1, ya and with the dimensions of the "spread" variable which is between 0-100 and based of the amplitude. This creates the visualization of the sound within the size of the falling ellipses. 
8. An if/else statement was then created so that when the ellipse gets to a y value of the windowHeight minus some (to create space at the bottom of the screen), a new "squished" ellipse will be drawn to become that drops "puddle". The "puddle" is sized in a way to correlate to the size of the drop. 
9.Lastly the original ellipse receives a new y1 value of -120 to place it off the top of the screen so that it will fall again to create the continuous raining effect.
