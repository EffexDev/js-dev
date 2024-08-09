javascript: (() => {
	
    if(this.document.location.href.startsWith('https://cms.aussiebroadband.com.au/nbnapp.php?id=')) {
    
            if (document.readyState === 'complete') {
                let CSS = `
                    .heading {
                        position: fixed;
                    }
                    .heading_title {
                        padding-right: 54.8em;
                    }
                    #update {
                        position: fixed;
                        top: 15px;
                        left: 1520px;
                    }
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