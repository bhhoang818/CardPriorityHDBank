const baseLink = window.location.href


const setBackgroundElement = () => {
	// Xử lý các phần tử có thuộc tính 'setBackground'
	$("[setBackground]").each(function () {
		const background = $(this).attr("setBackground");
		$(this).css({
			backgroundImage: `url(${baseLink}${background})`,
			backgroundSize: "cover",
			backgroundPosition: "center center",
			backgroundRepeat: "no-repeat",
		});
	});

	// Xử lý các phần tử có thuộc tính 'setBackgroundRepeat'
	$("[setBackgroundRepeat]").each(function () {
		const background = $(this).attr("setBackgroundRepeat");
		$(this).css({
			backgroundImage: `url(${baseLink}${background})`,
			backgroundRepeat: "repeat",
			backgroundSize: "cover",
			backgroundPosition: "center center",
		});
	});
}

const initSwiper = () => {
	var swiper = new Swiper(".sec-swiper .mySwiper", {
		autoplay: {
			delay: 4500,
		},
		loop: true,
		speed: 500,
		observer: true,
		observeParents: true,
		pagination: {
			el: ".sec-swiper .swiper-pagination",
			clickable: true,
		},
	});
}

const scrollDiv = () => {
	if ($(window).width() < 1440) {
		$('#scroll-div').click(function () {
			// Get the target div using its ID
			var targetDiv = $('#sec-7');

			// Scroll to the target div smoothly
			$('html, body').animate({
				scrollTop: targetDiv.offset().top
			}, 1000); // 1000 milliseconds for smooth scrolling
		});
	}

}

const navMenuAction = () => {
	$('#toggle').on('click', () => {
		$('#toggle').toggleClass('active');
		$('header').find('nav').toggleClass('active');
		$("#overlay").toggleClass("active");
	});
	$("#overlay").on('click', () => {
		$("#overlay").removeClass('active');
		$('#toggle').removeClass('active');
		$('header').find('nav').removeClass('active');
	})
}

const headerActive = () => {
	if ($(window).width() < 1440) {
		var heightBanner = $('#sec-1').outerHeight();
		var prevScrollPos = $(window).scrollTop();
		var isHeaderActive = false;

		$(window).scroll(function () {
			var scrollPosition = $(this).scrollTop();
			if (scrollPosition > prevScrollPos) {
				if (!isHeaderActive) {
					$('header').addClass('active');
					isHeaderActive = true;
				}
			} else {
				if (isHeaderActive) {
					$('header').removeClass('active');
					isHeaderActive = false;
				}
			}
			prevScrollPos = scrollPosition;
		});
	}
	$('a[data-fancybox]').on('click', () => {
		$('#toggle').removeClass('active');
		$('header').find('nav').removeClass('active');
	})
}

