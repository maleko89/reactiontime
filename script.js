            function getRandomSize() {
            
                var randomFound = false;
                var shapeSize = 0;
                
                /* find random integer between 50 and 200 */
                while (randomFound == false) {
                    
                    shapeSize = Math.floor(Math.random() * 201);
                    
                    if (shapeSize >= 50) {
                        
                        randomFound = true;
                        
                    }
                    
                }
                
                document.getElementById("shape").style.height = shapeSize + "px";
                
                document.getElementById("shape").style.width = shapeSize + "px";
                
            }

            function getRandomColor() {
                
                var colors = new Array();
                var color = "#";
                var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
                
                for (var i = 0; i < 6;i++) {
                    
                    color += characters[Math.floor(Math.random() * 16)];
                    
                }
                
                document.getElementById("shape").style.backgroundColor = color;
                
            }
            
            function moveBox() {
            
                var boxTop = (Math.random() * 301);
                var boxLeft = (Math.random() * 833);
                
                document.getElementById("shape").style.top = boxTop + "px";
                document.getElementById("shape").style.left = boxLeft + "px";
                
                document.getElementById("shape").style.display = "block";
                
                getRandomColor();
                
                getRandomSize();
                
                if (Math.random() > .5) {
                    
                    document.getElementById("shape").style.borderRadius = "100px";    
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0";
                    
                }
                
                /* beginTime = Date.now(); */
                beginTime = new Date().getTime();

            }

            var clickTime; 
            var beginTime;
            
            document.getElementById("shape").onclick = function () {
            
                this.style.display = "none";
                
                /* clickTime = Date.now(); */
                clickTime = new Date().getTime();
                
                var reactionTime = (clickTime - beginTime) / 1000;
                
                document.getElementById("reaction-time").innerHTML = "Your reaction time is " + reactionTime + " seconds.";
                
                var delayTime = (Math.floor(Math.random() * 2000));
                
                setTimeout(moveBox, delayTime);
                
            }

            moveBox();