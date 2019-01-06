var directory = {
	fields: [
		{
			field_name: 'customer_full_name',
			label: 'שם מלא'
		},
		{
			field_name: 'customer_phone',
			label: 'מספר טלפון'
		},
		{
			field_name: 'customer_email',
			label: 'אי-מייל'
		},
		{
			field_name: 'customer_short_desc',
			label: 'תמצית קורות חיים'
		},
		{
			field_name: 'customer_cv_file_link',
			label: 'קישור לקובץ בדרייב'
		}
	]
}

Foundation.Abide.defaults.patterns['valid_israeli_cellular'] = /^05\d([-]{0,1})\d{7}$/;

const urlParams = new URLSearchParams(window.location.search);
const pre_phone = urlParams.get('phone');

if(pre_phone){
	$('#phone_to_send').val(pre_phone)
}

$(document).ready(function(){
	$(document).foundation();

	$("#submit-form")
		.on('blur', '.form-input', function(){
			createPreviewBoxText();
		})

		// form validation failed
		.on("forminvalid.zf.abide", function(ev,frm) {
			console.log("Form id "+ev.target.id+" is invalid");
		})
		// form validation passed, form will submit if submit event not returned false
		.on("formvalid.zf.abide", function(ev,frm) {
			var text = '';
			$(this).find('.form-input').each(function(){
				var field_name = $(this).attr('id');
				var res = _.findWhere(directory['fields'], {field_name: field_name});
				var val = $(this).val();

				if(val != ''){
					text += res['label'] + ': ' + val + "\n------\n";
				}
				
			});

			console.log(text);

			ga('send', {
				hitType: 'event',
				eventCategory: 'Forms',
				eventAction: 'submit',
				eventLabel: 'Deliver to Whatsapp'
			});

			// var base_url = "https://api.whatsapp.com/send";
			var base_url = "https://web.whatsapp.com/send";
			var phone_to_send = '972' + $("#phone_to_send").val().replace("+", "");

				text = text.replace('{{full_name}}', $('#customer_full_name').val());
				text = text.replace('{{phone_number}}', $('#customer_phone').val());

			base_url = base_url + '?phone=' + phone_to_send + '&text=' + encodeURI(text);
			
			window.open(base_url, '_blank');
		})
		// to prevent form from submitting upon successful validation
		.on("submit", function(ev) {
			ev.preventDefault();
			console.log("Submit for form id "+ev.target.id+" intercepted");
		});
})

function createPreviewBoxText(){
	var text = '';
	$("#submit-form").find('.form-input').each(function(){
		var field_name = $(this).attr('id');
		var res = _.findWhere(directory['fields'], {field_name: field_name});
		if($(this).val() != ''){
			text += res['label'] + ': ' + $(this).val() + "<br/>------<br/>";
		}
	});

	$(".speech-wrapper .message").html(text);
}

