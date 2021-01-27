let pageSections = [];
const navbarItems = document.getElementById("navbar").getElementsByTagName('li');

for (var i = 0; i < navbarItems.length; i++) {
	var navigationLink = navbarItems[i].children[0];
	var sectionID = navigationLink.getAttribute("href");
	var section = document.getElementById(sectionID.substr(1));
	pageSections.push(section);
}

function isSectionInFocus(elem) {
    var bounding = elem.getBoundingClientRect();
    var halfwayPoint = document.documentElement.clientHeight/2;
    return bounding.top < halfwayPoint;
};

function recolorNavbarElements() {
	var hasFocusBeenFound = false;

	for (var i = pageSections.length - 1; i >= 0; i--) {
		if(!hasFocusBeenFound && isSectionInFocus(pageSections[i])) {
			navbarItems[i].children[0].style.color = "#E3B455";
			hasFocusBeenFound = true;
		} 
		else {
			navbarItems[i].children[0].style.color = "#EBF2F2";
		}
	}
};

document.addEventListener('scroll', recolorNavbarElements);
recolorNavbarElements();