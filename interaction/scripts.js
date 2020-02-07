console.log("Javascript file loaded");

AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: {default: 'red'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });

    }
  });

AFRAME.registerComponent('change-color-on-click', {
    schema: {
      color: {default: 'red'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('click', function () {
        el.setAttribute('color', data.color);
        alert("The color will now turn RED !");
        prompt("Do you understand ?");
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });

    }
  });
