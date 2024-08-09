javascript: (() => {
	
    if(this.document.location.href.startsWith('https://cms.aussiebroadband.com.au/nbnapp.php?id=')) {
    
            if (document.readyState === 'complete') {
                let CSS = `
                    .heading {
                        position: fixed;
                        left: 0px;
                        right: 0px;
                        top: 0px;
                        background: #005082;
                        padding-top: 40px;
                        padding-left: 120px;
                    }
                    #update {
                        position: fixed;
                        top: 38px;
                        left: 10px;
                        width: 100px;
                        background: #FFECC6;
                    }
                    .buttons {
                        top: 3px;
                        padding-right: 10px;
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