AFRAME.registerComponent('test', {
    init: function () {
      var sceneEl = document.querySelector('a-scene');
      let color = 111;
      var altura = 5;
      for(var i = -10; i < 10; i++){
        for(var j = -10; j < 10; j++){
          var sphereEl = document.createElement('a-cylinder');
          
          if(j < 0){
            color += 111;
            altura += 5;
            }
          else{
            color-=111;
            altura -= 5;
          }
          sphereEl.setAttribute('position', {x: i*2, y: 0, z:j*2});
          sphereEl.setAttribute('scale', {x: 0.1 , y: altura , z: 0.1});
          sphereEl.setAttribute('color','#'+color);
          sceneEl.appendChild(sphereEl);
        }
      }
        
    }
  });