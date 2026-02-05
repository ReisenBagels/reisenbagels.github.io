var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

Detector = {

	canvas: !! window.CanvasRenderingContext2D,
	webgl: ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
	workers: !! window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {
	
		var element = document.createElement( 'div' );
		element.id = 'webgl-error-message';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';
		element.style.display = 'none';
	
		if ( ! this.webgl ) {
	
			element.innerHTML = window.WebGLRenderingContext ? [
				'Your graphics card does not seem to support <a href="https://web.archive.org/web/20221215212816/http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
				'Find out how to get it <a href="https://web.archive.org/web/20221215212816/http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' ) : [
				'Your browser does not seem to support <a href="https://web.archive.org/web/20221215212816/http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
				'Find out how to get it <a href="https://web.archive.org/web/20221215212816/http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' );
	
		}
	
		return element;
	
	},
	
	addGetWebGLMessage: function ( parameters ) {
	
		var parent, id, element;
	
		parameters = parameters || {};
	
		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';
	
		element = Detector.getWebGLErrorMessage();
		element.id = id;
	
		parent.appendChild( element );
	
	}

};


}
/*
     FILE ARCHIVED ON 21:28:16 Dec 15, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:15:04 Jun 16, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.754
  exclusion.robots: 0.078
  exclusion.robots.policy: 0.067
  esindex: 0.012
  cdx.remote: 23.652
  LoadShardBlock: 39.821 (3)
  PetaboxLoader3.datanode: 73.479 (6)
  load_resource: 144.287 (2)
  PetaboxLoader3.resolve: 74.536 (2)
  loaddict: 22.032
*/