AFRAME.registerComponent("player-movement", {
    schema: {
        Rotation: {type: 'number', default: 0},
        Position: {type: 'number', default: 0}
    },
    init: function () {
      this.move();
    },
    move: function () {
        window.addEventListener("keydown", (e) => {
          this.data.Rotation = this.el.getAttribute("rotation");
          var Rotation = this.data.Rotation;
          this.data.Position = this.el.getAttribute("position");
          var Position = this.data.Position
    
          if (e.key === "ArrowRight") {
            if (Rotation.x < 1) {
              Rotation.x += 0.5;
              this.el.setAttribute("rotation", Rotation);
            }
          }
          if (e.key === "ArrowLeft") {
            if (Rotation.x > -1) {
              Rotation.x -= 0.5;
              this.el.setAttribute("rotation", Rotation);
            }
            if (Rotation.z > -1) {
              Rotation.z -= 0.5;
              this.el.setAttribute("rotation", Rotation);
            }
          }
          if (e.key === "ArrowUp") {
            if (Position.z < 2) {
              Position.y += 0.1;
              this.el.setAttribute("position", Position);
            }
          }
          if (e.key === "ArrowDown") {
            if (Position.z > -2) {
              Position.y -= 0.01;
              this.el.setAttribute("position", Position);
            }
          }
        });
      }
    })