
function handlecreation(target){
flag = 0

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
		if(flag == 0){
        document.getElementsByClassName("gwt-TabLayoutPanel")[1].parentElement.parentElement.parentElement.parentElement.children[3].children[0].click();

		elements = document.getElementsByClassName("windowframe");
		var toberemoved = elements[1].parentElement;
		toberemoved.parentNode.removeChild(toberemoved);

		var draggy = document.getElementsByClassName("gwt-SplitLayoutPanel-VDragger");
		var draggyremove = draggy[0].parentElement;
		draggyremove.parentNode.removeChild(draggyremove);

		var logoimage = document.querySelectorAll('[alt="RStudio"]');
		var removelogo = logoimage[0].parentElement;
		removelogo.parentNode.removeChild(removelogo);

		var firstrowtable = document.getElementsByTagName("table")[1];
		var row1table_right = firstrowtable.childNodes[0].childNodes[0].childNodes[1];

		//document.getElementsByClassName("rstheme_toolbarWrapper")[0]
		var secondrowtable = document.getElementsByTagName("table")[8];
		var row2table_left = secondrowtable.childNodes[0].childNodes[0].childNodes[0];
		var row2table_right = secondrowtable.childNodes[0].childNodes[0].childNodes[1];

		row1table_right.parentElement.insertBefore(row2table_left, row1table_right);
		row1table_right.parentElement.insertBefore(row2table_right, row1table_right);

		var secondrowdiv = secondrowtable.parentNode;
		secondrowdiv.parentNode.removeChild(secondrowdiv);

		firstrowtable.parentElement.setAttribute("valign", "top");

		var bigtable = firstrowtable.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
		var tableheight = bigtable.style["height"];
		var newheight = Math.floor(parseInt(tableheight)/2);

		bigtable.style["height"] = newheight + "px";
		bigtable.nextSibling.style["top"] = newheight + "px";
		
		flag = 1;
		} else {
			elements[0].parentElement.style["bottom"] = "0px";
		}			
		
	});  
});

observer.observe(target, { attributes : true, attributeFilter : ['style'] });

}

// set up the mutation observer
var observer_doc = new MutationObserver(function (mutations, me) {
  // `mutations` is an array of mutations that occurred
  // `me` is the MutationObserver instance
  target_elem = document.getElementsByClassName("gwt-SplitLayoutPanel-HDragger")[0];
  //console.log(target_elem);
  if (target_elem) {
	var target = target_elem.parentElement;
    handlecreation(target);
    me.disconnect(); // stop observing
    return;
  }
});

// start observing
observer_doc.observe(document, {
  childList: true,
  subtree: true
});



//

//<div class="ace_content" style="margin-top: -7px; width: 1312px; height: 733px; margin-left: 0px;">


