function copy(id){

const text=document.getElementById(id).innerText;
navigator.clipboard.writeText(text);}



const themes = [
      {bg: "#1a1a2e", text: "#e94560"},
      {bg: "#f8b500", text: "#222831"}
    ];
    let i = 0;

    // 1. When page loads, check if we saved a theme before
    window.onload = function() {
      const savedTheme = localStorage.getItem("myTheme");
      if (savedTheme) {
        const theme = JSON.parse(savedTheme);
        applyTheme(theme.bg, theme.text);

        // set i to the right index so next click continues the cycle
        i = themes.findIndex(t => t.bg === theme.bg);
      }
    }

    // 2. Change theme and save it
    function changeTheme() {
      const theme = themes[i];
      applyTheme(theme.bg, theme.text);

      // save to browser memory
      localStorage.setItem("myTheme", JSON.stringify(theme));

      i = (i + 1) % themes.length;
    }

    function applyTheme(bg, text) {
      document.body.style.backgroundColor = bg;
      document.body.style.color = text;
    }
   
   
   
     const slider = document.getElementById("fontSlider");
  const sizeNum = document.getElementById("sizeNum");

  // Check if this page is the "control page"
  const isControlPage = !!slider; // true if slider exists on this page

  // 1. Load saved font size, but only on non-control pages
  window.addEventListener("load", function() {
    const savedSize = localStorage.getItem("fontSize");
    if (savedSize && !isControlPage) { // <-- key part: only apply if NOT control page
      document.body.style.fontSize = savedSize + "px";
    }
  });

  // 2. Only add the slider event if this page HAS the slider
  if (slider) {
    // set slider to saved value so it shows the current setting
    const savedSize = localStorage.getItem("fontSize");
    if (savedSize) {
      slider.value = savedSize;
      if (sizeNum) sizeNum.innerText = savedSize;
    }

    slider.addEventListener("input", function() {
      let newSize = this.value;
      if (sizeNum) sizeNum.innerText = newSize;
      localStorage.setItem("fontSize", newSize);
      // NOTE: we do NOT change body font here on control page
    });
  }


