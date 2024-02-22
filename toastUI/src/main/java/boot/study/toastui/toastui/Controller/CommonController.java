package boot.study.toastui.toastui.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CommonController {

	@GetMapping("/basic")
	public String basic() {
		return "basic";
	}

	@GetMapping("/complex")
	public String complex() {
		return "complexColumns";
	}
}