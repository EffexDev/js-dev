javascript: (() => {
	
    if(this.document.location.href.startsWith('https://cms.aussiebroadband.com.au/nbnapp.php?id=')) {
    
            if (document.readyState === 'complete') {
                let CSS = `
                   
                `;
    
                let scriptEl  = document.createElement('style');
                scriptEl.classList.add("CMSTCSS");
                scriptEl.type = "text/css";
                scriptEl.innerHTML = CSS;
                scriptEl.disabled = true;
                document.head.appendChild(scriptEl);
            }
        }
    })();