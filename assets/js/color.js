$(function() {
		$("#tab td input[name]").click(function() {
	        var bg = $(this).parent().next().next().next().text();
	        $("body").css('backgroundColor', bg)
	    });
	    $("#tab td[bgcolor]").click(function() {
	        $("body").css('backgroundColor', $(this).attr("bgcolor"));
	        $(this).prev().prev().prev().prev().find("input").prop("checked", "checked")
	    });
	});

	function hex2dec(hex) {
	    if (hex.length === 3) {
	        var tmp = "";
	        tmp += hex.charAt(0) + hex.charAt(0);
	        tmp += hex.charAt(1) + hex.charAt(1);
	        tmp += hex.charAt(2) + hex.charAt(2);
	        hex = tmp
	    }
	    var res = "";
	    res += parseInt(hex.substring(0, 2), 16);
	    res += ", " + parseInt(hex.substring(2, 4), 16);
	    res += ", " + parseInt(hex.substring(4, 6), 16);
	    if (hex.length > 6) {
	        res += ", " + parseInt(hex.substring(6, 8), 16)
	    }
	    return res;
	}

	function rgb2hex() {
		hexcode = "#";
	    for (x = 0; x < 3; x++) {
	        var n = document.getElementsByName("r1e")[x].value;
	        if (n == "") n = "0";
	        if (parseInt(n) != n) return alert("请输入数字！");
	        if (n > 255) return alert("数字在0-255之间！");
	        var c = "0123456789ABCDEF",
	        b = "",
	        a = n % 16;
	        b = c.substr(a, 1);
	        a = (n - a) / 16;
	        hexcode += c.substr(a, 1) + b
	    }
	    $("#output_hex").html(hexcode);
	    $("#output_color1").css("background-color",hexcode);
	}

	function hex2rgb() {
		var val = $("#input_hex").val();

	    if (val.indexOf(",") === -1) {
	        if (val.indexOf("#") === 0) {
	            val = val.substring(1)
	        }
	        var dec = hex2dec(val);
	        var len = dec.split(", ").length;
	        if (len === 3) {
	        	$("#output_color2").css("background-color","rgb(" + dec + ")");
	        } else if (len === 4) {
	        	$("#output_color2").css("background-color","rgba(" + dec + ")");
	        }
	        $("#output_rgb").html(dec);
	    }
	}

	function clear_rgb() {
		for (x = 0; x < 3; x++) {
	        document.getElementsByName("r1e")[x].value = "";
	    }
	    $("#input_hex").val("");
	    $("#output_hex").html("");
	    $("#output_rgb").html("");
	    $("#output_color1").css("background-color","");
	    $("#output_color2").css("background-color","");
	}

	function shouldset(passon) {
        if (document.onlinecolor.onlineCodevalue.value.length == 7) { setcolor(passon) }
    }

    function setcolor(elem) {
        document.onlinecolor.onlineCodevalue.value = elem
        document.onlinecolor.selectcolor.style.backgroundColor = elem
    }