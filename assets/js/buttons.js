(function ($) {

	// ---- ChordGAN ----
	// Toggle genres
	$("#chgan-genre-jazz").click(function () {
		$("#chgan-genre-jazz").addClass("primary");
		$("#chgan-genre-pop").removeClass("primary");
		$("#chgan-pop").hide("slow");
		$("#chgan-jazz").show("slow");
	});

	$("#chgan-genre-pop").click(function () {
		$("#chgan-genre-pop").addClass("primary");
		$("#chgan-genre-jazz").removeClass("primary");
		$("#chgan-jazz").hide("slow");
		$("#chgan-pop").show("slow");
	});

	// Toggle # of bars
	$("#chgan-bars1").click(function () {
		$("#chgan-bars1").addClass("primary");
		$("#chgan-bars4").removeClass("primary");
		$(".chgan, [id~=b4]").hide("slow");
		$(".chgan, [id~=b1]").show("slow");
	});
	$("#chgan-bars4").click(function () {
		$("#chgan-bars4").addClass("primary");
		$("#chgan-bars1").removeClass("primary");
		$(".chgan, [id~=b1]").hide("slow");
		$(".chgan, [id~=b4]").show("slow");
	});

	// Toggle sampling rate
	$("#chgan-sr8").click(function () {
		$("#chgan-sr8").addClass("primary");
		$("#chgan-sr16").removeClass("primary");
		$("#chgan-sr32").removeClass("primary");
		$(".chgan, [id~=fs16]").hide("slow");
		$(".chgan, [id~=fs32]").hide("slow");
		$(".chgan, [id~=fs8]").show("slow");
	});
	$("#chgan-sr16").click(function () {
		$("#chgan-sr16").addClass("primary");
		$("#chgan-sr8").removeClass("primary");
		$("#chgan-sr32").removeClass("primary");
		$(".chgan, [id~=fs8]").hide("slow");
		$(".chgan, [id~=fs32]").hide("slow");
		$(".chgan, [id~=fs16]").show("slow");
	});
	$("#chgan-sr32").click(function () {
		$("#chgan-sr32").addClass("primary");
		$("#chgan-sr16").removeClass("primary");
		$("#chgan-sr8").removeClass("primary");
		$(".chgan, [id~=fs16]").hide("slow");
		$(".chgan, [id~=fs8]").hide("slow");
		$(".chgan, [id~=fs32]").show("slow");
	});

	// ---- CycleGAN ----
	$("#jazz-pop").click(function () {
		$(".cygan.model").removeClass("primary");
		$("#jazz-pop").addClass("primary");
		$(".transfer.button").hide();
		$("#cygan-buttons").show("slow");
		$("#cygan-jazz2pop").show("medium");
		$("#cygan-pop2jazz").show("medium");
	});

	$("#classic-jazz").click(function () {
		$(".cygan.model").removeClass("primary");
		$("#classic-jazz").addClass("primary");
		$(".transfer.button").hide();
		$("#cygan-buttons").show("slow");
		$("#cygan-classic2jazz").show("medium");
		$("#cygan-jazz2classic").show("medium");
	});

	$("#pop-classic").click(function () {
		$(".cygan.model").removeClass("primary");
		$("#pop-classic").addClass("primary");
		$(".transfer.button").hide();
		$("#cygan-buttons").show("slow");
		$("#cygan-pop2classic").show("medium");
		$("#cygan-classic2pop").show("medium");
	});

})(jQuery);