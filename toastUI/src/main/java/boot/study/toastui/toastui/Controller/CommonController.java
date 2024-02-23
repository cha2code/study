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

	@GetMapping("/custom")
	public String custom() {
		return "customEditor";
	}

	@GetMapping("/renderer")
	public String renderer() {
		return "customRenderer";
	}

	@GetMapping("/relation")
	public String relation() {
		return "relationBetweenColumns";
	}

	@GetMapping("/themes")
	public String themes() {
		return "themes";
	}

	@GetMapping("/datePicker")
	public String datePicker() {
		return "datePicker";
	}
}
