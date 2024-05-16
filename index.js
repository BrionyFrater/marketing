$(document).ready(function () {
    lucide.createIcons();
    
    tailwind.config = {
        theme: {
          extend: {
            colors: {
              'yellow': '#ebff00',
              'green': '#d4ff3f',
              'white': '#fefefe'
            },
            
            fontFamily: {
              'sans': ['"Montserrat"', 'sans-serif'],
              'mono': ['"JetBrains Mono"', 'monospace']
            },

            // screens:{
            //   'sm': {'min': '600px', 'max': '767px'}
            // }
          }
        }
      }
    
});
