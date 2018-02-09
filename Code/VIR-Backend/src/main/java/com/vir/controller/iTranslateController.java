package com.vir.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.vir.exception.ApiError;
import com.vir.model.iTranslator;
import com.vir.service.iTranslateProcessorService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;

@RestController
@RequestMapping("/api")
@Api(tags = "iTranslate")
public class iTranslateController {

	@Autowired
	@Qualifier("iTranslatorService")
	private iTranslateProcessorService itranslateProcessorService;


	@ApiOperation(value = "Translate a text input.")
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@PostMapping(value = "/iTranslate", produces = MediaType.APPLICATION_JSON_VALUE)
	public iTranslator iTranslate(@RequestBody(required = true) String text, @RequestBody(required = true) String target) {
		return itranslateProcessorService.process(text, target);
	}
}