const validateForm = () => {
	$('#registration-form').on('click', function () {
		$('.error').text('');

		var fullName = $('#fullName').val().trim();
		var phoneNumber = $('#phoneNumber').val().trim();
		var email = $('#email').val().trim();
		var cmndCCCD = $('#cmndCCCD').val().trim();
		var checkbox = $('#inputCheck').prop('checked');
		var tinhThanhSelect = $("#tinhThanhSelect option:selected").text();
		var selected = [];
		for (var option of document.getElementById('selectQuest').options) {
			if (option.selected) {
				selected.push(option.text);
			}
		}
		var selectQuest = selected.join(', ');
		var phoneRegex = /^[0-9]{10}$/;
		var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
		var cmndCCCDRegex = /^[0-9]{9}$|^[0-9]{12}$/;
		var province = $("#tinhThanhSelect option:selected").val();
		var selectDK = $('#selectQuest option:selected').val();

		var isValid = true;
		if (fullName === '') {
			$('#fullName + .error').text('Vui lòng nhập họ và tên.');
			isValid = false;
		}
		if (email === '') {
			$('#email + .error').text('Vui lòng nhập email.');
			isValid = false;
		} else if (!emailRegex.test(email)) {
			$('#email + .error').text('Email không hợp lệ.');
			isValid = false;
		}
		if (phoneNumber === '') {
			$('#phoneNumber + .error').text('Vui lòng nhập số điện thoại.');
			isValid = false;
		} else if (!phoneRegex.test(phoneNumber)) {
			$('#phoneNumber + .error').text('Số điện thoại không hợp lệ.');
			isValid = false;
		}
		if (cmndCCCD === '') {
			$('#cmndCCCD + .error').text('Vui lòng nhập Số CMND/CCCD.');
			isValid = false;
		} else if (!cmndCCCDRegex.test(cmndCCCD)) {
			$('#cmndCCCD + .error').text('Số CMND/CCCD không hợp lệ.');
			isValid = false;
		}
		if (!checkbox) {
			$('#inputCheck + #labelToggle > .error').text('Vui lòng đồng ý với điều khoản.');
			isValid = false;
		}
		if (!province) {
			$('#tinhThanhError').text('Vui lòng chọn tỉnh thành phố.');
			isValid = false;
		}
		if (!selectDK) {
			$('#selectQuestError').text('Vui lòng chọn loại đăng ký.');
			isValid = false;
		}

		if (isValid) {
			var utmSource = getUrlParameter('utm_source');
			var utmMedium = getUrlParameter('utm_medium');
			var utmCampaign = getUrlParameter('utm_campaign');
			var ref = getUrlParameter('utm_ref');

			var formData = {
				hoTen: fullName,
				soDienThoai: phoneNumber,
				email: email,
				cmnd: cmndCCCD,
				thanhPho: tinhThanhSelect,
				loaiDK: selectQuest,
				utm_source: utmSource,
				utm_medium: utmMedium,
				utm_campaign: utmCampaign,
				utm_ref: ref
			};

			$.ajax({
				type: 'POST',
				url: 'https://uatqlyc.hdbank.com.vn/priority/api/Priority/InsDangKy',
				data: JSON.stringify(formData),
				contentType: 'application/json',
				headers: {
					'key': 'ad043ad6-73b4-4727-9f5a-e8e8518298f8',
					'code': 'UAT_PRIORITY',
					'Content-Type': 'application/json',
				},
				success: function (response) {
					if (response.status !== undefined) {
						Fancybox.show([{ src: "#dialog-success", type: "inline" }]);
						setTimeout(function () {
							location.reload();
						}, 2000);
					} else {
						Fancybox.show([{ src: "#dialogExist", type: "inline" }]);
					}
					dataLayer.push({
						'event': 'ajaxSuccess',
						'apiResponse': response
					});
				},
				error: function (error) {
					console.error('Lỗi khi gửi dữ liệu:', error);
				},
			});
		}
	})
	$('#fullName, #phoneNumber, #email, #cmndCCCD', '#tinhThanhSelect', '#selectQuest').on('keyup keydown', function () {
		$('.error').text('');
	});

}

const getUrlParameter = (name) => {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(location.search);
	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const fancyboxPDF = () => {
	const pdfLinks = document.querySelectorAll('a[data-type="pdf"]');

	pdfLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();
			const pdfUrl = link.getAttribute('data-src');

			Fancybox.show([{
				src: pdfUrl, type: "pdf", opts: {
					afterShow: function (instance, current) {
						current.$caption.find('.fancybox-download').remove();
					}
				}
			}]);

		});
		link.removeAttribute('download');
	});

}


$(document).ready(function () {
	setBackgroundElement();
	initSwiper();
	$.ajax({
		url: "https://uatqlyc.hdbank.com.vn/priority/api/Priority/GetTinhThanh",
		method: "POST",
		headers: {
			'key': 'ad043ad6-73b4-4727-9f5a-e8e8518298f8',
			'code': 'UAT_PRIORITY',
			'Content-Type': 'application/json',
		},
		success: function (data) {
			var provinces = data.result;
			$("#tinhThanhSelect").select2({
				data: provinces.map(function (province) {
					return { id: province.provincE_ID, text: province.provincE_NAME };
				}),
				placeholder: "Chọn tỉnh/thành phố",
				dropdownParent: $('#form-province'),
			});
		},
		error: function () {
			console.error("Lỗi khi gọi API");
		}
	});
	$('select[name="select"]').select2({
		placeholder: 'Quý khách có sở hữu điều nào sau đây không',
		dropdownParent: $('#form-quest'),
	});
	scrollDiv()
	navMenuAction()
	headerActive()
	validateForm()
	fancyboxPDF()

})


