(function () {
					'use strict';
					try {
						var par = document.getElementById(document.currentScript.parentElement.id);
						var cssId = 'd2346b58-4197-442f-b72d-e692a7d5f969';
						if (!document.getElementById(cssId)) {
							var head  = document.getElementsByTagName('head')[0];
							var link  = document.createElement('link');
							link.id   = cssId;
							link.rel  = 'stylesheet';
							link.type = 'text/css';
							link.href = '/widget/d2346b58-4197-442f-b72d-e692a7d5f969/styling.css';
							link.media = 'all';
							head.appendChild(link);
						}
						var table = par.getElementsByTagName('table')[0];
						var tr = par.getElementsByTagName('tr')[0];
						var td = par.getElementsByTagName('td')[0];
						var i = par.getElementsByTagName('i')[0];
						table.style.cssText = 'font-size: '+Number(PS_ELABEL_FONTSIZE)+'px; font-family: '+PS_ELABEL_FONT+'; color: '+(!PS_ELABEL_COLOR.match(/^#/) ? '#'+PS_ELABEL_COLOR : PS_ELABEL_COLOR)+';'+(PS_ELABEL_ITALIC.toLowerCase() === 'true' ? 'font-style: italic;' : '')+(PS_ELABEL_BOLD.toLowerCase() === 'true' ? 'font-weight: bold;' : '')+(PS_ELABEL_IMAGE !== '' ? 'background-color: transparent; background-size: 100% 100%; background-image: url(/image/?id='+Number(PS_ELABEL_IMAGE)+');' : 'background-color: '+(!PS_ELABEL_BGCOLOR.match(/^#/) ? '#'+PS_ELABEL_BGCOLOR : PS_ELABEL_BGCOLOR)+';');
						switch (PS_ELABEL_TEXTPOS.toLowerCase()) {
							case 'm':
								tr.vAlign = "middle";
								td.style.cssText = 'text-align: center;';
								break;
							case 'n':
								tr.vAlign = "top";
								td.style.cssText = 'text-align: center;';
								break;
							case 'e':
								tr.vAlign = "right";
								td.style.cssText = 'text-align: right;';
								break;
							case 's':
								tr.vAlign = "bottom";
								td.style.cssText = 'text-align: center;';
								break;
							case 'w':
								tr.vAlign = "left";
								td.style.cssText = 'text-align: left;';
								break;
							case 'ne':
								tr.vAlign = "top";
								td.style.cssText = 'text-align: right;';
								break;
							case 'nw':
								tr.vAlign = "top";
								td.style.cssText = 'text-align: left;';
								break;
							case 'se':
								tr.vAlign = "bottom";
								td.style.cssText = 'text-align: right;';
								break;
							case 'sw':
								tr.vAlign = "bottom";
								td.style.cssText = 'text-align: left;';
								break;
						}
						API.loadGlobalValue(par.id+'-label', function (val) {
							td.innerText = val != null ? val : PS_ELABEL_TEXT;
						});
						i.style.cssText = 'left: '+__widget_width - 30+'px';
						i.addEventListener('click', function (e) {
							try {
								e.preventDefault();
								API.saveGlobalValue(par.id+'-label', td.innerText.replace(/[\n\r]*$/, ''));
								table.style.cursor = 'default';
								td.contentEditable = 'false';
								i.className = 'hidden';
							} catch (error) {
								console.error(error);
							}
						});
						function onDown (e, t) {
							try {
								if (td.contentEditable !== 'true') {
									e.preventDefault();
									if  (t || t == undefined) {
										table.dt = new Date().getTime();
										var dt = table.dt;
										setTimeout(function () {
											if (dt === table.dt) {
												table.style.cursor = 'text';
												td.contentEditable = 'true';
												i.className = '';
											}
										}, 500);
									} else {
										table.style.cursor = 'text';
										td.contentEditable = 'true';
										i.className = '';
									}
								}
							} catch (error) {
								console.error(error);
							}
						}
						function onUp (ev) {
							try {
								table.dt = 0;
							} catch (error) {
								console.error(error);
							}
						}
						table.addEventListener('contextmenu', function(e){onDown(e, false);});
						table.addEventListener('mousedown', function(e){onDown(e, true);});
						table.addEventListener('mouseup', onUp);
						table.addEventListener('touchstart', function(e){onDown(e, true);});
						table.addEventListener('touchend', onUp);
						td.addEventListener('keydown', function (e) {
							if (e.code === 'Enter' && td.contentEditable === 'true') {
								e.preventDefault();
								API.saveGlobalValue(par.id+'-label', td.innerText.replace(/[\n\r]*$/, ''));
								table.style.cursor = 'default';
								td.contentEditable = 'false';
								i.className = 'hidden';
							}
						});
					} catch (error) {
						console.error(error);
						alert(error);
					}
				})();
