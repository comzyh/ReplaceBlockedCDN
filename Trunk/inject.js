/*
* @Author: Comzyh
* @Date:   2014-08-01 00:52:26
* @Last Modified by:   Comzyh
* @Last Modified time: 2014-08-01 02:28:13
*/

document.addEventListener('DOMNodeInserted', OnSubtreeModified, false);
console.log('ReplaceBlockedCDN');
console.log(document.head);
function OnSubtreeModified(event) {
	console.log('Hello from extension!',event);
	// console.log(document.documentElement.innerHTML);
	links = document.getElementsByTagName('link');
	for (var i=0;i<links.length;i++)
	{
		console.log('index:',i);
		console.log(links[i]);
		console.log(links[i].href);
		links[i].href=links[i].href.replace('fonts.googleapis.com','fonts.useso.com');
		console.log(links[i].href);
	}
	// document.removeEventListener('DOMSubtreeModified', OnSubtreeModified, false);
}
