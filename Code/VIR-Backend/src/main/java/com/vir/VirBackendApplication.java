package com.vir;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.vir, com.vir.service")
public class VirBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(VirBackendApplication.class, args);
	}
}