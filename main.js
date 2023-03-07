
function mainbranch(){
	let checkmain=document.getElementsByTagName("input")[0]
	if (checkmain.checked==true) {
		let mainloc=document.getElementsByTagName("div")[3].getElementsByTagName("p")[0];
	console.log(mainloc)
	mainloc.classList.remove("gray")
	mainloc.classList.add("main-branch")
		
	}
	else{
		let mainloc=document.getElementsByTagName("div")[3].getElementsByTagName("p")[0];
	console.log(mainloc)
	mainloc.classList.remove("main-branch")
	mainloc.classList.add("gray")

	}
	
}


function otherbranchs(){
	let checkbranch=document.getElementsByTagName("input")[1]
	let branchs=document.getElementsByTagName('div');
	for (let index = 4; index < 11; index++) {
		let branch=branchs[index].getElementsByTagName("p")[0];
		if (checkbranch.checked==true) {
		
			branch.classList.remove("gray")
			branch.classList.add("branch")
				
			}
			else{
				
			branch.classList.remove("main-branch")
			branch.classList.add("gray")
		
	}
	
}
}
