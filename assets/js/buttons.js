(function ($) {

	$("#chgan-genre-jazz").click(function () {
		$("#chgan-pop").hide("slow");
		$("#chgan-jazz").show("slow");
	});

	$("#chgan-genre-pop").click(function () {
		$("#chgan-jazz").hide("slow");
		$("#chgan-pop").show("slow");
	});

	// Toggle # of bars
	$("#bars1").click(function () {
		$("[id~=b4]").hide("slow");
		$("[id~=b1]").show("slow");
	});
	$("#bars4").click(function () {
		$("[id~=b1]").hide("slow");
		$("[id~=b4]").show("slow");
	});

	// Toggle sampling rate
	$("#sr8").click(function () {
		$("[id~=fs16]").hide("slow");
		$("[id~=fs32]").hide("slow");
		$("[id~=fs8]").show("slow");
	});
	$("#sr16").click(function () {
		$("[id~=fs8]").hide("slow");
		$("[id~=fs32]").hide("slow");
		$("[id~=fs16]").show("slow");
	});
	$("#sr32").click(function () {
		$("[id~=fs16]").hide("slow");
		$("[id~=fs8]").hide("slow");
		$("[id~=fs32]").show("slow");
	});

})(jQuery);