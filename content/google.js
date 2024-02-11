const url = window.location.href;
const main = async () => {
	const email = await getFromStorage('STUDENT_EMAIL', '');
	const fap1_ = await getFromStorage('FAP_1', '');
	const cms1_ = await getFromStorage('CMS_1', '');
	const crs1_ = await getFromStorage('CRS_1', '');
	const gen_ = await getFromStorage('K', '');
	
	const checkFap= (url.includes("fap.fpt.edu.vn")&&fap1_==true)
	const checkCms = (url.includes("cmshn.fpt.edu.vn")&&cms1_==true)
	const checkCrs = (url.includes("www.coursera.org")&&crs1_==true)
	const checkK19 = (url.includes("feid.fpt.edu.vn")&&gen_==true)
	if(checkFap||checkCms||checkCrs||checkK19)
	{
		const emailEl = document.querySelector('.wLBAL[data-email="' + email + '"]');
		const emailEl1 = document.querySelector('.wLBAL[data-email="' + email.toLowerCase() + '"]');
		if (emailEl) {
			// click on email
			emailEl.click();
		}
		setTimeout(() => {if (emailEl1) {
			emailEl1.click();
			//console.log('0')
		}
		
		else{
			setTimeout(() => {
				if (emailEl1) {
					emailEl1.click();
					//console.log('1000')
				}
				else{
					setTimeout(() => {
						if (emailEl1) {
							emailEl1.click();
							//console.log('1500')
						}
					}, 2000)
				}
			}, 2000)
		}
		},500
		)
		
		
	}
	else{
		console.log('nothing enabled')
	}

}
main();
